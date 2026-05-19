import { readdirSync, existsSync, mkdirSync, writeFileSync } from 'fs'
import { join, dirname } from 'path'
import { Pool } from 'pg'
import { PrismaPg } from '@prisma/adapter-pg'
import { PrismaClient } from '@prisma/client'
import type { SubjectDef, CourseDef } from '../curriculum/types'

const pool = new Pool({ connectionString: process.env.DATABASE_URL })
const adapter = new PrismaPg(pool)
const db = new PrismaClient({ adapter })

const ROOT = process.cwd()
const SUBJECTS_DIR = join(ROOT, 'curriculum/subjects')
const CONTENT_DIR = join(ROOT, 'content')

function contentPath(subjectSlug: string, courseSlug: string, lessonSlug: string) {
  return `${subjectSlug}/${courseSlug}/${lessonSlug}.md`
}

function ensureStub(path: string, lessonName: string) {
  const fullPath = join(CONTENT_DIR, path)
  if (existsSync(fullPath)) return false
  mkdirSync(dirname(fullPath), { recursive: true })
  writeFileSync(fullPath, `# ${lessonName}\n\n*Content coming soon.*\n`)
  return true
}

async function syncCourse(subjectId: string, subjectSlug: string, course: CourseDef) {
  const dbCourse = await db.course.upsert({
    where: { slug: course.slug },
    update: { name: course.name, description: course.description, order: course.order, estimatedHours: course.estimatedHours },
    create: { subjectId, slug: course.slug, name: course.name, description: course.description, order: course.order, estimatedHours: course.estimatedHours, publishedAt: new Date() },
  })

  for (const mod of course.modules) {
    const dbModule = await db.module.upsert({
      where: { courseId_slug: { courseId: dbCourse.id, slug: mod.slug } },
      update: { name: mod.name, order: mod.order },
      create: { courseId: dbCourse.id, slug: mod.slug, name: mod.name, order: mod.order },
    })

    for (const lesson of mod.lessons) {
      const cp = contentPath(subjectSlug, course.slug, lesson.slug)
      const dbLesson = await db.lesson.upsert({
        where: { moduleId_slug: { moduleId: dbModule.id, slug: lesson.slug } },
        update: { name: lesson.name, order: lesson.order, contentPath: cp },
        create: { moduleId: dbModule.id, slug: lesson.slug, name: lesson.name, order: lesson.order, contentPath: cp },
      })

      const created = ensureStub(cp, lesson.name)
      if (created) console.log(`  + stub: ${cp}`)

      if (lesson.exercises?.length) {
        await db.exercise.deleteMany({ where: { lessonId: dbLesson.id } })
        await db.exercise.createMany({
          data: lesson.exercises.map((ex) => ({
            lessonId: dbLesson.id,
            question: ex.question,
            type: ex.type,
            options: ex.options ?? null,
            correctAnswer: ex.correctAnswer,
            explanation: ex.explanation,
            order: ex.order,
          })),
        })
      }
    }
  }

  if (course.assessment) {
    const a = course.assessment
    const existing = await db.assessment.findUnique({ where: { courseId: dbCourse.id } })
    const dbAssessment = existing
      ? await db.assessment.update({ where: { courseId: dbCourse.id }, data: { title: a.title, passingScore: a.passingScore, timeLimitMin: a.timeLimitMin ?? null } })
      : await db.assessment.create({ data: { courseId: dbCourse.id, title: a.title, passingScore: a.passingScore, timeLimitMin: a.timeLimitMin ?? null } })

    await db.assessmentQuestion.deleteMany({ where: { assessmentId: dbAssessment.id } })
    await db.assessmentQuestion.createMany({
      data: a.questions.map((q) => ({
        assessmentId: dbAssessment.id,
        question: q.question,
        type: q.type,
        options: q.options ?? null,
        correctAnswer: q.correctAnswer,
        explanation: q.explanation,
        points: q.points,
        order: q.order,
      })),
    })
  }

  return dbCourse
}

async function main() {
  const files = readdirSync(SUBJECTS_DIR).filter((f) => f.endsWith('.ts') || f.endsWith('.js'))

  if (files.length === 0) {
    console.log('No curriculum files found in curriculum/subjects/')
    return
  }

  for (const file of files) {
    const { default: subject }: { default: SubjectDef } = await import(join(SUBJECTS_DIR, file))
    console.log(`\nSyncing: ${subject.name}`)

    const dbSubject = await db.subject.upsert({
      where: { slug: subject.slug },
      update: { name: subject.name, description: subject.description, icon: subject.icon, order: subject.order },
      create: { slug: subject.slug, name: subject.name, description: subject.description, icon: subject.icon, order: subject.order, publishedAt: new Date() },
    })

    for (const course of subject.courses) {
      process.stdout.write(`  Course: ${course.name} ... `)
      await syncCourse(dbSubject.id, subject.slug, course)
      console.log('done')
    }
  }

  console.log('\nSync complete.')
}

main().catch(console.error).finally(() => db.$disconnect())
