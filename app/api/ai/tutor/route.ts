import { streamText } from 'ai'
import { auth } from '@/lib/auth'
import { resolveModel, incrementTokens } from '@/lib/ai/providers'
import { buildTutorSystemPrompt } from '@/lib/ai/tutor'
import { db } from '@/lib/db'
import fs from 'fs'
import path from 'path'

export async function POST(req: Request) {
  const session = await auth()
  const userId = session?.user?.id
  if (!userId) {
    return Response.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const { messages, lessonId } = await req.json()

  const resolved = await resolveModel(userId)

  if (resolved.atLimit) {
    return Response.json(
      { error: 'daily_limit_reached', tokensUsed: resolved.tokensUsed },
      { status: 429 }
    )
  }

  const lesson = await db.lesson.findUnique({
    where: { id: lessonId },
    select: { name: true, contentPath: true },
  })

  if (!lesson) {
    return Response.json({ error: 'Lesson not found' }, { status: 404 })
  }

  const contentFile = path.join(process.cwd(), 'content', lesson.contentPath)
  const lessonContent = fs.existsSync(contentFile)
    ? fs.readFileSync(contentFile, 'utf8')
    : lesson.name

  const result = streamText({
    model: resolved.model!,
    system: buildTutorSystemPrompt(lesson.name, lessonContent),
    messages,
    maxOutputTokens: 500,
    onFinish: async ({ usage }) => {
      if (resolved.isFree) {
        await incrementTokens(userId, usage.totalTokens ?? 0)
      }
    },
  })

  return result.toTextStreamResponse()
}
