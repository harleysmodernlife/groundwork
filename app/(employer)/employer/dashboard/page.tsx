import { auth } from '@/lib/auth'
import { redirect } from 'next/navigation'
import { db } from '@/lib/db'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { LinkButton } from '@/components/ui/link-button'

export default async function EmployerDashboardPage() {
  const session = await auth()
  if (!session?.user?.id) redirect('/employer/login')
  const user = session.user as { id: string; role?: string }
  if (user.role === 'STUDENT') redirect('/dashboard')

  const [employer, jobPosts, recentGrads] = await Promise.all([
    db.user.findUnique({
      where: { id: user.id },
      select: { name: true, companyName: true, subscriptionStatus: true },
    }),
    db.jobPost.findMany({
      where: { employerId: user.id },
      include: { _count: { select: { applications: true } }, requiredCourse: { select: { name: true } } },
      orderBy: { createdAt: 'desc' },
      take: 5,
    }),
    db.user.findMany({
      where: { isDiscoverable: true, role: 'STUDENT' },
      include: { certificates: { include: { course: { select: { name: true } } } } },
      orderBy: { createdAt: 'desc' },
      take: 4,
    }),
  ])

  const totalApplications = jobPosts.reduce((s, j) => s + j._count.applications, 0)

  return (
    <div className="space-y-8">
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-2xl font-bold">{employer?.companyName ?? 'Employer Dashboard'}</h1>
          <p className="text-zinc-500 mt-1">Welcome back, {employer?.name?.split(' ')[0]}</p>
        </div>
        <Badge variant={employer?.subscriptionStatus === 'ACTIVE' ? 'default' : 'secondary'}>
          {employer?.subscriptionStatus === 'ACTIVE' ? 'Active subscription' : 'Trial'}
        </Badge>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {[
          { label: 'Active job posts', value: jobPosts.filter((j) => j.publishedAt && !j.closedAt).length },
          { label: 'Total applications', value: totalApplications },
          { label: 'Discoverable graduates', value: recentGrads.length + '+' },
        ].map(({ label, value }) => (
          <Card key={label}>
            <CardHeader className="pb-1"><p className="text-sm text-zinc-500">{label}</p></CardHeader>
            <CardContent><p className="text-3xl font-bold">{value}</p></CardContent>
          </Card>
        ))}
      </div>

      {/* Job posts */}
      <section>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold">Your job posts</h2>
          <LinkButton href="/employer/jobs/new" size="sm">+ New job post</LinkButton>
        </div>
        {jobPosts.length === 0 ? (
          <Card className="text-center py-10">
            <CardContent>
              <p className="text-zinc-500 mb-4">No job posts yet. Post a role and start finding candidates.</p>
              <LinkButton href="/employer/jobs/new">Post your first job</LinkButton>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-3">
            {jobPosts.map((job) => (
              <Card key={job.id} className="hover:shadow-sm transition-shadow">
                <CardContent className="flex items-center justify-between py-4">
                  <div>
                    <p className="font-medium">{job.title}</p>
                    <p className="text-sm text-zinc-400">
                      {job.location ?? 'Location not set'} · {job._count.applications} applications
                      {job.requiredCourse && ` · Requires: ${job.requiredCourse.name}`}
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    {job.closedAt ? <Badge variant="secondary">Closed</Badge>
                      : job.publishedAt ? <Badge>Live</Badge>
                      : <Badge variant="outline">Draft</Badge>}
                    <LinkButton href={`/employer/jobs/${job.id}`} size="sm" variant="outline">Manage</LinkButton>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </section>

      {/* Recent graduates */}
      <section>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold">Recent graduates</h2>
          <LinkButton href="/employer/search" size="sm" variant="outline">Search all graduates</LinkButton>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {recentGrads.map((grad) => (
            <Card key={grad.id}>
              <CardContent className="pt-4">
                <p className="font-medium">{grad.name ?? 'Anonymous'}</p>
                {grad.location && <p className="text-sm text-zinc-400">{grad.location}</p>}
                <div className="flex flex-wrap gap-1.5 mt-2">
                  {grad.certificates.map((cert) => (
                    <Badge key={cert.id} variant="secondary" className="text-xs">{cert.course.name}</Badge>
                  ))}
                  {grad.certificates.length === 0 && <span className="text-xs text-zinc-400">No certificates yet</span>}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  )
}
