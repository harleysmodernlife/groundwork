import { auth } from '@/lib/auth'
import { db } from '@/lib/db'
import { encrypt } from '@/lib/encryption'
import { Provider } from '@prisma/client'

export async function POST(req: Request) {
  const session = await auth()
  const userId = session?.user?.id
  if (!userId) return Response.json({ error: 'Unauthorized' }, { status: 401 })

  const { provider, apiKey } = await req.json()

  if (!apiKey || !provider) {
    return Response.json({ error: 'provider and apiKey required' }, { status: 400 })
  }

  const validProviders = Object.values(Provider)
  if (!validProviders.includes(provider as Provider)) {
    return Response.json({ error: 'Invalid provider' }, { status: 400 })
  }

  const encryptedApiKey = encrypt(apiKey)

  await db.user.update({
    where: { id: userId },
    data: { encryptedApiKey, apiProvider: provider as Provider },
  })

  return Response.json({ success: true })
}

export async function DELETE(req: Request) {
  const session = await auth()
  const userId = session?.user?.id
  if (!userId) return Response.json({ error: 'Unauthorized' }, { status: 401 })

  await db.user.update({
    where: { id: userId },
    data: { encryptedApiKey: null, apiProvider: null },
  })

  return Response.json({ success: true })
}
