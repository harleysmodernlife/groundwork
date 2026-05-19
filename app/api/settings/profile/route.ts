import { auth } from '@/lib/auth'
import { db } from '@/lib/db'

export async function GET() {
  const session = await auth()
  const userId = session?.user?.id
  if (!userId) return Response.json({ error: 'Unauthorized' }, { status: 401 })

  const user = await db.user.findUnique({
    where: { id: userId },
    select: { name: true, location: true, bio: true, isDiscoverable: true },
  })

  return Response.json({ user })
}

export async function POST(req: Request) {
  const session = await auth()
  const userId = session?.user?.id
  if (!userId) return Response.json({ error: 'Unauthorized' }, { status: 401 })

  const { name, location, bio, isDiscoverable } = await req.json()

  await db.user.update({
    where: { id: userId },
    data: {
      name: name || null,
      location: location || null,
      bio: bio || null,
      isDiscoverable: !!isDiscoverable,
    },
  })

  return Response.json({ success: true })
}
