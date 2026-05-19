import { auth } from '@/lib/auth'
import { db } from '@/lib/db'

export async function POST(req: Request) {
  const session = await auth()
  const userId = session?.user?.id
  if (!userId) return Response.json({ error: 'Unauthorized' }, { status: 401 })

  const { title, description, location, remote, publish } = await req.json()

  if (!title || !description) {
    return Response.json({ error: 'title and description required' }, { status: 400 })
  }

  const jobPost = await db.jobPost.create({
    data: {
      employerId: userId,
      title,
      description,
      location: location || null,
      remote: !!remote,
      publishedAt: publish ? new Date() : null,
    },
  })

  return Response.json({ jobPost }, { status: 201 })
}

export async function GET(req: Request) {
  const session = await auth()
  const userId = session?.user?.id
  if (!userId) return Response.json({ error: 'Unauthorized' }, { status: 401 })

  const jobPosts = await db.jobPost.findMany({
    where: { employerId: userId },
    include: { _count: { select: { applications: true } } },
    orderBy: { createdAt: 'desc' },
  })

  return Response.json({ jobPosts })
}
