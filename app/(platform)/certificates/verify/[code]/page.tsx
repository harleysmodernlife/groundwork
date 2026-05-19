import { db } from '@/lib/db'
import { notFound } from 'next/navigation'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'

export default async function VerifyPage({ params }: { params: Promise<{ code: string }> }) {
  const { code } = await params

  const cert = await db.certificate.findUnique({
    where: { verificationCode: code },
    include: {
      user: { select: { name: true } },
      course: { include: { subject: { select: { name: true } } } },
    },
  })

  if (!cert) notFound()

  const badge = cert.badgeJson as Record<string, unknown>

  return (
    <div className="min-h-screen bg-zinc-50 flex items-center justify-center p-6">
      <div className="max-w-lg w-full bg-white rounded-2xl border border-zinc-200 shadow-sm overflow-hidden">
        <div className="bg-zinc-900 text-white px-8 py-10 text-center">
          <p className="text-4xl mb-4">🎓</p>
          <p className="text-xs uppercase tracking-widest text-zinc-400 mb-2">Certificate of Completion</p>
          <h1 className="text-2xl font-bold">{cert.course.name}</h1>
          <p className="text-zinc-400 mt-1">{cert.course.subject.name}</p>
        </div>

        <div className="px-8 py-6 space-y-4">
          <div className="flex justify-between text-sm">
            <span className="text-zinc-500">Awarded to</span>
            <span className="font-semibold">{cert.user.name ?? 'Learner'}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-zinc-500">Issued</span>
            <span>{new Date(cert.issuedAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-zinc-500">Issuer</span>
            <span>Groundwork</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-zinc-500">Verification code</span>
            <code className="text-xs bg-zinc-100 px-2 py-0.5 rounded">{code}</code>
          </div>

          <Separator />

          <div className="flex items-center justify-between">
            <Badge className="bg-green-100 text-green-800 border-green-200">Verified authentic</Badge>
            <p className="text-xs text-zinc-400">Groundwork · Free education for everyone</p>
          </div>
        </div>
      </div>
    </div>
  )
}
