import { db } from '@/lib/db'
import { auth } from '@/lib/auth'
import { notFound } from 'next/navigation'
import AssessmentRunner from '@/components/learn/AssessmentRunner'

export default async function AssessPage({ params }: { params: Promise<{ courseId: string }> }) {
  const { courseId } = await params
  const session = await auth()
  const userId = session!.user!.id!

  const assessment = await db.assessment.findUnique({
    where: { courseId },
    include: {
      questions: { orderBy: { order: 'asc' } },
      course: { select: { name: true, slug: true, subject: { select: { slug: true } } } },
    },
  })

  if (!assessment) notFound()

  const previousPass = await db.assessmentAttempt.findFirst({
    where: { userId, assessmentId: assessment.id, passed: true },
  })

  return (
    <AssessmentRunner
      assessment={{
        id: assessment.id,
        title: assessment.title,
        passingScore: assessment.passingScore,
        timeLimitMin: assessment.timeLimitMin,
        questions: assessment.questions,
        courseName: assessment.course.name,
        courseSlug: assessment.course.slug,
        subjectSlug: assessment.course.subject.slug,
      }}
      alreadyPassed={!!previousPass}
    />
  )
}
