'use client'

import { useRef, useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { toast } from 'sonner'

interface Message { role: 'user' | 'assistant'; content: string }

interface TutorPanelProps {
  lessonId: string
  lessonName: string
  onClose: () => void
}

export default function TutorPanel({ lessonId, lessonName, onClose }: TutorPanelProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: `I'm your tutor for "${lessonName}". What questions do you have, or would you like me to check your understanding of something?`,
    },
  ])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const bottomRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  async function send() {
    const text = input.trim()
    if (!text || loading) return

    const userMsg: Message = { role: 'user', content: text }
    const updated = [...messages, userMsg]
    setMessages(updated)
    setInput('')
    setLoading(true)

    const res = await fetch('/api/ai/tutor', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ messages: updated, lessonId }),
    })

    if (res.status === 429) {
      toast.error('Daily AI limit reached. Set up your own API key in Settings for unlimited access.')
      setLoading(false)
      return
    }

    if (!res.ok || !res.body) {
      toast.error('Tutor unavailable right now')
      setLoading(false)
      return
    }

    const reader = res.body.getReader()
    const decoder = new TextDecoder()
    let reply = ''

    setMessages((prev) => [...prev, { role: 'assistant', content: '' }])

    while (true) {
      const { done, value } = await reader.read()
      if (done) break
      reply += decoder.decode(value)
      setMessages((prev) => {
        const copy = [...prev]
        copy[copy.length - 1] = { role: 'assistant', content: reply }
        return copy
      })
    }

    setLoading(false)
  }

  function handleKey(e: React.KeyboardEvent) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      send()
    }
  }

  return (
    <div className="fixed right-0 top-0 h-full w-96 bg-white border-l border-zinc-200 shadow-xl z-40 flex flex-col">
      <div className="flex items-center justify-between px-4 py-3 border-b border-zinc-200">
        <div>
          <p className="font-semibold text-sm">AI Tutor</p>
          <p className="text-xs text-zinc-400">{lessonName}</p>
        </div>
        <button onClick={onClose} className="text-zinc-400 hover:text-zinc-700 text-lg leading-none">×</button>
      </div>

      <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4">
        {messages.map((msg, i) => (
          <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[85%] rounded-xl px-3 py-2 text-sm leading-relaxed ${
              msg.role === 'user'
                ? 'bg-zinc-900 text-white'
                : 'bg-zinc-100 text-zinc-800'
            }`}>
              {msg.content || <span className="text-zinc-400 animate-pulse">...</span>}
            </div>
          </div>
        ))}
        <div ref={bottomRef} />
      </div>

      <div className="px-4 py-3 border-t border-zinc-200 flex gap-2">
        <Textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKey}
          placeholder="Ask a question... (Enter to send)"
          className="resize-none text-sm"
          rows={2}
          disabled={loading}
        />
        <Button onClick={send} disabled={loading || !input.trim()} className="self-end">
          Send
        </Button>
      </div>
    </div>
  )
}
