'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { Badge } from '@/components/ui/badge'
import type { Exercise } from '@prisma/client'

interface ExerciseBlockProps {
  exercise: Exercise
  index: number
  lessonId: string
}

export default function ExerciseBlock({ exercise, index }: ExerciseBlockProps) {
  const [selected, setSelected] = useState<string | null>(null)
  const [openAnswer, setOpenAnswer] = useState('')
  const [feedback, setFeedback] = useState<{ correct: boolean; explanation: string } | null>(null)
  const [checking, setChecking] = useState(false)

  const raw = exercise.options
  const options: string[] | null = !raw ? null : Array.isArray(raw) ? raw : JSON.parse(raw as string)

  async function checkMultipleChoice(answer: string) {
    setSelected(answer)
    const correct = answer === exercise.correctAnswer
    setFeedback({ correct, explanation: exercise.explanation })
  }

  async function checkOpenEnded() {
    if (!openAnswer.trim()) return
    setChecking(true)

    const res = await fetch('/api/ai/grade', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        question: exercise.question,
        correctAnswer: exercise.correctAnswer,
        studentAnswer: openAnswer,
        explanation: exercise.explanation,
      }),
    })

    const data = await res.json()
    setChecking(false)
    setFeedback({ correct: data.score >= 70, explanation: data.feedback })
  }

  return (
    <div className="border border-zinc-200 rounded-xl p-5 space-y-4">
      <div className="flex items-start gap-3">
        <Badge variant="outline" className="shrink-0 mt-0.5">Q{index + 1}</Badge>
        <p className="text-sm font-medium leading-relaxed">{exercise.question}</p>
      </div>

      {exercise.type === 'MULTIPLE_CHOICE' && options && (
        <div className="space-y-2 pl-8">
          {options.map((opt) => {
            const isSelected = selected === opt
            const isCorrect = opt === exercise.correctAnswer
            let variant: 'outline' | 'default' | 'secondary' = 'outline'
            if (feedback && isSelected) variant = feedback.correct ? 'default' : 'secondary'
            return (
              <button
                key={opt}
                onClick={() => !feedback && checkMultipleChoice(opt)}
                disabled={!!feedback}
                className={`w-full text-left px-4 py-2.5 rounded-lg border text-sm transition-colors ${
                  feedback && isCorrect
                    ? 'border-green-500 bg-green-50 text-green-800'
                    : feedback && isSelected && !feedback.correct
                    ? 'border-red-300 bg-red-50 text-red-800'
                    : 'border-zinc-200 hover:border-zinc-400 hover:bg-zinc-50'
                }`}
              >
                {opt}
              </button>
            )
          })}
        </div>
      )}

      {exercise.type === 'OPEN_ENDED' && (
        <div className="pl-8 space-y-2">
          <Textarea
            value={openAnswer}
            onChange={(e) => setOpenAnswer(e.target.value)}
            placeholder="Write your answer..."
            rows={3}
            disabled={!!feedback}
            className="text-sm"
          />
          {!feedback && (
            <Button size="sm" onClick={checkOpenEnded} disabled={checking || !openAnswer.trim()}>
              {checking ? 'Checking...' : 'Submit answer'}
            </Button>
          )}
        </div>
      )}

      {feedback && (
        <div className={`pl-8 p-3 rounded-lg text-sm ${
          feedback.correct ? 'bg-green-50 text-green-800' : 'bg-amber-50 text-amber-800'
        }`}>
          <span className="font-medium">{feedback.correct ? 'Correct.' : 'Not quite.'}</span>{' '}
          {feedback.explanation}
        </div>
      )}
    </div>
  )
}
