'use client'

import { useState, Suspense } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { toast } from 'sonner'

function ResetForm() {
  const router = useRouter()
  const params = useSearchParams()
  const token = params.get('token') ?? ''
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)

    const form = new FormData(e.currentTarget)
    const password = form.get('password') as string
    const confirm = form.get('confirm') as string

    if (password !== confirm) {
      toast.error('Passwords do not match')
      setLoading(false)
      return
    }

    const res = await fetch('/api/auth/reset-password', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ token, password }),
    })

    const data = await res.json()
    setLoading(false)

    if (!res.ok) {
      toast.error(data.error ?? 'Something went wrong')
      return
    }

    toast.success('Password updated — please log in')
    router.push('/login')
  }

  if (!token) {
    return (
      <div>
        <p className="text-zinc-500">Invalid or missing reset token.</p>
        <Link href="/forgot-password" className="text-sm underline mt-4 block">Request a new link</Link>
      </div>
    )
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-2">Set a new password</h1>
      <p className="text-zinc-500 mb-8 text-sm">Choose something strong.</p>

      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="password">New password</Label>
          <Input id="password" name="password" type="password" placeholder="8+ characters" required minLength={8} />
        </div>
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="confirm">Confirm password</Label>
          <Input id="confirm" name="confirm" type="password" placeholder="Same again" required minLength={8} />
        </div>
        <Button type="submit" className="w-full mt-2" disabled={loading}>
          {loading ? 'Updating...' : 'Set new password'}
        </Button>
      </form>
    </div>
  )
}

export default function ResetPasswordPage() {
  return (
    <Suspense>
      <ResetForm />
    </Suspense>
  )
}
