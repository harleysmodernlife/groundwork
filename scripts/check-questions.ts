import { config } from 'dotenv'
config()
import { Pool } from 'pg'

async function main() {
  const pool = new Pool({ connectionString: process.env.DATABASE_URL })
  const { rows } = await pool.query(`
    SELECT l.slug, COUNT(eq.id)::int as q_count
    FROM "Lesson" l
    LEFT JOIN "ExerciseQuestion" eq ON eq.lesson_id = l.id
    GROUP BY l.id, l.slug
    ORDER BY q_count, l.slug
  `)
  const total = rows.length
  const under5 = rows.filter((r: { q_count: number }) => r.q_count < 5)
  const counts: Record<number, number> = {}
  rows.forEach((r: { q_count: number }) => { counts[r.q_count] = (counts[r.q_count] || 0) + 1 })
  console.log(`Total lessons: ${total}`)
  console.log('Distribution:', Object.entries(counts).map(([k,v]) => `${k}q: ${v}`).join(', '))
  console.log(`Lessons with fewer than 5 questions: ${under5.length}`)
  under5.forEach((r: { slug: string; q_count: number }) => console.log(`  ${r.q_count}q  ${r.slug}`))
  await pool.end()
}

main()
