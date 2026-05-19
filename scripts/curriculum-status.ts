import { readdirSync, existsSync, readFileSync } from 'fs'
import { join } from 'path'
import { Pool } from 'pg'
import { PrismaPg } from '@prisma/adapter-pg'
import { PrismaClient } from '@prisma/client'

const pool = new Pool({ connectionString: process.env.DATABASE_URL })
const db = new PrismaClient({ adapter: new PrismaPg(pool) })
const CONTENT_DIR = join(process.cwd(), 'content')

const STUB_MARKER = '*Content coming soon.*'

function contentStatus(contentPath: string): 'missing' | 'stub' | 'has-content' {
  const fullPath = join(CONTENT_DIR, contentPath)
  if (!existsSync(fullPath)) return 'missing'
  const text = readFileSync(fullPath, 'utf8')
  return text.includes(STUB_MARKER) ? 'stub' : 'has-content'
}

async function main() {
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
          assessment: { select: { id: true, _count: { select: { questions: true } } } },
        },
      },
    },
  })

  let totalLessons = 0, totalContent = 0, totalStub = 0, totalMissing = 0

  for (const subject of subjects) {
    const lessons = subject.courses.flatMap((c) => c.modules.flatMap((m) => m.lessons))
    const counts = { content: 0, stub: 0, missing: 0 }
    for (const l of lessons) {
      const s = contentStatus(l.contentPath)
      counts[s === 'has-content' ? 'content' : s]++
    }
    const total = lessons.length
    const pct = total ? Math.round((counts.content / total) * 100) : 0
    const bar = '█'.repeat(Math.round(pct / 5)) + '░'.repeat(20 - Math.round(pct / 5))

    console.log(`\n${subject.icon} ${subject.name}`)
    console.log(`   [${bar}] ${pct}% complete (${counts.content}/${total} lessons have content)`)
    console.log(`   Courses: ${subject.courses.length} | Stubs: ${counts.stub} | Missing: ${counts.missing}`)

    totalLessons += total
    totalContent += counts.content
    totalStub += counts.stub
    totalMissing += counts.missing
  }

  console.log(`\n${'─'.repeat(50)}`)
  console.log(`Total: ${totalContent}/${totalLessons} lessons have content`)
  console.log(`Stubs: ${totalStub} | Missing files: ${totalMissing}`)
  console.log(`Overall: ${totalLessons ? Math.round((totalContent / totalLessons) * 100) : 0}% complete`)
}

main().catch(console.error).finally(() => db.$disconnect())
