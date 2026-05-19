import { streamText } from 'ai'
import { auth } from '@/lib/auth'
import { resolveModel, incrementTokens } from '@/lib/ai/providers'
import { buildHelpSystemPrompt } from '@/lib/ai/help'

export async function POST(req: Request) {
  const session = await auth()
  const userId = session?.user?.id
  if (!userId) {
    return Response.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const { messages } = await req.json()

  const resolved = await resolveModel(userId)

  if (resolved.atLimit) {
    return Response.json(
      { error: 'daily_limit_reached', tokensUsed: resolved.tokensUsed },
      { status: 429 }
    )
  }

  const result = streamText({
    model: resolved.model!,
    system: buildHelpSystemPrompt(),
    messages,
    maxOutputTokens: 400,
    onFinish: async ({ usage }) => {
      if (resolved.isFree) {
        await incrementTokens(userId, usage.totalTokens ?? 0)
      }
    },
  })

  return result.toTextStreamResponse()
}
