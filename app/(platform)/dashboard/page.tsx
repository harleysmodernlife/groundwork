import { auth } from '@/lib/auth'
import { db } from '@/lib/db'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { LinkButton } from '@/components/ui/link-button'

export default async function DashboardPage() {
  const session = await auth()
  const userId = session!.user!.id!

  const [enrollments, certificates, user] = await Promise.all([
    db.enrollment.findMany({
      where: { userId },
      include: {
        course: {
          include: {
            subject: { select: { name: true, slug: true } },
            modules: { include: { lessons: { select: { id: true } } } },
          },
        },
      },
      orderBy: { enrolledAt: 'desc' },
    }),
    db.certificate.findMany({
      where: { userId },
      include: { course: { select: { name: true } } },
      orderBy: { issuedAt: 'desc' },
    }),
    db.user.findUnique({ where: { id: userId }, select: { name: true } }),
  ])

  const lessonIds = enrollments.flatMap((e) =>
    e.course.modules.flatMap((m) => m.lessons.map((l) => l.id))
  )
  const completedLessons = await db.lessonProgress.findMany({
    where: { userId, lessonId: { in: lessonIds } },
    select: { lessonId: true },
  })
  const completedSet = new Set(completedLessons.map((p) => p.lessonId))

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold">
          Welcome back{user?.name ? `, ${user.name.split(' ')[0]}` : ''}
        </h1>
        <p className="text-zinc-500 mt-1">Keep going. Every lesson is a step forward.</p>
      </div>

      <section>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold">In progress</h2>
          <LinkButton href="/learn" variant="outline" size="sm">Browse all subjects</LinkButton>
        </div>

        {enrollments.length === 0 ? (
          <Card className="text-center py-12">
            <CardContent>
              <p className="text-zinc-500 mb-4">You haven&apos;t started any courses yet.</p>
              <LinkButton href="/learn">Start learning</LinkButton>
            </CardContent>
          </Card>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {enrollments.map((enrollment) => {
              const total = enrollment.course.modules.flatMap((m) => m.lessons).length
              const done = enrollment.course.modules
                .flatMap((m) => m.lessons)
                .filter((l) => completedSet.has(l.id)).length
              const pct = total > 0 ? Math.round((done / total) * 100) : 0
              return (
                <Card key={enrollment.id} className="hover:shadow-md transition-shadow">
                  <CardHeader className="pb-2">
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="text-xs text-zinc-400 uppercase tracking-wide mb-1">
                          {enrollment.course.subject.name}
                        </p>
                        <CardTitle className="text-base">{enrollment.course.name}</CardTitle>
                      </div>
                      {enrollment.completedAt && <Badge>Complete</Badge>}
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <Progress value={pct} className="h-1.5" />
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-zinc-400">{done}/{total} lessons · {pct}%</span>
                      <LinkButton href={`/learn/${enrollment.course.subject.slug}/${enrollment.course.slug}`} size="sm" variant="outline">
                        Continue
                      </LinkButton>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        )}
      </section>

      {certificates.length > 0 && (
        <section>
          <h2 className="text-lg font-semibold mb-4">Your certificates</h2>
          <div className="flex flex-wrap gap-3">
            {certificates.map((cert) => (
              <a
                key={cert.id}
                href={`/certificates/verify/${cert.verificationCode}`}
                className="flex items-center gap-2 px-4 py-2 bg-zinc-900 text-white rounded-lg text-sm font-medium hover:bg-zinc-700 transition-colors"
              >
                <span>🎓</span>{cert.course.name}
              </a>
            ))}
          </div>
        </section>
      )}
    </div>
  )
}
