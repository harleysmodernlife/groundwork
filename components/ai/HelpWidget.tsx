'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'

interface Message { role: 'user' | 'assistant'; content: string }

export default function HelpWidget() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: "Hi! I'm the Groundwork Assistant. I can help you navigate the platform, find courses, set up your API key, or answer any questions about how things work. What do you need?" },
  ])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const bottomRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, open])

  async function send() {
    const text = input.trim()
    if (!text || loading) return

    const userMsg: Message = { role: 'user', content: text }
    const updated = [...messages, userMsg]
    setMessages(updated)
    setInput('')
    setLoading(true)

    const res = await fetch('/api/ai/help', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ messages: updated }),
    })

    if (res.status === 503 || res.status === 429) {
      const data = await res.json().catch(() => ({}))
      const isNoKey = data.error === 'no_free_model'
      setMessages((prev) => [
        ...prev,
        { role: 'assistant', content: isNoKey ? '__no_key__' : '__at_limit__' },
      ])
      setLoading(false)
      return
    }

    if (!res.ok || !res.body) {
      setMessages((prev) => [...prev, { role: 'assistant', content: '__error__' }])
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
    if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); send() }
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">
      {open && (
        <div className="w-80 bg-white border border-zinc-200 rounded-2xl shadow-xl flex flex-col overflow-hidden" style={{ height: '420px' }}>
          <div className="flex items-center justify-between px-4 py-3 border-b border-zinc-200 bg-zinc-900 text-white">
            <p className="font-semibold text-sm">Groundwork Assistant</p>
            <button onClick={() => setOpen(false)} className="text-zinc-300 hover:text-white text-lg leading-none">×</button>
          </div>
          <div className="flex-1 overflow-y-auto px-3 py-3 space-y-3">
            {messages.map((msg, i) => {
              if (msg.content === '__no_key__' || msg.content === '__at_limit__' || msg.content === '__error__') {
                const isNoKey = msg.content === '__no_key__'
                const isLimit = msg.content === '__at_limit__'
                return (
                  <div key={i} className="flex justify-start">
                    <div className="max-w-[85%] rounded-xl px-3 py-2 text-xs leading-relaxed bg-amber-50 border border-amber-200 text-amber-900 space-y-1">
                      <p className="font-medium">
                        {isNoKey ? 'No AI model available' : isLimit ? 'Daily limit reached' : 'Assistant unavailable'}
                      </p>
                      <p>
                        {isNoKey
                          ? 'No free AI tier is configured. Add your own API key and this assistant will use it.'
                          : isLimit
                          ? "You've hit today's free limit. Add your own API key for unlimited access."
                          : 'Something went wrong. Try again in a moment.'}
                      </p>
                      {(isNoKey || isLimit) && (
                        <Link href="/settings/api-key" className="block font-medium underline text-amber-800">
                          Add your API key →
                        </Link>
                      )}
                    </div>
                  </div>
                )
              }
              return (
                <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[85%] rounded-xl px-3 py-2 text-xs leading-relaxed ${
                    msg.role === 'user' ? 'bg-zinc-900 text-white' : 'bg-zinc-100 text-zinc-800'
                  }`}>
                    {msg.content || <span className="text-zinc-400 animate-pulse">...</span>}
                  </div>
                </div>
              )
            })}
            <div ref={bottomRef} />
          </div>
          <div className="px-3 py-2 border-t border-zinc-200 flex gap-2">
            <Textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKey}
              placeholder="Ask anything..."
              rows={1}
              className="resize-none text-xs"
              disabled={loading}
            />
            <Button size="sm" onClick={send} disabled={loading || !input.trim()} className="self-end">
              →
            </Button>
          </div>
        </div>
      )}
      <button
        onClick={() => setOpen(!open)}
        className="bg-zinc-900 text-white w-12 h-12 rounded-full shadow-lg flex items-center justify-center text-lg hover:bg-zinc-700 transition-colors"
      >
        {open ? '×' : '?'}
      </button>
    </div>
  )
}
