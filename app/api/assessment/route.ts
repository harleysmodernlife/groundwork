import { auth } from '@/lib/auth'
import { db } from '@/lib/db'
import { issueCertificate } from '@/lib/certificates/generate'

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
    // Open-ended questions are pre-scored by AI before submission
    if (question.type === 'OPEN_ENDED') {
      const aiScore = answers[`${question.id}_score`]
      if (typeof aiScore === 'number') {
        earned += Math.round((aiScore / 100) * question.points)
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
