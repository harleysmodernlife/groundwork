import { db } from '@/lib/db'

interface CertificateInput {
  userId: string
  courseId: string
  userName: string
  courseName: string
  subjectName: string
  issuedAt: Date
  verificationCode: string
}

export function buildBadgeJson(input: CertificateInput) {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL ?? 'https://groundwork.education'

  return {
    '@context': [
      'https://www.w3.org/2018/credentials/v1',
      'https://purl.imsglobal.org/spec/ob/v3p0/context-3.0.3.json',
    ],
    type: ['VerifiableCredential', 'OpenBadgeCredential'],
    id: `${baseUrl}/certificates/verify/${input.verificationCode}`,
    name: `${input.courseName} — Groundwork Certificate`,
    issuer: {
      id: `${baseUrl}`,
      type: 'Profile',
      name: 'Groundwork',
      url: baseUrl,
      description: 'Free education for everyone. No asterisks.',
    },
    issuanceDate: input.issuedAt.toISOString(),
    credentialSubject: {
      id: `urn:groundwork:user:${input.userId}`,
      type: 'AchievementSubject',
      name: input.userName,
      achievement: {
        id: `${baseUrl}/courses/${input.courseId}`,
        type: 'Achievement',
        name: input.courseName,
        description: `Demonstrated mastery of ${input.courseName} within the ${input.subjectName} curriculum on Groundwork.`,
        criteria: {
          narrative: `The learner completed all lessons and passed the final assessment with a score of 75% or higher.`,
        },
      },
    },
    verification: {
      type: 'HostedBadge',
      verificationUrl: `${baseUrl}/certificates/verify/${input.verificationCode}`,
    },
  }
}

export async function issueCertificate(userId: string, courseId: string) {
  const [user, course] = await Promise.all([
    db.user.findUnique({ where: { id: userId }, select: { name: true } }),
    db.course.findUnique({
      where: { id: courseId },
      select: { name: true, subject: { select: { name: true } } },
    }),
  ])

  if (!user || !course) throw new Error('User or course not found')

  const existing = await db.certificate.findUnique({
    where: { userId_courseId: { userId, courseId } },
  })
  if (existing) return existing

  const issuedAt = new Date()
  const verificationCode = crypto.randomUUID()

  const badgeJson = buildBadgeJson({
    userId,
    courseId,
    userName: user.name ?? 'Learner',
    courseName: course.name,
    subjectName: course.subject.name,
    issuedAt,
    verificationCode,
  })

  return db.certificate.create({
    data: { userId, courseId, issuedAt, verificationCode, badgeJson },
  })
}
