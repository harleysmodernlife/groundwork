import type { SubjectDef } from '../types'
import { psychologyExercises1 } from './psychology-exercises-1'
import { psychologyExercises2 } from './psychology-exercises-2'
import { psychologyExercises3 } from './psychology-exercises-3'
import { psychologyExercises4 } from './psychology-exercises-4'
import { psychologyExercises5 } from './psychology-exercises-5'
import { psychologyExercises6 } from './psychology-exercises-6'
import { psychologyAssessments } from './psychology-assessments'

const psychology: SubjectDef = {
  slug: 'psychology',
  name: 'Psychology',
  description: 'How the human mind works — perception, memory, emotion, development, social behavior, and mental health. The science of why people do what they do.',
  icon: '🧠',
  order: 11,
  courses: [
    {
      slug: 'intro-to-psychology',
      name: 'Introduction to Psychology',
      description: 'The foundations of psychological science — its history, methods, and the major perspectives.',
      order: 1,
      estimatedHours: 4,
      assessment: psychologyAssessments['intro-to-psychology'],
      modules: [
        {
          slug: 'psychology-foundations',
          name: 'Foundations',
          order: 1,
          lessons: [
            { slug: 'what-is-psychology', name: 'What Psychology Is and Isn\'t', order: 1, exercises: psychologyExercises1['what-is-psychology'] },
            { slug: 'history-of-psychology', name: 'A Brief History of Psychology', order: 2, exercises: psychologyExercises1['history-of-psychology'] },
            { slug: 'research-methods', name: 'Research Methods in Psychology', order: 3, exercises: psychologyExercises1['research-methods'] },
            { slug: 'major-perspectives', name: 'Major Psychological Perspectives', order: 4, exercises: psychologyExercises1['major-perspectives'] },
          ],
        },
        {
          slug: 'biological-basis',
          name: 'The Biological Basis of Behavior',
          order: 2,
          lessons: [
            { slug: 'neurons-and-the-brain', name: 'Neurons and the Brain', order: 1, exercises: psychologyExercises1['neurons-and-the-brain'] },
            { slug: 'brain-structure-and-function', name: 'Brain Structures and Their Functions', order: 2, exercises: psychologyExercises1['brain-structure-and-function'] },
            { slug: 'genetics-and-behavior', name: 'Genetics, Environment, and Behavior', order: 3, exercises: psychologyExercises1['genetics-and-behavior'] },
          ],
        },
      ],
    },
    {
      slug: 'perception-and-cognition',
      name: 'Perception, Memory & Cognition',
      description: 'How we sense the world, how memory works, and how we think.',
      order: 2,
      estimatedHours: 4,
      prerequisites: ['intro-to-psychology'],
      assessment: psychologyAssessments['perception-and-cognition'],
      modules: [
        {
          slug: 'sensation-and-perception',
          name: 'Sensation and Perception',
          order: 1,
          lessons: [
            { slug: 'how-senses-work', name: 'How the Senses Work', order: 1, exercises: psychologyExercises2['how-senses-work'] },
            { slug: 'perception-vs-reality', name: 'Perception vs Reality: Illusions and Interpretation', order: 2, exercises: psychologyExercises2['perception-vs-reality'] },
            { slug: 'attention', name: 'Attention: What We Notice and Why', order: 3, exercises: psychologyExercises2['attention'] },
          ],
        },
        {
          slug: 'memory-and-thinking',
          name: 'Memory and Thinking',
          order: 2,
          lessons: [
            { slug: 'how-memory-works', name: 'How Memory Works: Encoding, Storage, Retrieval', order: 1, exercises: psychologyExercises2['how-memory-works'] },
            { slug: 'memory-failures', name: 'Why Memory Fails: Forgetting and False Memories', order: 2, exercises: psychologyExercises2['memory-failures'] },
            { slug: 'thinking-and-problem-solving', name: 'Thinking, Problem-Solving, and Creativity', order: 3, exercises: psychologyExercises2['thinking-and-problem-solving'] },
            { slug: 'language-and-thought', name: 'Language and Thought', order: 4, exercises: psychologyExercises2['language-and-thought'] },
          ],
        },
      ],
    },
    {
      slug: 'emotion-and-motivation',
      name: 'Emotion, Motivation & Personality',
      description: 'Why we feel what we feel, what drives us, and what makes people who they are.',
      order: 3,
      estimatedHours: 4,
      prerequisites: ['intro-to-psychology'],
      assessment: psychologyAssessments['emotion-and-motivation'],
      modules: [
        {
          slug: 'emotion-and-motivation',
          name: 'Emotion and Motivation',
          order: 1,
          lessons: [
            { slug: 'what-emotions-are', name: 'What Emotions Are and Where They Come From', order: 1, exercises: psychologyExercises3['what-emotions-are'] },
            { slug: 'theories-of-motivation', name: 'Theories of Motivation: Maslow and Beyond', order: 2, exercises: psychologyExercises3['theories-of-motivation'] },
            { slug: 'stress-and-coping', name: 'Stress and Coping', order: 3, exercises: psychologyExercises3['stress-and-coping'] },
          ],
        },
        {
          slug: 'personality',
          name: 'Personality',
          order: 2,
          lessons: [
            { slug: 'personality-theories', name: 'Major Personality Theories', order: 1, exercises: psychologyExercises3['personality-theories'] },
            { slug: 'personality-assessment', name: 'How Personality Is Measured', order: 2, exercises: psychologyExercises3['personality-assessment'] },
            { slug: 'nature-vs-nurture', name: 'Nature vs Nurture in Personality', order: 3, exercises: psychologyExercises3['nature-vs-nurture'] },
          ],
        },
      ],
    },
    {
      slug: 'developmental-psychology',
      name: 'Human Development',
      description: 'How people change across the lifespan — from infancy through old age.',
      order: 4,
      estimatedHours: 4,
      prerequisites: ['intro-to-psychology'],
      assessment: psychologyAssessments['developmental-psychology'],
      modules: [
        {
          slug: 'early-development',
          name: 'Early Development',
          order: 1,
          lessons: [
            { slug: 'prenatal-and-infant', name: 'Prenatal Development and Infancy', order: 1, exercises: psychologyExercises3['prenatal-and-infant'] },
            { slug: 'cognitive-development', name: 'Cognitive Development: Piaget\'s Stages', order: 2, exercises: psychologyExercises4['cognitive-development'] },
            { slug: 'attachment', name: 'Attachment Theory', order: 3, exercises: psychologyExercises4['attachment'] },
          ],
        },
        {
          slug: 'later-development',
          name: 'Later Development',
          order: 2,
          lessons: [
            { slug: 'childhood-and-adolescence', name: 'Childhood and Adolescence', order: 1, exercises: psychologyExercises4['childhood-and-adolescence'] },
            { slug: 'identity-formation', name: 'Identity, Erikson\'s Stages, and Self-Concept', order: 2, exercises: psychologyExercises4['identity-formation'] },
            { slug: 'adulthood-and-aging', name: 'Adulthood and Aging', order: 3, exercises: psychologyExercises4['adulthood-and-aging'] },
          ],
        },
      ],
    },
    {
      slug: 'social-psychology',
      name: 'Social Psychology',
      description: 'How other people affect our behavior — conformity, persuasion, prejudice, and group dynamics.',
      order: 5,
      estimatedHours: 4,
      prerequisites: ['intro-to-psychology'],
      assessment: psychologyAssessments['social-psychology'],
      modules: [
        {
          slug: 'social-influence',
          name: 'Social Influence',
          order: 1,
          lessons: [
            { slug: 'conformity', name: 'Conformity: The Asch Experiments', order: 1, exercises: psychologyExercises4['conformity'] },
            { slug: 'obedience', name: 'Obedience to Authority: Milgram', order: 2, exercises: psychologyExercises4['obedience'] },
            { slug: 'persuasion', name: 'Persuasion and Attitude Change', order: 3, exercises: psychologyExercises5['persuasion'] },
          ],
        },
        {
          slug: 'groups-and-prejudice',
          name: 'Groups and Prejudice',
          order: 2,
          lessons: [
            { slug: 'group-dynamics', name: 'Group Behavior and Groupthink', order: 1, exercises: psychologyExercises5['group-dynamics'] },
            { slug: 'prejudice-and-discrimination', name: 'Prejudice, Stereotypes, and Discrimination', order: 2, exercises: psychologyExercises5['prejudice-and-discrimination'] },
            { slug: 'reducing-prejudice', name: 'Reducing Prejudice and Intergroup Conflict', order: 3, exercises: psychologyExercises5['reducing-prejudice'] },
            { slug: 'prosocial-behavior', name: 'Helping, Altruism, and Prosocial Behavior', order: 4, exercises: psychologyExercises5['prosocial-behavior'] },
          ],
        },
      ],
    },
    {
      slug: 'abnormal-psychology',
      name: 'Psychological Disorders',
      description: 'Classification, causes, and treatment of major psychological disorders.',
      order: 6,
      estimatedHours: 4,
      prerequisites: ['intro-to-psychology'],
      assessment: psychologyAssessments['abnormal-psychology'],
      modules: [
        {
          slug: 'understanding-disorders',
          name: 'Understanding Psychological Disorders',
          order: 1,
          lessons: [
            { slug: 'what-is-abnormal', name: 'What Makes Behavior "Abnormal"?', order: 1, exercises: psychologyExercises5['what-is-abnormal'] },
            { slug: 'diagnosing-disorders', name: 'The DSM and Diagnosing Disorders', order: 2, exercises: psychologyExercises5['diagnosing-disorders'] },
            { slug: 'anxiety-disorders', name: 'Anxiety Disorders', order: 3, exercises: psychologyExercises6['anxiety-disorders'] },
            { slug: 'mood-disorders', name: 'Depression and Bipolar Disorder', order: 4, exercises: psychologyExercises6['mood-disorders'] },
          ],
        },
        {
          slug: 'treatment',
          name: 'Treatment',
          order: 2,
          lessons: [
            { slug: 'psychotherapy', name: 'Types of Psychotherapy', order: 1, exercises: psychologyExercises6['psychotherapy'] },
            { slug: 'medication', name: 'Psychiatric Medication: How It Works', order: 2, exercises: psychologyExercises6['medication'] },
            { slug: 'accessing-help', name: 'Accessing Mental Health Help', order: 3, exercises: psychologyExercises6['accessing-help'] },
          ],
        },
      ],
    },
  ],
}

export default psychology
