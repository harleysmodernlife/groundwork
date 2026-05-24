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

// ~130 wpm * ~6 chars/word / 60 seconds
const CHARS_PER_SEC = 13

function pickBestVoice(voices: SpeechSynthesisVoice[]): SpeechSynthesisVoice | null {
  const en = voices.filter((v) => v.lang.startsWith('en'))
  const pool = en.length > 0 ? en : voices
  // Prefer network/high-quality voices (localService=false) for Chrome
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
  const [status, setStatus] = useState<'idle' | 'playing' | 'paused'>('idle')
  const [supported, setSupported] = useState(true)
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([])
  const [voiceName, setVoiceName] = useState<string>('')
  const charPosRef = useRef(0)

  useEffect(() => {
    if (typeof window === 'undefined' || !window.speechSynthesis) {
      setSupported(false)
      return
    }

    function loadVoices() {
      const all = window.speechSynthesis.getVoices()
      if (all.length === 0) return
      const en = all.filter((v) => v.lang.startsWith('en'))
      const list = en.length > 0 ? en : all
      setVoices(list)
      setVoiceName((prev) => {
        if (prev) return prev // don't override if user already picked
        return pickBestVoice(list)?.name ?? ''
      })
    }

    loadVoices()
    window.speechSynthesis.addEventListener('voiceschanged', loadVoices)
    return () => {
      window.speechSynthesis.removeEventListener('voiceschanged', loadVoices)
      window.speechSynthesis.cancel()
    }
  }, [])

  function getVoice(): SpeechSynthesisVoice | undefined {
    return window.speechSynthesis.getVoices().find((v) => v.name === voiceName)
  }

  function speak(fromChar: number) {
    const slice = plain.slice(fromChar)
    if (!slice.trim()) return

    window.speechSynthesis.cancel()
    const utt = new SpeechSynthesisUtterance(slice)
    utt.rate = 1.0

    const voice = getVoice()
    if (voice) utt.voice = voice

    utt.onboundary = (e) => {
      charPosRef.current = fromChar + e.charIndex
    }
    utt.onend = () => {
      setStatus('idle')
      charPosRef.current = 0
    }
    utt.onerror = () => setStatus('idle')

    window.speechSynthesis.speak(utt)
    setStatus('playing')
  }

  function handlePlay() {
    if (status === 'paused') {
      window.speechSynthesis.resume()
      setStatus('playing')
    } else {
      speak(charPosRef.current)
    }
  }

  function handlePause() {
    window.speechSynthesis.pause()
    setStatus('paused')
  }

  function handleStop() {
    window.speechSynthesis.cancel()
    setStatus('idle')
    charPosRef.current = 0
  }

  function skip(seconds: number) {
    const offset = Math.round(seconds * CHARS_PER_SEC)
    const newPos = Math.max(0, Math.min(plain.length - 10, charPosRef.current + offset))
    charPosRef.current = newPos
    if (status !== 'idle') speak(newPos)
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

      <button className={iconBtn} onClick={() => skip(-10)} title="Back 10 seconds" disabled={noVoices}>
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

      <button className={iconBtn} onClick={() => skip(10)} title="Forward 10 seconds" disabled={noVoices}>
        <SkipForward size={15} />
      </button>

      {voices.length > 0 && (
        <select
          value={voiceName}
          onChange={(e) => {
            setVoiceName(e.target.value)
            if (status !== 'idle') speak(charPosRef.current)
          }}
          className="ml-1 text-xs rounded-md border border-zinc-200 dark:border-zinc-600 bg-white dark:bg-zinc-700 text-zinc-700 dark:text-zinc-200 px-2 py-1 max-w-[180px] truncate"
        >
          {voices.map((v) => (
            <option key={v.name} value={v.name}>
              {v.name}
            </option>
          ))}
        </select>
      )}

      {noVoices && (
        <span className="text-xs text-zinc-400 dark:text-zinc-500">Loading voices…</span>
      )}

      {status !== 'idle' && voices.length > 0 && (
        <span className="text-xs text-zinc-400 dark:text-zinc-500">
          {status === 'paused' ? 'Paused' : 'Playing...'}
        </span>
      )}
    </div>
  )
}
