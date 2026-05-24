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

export default function AudioPlayer({ text }: { text: string }) {
  const plain = useMemo(() => stripMarkdown(text), [text])
  const [status, setStatus] = useState<'idle' | 'playing' | 'paused'>('idle')
  const [supported, setSupported] = useState(true)
  const charPosRef = useRef(0)

  useEffect(() => {
    if (typeof window === 'undefined' || !window.speechSynthesis) {
      setSupported(false)
    }
    return () => { window.speechSynthesis?.cancel() }
  }, [])

  function speak(fromChar: number) {
    const slice = plain.slice(fromChar)
    if (!slice.trim()) return

    window.speechSynthesis.cancel()
    const utt = new SpeechSynthesisUtterance(slice)
    utt.rate = 1.0

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

  return (
    <div className="flex items-center gap-1 bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-xl px-3 py-2 w-fit">
      <Volume2 size={14} className="text-zinc-400 dark:text-zinc-500 mr-1" />
      <span className="text-xs text-zinc-400 dark:text-zinc-500 font-medium mr-1">Listen</span>

      <button className={iconBtn} onClick={() => skip(-10)} title="Back 10 seconds">
        <SkipBack size={15} />
      </button>

      {status === 'playing' ? (
        <button className={`${iconBtn} text-zinc-900 dark:text-zinc-100`} onClick={handlePause} title="Pause">
          <Pause size={17} />
        </button>
      ) : (
        <button className={`${iconBtn} text-zinc-900 dark:text-zinc-100`} onClick={handlePlay} title={status === 'paused' ? 'Resume' : 'Play'}>
          <Play size={17} />
        </button>
      )}

      <button className={iconBtn} onClick={handleStop} title="Stop" disabled={status === 'idle'}>
        <Square size={13} />
      </button>

      <button className={iconBtn} onClick={() => skip(10)} title="Forward 10 seconds">
        <SkipForward size={15} />
      </button>

      {status !== 'idle' && (
        <span className="ml-2 text-xs text-zinc-400 dark:text-zinc-500">
          {status === 'paused' ? 'Paused' : 'Playing...'}
        </span>
      )}
    </div>
  )
}
