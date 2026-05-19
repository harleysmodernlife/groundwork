export interface ExerciseDef {
  question: string
  type: 'MULTIPLE_CHOICE' | 'OPEN_ENDED'
  options?: string[]
  correctAnswer: string
  explanation: string
  order: number
}

export interface AssessmentQuestionDef {
  question: string
  type: 'MULTIPLE_CHOICE' | 'OPEN_ENDED'
  options?: string[]
  correctAnswer: string
  explanation: string
  points: number
  order: number
}

export interface AssessmentDef {
  title: string
  passingScore: number
  timeLimitMin?: number
  questions: AssessmentQuestionDef[]
}

export interface LessonDef {
  slug: string
  name: string
  order: number
  exercises?: ExerciseDef[]
}

export interface ModuleDef {
  slug: string
  name: string
  order: number
  lessons: LessonDef[]
}

export interface CourseDef {
  slug: string
  name: string
  description: string
  order: number
  estimatedHours: number
  modules: ModuleDef[]
  assessment?: AssessmentDef
}

export interface SubjectDef {
  slug: string
  name: string
  description: string
  icon: string
  order: number
  courses: CourseDef[]
}
