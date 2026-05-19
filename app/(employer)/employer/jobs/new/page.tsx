'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { toast } from 'sonner'

export default function NewJobPage() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    const form = new FormData(e.currentTarget)
    const res = await fetch('/api/employer/jobs', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        title: form.get('title'),
        description: form.get('description'),
        location: form.get('location'),
        remote: form.get('remote') === 'on',
        publish: form.get('publish') === 'on',
      }),
    })
    const data = await res.json()
    setLoading(false)
    if (!res.ok) { toast.error(data.error ?? 'Something went wrong'); return }
    toast.success('Job post created')
    router.push(`/employer/jobs/${data.jobPost.id}`)
  }

  return (
    <div className="max-w-2xl space-y-6">
      <div>
        <h1 className="text-2xl font-bold">New job post</h1>
        <p className="text-zinc-500 mt-1">Free for you to post. Free for students to apply.</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="title">Job title</Label>
          <Input id="title" name="title" required placeholder="e.g. Operations Manager, Sales Associate" />
        </div>
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="description">Job description</Label>
          <Textarea id="description" name="description" required rows={8} placeholder="Describe the role, responsibilities, and what you're looking for..." />
        </div>
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="location">Location</Label>
          <Input id="location" name="location" placeholder="e.g. Nashville, TN" />
        </div>
        <div className="flex items-center gap-2">
          <input type="checkbox" id="remote" name="remote" className="rounded" />
          <Label htmlFor="remote" className="cursor-pointer">Remote / hybrid OK</Label>
        </div>
        <div className="flex items-center gap-2">
          <input type="checkbox" id="publish" name="publish" defaultChecked className="rounded" />
          <Label htmlFor="publish" className="cursor-pointer">Publish immediately</Label>
        </div>
        <div className="flex gap-3 pt-2">
          <Button type="submit" disabled={loading}>{loading ? 'Creating...' : 'Create job post'}</Button>
          <Button type="button" variant="outline" onClick={() => router.back()}>Cancel</Button>
        </div>
      </form>
    </div>
  )
}
