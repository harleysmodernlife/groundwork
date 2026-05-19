import { auth } from '@/lib/auth'
import { db } from '@/lib/db'
import { issueCertificate } from '@/lib/certificates/generate'
import { resolveModel } from '@/lib/ai/providers'
import { generateText } from 'ai'

export async function POST(req: Request) {
  const session = await auth()
  if (!session?.user?.id) {
    return Response.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const { assessmentId, answers } = await req.json()

  const assessment = await db.assessment.findUnique({
    where: { id: assessmentId },
    include: { questions: true },
  })

  if (!assessment) {
    return Response.json({ error: 'Assessment not found' }, { status: 404 })
  }

  // Score the attempt
  let earned = 0
  const totalPoints = assessment.questions.reduce((sum, q) => sum + q.points, 0)

  for (const question of assessment.questions) {
    if (question.type === 'MULTIPLE_CHOICE') {
      const userAnswer = answers[question.id]
      if (userAnswer === question.correctAnswer) {
        earned += question.points
      }
    }
    if (question.type === 'OPEN_ENDED') {
      const studentAnswer = answers[question.id]
      if (studentAnswer && typeof studentAnswer === 'string' && studentAnswer.trim()) {
        let score = 0
        try {
          const resolved = await resolveModel(session.user.id)
          if (resolved.model) {
            const { text } = await generateText({
              model: resolved.model,
              prompt: `Grade this student answer for a business course assessment.

Question: ${question.question}
Model answer: ${question.correctAnswer}
Student answer: ${studentAnswer}

Be generous — award full credit for any answer that shows genuine understanding of the concept, even if informal or brief.
Respond with JSON only: {"score": <0-100>}`,
              maxOutputTokens: 50,
            })
            const parsed = JSON.parse(text.replace(/```json|```/g, '').trim())
            score = typeof parsed.score === 'number' ? parsed.score : 0
          }
        } catch {
          // If AI grading fails, give partial credit for any non-empty answer
          score = 50
        }
        earned += Math.round((score / 100) * question.points)
      }
    }
  }

  const score = totalPoints > 0 ? Math.round((earned / totalPoints) * 100) : 0
  const passed = score >= assessment.passingScore

  const attempt = await db.assessmentAttempt.create({
    data: {
      userId: session.user.id,
      assessmentId,
      completedAt: new Date(),
      score,
      passed,
      answers,
    },
  })

  let certificate = null
  if (passed) {
    certificate = await issueCertificate(session.user.id, assessment.courseId)
  }

  return Response.json({ attempt, score, passed, certificate })
}
