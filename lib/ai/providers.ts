import { createGoogleGenerativeAI } from '@ai-sdk/google'
import { createOpenAI } from '@ai-sdk/openai'
import { createAnthropic } from '@ai-sdk/anthropic'
import { db } from '@/lib/db'
import { decrypt } from '@/lib/encryption'

const FREE_DAILY_LIMIT = parseInt(process.env.FREE_DAILY_TOKEN_LIMIT ?? '50000')

// Returns the model to use and whether it's the free tier
export async function resolveModel(userId: string) {
  const user = await db.user.findUnique({
    where: { id: userId },
    select: {
      encryptedApiKey: true,
      apiProvider: true,
      dailyTokensUsed: true,
      dailyTokensResetAt: true,
    },
  })

  if (!user) throw new Error('User not found')

  // Reset daily counter if it's a new day
  const now = new Date()
  const resetAt = new Date(user.dailyTokensResetAt)
  const isNewDay = now.toDateString() !== resetAt.toDateString()

  if (isNewDay) {
    await db.user.update({
      where: { id: userId },
      data: { dailyTokensUsed: 0, dailyTokensResetAt: now },
    })
    user.dailyTokensUsed = 0
  }

  // Use BYOK if available
  if (user.encryptedApiKey && user.apiProvider) {
    const apiKey = decrypt(user.encryptedApiKey)

    switch (user.apiProvider) {
      case 'OPENAI': {
        const openai = createOpenAI({ apiKey })
        return { model: openai('gpt-4o-mini'), isFree: false, tokensUsed: user.dailyTokensUsed }
      }
      case 'ANTHROPIC': {
        const anthropic = createAnthropic({ apiKey })
        return { model: anthropic('claude-haiku-4-5-20251001'), isFree: false, tokensUsed: user.dailyTokensUsed }
      }
      case 'GOOGLE': {
        const google = createGoogleGenerativeAI({ apiKey })
        return { model: google('gemini-2.0-flash'), isFree: false, tokensUsed: user.dailyTokensUsed }
      }
      default:
        break
    }
  }

  // Free tier — check limit
  if (user.dailyTokensUsed >= FREE_DAILY_LIMIT) {
    return { model: null, isFree: true, tokensUsed: user.dailyTokensUsed, atLimit: true }
  }

  // Platform free tier — Gemini Flash (Google's free API tier)
  const google = createGoogleGenerativeAI({
    apiKey: process.env.GOOGLE_GENERATIVE_AI_API_KEY,
  })

  return {
    model: google('gemini-2.0-flash'),
    isFree: true,
    tokensUsed: user.dailyTokensUsed,
    atLimit: false,
  }
}

export async function incrementTokens(userId: string, tokens: number) {
  await db.user.update({
    where: { id: userId },
    data: { dailyTokensUsed: { increment: tokens } },
  })
}
