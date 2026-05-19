import { Pool } from 'pg'
import { PrismaPg } from '@prisma/adapter-pg'
import { PrismaClient } from '@prisma/client'

const pool = new Pool({ connectionString: process.env.DATABASE_URL })
const adapter = new PrismaPg(pool)
const db = new PrismaClient({ adapter })

async function main() {
  const subject = await db.subject.upsert({
    where: { slug: 'business' },
    update: {},
    create: {
      slug: 'business',
      name: 'Business & Entrepreneurship',
      description: 'Everything you need to start, run, and grow a business. From legal structures to cash flow to sales — the real stuff.',
      icon: '🏢',
      order: 1,
      publishedAt: new Date(),
    },
  })

  const course1 = await db.course.upsert({
    where: { slug: 'business-foundations' },
    update: {},
    create: {
      subjectId: subject.id,
      slug: 'business-foundations',
      name: 'Business Foundations',
      description: 'What a business actually is, how to structure it legally, and how to get started without making the mistakes that kill most new businesses.',
      order: 1,
      estimatedHours: 3,
      publishedAt: new Date(),
    },
  })

  const module1 = await db.module.upsert({
    where: { courseId_slug: { courseId: course1.id, slug: 'what-is-a-business' } },
    update: {},
    create: { courseId: course1.id, slug: 'what-is-a-business', name: 'What Is a Business?', order: 1 },
  })

  const lesson1 = await db.lesson.upsert({
    where: { moduleId_slug: { moduleId: module1.id, slug: 'defining-a-business' } },
    update: {},
    create: { moduleId: module1.id, slug: 'defining-a-business', name: 'Defining a Business', contentPath: 'business/foundations/defining-a-business.md', order: 1 },
  })

  await db.exercise.deleteMany({ where: { lessonId: lesson1.id } })
  await db.exercise.createMany({
    data: [
      {
        lessonId: lesson1.id,
        question: 'Which of the following is NOT a requirement for something to be considered a business?',
        type: 'MULTIPLE_CHOICE',
        options: (['It provides a product or service', 'It must have at least 5 employees', 'It operates with the intent to generate value', 'It can exist as a one-person operation']),
        correctAnswer: 'It must have at least 5 employees',
        explanation: 'Businesses can be any size, including solo operations. What defines a business is the exchange of value, not its size.',
        order: 1,
      },
      {
        lessonId: lesson1.id,
        question: 'In your own words, explain the difference between a hobby and a business.',
        type: 'OPEN_ENDED',
        correctAnswer: 'A business operates with the consistent intent to generate profit or value in exchange for goods or services. A hobby may involve similar activities but without that consistent commercial intent or structure.',
        explanation: 'The key distinction is intent and structure — businesses are built around consistently exchanging value for compensation.',
        order: 2,
      },
    ],
  })

  const lesson2 = await db.lesson.upsert({
    where: { moduleId_slug: { moduleId: module1.id, slug: 'business-structures' } },
    update: {},
    create: { moduleId: module1.id, slug: 'business-structures', name: 'Business Structures: LLC, Sole Prop, and More', contentPath: 'business/foundations/business-structures.md', order: 2 },
  })

  await db.exercise.deleteMany({ where: { lessonId: lesson2.id } })
  await db.exercise.createMany({
    data: [{
      lessonId: lesson2.id,
      question: 'What is the main advantage of an LLC over a sole proprietorship?',
      type: 'MULTIPLE_CHOICE',
      options: (['LLCs pay less in taxes', 'LLCs protect your personal assets from business debts', 'LLCs are easier to set up', 'LLCs do not require any paperwork']),
      correctAnswer: 'LLCs protect your personal assets from business debts',
      explanation: 'The key benefit of an LLC is liability protection — if the business is sued or owes debt, your personal home, car, and savings are generally protected.',
      order: 1,
    }],
  })

  const existingAssessment = await db.assessment.findUnique({ where: { courseId: course1.id } })
  if (!existingAssessment) {
    await db.assessment.create({
      data: {
        courseId: course1.id,
        title: 'Business Foundations Assessment',
        passingScore: 75,
        timeLimitMin: 30,
        questions: {
          create: [
            { question: 'A sole proprietorship offers personal liability protection for the owner.', type: 'MULTIPLE_CHOICE', options: (['True', 'False']), correctAnswer: 'False', explanation: 'Sole proprietorships offer no liability protection — the owner is personally responsible for all business debts and legal issues.', points: 1, order: 1 },
            { question: 'Which business structure is typically best for a first-time solo business owner who wants liability protection without a lot of complexity?', type: 'MULTIPLE_CHOICE', options: (['Corporation', 'LLC', 'Sole Proprietorship', 'Partnership']), correctAnswer: 'LLC', explanation: 'An LLC offers liability protection with less complexity and cost than a corporation, making it the most common choice for solo entrepreneurs.', points: 1, order: 2 },
            { question: 'Explain in your own words why keeping business and personal finances separate matters.', type: 'OPEN_ENDED', correctAnswer: 'Mixing personal and business finances makes bookkeeping difficult, can invalidate your LLC liability protection, complicates taxes, and makes it hard to understand if your business is actually profitable.', explanation: 'Separation protects your legal status, simplifies taxes, and gives you a clear picture of business health.', points: 2, order: 3 },
          ],
        },
      },
    })
  }

  console.log('Seed complete.')
}

main().catch(console.error).finally(() => db.$disconnect())
