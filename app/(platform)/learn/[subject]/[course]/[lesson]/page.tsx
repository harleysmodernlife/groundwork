import { db } from '@/lib/db'
import { auth } from '@/lib/auth'
import { notFound } from 'next/navigation'
import { readFileSync, existsSync } from 'fs'
import { join } from 'path'
import LessonPlayer from '@/components/learn/LessonPlayer'

export default async function LessonPage({
  params,
}: {
  params: Promise<{ subject: string; course: string; lesson: string }>
}) {
  const { subject: subjectSlug, course: courseSlug, lesson: lessonSlug } = await params
  const session = await auth()
  const userId = session!.user!.id!

  const lesson = await db.lesson.findFirst({
    where: {
      slug: lessonSlug,
      module: {
        course: { slug: courseSlug, subject: { slug: subjectSlug } },
      },
    },
    include: {
      exercises: { orderBy: { order: 'asc' } },
      module: {
        include: {
          course: {
            include: {
              subject: { select: { slug: true, name: true } },
              modules: {
                orderBy: { order: 'asc' },
                include: { lessons: { orderBy: { order: 'asc' }, select: { id: true, slug: true, name: true, order: true } } },
              },
            },
          },
        },
      },
    },
  })

  if (!lesson) notFound()

  const contentFile = join(process.cwd(), 'content', lesson.contentPath)
  const rawContent = existsSync(contentFile) ? readFileSync(contentFile, 'utf8') : ''

  const isCompleted = !!(await db.lessonProgress.findUnique({
    where: { userId_lessonId: { userId, lessonId: lesson.id } },
  }))

  // Build flat lesson list for prev/next navigation
  const allLessons = lesson.module.course.modules.flatMap((m) =>
    m.lessons.map((l) => ({ ...l, moduleSlug: m.slug }))
  )
  const currentIndex = allLessons.findIndex((l) => l.id === lesson.id)
  const prevLesson = currentIndex > 0 ? allLessons[currentIndex - 1] : null
  const nextLesson = currentIndex < allLessons.length - 1 ? allLessons[currentIndex + 1] : null

  return (
    <LessonPlayer
      lesson={{
        id: lesson.id,
        name: lesson.name,
        rawContent,
        exercises: lesson.exercises,
        isCompleted,
        courseSlug,
        subjectSlug,
        courseName: lesson.module.course.name,
        subjectName: lesson.module.course.subject.name,
      }}
      prev={prevLesson ? { slug: prevLesson.slug, name: prevLesson.name } : null}
      next={nextLesson ? { slug: nextLesson.slug, name: nextLesson.name } : null}
    />
  )
}
