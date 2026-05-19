'use client'

import { useState } from 'react'
import Link from 'next/link'
import ReactMarkdown from 'react-markdown'
import { Button } from '@/components/ui/button'
import { LinkButton } from '@/components/ui/link-button'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import TutorPanel from '@/components/ai/TutorPanel'
import ExerciseBlock from '@/components/learn/ExerciseBlock'
import { toast } from 'sonner'
import type { Exercise } from '@prisma/client'

interface LessonPlayerProps {
  lesson: {
    id: string
    name: string
    rawContent: string
    exercises: Exercise[]
    isCompleted: boolean
    courseSlug: string
    subjectSlug: string
    courseName: string
    subjectName: string
  }
  prev: { slug: string; name: string } | null
  next: { slug: string; name: string } | null
}

export default function LessonPlayer({ lesson, prev, next }: LessonPlayerProps) {
  const [completed, setCompleted] = useState(lesson.isCompleted)
  const [tutorOpen, setTutorOpen] = useState(false)
  const [marking, setMarking] = useState(false)

  const basePath = `/learn/${lesson.subjectSlug}/${lesson.courseSlug}`

  async function markComplete() {
    setMarking(true)
    const res = await fetch('/api/progress', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ lessonId: lesson.id }),
    })
    setMarking(false)
    if (res.ok) { setCompleted(true); toast.success('Lesson complete!') }
    else toast.error('Could not save progress')
  }

  return (
    <div className="flex gap-8 relative">
      <div className="flex-1 min-w-0">
        <div className="mb-6">
          <Link href={basePath} className="text-xs text-zinc-400 hover:text-zinc-600 uppercase tracking-wide">
            ← {lesson.courseName}
          </Link>
          <div className="flex items-center gap-3 mt-2">
            <h1 className="text-2xl font-bold">{lesson.name}</h1>
            {completed && <Badge>Complete</Badge>}
          </div>
        </div>

        <article className="prose prose-zinc max-w-none mb-8">
          <ReactMarkdown>{lesson.rawContent}</ReactMarkdown>
        </article>

        <Separator className="my-8" />

        {lesson.exercises.length > 0 && (
          <div className="mb-8 space-y-6">
            <h2 className="text-lg font-semibold">Practice</h2>
            {lesson.exercises.map((ex, i) => (
              <ExerciseBlock key={ex.id} exercise={ex} index={i} lessonId={lesson.id} />
            ))}
          </div>
        )}

        <div className="flex items-center justify-between gap-4 pt-4">
          <div className="flex gap-2">
            {prev && <LinkButton href={`${basePath}/${prev.slug}`} variant="outline">← Previous</LinkButton>}
            {next && <LinkButton href={`${basePath}/${next.slug}`} variant="outline">Next →</LinkButton>}
          </div>
          {!completed ? (
            <Button onClick={markComplete} disabled={marking}>
              {marking ? 'Saving...' : 'Mark complete'}
            </Button>
          ) : next ? (
            <LinkButton href={`${basePath}/${next.slug}`}>Next lesson →</LinkButton>
          ) : (
            <LinkButton href={basePath}>Back to course</LinkButton>
          )}
        </div>
      </div>

      <button
        onClick={() => setTutorOpen(!tutorOpen)}
        className="fixed right-6 bottom-24 z-30 bg-zinc-900 text-white px-4 py-2.5 rounded-full shadow-lg text-sm font-medium hover:bg-zinc-700 transition-colors"
      >
        {tutorOpen ? 'Close tutor' : 'Ask tutor'}
      </button>

      {tutorOpen && (
        <TutorPanel lessonId={lesson.id} lessonName={lesson.name} onClose={() => setTutorOpen(false)} />
      )}
    </div>
  )
}
