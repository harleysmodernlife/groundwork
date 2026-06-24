'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { toast } from 'sonner'

export default function ForgotPasswordPage() {
  const [loading, setLoading] = useState(false)
  const [sent, setSent] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)

    const email = (new FormData(e.currentTarget).get('email') as string)?.toLowerCase().trim()

    const res = await fetch('/api/auth/forgot-password', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email }),
    })

    setLoading(false)

    if (!res.ok) {
      toast.error('Something went wrong. Try again.')
      return
    }

    setSent(true)
  }

  if (sent) {
    return (
      <div>
        <h1 className="text-2xl font-bold mb-2 text-zinc-900 dark:text-zinc-100">Check your email</h1>
        <p className="text-zinc-600 dark:text-zinc-400 text-sm mb-6">
          If an account exists for that address, we sent a password reset link. It expires in 1 hour.
        </p>
        <Link href="/login" className="text-sm text-zinc-500 underline hover:text-zinc-900">
          Back to log in
        </Link>
      </div>
    )
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-2 text-zinc-900 dark:text-zinc-100">Forgot your password?</h1>
      <p className="text-zinc-600 dark:text-zinc-400 mb-8 text-sm">
        Enter your email and we'll send you a reset link.
      </p>

      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="email">Email</Label>
          <Input id="email" name="email" type="email" placeholder="you@email.com" required />
        </div>
        <Button type="submit" className="w-full mt-2" disabled={loading}>
          {loading ? 'Sending...' : 'Send reset link'}
        </Button>
      </form>

      <p className="text-sm text-zinc-500 text-center mt-6">
        Remembered it?{' '}
        <Link href="/login" className="font-medium text-zinc-900 underline">Log in</Link>
      </p>
    </div>
  )
}
