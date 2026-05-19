import { auth } from '@/lib/auth'
import { db } from '@/lib/db'

export async function POST(req: Request) {
  const session = await auth()
  if (!session?.user?.id) {
    return Response.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const { lessonId, scores } = await req.json()

  if (!lessonId) {
    return Response.json({ error: 'lessonId required' }, { status: 400 })
  }

  const progress = await db.lessonProgress.upsert({
    where: { userId_lessonId: { userId: session.user.id, lessonId } },
    update: { completedAt: new Date(), scores: scores ?? null },
    create: { userId: session.user.id, lessonId, scores: scores ?? null },
  })

  return Response.json({ progress })
}

export async function GET(req: Request) {
  const session = await auth()
  if (!session?.user?.id) {
    return Response.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const { searchParams } = new URL(req.url)
  const courseId = searchParams.get('courseId')

  if (!courseId) {
    return Response.json({ error: 'courseId required' }, { status: 400 })
  }

  const course = await db.course.findUnique({
    where: { id: courseId },
    include: {
      modules: {
        include: {
          lessons: {
            select: { id: true },
          },
        },
      },
    },
  })

  if (!course) return Response.json({ error: 'Course not found' }, { status: 404 })

  const lessonIds = course.modules.flatMap((m) => m.lessons.map((l) => l.id))

  const completed = await db.lessonProgress.findMany({
    where: { userId: session.user.id, lessonId: { in: lessonIds } },
    select: { lessonId: true },
  })

  const completedIds = new Set(completed.map((p) => p.lessonId))
  const percent = lessonIds.length
    ? Math.round((completedIds.size / lessonIds.length) * 100)
    : 0

  return Response.json({ completedIds: [...completedIds], percent, total: lessonIds.length })
}
