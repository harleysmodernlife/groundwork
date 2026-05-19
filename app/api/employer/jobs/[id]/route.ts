import { auth } from '@/lib/auth'
import { db } from '@/lib/db'

export async function PATCH(req: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const session = await auth()
  const userId = session?.user?.id
  if (!userId) return Response.json({ error: 'Unauthorized' }, { status: 401 })

  const { action } = await req.json()

  const job = await db.jobPost.findUnique({ where: { id }, select: { employerId: true } })
  if (!job || job.employerId !== userId) {
    return Response.json({ error: 'Not found' }, { status: 404 })
  }

  const updated = await db.jobPost.update({
    where: { id },
    data: action === 'publish' ? { publishedAt: new Date() } : { closedAt: new Date() },
  })

  return Response.json({ jobPost: updated })
}

export async function DELETE(req: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const session = await auth()
  const userId = session?.user?.id
  if (!userId) return Response.json({ error: 'Unauthorized' }, { status: 401 })

  const job = await db.jobPost.findUnique({ where: { id }, select: { employerId: true } })
  if (!job || job.employerId !== userId) {
    return Response.json({ error: 'Not found' }, { status: 404 })
  }

  await db.jobPost.delete({ where: { id } })
  return Response.json({ success: true })
}
