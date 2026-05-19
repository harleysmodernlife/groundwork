'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { toast } from 'sonner'

export default function EmployerSignupPage() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    const form = new FormData(e.currentTarget)
    const res = await fetch('/api/employer/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: form.get('name'),
        companyName: form.get('companyName'),
        email: form.get('email'),
        password: form.get('password'),
      }),
    })
    const data = await res.json()
    setLoading(false)
    if (!res.ok) { toast.error(data.error ?? 'Something went wrong'); return }
    toast.success('Account created — log in to get started')
    router.push('/employer/login?signup=1')
  }

  return (
    <div className="min-h-screen grid md:grid-cols-2">
      <div className="flex flex-col justify-center px-8 py-12 bg-white">
        <div className="max-w-sm w-full mx-auto">
          <Link href="/" className="text-xl font-bold tracking-tight block mb-2">Groundwork</Link>
          <p className="text-xs text-zinc-400 mb-10 uppercase tracking-wide">Employer Portal</p>
          <h1 className="text-2xl font-bold mb-2">Create employer account</h1>
          <p className="text-zinc-500 text-sm mb-8">Access verified graduates. Post jobs for free.</p>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="name">Your name</Label>
              <Input id="name" name="name" required placeholder="Jane Smith" />
            </div>
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="companyName">Company name</Label>
              <Input id="companyName" name="companyName" required placeholder="Acme Corp" />
            </div>
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="email">Work email</Label>
              <Input id="email" name="email" type="email" required placeholder="jane@acme.com" />
            </div>
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="password">Password</Label>
              <Input id="password" name="password" type="password" required minLength={8} placeholder="8+ characters" />
            </div>
            <Button type="submit" className="w-full mt-2" disabled={loading}>
              {loading ? 'Creating account...' : 'Create account'}
            </Button>
          </form>
          <p className="text-sm text-zinc-500 text-center mt-6">
            Already have an account?{' '}
            <Link href="/employer/login" className="font-medium text-zinc-900 underline">Log in</Link>
          </p>
        </div>
      </div>
      <div className="hidden md:flex flex-col justify-center px-12 bg-zinc-900 text-white">
        <p className="text-sm uppercase tracking-widest text-zinc-400 mb-6">For employers</p>
        <p className="text-3xl font-medium leading-snug">
          Hire people who<br />
          <span className="text-zinc-400">proved they know it.</span>
        </p>
        <p className="mt-6 text-zinc-400 leading-relaxed">
          Every Groundwork graduate passed a rigorous assessment. No padding, no fluff —
          just demonstrated competency you can verify with one click.
        </p>
        <div className="mt-8 space-y-3">
          {['Search graduates by skill and certification', 'Verify any certificate instantly', 'Post jobs — students apply for free'].map((item) => (
            <div key={item} className="flex items-center gap-3 text-sm text-zinc-300">
              <span className="text-green-400">✓</span> {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
