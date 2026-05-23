import { createOpenAI } from '@ai-sdk/openai'
import { createGoogleGenerativeAI } from '@ai-sdk/google'
import { generateText } from 'ai'

const buildPrompt = (question: string, modelAnswer: string, studentAnswer: string) =>
  `Grade this student answer for a course assessment.

Question: ${question}
Model answer: ${modelAnswer}
Student answer: ${studentAnswer}

Award full credit for any answer that shows genuine understanding of the concept, even if informal or brief.
Respond with JSON only: {"score": <0-100>}`

function getGraderModel() {
  const localUrl = process.env.LOCAL_GRADER_URL
  if (localUrl) {
    const local = createOpenAI({ baseURL: `${localUrl}/v1`, apiKey: 'local' })
    return local.chat('qwen2.5-1.5b-instruct')
  }

  const platformKey = process.env.GOOGLE_GENERATIVE_AI_API_KEY
  if (platformKey) {
    const google = createGoogleGenerativeAI({ apiKey: platformKey })
    return google('gemini-2.0-flash')
  }

  return null
}

// Grades an open-ended answer, returning a score 0–100.
// Uses local llama.cpp (LOCAL_GRADER_URL) if configured, falls back to platform Gemini.
export async function gradeOpenEnded(
  question: string,
  modelAnswer: string,
  studentAnswer: string,
): Promise<number> {
  try {
    const model = getGraderModel()
    if (!model) return 50

    const { text } = await generateText({
      model,
      prompt: buildPrompt(question, modelAnswer, studentAnswer),
      maxOutputTokens: 50,
    })

    const parsed = JSON.parse(text.replace(/```json|```/g, '').trim())
    const score = typeof parsed.score === 'number' ? parsed.score : 50
    return Math.min(100, Math.max(0, Math.round(score)))
  } catch {
    return 50
  }
}
