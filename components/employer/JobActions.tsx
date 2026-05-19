'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { toast } from 'sonner'

export default function JobActions({ jobId, isPublished, isClosed }: { jobId: string; isPublished: boolean; isClosed: boolean }) {
  const router = useRouter()
  const [loading, setLoading] = useState(false)

  async function action(type: 'publish' | 'close') {
    setLoading(true)
    const res = await fetch(`/api/employer/jobs/${jobId}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ action: type }),
    })
    setLoading(false)
    if (!res.ok) { toast.error('Action failed'); return }
    toast.success(type === 'publish' ? 'Job post published' : 'Job post closed')
    router.refresh()
  }

  if (isClosed) return null

  return (
    <div className="flex gap-2">
      {!isPublished && (
        <Button size="sm" onClick={() => action('publish')} disabled={loading}>
          Publish
        </Button>
      )}
      {isPublished && (
        <Button size="sm" variant="outline" onClick={() => action('close')} disabled={loading}>
          Close posting
        </Button>
      )}
    </div>
  )
}
