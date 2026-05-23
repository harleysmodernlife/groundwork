'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { toast } from 'sonner'

type ProviderDef = {
  value: string
  label: string
  badge?: string
  hint: string
  keyLabel: string
  keyPlaceholder: string
  instructions: { text: string; steps: string[]; note?: string } | null
}

const PROVIDERS: ProviderDef[] = [
  {
    value: 'GOOGLE',
    label: 'Google Gemini',
    badge: 'Free',
    hint: '1,500 requests/day free. Recommended starting point.',
    keyLabel: 'API Key',
    keyPlaceholder: 'AIza...',
    instructions: {
      text: 'Get a free Gemini API key',
      steps: [
        'Go to aistudio.google.com and sign in with your Google account',
        'Click Get API Key in the left sidebar',
        'Click Create API key',
        'Copy the key and paste it below',
      ],
      note: "Google's free tier includes 1,500 requests/day — more than enough for learning.",
    },
  },
  {
    value: 'OPENROUTER',
    label: 'OpenRouter',
    badge: 'Free models',
    hint: 'One key, access to dozens of free models including Llama 4 and Gemma 3.',
    keyLabel: 'API Key',
    keyPlaceholder: 'sk-or-...',
    instructions: {
      text: 'Get a free OpenRouter key',
      steps: [
        'Go to openrouter.ai and create a free account',
        'Click Keys in the left sidebar',
        'Click Create Key, give it a name',
        'Copy the key (starts with sk-or-) and paste it below',
      ],
      note: 'Groundwork uses meta-llama/llama-4-scout:free by default — no credits needed.',
    },
  },
  {
    value: 'OLLAMA',
    label: 'Ollama',
    badge: 'Completely free',
    hint: 'Run AI locally on your own machine. No internet, no API costs, no limits.',
    keyLabel: 'Ollama Server URL',
    keyPlaceholder: 'http://192.168.1.10:11434',
    instructions: {
      text: 'Set up Ollama',
      steps: [
        'Install Ollama at ollama.com — available for Mac, Windows, and Linux',
        'Run: ollama pull llama3.2',
        'Start the server: ollama serve',
        'If Groundwork is on a different machine, use that machine\'s local IP instead of localhost',
      ],
      note: 'Groundwork uses the llama3.2 model by default. Make sure you\'ve pulled it.',
    },
  },
  {
    value: 'GROQ',
    label: 'Groq',
    badge: 'Free tier',
    hint: 'Extremely fast inference. Free tier with Llama and Gemma models.',
    keyLabel: 'API Key',
    keyPlaceholder: 'gsk_...',
    instructions: {
      text: 'Get a free Groq key',
      steps: [
        'Go to console.groq.com and create a free account',
        'Click API Keys in the left sidebar',
        'Click Create API Key, give it a name',
        'Copy the key (starts with gsk_) and paste it below',
      ],
      note: 'Groundwork uses llama-3.1-8b-instant by default — fast and capable.',
    },
  },
  {
    value: 'OPENAI',
    label: 'OpenAI',
    badge: 'Paid',
    hint: 'GPT-4o-mini. Pay-as-you-go — very low cost per session.',
    keyLabel: 'API Key',
    keyPlaceholder: 'sk-...',
    instructions: null,
  },
  {
    value: 'ANTHROPIC',
    label: 'Anthropic',
    badge: 'Paid',
    hint: 'Claude Haiku. Pay-as-you-go — very low cost per session.',
    keyLabel: 'API Key',
    keyPlaceholder: 'sk-ant-...',
    instructions: null,
  },
]

export default function ApiKeyPage() {
  const [provider, setProvider] = useState('GOOGLE')
  const [apiKey, setApiKey] = useState('')
  const [saving, setSaving] = useState(false)

  const selected = PROVIDERS.find((p) => p.value === provider)!

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
      toast.success('Saved. Unlimited AI tutoring unlocked.')
      setApiKey('')
    } else {
      toast.error('Could not save. Check the format and try again.')
    }
  }

  async function remove() {
    await fetch('/api/settings/api-key', { method: 'DELETE' })
    toast.success('API key removed.')
  }

  return (
    <div className="max-w-xl space-y-8">
      <div>
        <h1 className="text-2xl font-bold">AI Provider (BYOK)</h1>
        <p className="text-zinc-500 mt-1">
          Groundwork includes a free AI tier with daily limits. Add your own key for unlimited tutoring — several options below are completely free.
        </p>
      </div>

      <div className="space-y-2">
        <Label>Choose a provider</Label>
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
              <div className="flex items-center gap-2">
                <span className="font-medium">{p.label}</span>
                {p.badge && (
                  <span className={`text-xs px-1.5 py-0.5 rounded font-medium ${
                    provider === p.value
                      ? 'bg-zinc-700 text-zinc-200'
                      : p.badge === 'Paid' ? 'bg-zinc-100 text-zinc-500' : 'bg-green-100 text-green-700'
                  }`}>
                    {p.badge}
                  </span>
                )}
              </div>
              <div className={`text-xs mt-0.5 ${provider === p.value ? 'text-zinc-300' : 'text-zinc-400'}`}>
                {p.hint}
              </div>
            </button>
          ))}
        </div>
      </div>

      {selected.instructions && (
        <div className="bg-zinc-50 border border-zinc-200 rounded-xl p-5 space-y-3 text-sm">
          <p className="font-semibold">{selected.instructions.text}</p>
          <ol className="list-decimal list-inside space-y-1.5 text-zinc-600">
            {selected.instructions.steps.map((step, i) => (
              <li key={i}>{step}</li>
            ))}
          </ol>
          {selected.instructions.note && (
            <p className="text-zinc-400 text-xs">{selected.instructions.note}</p>
          )}
        </div>
      )}

      <div className="space-y-4">
        <div className="space-y-1.5">
          <Label htmlFor="apiKey">{selected.keyLabel}</Label>
          <Input
            id="apiKey"
            type="password"
            value={apiKey}
            onChange={(e) => setApiKey(e.target.value)}
            placeholder={selected.keyPlaceholder}
          />
          <p className="text-xs text-zinc-400">Encrypted before storage. Never logged or shared.</p>
        </div>

        <div className="flex gap-3">
          <Button onClick={save} disabled={saving || !apiKey.trim()}>
            {saving ? 'Saving...' : 'Save'}
          </Button>
          <Button variant="outline" onClick={remove}>
            Remove key
          </Button>
        </div>
      </div>
    </div>
  )
}
