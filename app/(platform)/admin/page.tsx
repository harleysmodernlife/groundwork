import { db } from '@/lib/db'
import { auth } from '@/lib/auth'
import { redirect } from 'next/navigation'
import { existsSync, readFileSync } from 'fs'
import { join } from 'path'

const STUB_MARKER = '*Content coming soon.*'

function contentStatus(contentPath: string): 'missing' | 'stub' | 'has-content' {
  const fullPath = join(process.cwd(), 'content', contentPath)
  if (!existsSync(fullPath)) return 'missing'
  const text = readFileSync(fullPath, 'utf8')
  return text.includes(STUB_MARKER) ? 'stub' : 'has-content'
}

export default async function AdminPage() {
  const session = await auth()
  const user = session?.user as { id?: string; role?: string } | undefined
  if (!user?.id || user.role !== 'ADMIN') redirect('/dashboard')

  const subjects = await db.subject.findMany({
    orderBy: { order: 'asc' },
    include: {
      courses: {
        orderBy: { order: 'asc' },
        include: {
          modules: {
            orderBy: { order: 'asc' },
            include: { lessons: { orderBy: { order: 'asc' } } },
          },
          assessment: { select: { id: true } },
          _count: { select: { enrollments: true } },
        },
      },
    },
  })

  const totalUsers = await db.user.count()
  const totalCerts = await db.certificate.count()
  const totalEnrollments = await db.enrollment.count()

  const allLessons = subjects.flatMap((s) => s.courses.flatMap((c) => c.modules.flatMap((m) => m.lessons)))
  const withContent = allLessons.filter((l) => contentStatus(l.contentPath) === 'has-content').length

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold">Curriculum Dashboard</h1>
        <p className="text-zinc-500 text-sm mt-1">Admin only</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: 'Total Users', value: totalUsers },
          { label: 'Enrollments', value: totalEnrollments },
          { label: 'Certificates Issued', value: totalCerts },
          { label: 'Lessons with Content', value: `${withContent}/${allLessons.length}` },
        ].map((stat) => (
          <div key={stat.label} className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 rounded-xl p-5">
            <p className="text-2xl font-bold">{stat.value}</p>
            <p className="text-sm text-zinc-500 mt-1">{stat.label}</p>
          </div>
        ))}
      </div>

      <div className="space-y-6">
        {subjects.map((subject) => {
          const lessons = subject.courses.flatMap((c) => c.modules.flatMap((m) => m.lessons))
          const counts = lessons.reduce(
            (acc, l) => { acc[contentStatus(l.contentPath)]++; return acc },
            { 'has-content': 0, stub: 0, missing: 0 }
          )
          const pct = lessons.length ? Math.round((counts['has-content'] / lessons.length) * 100) : 0

          return (
            <div key={subject.id} className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 rounded-xl overflow-hidden">
              <div className="px-6 py-4 border-b border-zinc-100 dark:border-zinc-800 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{subject.icon}</span>
                  <div>
                    <p className="font-semibold">{subject.name}</p>
                    <p className="text-xs text-zinc-400">{subject.courses.length} courses · {lessons.length} lessons</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium">{pct}% complete</p>
                  <p className="text-xs text-zinc-400">{counts['has-content']} written · {counts.stub} stubs · {counts.missing} missing</p>
                </div>
              </div>

              <div className="w-full h-1.5 bg-zinc-100 dark:bg-zinc-800">
                <div className="h-full bg-zinc-900 transition-all" style={{ width: `${pct}%` }} />
              </div>

              <div className="divide-y divide-zinc-100 dark:divide-zinc-800">
                {subject.courses.map((course) => {
                  const courseLessons = course.modules.flatMap((m) => m.lessons)
                  const courseContent = courseLessons.filter((l) => contentStatus(l.contentPath) === 'has-content').length
                  return (
                    <div key={course.id} className="px-6 py-3 flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium">{course.name}</p>
                        <p className="text-xs text-zinc-400">
                          {course.modules.length} modules · {courseLessons.length} lessons
                          {course.assessment ? ' · has assessment' : ' · no assessment yet'}
                        </p>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-xs text-zinc-500">{courseContent}/{courseLessons.length} lessons</span>
                        <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                          courseContent === courseLessons.length && courseLessons.length > 0
                            ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400'
                            : courseContent > 0
                            ? 'bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400'
                            : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400'
                        }`}>
                          {courseContent === courseLessons.length && courseLessons.length > 0
                            ? 'complete'
                            : courseContent > 0
                            ? 'in progress'
                            : 'not started'}
                        </span>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
