import { NextResponse } from 'next/server'
import { db } from '@/lib/db'
import { sendPasswordResetEmail } from '@/lib/email'
import crypto from 'crypto'

export async function POST(req: Request) {
  const { email: rawEmail } = await req.json()
  const email = (rawEmail as string)?.toLowerCase().trim()

  if (!email) {
    return NextResponse.json({ error: 'Email required' }, { status: 400 })
  }

  // Always return 200 to avoid leaking which emails exist
  const user = await db.user.findUnique({ where: { email } })
  if (!user) return NextResponse.json({ ok: true })

  // Delete any existing token for this email
  await db.passwordResetToken.deleteMany({ where: { email } })

  const token = crypto.randomBytes(32).toString('hex')
  const expires = new Date(Date.now() + 60 * 60 * 1000) // 1 hour

  await db.passwordResetToken.create({
    data: { email, token, expires },
  })

  try {
    await sendPasswordResetEmail(email, token)
  } catch (err) {
    console.error('Failed to send password reset email:', err)
    // Still return ok — token is in DB, SMTP may just be misconfigured
  }

  return NextResponse.json({ ok: true })
}
