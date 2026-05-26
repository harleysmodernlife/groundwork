import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST ?? 'smtp.zoho.com',
  port: Number(process.env.SMTP_PORT ?? 587),
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
})

const FROM = process.env.SMTP_FROM ?? 'no-reply@atlasdivisions.com'
const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? 'https://groundwork.education'

export async function sendWelcomeEmail(to: string, name: string) {
  await transporter.sendMail({
    from: `"Groundwork" <${FROM}>`,
    to,
    subject: 'Welcome to Groundwork',
    html: `
      <div style="font-family:sans-serif;max-width:520px;margin:0 auto;padding:40px 24px;color:#18181b">
        <h1 style="font-size:24px;font-weight:700;margin:0 0 8px">Welcome, ${name}.</h1>
        <p style="color:#71717a;margin:0 0 24px">Your Groundwork account is ready. Everything is free — no catches, no upgrades, no paywalls.</p>
        <a href="${APP_URL}/learn" style="display:inline-block;background:#18181b;color:#fff;padding:12px 24px;border-radius:8px;text-decoration:none;font-weight:600">Start learning</a>
        <p style="color:#a1a1aa;font-size:13px;margin:32px 0 0">Groundwork · Free education for everyone</p>
      </div>
    `,
  })
}

export async function sendPasswordResetEmail(to: string, token: string) {
  const resetUrl = `${APP_URL}/reset-password?token=${token}`
  await transporter.sendMail({
    from: `"Groundwork" <${FROM}>`,
    to,
    subject: 'Reset your Groundwork password',
    html: `
      <div style="font-family:sans-serif;max-width:520px;margin:0 auto;padding:40px 24px;color:#18181b">
        <h1 style="font-size:24px;font-weight:700;margin:0 0 8px">Reset your password</h1>
        <p style="color:#71717a;margin:0 0 24px">Click the link below to set a new password. This link expires in 1 hour.</p>
        <a href="${resetUrl}" style="display:inline-block;background:#18181b;color:#fff;padding:12px 24px;border-radius:8px;text-decoration:none;font-weight:600">Reset password</a>
        <p style="color:#a1a1aa;font-size:13px;margin:32px 0 0">If you didn't request this, you can safely ignore this email.</p>
      </div>
    `,
  })
}
