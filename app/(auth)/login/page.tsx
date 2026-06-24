'use client'

import { useState } from 'react'
import { signIn } from 'next-auth/react'
import { useRouter, useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { toast } from 'sonner'
import { Suspense } from 'react'

function LoginForm() {
  const router = useRouter()
  const params = useSearchParams()
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)

    const form = new FormData(e.currentTarget)
    const result = await signIn('credentials', {
      email: form.get('email'),
      password: form.get('password'),
      redirect: false,
    })

    setLoading(false)

    if (result?.error) {
      toast.error('Invalid email or password')
      return
    }

    router.push('/dashboard')
    router.refresh()
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-2 text-zinc-900 dark:text-zinc-100">Welcome back</h1>
      <p className="text-zinc-600 dark:text-zinc-400 mb-8 text-sm">
        {params.get('signup') ? 'Account created. Log in to get started.' : 'Log in to continue learning.'}
      </p>

      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="email">Email</Label>
          <Input id="email" name="email" type="email" placeholder="you@email.com" required />
        </div>
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="password">Password</Label>
          <Input id="password" name="password" type="password" placeholder="Your password" required />
        </div>
        <Button type="submit" className="w-full mt-2" disabled={loading}>
          {loading ? 'Logging in...' : 'Log in'}
        </Button>
      </form>

      <p className="text-sm text-zinc-500 dark:text-zinc-400 text-center mt-4">
        <Link href="/forgot-password" className="underline hover:text-zinc-900 dark:hover:text-zinc-100">Forgot your password?</Link>
      </p>

      <p className="text-sm text-zinc-500 dark:text-zinc-400 text-center mt-4">
        Don&apos;t have an account?{' '}
        <Link href="/signup" className="font-medium text-zinc-900 dark:text-zinc-100 underline">Sign up free</Link>
      </p>
    </div>
  )
}

export default function LoginPage() {
  return (
    <Suspense>
      <LoginForm />
    </Suspense>
  )
}
