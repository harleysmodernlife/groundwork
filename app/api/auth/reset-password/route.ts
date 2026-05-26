import { NextResponse } from 'next/server'
import bcrypt from 'bcryptjs'
import { db } from '@/lib/db'

export async function POST(req: Request) {
  const { token, password } = await req.json()

  if (!token || !password || (password as string).length < 8) {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 })
  }

  const resetToken = await db.passwordResetToken.findUnique({ where: { token } })

  if (!resetToken || resetToken.expires < new Date()) {
    return NextResponse.json({ error: 'Reset link is invalid or has expired' }, { status: 400 })
  }

  const hashed = await bcrypt.hash(password, 12)

  await db.user.update({
    where: { email: resetToken.email },
    data: { password: hashed },
  })

  await db.passwordResetToken.delete({ where: { token } })

  return NextResponse.json({ ok: true })
}
