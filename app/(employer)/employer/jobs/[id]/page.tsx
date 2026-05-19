import { auth } from '@/lib/auth'
import { redirect, notFound } from 'next/navigation'
import { db } from '@/lib/db'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { LinkButton } from '@/components/ui/link-button'
import JobActions from '@/components/employer/JobActions'

export default async function JobDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const session = await auth()
  if (!session?.user?.id) redirect('/employer/login')

  const job = await db.jobPost.findUnique({
    where: { id, employerId: session.user.id },
    include: {
      applications: {
        include: {
          applicant: {
            include: { certificates: { include: { course: { select: { name: true } } } } },
          },
        },
        orderBy: { appliedAt: 'desc' },
      },
      requiredCourse: { select: { name: true } },
    },
  })

  if (!job) notFound()

  return (
    <div className="max-w-3xl space-y-8">
      <div className="flex items-start justify-between gap-4">
        <div>
          <LinkButton href="/employer/dashboard" variant="ghost" size="sm" className="mb-2 -ml-2 text-zinc-400">
            ← Dashboard
          </LinkButton>
          <h1 className="text-2xl font-bold">{job.title}</h1>
          <div className="flex items-center gap-2 mt-2">
            {job.closedAt ? <Badge variant="secondary">Closed</Badge>
              : job.publishedAt ? <Badge>Live</Badge>
              : <Badge variant="outline">Draft</Badge>}
            {job.location && <span className="text-sm text-zinc-400">{job.location}</span>}
            {job.remote && <Badge variant="outline" className="text-xs">Remote OK</Badge>}
          </div>
        </div>
        <JobActions jobId={job.id} isPublished={!!job.publishedAt} isClosed={!!job.closedAt} />
      </div>

      <Card>
        <CardHeader><CardTitle className="text-base">Description</CardTitle></CardHeader>
        <CardContent>
          <p className="text-sm text-zinc-700 whitespace-pre-wrap leading-relaxed">{job.description}</p>
        </CardContent>
      </Card>

      <section>
        <h2 className="text-lg font-semibold mb-4">
          Applications <span className="text-zinc-400 font-normal text-sm">({job.applications.length})</span>
        </h2>
        {job.applications.length === 0 ? (
          <Card className="text-center py-10">
            <CardContent>
              <p className="text-zinc-400 text-sm">No applications yet. Share the job post to attract candidates.</p>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-3">
            {job.applications.map((app) => (
              <Card key={app.id}>
                <CardContent className="pt-4 space-y-2">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="font-medium">{app.applicant.name ?? 'Anonymous'}</p>
                      {app.applicant.location && <p className="text-sm text-zinc-400">{app.applicant.location}</p>}
                      <p className="text-xs text-zinc-400 mt-0.5">Applied {new Date(app.appliedAt).toLocaleDateString()}</p>
                    </div>
                  </div>
                  {app.message && <p className="text-sm text-zinc-600 italic">&ldquo;{app.message}&rdquo;</p>}
                  <div className="flex flex-wrap gap-1.5">
                    {app.applicant.certificates.map((cert) => (
                      <a key={cert.id} href={`/certificates/verify/${cert.verificationCode}`} target="_blank" rel="noopener noreferrer">
                        <Badge variant="secondary" className="text-xs cursor-pointer hover:bg-zinc-200">
                          🎓 {cert.course.name}
                        </Badge>
                      </a>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </section>
    </div>
  )
}
