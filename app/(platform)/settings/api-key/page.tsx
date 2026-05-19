'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { toast } from 'sonner'

const PROVIDERS = [
  { value: 'GOOGLE', label: 'Google Gemini', hint: 'Free tier available — recommended for most users' },
  { value: 'OPENAI', label: 'OpenAI', hint: 'GPT-4o-mini, pay-as-you-go' },
  { value: 'ANTHROPIC', label: 'Anthropic', hint: 'Claude Haiku, pay-as-you-go' },
]

export default function ApiKeyPage() {
  const [provider, setProvider] = useState('GOOGLE')
  const [apiKey, setApiKey] = useState('')
  const [saving, setSaving] = useState(false)

  async function save() {
    if (!apiKey.trim()) return
    setSaving(true)

    const res = await fetch('/api/settings/api-key', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ provider, apiKey }),
    })

    setSaving(false)
    if (res.ok) {
      toast.success('API key saved. Unlimited AI tutoring unlocked.')
      setApiKey('')
    } else {
      toast.error('Could not save key. Check the format and try again.')
    }
  }

  return (
    <div className="max-w-xl space-y-8">
      <div>
        <h1 className="text-2xl font-bold">API Key (BYOK)</h1>
        <p className="text-zinc-500 mt-1">
          Groundwork provides a free AI tier with daily limits. Add your own API key for unlimited tutoring at no cost to you.
        </p>
      </div>

      <div className="bg-zinc-50 border border-zinc-200 rounded-xl p-5 space-y-3 text-sm">
        <p className="font-semibold">How to get a free Google Gemini key</p>
        <ol className="list-decimal list-inside space-y-1.5 text-zinc-600">
          <li>Go to <strong>aistudio.google.com</strong> and sign in with your Google account</li>
          <li>Click <strong>Get API Key</strong> in the left sidebar</li>
          <li>Click <strong>Create API key</strong></li>
          <li>Copy the key and paste it below</li>
        </ol>
        <p className="text-zinc-400 text-xs">Google&apos;s free tier includes 1,500 requests/day — more than enough for learning.</p>
      </div>

      <div className="space-y-5">
        <div className="space-y-2">
          <Label>Provider</Label>
          <div className="space-y-2">
            {PROVIDERS.map((p) => (
              <button
                key={p.value}
                onClick={() => setProvider(p.value)}
                className={`w-full text-left px-4 py-3 rounded-lg border text-sm transition-colors ${
                  provider === p.value
                    ? 'border-zinc-900 bg-zinc-900 text-white'
                    : 'border-zinc-200 hover:border-zinc-400'
                }`}
              >
                <div className="font-medium">{p.label}</div>
                <div className={`text-xs mt-0.5 ${provider === p.value ? 'text-zinc-300' : 'text-zinc-400'}`}>{p.hint}</div>
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-1.5">
          <Label htmlFor="apiKey">API Key</Label>
          <Input
            id="apiKey"
            type="password"
            value={apiKey}
            onChange={(e) => setApiKey(e.target.value)}
            placeholder="Paste your API key here"
          />
          <p className="text-xs text-zinc-400">Your key is encrypted before storage and never logged or shared.</p>
        </div>

        <Button onClick={save} disabled={saving || !apiKey.trim()}>
          {saving ? 'Saving...' : 'Save API key'}
        </Button>
      </div>
    </div>
  )
}
