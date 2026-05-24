'use client'

import { useEffect, useRef, useState, useMemo } from 'react'
import { Play, Pause, Square, SkipBack, SkipForward, Volume2 } from 'lucide-react'

function stripMarkdown(raw: string): string {
  return raw
    .replace(/```[\s\S]*?```/g, '')
    .replace(/`[^`]+`/g, '')
    .replace(/#{1,6}\s+/g, '')
    .replace(/\*\*([^*]+)\*\*/g, '$1')
    .replace(/\*([^*]+)\*/g, '$1')
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
    .replace(/^[-*+]\s+/gm, '')
    .replace(/^\d+\.\s+/gm, '')
    .replace(/^>\s+/gm, '')
    .replace(/\n{2,}/g, ' ')
    .trim()
}

function toChunks(text: string): { text: string; start: number }[] {
  const sentences = text.match(/[^.!?]*[.!?]+/g) ?? [text]
  const chunks: { text: string; start: number }[] = []
  let pos = 0
  let buf = ''
  let bufStart = 0
  for (const s of sentences) {
    if (buf.length + s.length > 220 && buf) {
      chunks.push({ text: buf.trim(), start: bufStart })
      bufStart = pos
      buf = s
    } else {
      if (!buf) bufStart = pos
      buf += s
    }
    pos += s.length
  }
  if (buf.trim()) chunks.push({ text: buf.trim(), start: bufStart })
  return chunks
}

function pickBestVoice(voices: SpeechSynthesisVoice[]): SpeechSynthesisVoice | null {
  const en = voices.filter((v) => v.lang.startsWith('en'))
  const pool = en.length > 0 ? en : voices
  return (
    pool.find((v) => !v.localService && v.lang === 'en-US') ??
    pool.find((v) => !v.localService) ??
    pool.find((v) => v.lang === 'en-US') ??
    pool[0] ??
    null
  )
}

export default function AudioPlayer({ text }: { text: string }) {
  const plain = useMemo(() => stripMarkdown(text), [text])
  const chunks = useMemo(() => toChunks(plain), [plain])

  const [status, setStatus] = useState<'idle' | 'playing' | 'paused'>('idle')
  const [supported, setSupported] = useState(true)
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([])
  const [voiceName, setVoiceName] = useState<string>('__auto__')

  const charPosRef = useRef(0)
  const activeRef = useRef(false)

  useEffect(() => {
    if (typeof window === 'undefined' || !window.speechSynthesis) {
      setSupported(false)
      return
    }
    function loadVoices() {
      const all = window.speechSynthesis.getVoices()
      if (!all.length) return
      const en = all.filter((v) => v.lang.startsWith('en'))
      const list = en.length > 0 ? en : all
      setVoices(list)
      setVoiceName((prev) => {
        if (prev !== '__auto__') return prev
        return pickBestVoice(list)?.name ?? '__auto__'
      })
    }
    loadVoices()
    window.speechSynthesis.addEventListener('voiceschanged', loadVoices)
    return () => {
      activeRef.current = false
      window.speechSynthesis.removeEventListener('voiceschanged', loadVoices)
      window.speechSynthesis.cancel()
    }
  }, [])

  function getVoice(): SpeechSynthesisVoice | null {
    if (voiceName === '__auto__') return null
    return window.speechSynthesis.getVoices().find((v) => v.name === voiceName) ?? null
  }

  function startFrom(charPos: number) {
    window.speechSynthesis.cancel()
    activeRef.current = true
    setStatus('playing')

    let startIdx = chunks.findIndex((_, i) => {
      const next = chunks[i + 1]
      return !next || charPos < next.start
    })
    if (startIdx < 0) startIdx = 0

    const voice = getVoice() // capture once before async

    // Chrome: needs a pause after cancel before speak() fires audio,
    // and needs resume() in case it's internally paused/stuck
    setTimeout(() => {
      if (!activeRef.current) return
      window.speechSynthesis.resume()

      // Queue all remaining chunks upfront — more reliable than chaining via onend
      for (let i = startIdx; i < chunks.length; i++) {
        const chunk = chunks[i]
        const utt = new SpeechSynthesisUtterance(chunk.text)
        utt.volume = 1.0
        utt.rate = 1.0
        utt.pitch = 1.0
        if (voice) utt.voice = voice

        const capturedI = i
        utt.onboundary = (e) => {
          charPosRef.current = chunk.start + e.charIndex
        }
        utt.onerror = (e) => {
          if (e.error === 'interrupted') return
          setStatus('idle')
        }
        if (capturedI === chunks.length - 1) {
          utt.onend = () => {
            if (!activeRef.current) return
            setStatus('idle')
            charPosRef.current = 0
          }
        }
        window.speechSynthesis.speak(utt)
      }
    }, 150)
  }

  function handlePlay() {
    if (status === 'paused') {
      window.speechSynthesis.resume()
      setStatus('playing')
    } else {
      startFrom(charPosRef.current)
    }
  }

  function handlePause() {
    window.speechSynthesis.pause()
    setStatus('paused')
  }

  function handleStop() {
    activeRef.current = false
    window.speechSynthesis.cancel()
    setStatus('idle')
    charPosRef.current = 0
  }

  function skip(seconds: number) {
    const newPos = Math.max(0, Math.min(plain.length - 10, charPosRef.current + Math.round(seconds * 13)))
    if (status !== 'idle') startFrom(newPos)
    else charPosRef.current = newPos
  }

  if (!supported) return null

  const iconBtn = [
    'flex items-center justify-center w-8 h-8 rounded-lg transition-colors',
    'text-zinc-500 hover:text-zinc-900 hover:bg-zinc-200',
    'dark:text-zinc-400 dark:hover:text-zinc-100 dark:hover:bg-zinc-600',
    'disabled:opacity-30 disabled:cursor-not-allowed',
  ].join(' ')

  const noVoices = voices.length === 0

  return (
    <div className="flex flex-wrap items-center gap-2 bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-xl px-3 py-2">
      <Volume2 size={14} className="text-zinc-400 dark:text-zinc-500" />
      <span className="text-xs text-zinc-400 dark:text-zinc-500 font-medium">Listen</span>

      <button className={iconBtn} onClick={() => skip(-10)} title="Back 10 seconds" disabled={noVoices || status === 'idle'}>
        <SkipBack size={15} />
      </button>

      {status === 'playing' ? (
        <button className={`${iconBtn} text-zinc-900 dark:text-zinc-100`} onClick={handlePause} title="Pause">
          <Pause size={17} />
        </button>
      ) : (
        <button
          className={`${iconBtn} text-zinc-900 dark:text-zinc-100`}
          onClick={handlePlay}
          title={status === 'paused' ? 'Resume' : 'Play'}
          disabled={noVoices}
        >
          <Play size={17} />
        </button>
      )}

      <button className={iconBtn} onClick={handleStop} title="Stop" disabled={status === 'idle'}>
        <Square size={13} />
      </button>

      <button className={iconBtn} onClick={() => skip(10)} title="Forward 10 seconds" disabled={noVoices || status === 'idle'}>
        <SkipForward size={15} />
      </button>

      {voices.length > 0 && (
        <select
          value={voiceName}
          onChange={(e) => {
            setVoiceName(e.target.value)
            if (status !== 'idle') startFrom(charPosRef.current)
          }}
          className="ml-1 text-xs rounded-md border border-zinc-200 dark:border-zinc-600 bg-white dark:bg-zinc-700 text-zinc-700 dark:text-zinc-200 px-2 py-1 max-w-[180px] truncate"
        >
          <option value="__auto__">Auto</option>
          {voices.map((v) => (
            <option key={v.name} value={v.name}>{v.name}</option>
          ))}
        </select>
      )}

      {noVoices && <span className="text-xs text-zinc-400 dark:text-zinc-500">Loading voices…</span>}

      {status !== 'idle' && (
        <span className="text-xs text-zinc-400 dark:text-zinc-500">
          {status === 'paused' ? 'Paused' : 'Playing...'}
        </span>
      )}
    </div>
  )
}
