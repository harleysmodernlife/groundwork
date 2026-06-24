'use client'

import { useState, Suspense } from 'react'
import { signIn } from 'next-auth/react'
import { useRouter, useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { toast } from 'sonner'

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
    if (result?.error) { toast.error('Invalid email or password'); return }
    router.push('/employer/dashboard')
    router.refresh()
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-zinc-50 dark:bg-zinc-950 px-6">
      <div className="max-w-sm w-full bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-700 p-8 shadow-sm">
        <Link href="/" className="text-lg font-bold block mb-1 text-zinc-900 dark:text-zinc-100">Groundwork</Link>
        <p className="text-xs text-zinc-400 uppercase tracking-wide mb-8">Employer Portal</p>
        <h1 className="text-xl font-bold mb-6 text-zinc-900 dark:text-zinc-100">
          {params.get('signup') ? 'Account created. Log in.' : 'Welcome back'}
        </h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="email">Email</Label>
            <Input id="email" name="email" type="email" required placeholder="you@company.com" />
          </div>
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="password">Password</Label>
            <Input id="password" name="password" type="password" required />
          </div>
          <Button type="submit" className="w-full mt-2" disabled={loading}>
            {loading ? 'Logging in...' : 'Log in'}
          </Button>
        </form>
        <p className="text-sm text-zinc-500 text-center mt-6">
          No account?{' '}
          <Link href="/employer/signup" className="font-medium text-zinc-900 underline">Sign up</Link>
        </p>
      </div>
    </div>
  )
}

export default function EmployerLoginPage() {
  return <Suspense><LoginForm /></Suspense>
}
