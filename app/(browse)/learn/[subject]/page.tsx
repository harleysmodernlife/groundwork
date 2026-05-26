import { db } from '@/lib/db'
import { auth } from '@/lib/auth'
import { notFound } from 'next/navigation'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { LinkButton } from '@/components/ui/link-button'
import Link from 'next/link'

export default async function SubjectPage({ params }: { params: Promise<{ subject: string }> }) {
  const { subject: subjectSlug } = await params
  const session = await auth()
  const userId = session?.user?.id ?? null

  const subject = await db.subject.findUnique({
    where: { slug: subjectSlug, publishedAt: { not: null } },
    include: {
      courses: {
        where: { publishedAt: { not: null } },
        orderBy: { order: 'asc' },
      },
    },
  })

  if (!subject) notFound()

  let enrolledMap = new Map<string, { completedAt: Date | null }>()
  if (userId) {
    const enrollments = await db.enrollment.findMany({
      where: { userId, courseId: { in: subject.courses.map((c) => c.id) } },
      select: { courseId: true, completedAt: true },
    })
    enrolledMap = new Map(enrollments.map((e) => [e.courseId, e]))
  }

  return (
    <div className="space-y-8">
      <div className="flex items-center gap-3">
        <span className="text-4xl">{subject.icon}</span>
        <div>
          <Link href="/learn" className="text-xs text-zinc-400 hover:text-zinc-600 uppercase tracking-wide">
            ← All subjects
          </Link>
          <h1 className="text-2xl font-bold mt-1">{subject.name}</h1>
          <p className="text-zinc-500 mt-0.5">{subject.description}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {subject.courses.map((course, i) => {
          const enrollment = enrolledMap.get(course.id)
          return (
            <Card key={course.id} className="hover:shadow-md transition-shadow">
              <CardHeader className="pb-2">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <p className="text-xs text-zinc-400 mb-1">Course {i + 1}</p>
                    <CardTitle className="text-base">{course.name}</CardTitle>
                  </div>
                  {enrollment?.completedAt && <Badge>Complete</Badge>}
                  {enrollment && !enrollment.completedAt && <Badge variant="secondary">In progress</Badge>}
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm text-zinc-500">{course.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-zinc-400">~{course.estimatedHours}h</span>
                  <LinkButton href={`/learn/${subjectSlug}/${course.slug}`} size="sm">
                    {enrollment ? 'Continue' : 'Start course'}
                  </LinkButton>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </div>
  )
}
