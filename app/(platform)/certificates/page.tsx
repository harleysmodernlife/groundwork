import { db } from '@/lib/db'
import { auth } from '@/lib/auth'
import { redirect } from 'next/navigation'
import { LinkButton } from '@/components/ui/link-button'

export default async function CertificatesPage() {
  const session = await auth()
  if (!session?.user?.id) redirect('/login')

  const certs = await db.certificate.findMany({
    where: { userId: session.user.id },
    include: { course: { include: { subject: { select: { name: true } } } } },
    orderBy: { issuedAt: 'desc' },
  })

  return (
    <div className="max-w-2xl space-y-8">
      <div>
        <h1 className="text-2xl font-bold">Your Certificates</h1>
        <p className="text-zinc-500 text-sm mt-1">Free, verified, and yours forever.</p>
      </div>

      {certs.length === 0 ? (
        <div className="text-center py-16 border border-zinc-200 dark:border-zinc-700 rounded-xl bg-white dark:bg-zinc-900">
          <p className="text-3xl mb-4">🎓</p>
          <p className="font-medium text-zinc-700 dark:text-zinc-300">No certificates yet</p>
          <p className="text-sm text-zinc-500 mt-1 mb-6">Complete a course assessment to earn your first one.</p>
          <LinkButton href="/learn">Browse courses</LinkButton>
        </div>
      ) : (
        <div className="space-y-4">
          {certs.map((cert) => (
            <div key={cert.id} className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 rounded-xl px-6 py-5 flex items-center justify-between">
              <div>
                <p className="font-semibold">{cert.course.name}</p>
                <p className="text-sm text-zinc-500">{cert.course.subject.name}</p>
                <p className="text-xs text-zinc-400 mt-1">
                  Issued {new Date(cert.issuedAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                </p>
              </div>
              <LinkButton href={`/certificates/verify/${cert.verificationCode}`} variant="outline" size="sm">
                View
              </LinkButton>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
