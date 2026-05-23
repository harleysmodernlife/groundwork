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
    hint: 'Generous free tier, no credit card required. Recommended starting point.',
    keyLabel: 'API Key',
    keyPlaceholder: 'AIza...',
    instructions: {
      text: 'Get a free Gemini API key',
      steps: [
        'Go to aistudio.google.com and sign in with your Google account',
        'Click Get API key in the left sidebar',
        'Click Create API key — you can use an existing Google Cloud project or let it create one',
        'Copy the key (starts with AIza) and paste it below',
      ],
      note: 'No billing setup required. Groundwork uses Gemini 2.0 Flash — fast and free within the daily limit.',
    },
  },
  {
    value: 'OPENROUTER',
    label: 'OpenRouter',
    badge: 'Free models',
    hint: 'One key, access to 29+ free models including Llama 4, DeepSeek, and Mistral.',
    keyLabel: 'API Key',
    keyPlaceholder: 'sk-or-...',
    instructions: {
      text: 'Get a free OpenRouter key',
      steps: [
        'Go to openrouter.ai and create a free account — no credit card required',
        'Click Keys in the left sidebar of your dashboard',
        'Click Create Key, give it a name',
        'Copy the key (starts with sk-or-) and paste it below',
      ],
      note: 'Groundwork uses Llama 4 Scout (free) by default. Free models are rate-limited to 20 requests/min — plenty for tutoring.',
    },
  },
  {
    value: 'OLLAMA',
    label: 'Ollama',
    badge: 'Completely free',
    hint: 'Run AI locally on your own machine. No internet required, no limits, no cost.',
    keyLabel: 'Ollama Server URL',
    keyPlaceholder: 'http://192.168.1.10:11434',
    instructions: {
      text: 'Set up Ollama',
      steps: [
        'Download and install Ollama at ollama.com — one-click installer for Mac, Windows, and Linux',
        'Open a terminal and run: ollama pull llama3.2 (downloads ~2GB)',
        'Ollama starts automatically after install — or run: ollama serve',
        'Enter the URL where Ollama is running (use the machine\'s local IP if Groundwork is on a different device)',
      ],
      note: 'Groundwork uses the llama3.2 model. Make sure you\'ve pulled it before saving.',
    },
  },
  {
    value: 'GROQ',
    label: 'Groq',
    badge: 'Free tier',
    hint: 'Ultra-fast inference. Free tier includes up to 14,400 requests/day.',
    keyLabel: 'API Key',
    keyPlaceholder: 'gsk_...',
    instructions: {
      text: 'Get a free Groq API key',
      steps: [
        'Go to console.groq.com and sign up — no credit card required',
        'Click API Keys in the left sidebar',
        'Click Create API Key and give it a name',
        'Copy the key (starts with gsk_) and paste it below',
      ],
      note: 'Groundwork uses Llama 3.1 8B Instant — the most generous free model on Groq at up to 14,400 requests/day.',
    },
  },
  {
    value: 'OPENAI',
    label: 'OpenAI',
    badge: 'Paid',
    hint: 'GPT-4o-mini. Pay-as-you-go — fractions of a cent per tutoring session.',
    keyLabel: 'API Key',
    keyPlaceholder: 'sk-...',
    instructions: {
      text: 'Get an OpenAI API key',
      steps: [
        'Go to platform.openai.com and sign up or log in',
        'Add a payment method under Billing — a small prepaid credit is enough to start',
        'Click API Keys in the left sidebar',
        'Click Create new secret key, give it a name, and copy it immediately — it\'s only shown once',
        'Paste the key (starts with sk-) below',
      ],
      note: 'Groundwork uses GPT-4o-mini. At current pricing, a typical tutoring session costs well under a cent.',
    },
  },
  {
    value: 'ANTHROPIC',
    label: 'Anthropic',
    badge: 'Paid',
    hint: 'Claude Haiku 4.5. Pay-as-you-go — fast, smart, and very affordable.',
    keyLabel: 'API Key',
    keyPlaceholder: 'sk-ant-...',
    instructions: {
      text: 'Get an Anthropic API key',
      steps: [
        'Go to console.anthropic.com and sign up or log in',
        'Add a payment method under Billing — a small top-up is enough to start',
        'Click API Keys in the left sidebar',
        'Click Create Key, give it a name, and copy it immediately — it\'s only shown once',
        'Paste the key (starts with sk-ant-) below',
      ],
      note: 'Groundwork uses Claude Haiku 4.5 — one of the fastest and most cost-efficient models available.',
    },
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
