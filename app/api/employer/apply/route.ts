import { auth } from '@/lib/auth'
import { db } from '@/lib/db'

export async function POST(req: Request) {
  const session = await auth()
  const userId = session?.user?.id
  if (!userId) return Response.json({ error: 'Unauthorized' }, { status: 401 })

  const { jobPostId, message } = await req.json()
  if (!jobPostId) return Response.json({ error: 'jobPostId required' }, { status: 400 })

  const job = await db.jobPost.findUnique({
    where: { id: jobPostId, publishedAt: { not: null }, closedAt: null },
  })
  if (!job) return Response.json({ error: 'Job not found or closed' }, { status: 404 })

  const existing = await db.jobApplication.findUnique({
    where: { jobPostId_applicantId: { jobPostId, applicantId: userId } },
  })
  if (existing) return Response.json({ error: 'Already applied' }, { status: 409 })

  const application = await db.jobApplication.create({
    data: { jobPostId, applicantId: userId, message: message || null },
  })

  return Response.json({ application }, { status: 201 })
}
