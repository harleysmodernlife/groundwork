import { db } from '@/lib/db'
import { auth } from '@/lib/auth'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { Separator } from '@/components/ui/separator'
import { LinkButton } from '@/components/ui/link-button'

export default async function CoursePage({
  params,
}: {
  params: Promise<{ subject: string; course: string }>
}) {
  const { subject: subjectSlug, course: courseSlug } = await params
  const session = await auth()
  const userId = session!.user!.id!

  const course = await db.course.findUnique({
    where: { slug: courseSlug, publishedAt: { not: null } },
    include: {
      subject: { select: { name: true, slug: true } },
      modules: {
        orderBy: { order: 'asc' },
        include: { lessons: { orderBy: { order: 'asc' }, select: { id: true, slug: true, name: true } } },
      },
      assessment: { select: { id: true, passingScore: true } },
    },
  })

  if (!course) notFound()

  await db.enrollment.upsert({
    where: { userId_courseId: { userId, courseId: course.id } },
    create: { userId, courseId: course.id },
    update: {},
  })

  const allLessonIds = course.modules.flatMap((m) => m.lessons.map((l) => l.id))
  const completed = await db.lessonProgress.findMany({
    where: { userId, lessonId: { in: allLessonIds } },
    select: { lessonId: true },
  })
  const completedSet = new Set(completed.map((p) => p.lessonId))
  const pct = allLessonIds.length ? Math.round((completedSet.size / allLessonIds.length) * 100) : 0

  const allLessons = course.modules.flatMap((m) => m.lessons)
  const nextLesson = allLessons.find((l) => !completedSet.has(l.id))

  return (
    <div className="max-w-2xl space-y-8">
      <div>
        <Link href={`/learn/${subjectSlug}`} className="text-xs text-zinc-400 hover:text-zinc-600 uppercase tracking-wide">
          ← {course.subject.name}
        </Link>
        <h1 className="text-2xl font-bold mt-2">{course.name}</h1>
        <p className="text-zinc-500 mt-1">{course.description}</p>
      </div>

      <div className="space-y-1.5">
        <div className="flex items-center justify-between text-sm">
          <span className="text-zinc-500">{completedSet.size}/{allLessonIds.length} lessons complete</span>
          <span className="font-medium">{pct}%</span>
        </div>
        <Progress value={pct} className="h-2" />
      </div>

      {nextLesson && (
        <LinkButton href={`/learn/${subjectSlug}/${courseSlug}/${nextLesson.slug}`} size="lg">
          {completedSet.size === 0 ? 'Start first lesson' : 'Continue where you left off'}
        </LinkButton>
      )}

      <Separator />

      <div className="space-y-6">
        {course.modules.map((module) => (
          <div key={module.id}>
            <h3 className="text-sm font-semibold text-zinc-400 uppercase tracking-wide mb-3">{module.name}</h3>
            <div className="space-y-1">
              {module.lessons.map((lesson) => (
                <Link
                  key={lesson.id}
                  href={`/learn/${subjectSlug}/${courseSlug}/${lesson.slug}`}
                  className="flex items-center justify-between px-4 py-3 rounded-lg hover:bg-zinc-100 transition-colors"
                >
                  <span className="text-sm">{lesson.name}</span>
                  {completedSet.has(lesson.id) && <Badge variant="secondary" className="text-xs">Done</Badge>}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>

      {course.assessment && pct === 100 && (
        <div className="bg-zinc-900 text-white rounded-xl p-6">
          <h3 className="font-semibold mb-1">Ready for the final assessment?</h3>
          <p className="text-zinc-400 text-sm mb-4">
            Pass with {course.assessment.passingScore}% or higher to earn your free certificate.
          </p>
          <LinkButton href={`/assess/${course.id}`} variant="outline" className="text-white border-white hover:bg-white hover:text-zinc-900">
            Take the assessment
          </LinkButton>
        </div>
      )}
    </div>
  )
}
