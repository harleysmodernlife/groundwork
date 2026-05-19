import { auth } from '@/lib/auth'
import { redirect } from 'next/navigation'
import { db } from '@/lib/db'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { LinkButton } from '@/components/ui/link-button'

export default async function JobsPage() {
  const session = await auth()
  if (!session?.user?.id) redirect('/employer/login')

  const jobs = await db.jobPost.findMany({
    where: { employerId: session.user.id },
    include: { _count: { select: { applications: true } } },
    orderBy: { createdAt: 'desc' },
  })

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Job Posts</h1>
          <p className="text-zinc-500 mt-1">{jobs.length} total post{jobs.length !== 1 ? 's' : ''}</p>
        </div>
        <LinkButton href="/employer/jobs/new">+ New job post</LinkButton>
      </div>

      {jobs.length === 0 ? (
        <Card className="text-center py-16">
          <CardContent>
            <p className="text-zinc-400 mb-4">No job posts yet.</p>
            <LinkButton href="/employer/jobs/new">Create your first post</LinkButton>
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-3">
          {jobs.map((job) => (
            <Card key={job.id} className="hover:shadow-sm transition-shadow">
              <CardContent className="flex items-center justify-between py-4">
                <div>
                  <p className="font-medium">{job.title}</p>
                  <p className="text-sm text-zinc-400">
                    {job.location ?? 'No location'} · {job._count.applications} application{job._count.applications !== 1 ? 's' : ''}
                    {job.remote && ' · Remote OK'}
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  {job.closedAt ? <Badge variant="secondary">Closed</Badge>
                    : job.publishedAt ? <Badge>Live</Badge>
                    : <Badge variant="outline">Draft</Badge>}
                  <LinkButton href={`/employer/jobs/${job.id}`} size="sm" variant="outline">View</LinkButton>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}
