import { generateText } from 'ai'
import { auth } from '@/lib/auth'
import { resolveModel } from '@/lib/ai/providers'

export async function POST(req: Request) {
  const session = await auth()
  const userId = session?.user?.id
  if (!userId) return Response.json({ error: 'Unauthorized' }, { status: 401 })

  const { question, correctAnswer, studentAnswer, explanation } = await req.json()

  const resolved = await resolveModel(userId)
  if (resolved.atLimit) {
    return Response.json({ score: 0, feedback: 'Daily AI limit reached. Set up your own API key for unlimited access.' })
  }

  const { text } = await generateText({
    model: resolved.model!,
    prompt: `You are grading a student's open-ended answer.

Question: ${question}
Model answer: ${correctAnswer}
Student answer: ${studentAnswer}

Grade the student's answer from 0-100 based on conceptual accuracy. Be generous for partial understanding.
Respond with JSON only: {"score": <number>, "feedback": "<1-2 sentence feedback>"}`,
    maxOutputTokens: 150,
  })

  try {
    const result = JSON.parse(text.replace(/```json|```/g, '').trim())
    return Response.json(result)
  } catch {
    return Response.json({ score: 50, feedback: explanation })
  }
}
