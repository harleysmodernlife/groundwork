'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { toast } from 'sonner'

export default function SignupPage() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)

    const form = new FormData(e.currentTarget)
    const body = {
      name: form.get('name') as string,
      email: form.get('email') as string,
      password: form.get('password') as string,
    }

    const res = await fetch('/api/auth/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    })

    const data = await res.json()
    setLoading(false)

    if (!res.ok) {
      toast.error(data.error ?? 'Something went wrong')
      return
    }

    toast.success('Account created — welcome to Groundwork')
    router.push('/login?signup=1')
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-2">Create your account</h1>
      <p className="text-zinc-500 mb-8 text-sm">
        Free forever. No credit card required.
      </p>

      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="name">Full name</Label>
          <Input id="name" name="name" type="text" placeholder="Your name" required />
        </div>
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="email">Email</Label>
          <Input id="email" name="email" type="email" placeholder="you@email.com" required />
        </div>
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="password">Password</Label>
          <Input id="password" name="password" type="password" placeholder="8+ characters" required minLength={8} />
        </div>
        <Button type="submit" className="w-full mt-2" disabled={loading}>
          {loading ? 'Creating account...' : 'Create free account'}
        </Button>
      </form>

      <p className="text-sm text-zinc-500 text-center mt-6">
        Already have an account?{' '}
        <Link href="/login" className="font-medium text-zinc-900 underline">Log in</Link>
      </p>
    </div>
  )
}
