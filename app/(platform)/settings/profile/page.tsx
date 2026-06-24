'use client'

import { useState, useEffect } from 'react'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { toast } from 'sonner'

export default function ProfileSettingsPage() {
  const [loading, setLoading] = useState(false)
  const [profile, setProfile] = useState({ name: '', location: '', bio: '', isDiscoverable: false })

  useEffect(() => {
    fetch('/api/settings/profile').then((r) => r.json()).then((d) => {
      if (d.user) setProfile({ name: d.user.name ?? '', location: d.user.location ?? '', bio: d.user.bio ?? '', isDiscoverable: d.user.isDiscoverable })
    })
  }, [])

  async function save() {
    setLoading(true)
    const res = await fetch('/api/settings/profile', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(profile),
    })
    setLoading(false)
    if (res.ok) toast.success('Profile updated')
    else toast.error('Could not save profile')
  }

  return (
    <div className="max-w-xl space-y-8">
      <div>
        <h1 className="text-2xl font-bold">Profile</h1>
        <p className="text-zinc-500 mt-1">Control how you appear to employers on Groundwork.</p>
      </div>

      <div className="space-y-5">
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="name">Full name</Label>
          <Input id="name" value={profile.name} onChange={(e) => setProfile((p) => ({ ...p, name: e.target.value }))} />
        </div>
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="location">Location</Label>
          <Input id="location" value={profile.location} onChange={(e) => setProfile((p) => ({ ...p, location: e.target.value }))} placeholder="e.g. Nashville, TN" />
        </div>
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="bio">Bio</Label>
          <Textarea id="bio" value={profile.bio} onChange={(e) => setProfile((p) => ({ ...p, bio: e.target.value }))} rows={3} placeholder="A brief intro — skills, goals, background..." />
        </div>

        <div className="border border-zinc-200 dark:border-zinc-700 rounded-xl p-5 space-y-3">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="font-medium text-sm">Appear in employer search</p>
              <p className="text-sm text-zinc-500 mt-0.5">
                Let employers find you based on your certificates. Your email is never shared.
                Employers see your name, location, bio, and certifications only.
              </p>
            </div>
            <button
              onClick={() => setProfile((p) => ({ ...p, isDiscoverable: !p.isDiscoverable }))}
              className={`relative inline-flex h-6 w-11 shrink-0 rounded-full transition-colors ${profile.isDiscoverable ? 'bg-zinc-900 dark:bg-zinc-100' : 'bg-zinc-200 dark:bg-zinc-600'}`}
            >
              <span className={`inline-block h-5 w-5 mt-0.5 rounded-full bg-white dark:bg-zinc-900 shadow transition-transform ${profile.isDiscoverable ? 'translate-x-5.5' : 'translate-x-0.5'}`} />
            </button>
          </div>
          {profile.isDiscoverable && (
            <p className="text-xs text-green-600 font-medium">You are visible to employers in the talent marketplace.</p>
          )}
        </div>

        <Button onClick={save} disabled={loading}>{loading ? 'Saving...' : 'Save profile'}</Button>
      </div>
    </div>
  )
}
