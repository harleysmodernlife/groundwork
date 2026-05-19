import { Pool } from 'pg'
import { PrismaPg } from '@prisma/adapter-pg'
import { PrismaClient } from '@prisma/client'

const pool = new Pool({ connectionString: process.env.DATABASE_URL })
const db = new PrismaClient({ adapter: new PrismaPg(pool) })

async function main() {
  const email = process.argv[2]
  if (!email) {
    console.error('Usage: npm run make-admin <email>')
    process.exit(1)
  }

  const user = await db.user.update({
    where: { email },
    data: { role: 'ADMIN' },
    select: { id: true, name: true, email: true, role: true },
  })

  console.log(`Promoted to ADMIN: ${user.name ?? user.email} (${user.email})`)
}

main().catch((e) => {
  if (e.code === 'P2025') console.error(`No user found with email: ${process.argv[2]}`)
  else console.error(e)
}).finally(() => db.$disconnect())
