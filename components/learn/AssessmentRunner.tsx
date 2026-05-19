'use client'

import { useState, useEffect, useCallback } from 'react'
import { Button } from '@/components/ui/button'
import { LinkButton } from '@/components/ui/link-button'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { Textarea } from '@/components/ui/textarea'
import { toast } from 'sonner'
import type { AssessmentQuestion } from '@prisma/client'

interface AssessmentRunnerProps {
  assessment: {
    id: string
    title: string
    passingScore: number
    timeLimitMin: number | null
    questions: AssessmentQuestion[]
    courseName: string
    courseSlug: string
    subjectSlug: string
  }
  alreadyPassed: boolean
}

type Result = { score: number; passed: boolean; verificationCode?: string }

export default function AssessmentRunner({ assessment, alreadyPassed }: AssessmentRunnerProps) {
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [submitting, setSubmitting] = useState(false)
  const [result, setResult] = useState<Result | null>(null)
  const [timeLeft, setTimeLeft] = useState(assessment.timeLimitMin ? assessment.timeLimitMin * 60 : null)

  const submit = useCallback(async () => {
    setSubmitting(true)
    const res = await fetch('/api/assessment', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ assessmentId: assessment.id, answers }),
    })
    const data = await res.json()
    setSubmitting(false)
    if (!res.ok) { toast.error('Submission failed'); return }
    setResult({ score: data.score, passed: data.passed, verificationCode: data.certificate?.verificationCode })
  }, [assessment.id, answers])

  useEffect(() => {
    if (!timeLeft) return
    if (timeLeft <= 0) { submit(); return }
    const t = setTimeout(() => setTimeLeft((prev) => (prev ?? 0) - 1), 1000)
    return () => clearTimeout(t)
  }, [timeLeft, submit])

  if (alreadyPassed && !result) {
    return (
      <div className="max-w-lg mx-auto text-center space-y-4 py-16">
        <p className="text-4xl">🎓</p>
        <h1 className="text-2xl font-bold">You already passed this assessment!</h1>
        <p className="text-zinc-500">Your certificate has been issued.</p>
        <LinkButton href="/dashboard">Go to dashboard</LinkButton>
      </div>
    )
  }

  if (result) {
    return (
      <div className="max-w-lg mx-auto text-center space-y-6 py-16">
        <p className="text-5xl">{result.passed ? '🎓' : '📚'}</p>
        <h1 className="text-2xl font-bold">{result.passed ? 'You passed!' : 'Not quite yet'}</h1>
        <p className="text-zinc-500">
          You scored <strong>{result.score}%</strong>. Passing is {assessment.passingScore}%.
        </p>
        {result.passed && result.verificationCode && (
          <div className="space-y-3">
            <p className="text-zinc-600">Your free certificate has been issued.</p>
            <LinkButton href={`/certificates/verify/${result.verificationCode}`}>View certificate</LinkButton>
          </div>
        )}
        {!result.passed && (
          <div className="space-y-3">
            <p className="text-zinc-500">Review the course material and try again whenever you&apos;re ready.</p>
            <LinkButton href={`/learn/${assessment.subjectSlug}/${assessment.courseSlug}`} variant="outline">
              Back to course
            </LinkButton>
          </div>
        )}
      </div>
    )
  }

  const answered = Object.keys(answers).length
  const total = assessment.questions.length

  return (
    <div className="max-w-2xl space-y-8">
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-2xl font-bold">{assessment.title}</h1>
          <p className="text-zinc-500 text-sm mt-1">Pass with {assessment.passingScore}% to earn your free certificate</p>
        </div>
        {timeLeft !== null && (
          <Badge variant={timeLeft < 120 ? 'destructive' : 'secondary'}>
            {Math.floor(timeLeft / 60)}:{String(timeLeft % 60).padStart(2, '0')}
          </Badge>
        )}
      </div>

      <Progress value={(answered / total) * 100} className="h-1.5" />
      <p className="text-xs text-zinc-400">{answered}/{total} answered</p>

      <div className="space-y-8">
        {assessment.questions.map((q, i) => {
          const options = q.options as string[] | null
          return (
            <div key={q.id} className="space-y-3">
              <p className="font-medium text-sm">
                <span className="text-zinc-400 mr-2">{i + 1}.</span>{q.question}
              </p>
              {q.type === 'MULTIPLE_CHOICE' && options && (
                <div className="space-y-2 pl-5">
                  {options.map((opt) => (
                    <button
                      key={opt}
                      onClick={() => setAnswers((prev) => ({ ...prev, [q.id]: opt }))}
                      className={`w-full text-left px-4 py-2.5 rounded-lg border text-sm transition-colors ${
                        answers[q.id] === opt ? 'border-zinc-900 bg-zinc-900 text-white' : 'border-zinc-200 hover:border-zinc-400'
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              )}
              {q.type === 'OPEN_ENDED' && (
                <Textarea
                  className="ml-5 text-sm"
                  rows={3}
                  placeholder="Your answer..."
                  value={answers[q.id] ?? ''}
                  onChange={(e) => setAnswers((prev) => ({ ...prev, [q.id]: e.target.value }))}
                />
              )}
            </div>
          )
        })}
      </div>

      <Button onClick={submit} disabled={submitting} size="lg" className="w-full">
        {submitting ? 'Submitting...' : 'Submit assessment'}
      </Button>
    </div>
  )
}
