import type { SubjectDef } from '../types'
import { languageExercises1 } from './language-exercises-1'
import { languageExercises2 } from './language-exercises-2'
import { languageExercises3 } from './language-exercises-3'
import { languageExercises4 } from './language-exercises-4'
import { languageExercises5 } from './language-exercises-5'
import { languageExercises6 } from './language-exercises-6'
import { languageAssessments } from './language-assessments'

const languageAndWriting: SubjectDef = {
  slug: 'language-and-writing',
  name: 'Language & Writing',
  description: 'How to communicate with clarity and power — reading, writing, grammar, rhetoric, and the craft of putting words together that actually work.',
  icon: '✍️',
  order: 12,
  courses: [
    {
      slug: 'reading-comprehension',
      name: 'Reading with Understanding',
      description: 'How to read actively, extract meaning, and engage critically with any text.',
      order: 1,
      estimatedHours: 3,
      assessment: languageAssessments['reading-comprehension'],
      modules: [
        {
          slug: 'active-reading',
          name: 'Active Reading',
          order: 1,
          lessons: [
            { slug: 'before-you-read', name: 'Before You Read: Previewing and Predicting', order: 1, exercises: languageExercises1['before-you-read'] },
            { slug: 'reading-actively', name: 'Annotating, Questioning, and Summarizing', order: 2, exercises: languageExercises1['reading-actively'] },
            { slug: 'main-idea-and-detail', name: 'Finding the Main Idea and Supporting Details', order: 3, exercises: languageExercises1['main-idea-and-detail'] },
            { slug: 'inference-and-implication', name: 'Reading Between the Lines: Inference', order: 4, exercises: languageExercises1['inference-and-implication'] },
          ],
        },
        {
          slug: 'critical-reading',
          name: 'Critical Reading',
          order: 2,
          lessons: [
            { slug: 'authors-purpose', name: "Author's Purpose and Point of View", order: 1, exercises: languageExercises1['authors-purpose'] },
            { slug: 'tone-and-voice', name: 'Tone, Voice, and Word Choice', order: 2, exercises: languageExercises1['tone-and-voice'] },
            { slug: 'evaluating-arguments', name: 'Evaluating Arguments in Texts', order: 3, exercises: languageExercises1['evaluating-arguments'] },
          ],
        },
      ],
    },
    {
      slug: 'grammar-and-mechanics',
      name: 'Grammar & Mechanics',
      description: 'The rules of written English — not to be pedantic, but to write clearly and be taken seriously.',
      order: 2,
      estimatedHours: 4,
      assessment: languageAssessments['grammar-and-mechanics'],
      modules: [
        {
          slug: 'sentences',
          name: 'Sentences and Structure',
          order: 1,
          lessons: [
            { slug: 'parts-of-speech', name: 'Parts of Speech: Nouns, Verbs, and Friends', order: 1, exercises: languageExercises2['parts-of-speech'] },
            { slug: 'sentence-structure', name: 'Sentence Structure: Simple, Compound, Complex', order: 2, exercises: languageExercises2['sentence-structure'] },
            { slug: 'fragments-and-run-ons', name: 'Fixing Fragments and Run-On Sentences', order: 3, exercises: languageExercises2['fragments-and-run-ons'] },
            { slug: 'subject-verb-agreement', name: 'Subject-Verb Agreement', order: 4, exercises: languageExercises2['subject-verb-agreement'] },
          ],
        },
        {
          slug: 'punctuation-and-usage',
          name: 'Punctuation and Usage',
          order: 2,
          lessons: [
            { slug: 'commas', name: 'Commas: When and Why to Use Them', order: 1, exercises: languageExercises2['commas'] },
            { slug: 'apostrophes', name: "Apostrophes: Possession and Contractions", order: 2, exercises: languageExercises2['apostrophes'] },
            { slug: 'common-errors', name: "Common Errors: Their/There/They're and Friends", order: 3, exercises: languageExercises2['common-errors'] },
            { slug: 'capitalization', name: 'Capitalization Rules', order: 4, exercises: languageExercises3['capitalization'] },
          ],
        },
      ],
    },
    {
      slug: 'writing-fundamentals',
      name: 'Writing Fundamentals',
      description: 'The core skills every writer needs — from generating ideas to producing clean, clear prose.',
      order: 3,
      estimatedHours: 4,
      prerequisites: ['grammar-and-mechanics'],
      assessment: languageAssessments['writing-fundamentals'],
      modules: [
        {
          slug: 'the-writing-process',
          name: 'The Writing Process',
          order: 1,
          lessons: [
            { slug: 'brainstorming', name: 'Brainstorming and Generating Ideas', order: 1, exercises: languageExercises3['brainstorming'] },
            { slug: 'drafting', name: 'Drafting: Getting Words on the Page', order: 2, exercises: languageExercises3['drafting'] },
            { slug: 'revising', name: 'Revising: Making It Better', order: 3, exercises: languageExercises3['revising'] },
            { slug: 'editing-and-proofreading', name: 'Editing and Proofreading', order: 4, exercises: languageExercises3['editing-and-proofreading'] },
          ],
        },
        {
          slug: 'paragraphs-and-structure',
          name: 'Paragraphs and Structure',
          order: 2,
          lessons: [
            { slug: 'the-paragraph', name: 'The Paragraph: Topic Sentence and Support', order: 1, exercises: languageExercises3['the-paragraph'] },
            { slug: 'transitions', name: 'Transitions: Connecting Ideas', order: 2, exercises: languageExercises3['transitions'] },
            { slug: 'introductions-and-conclusions', name: 'Introductions and Conclusions', order: 3, exercises: languageExercises4['introductions-and-conclusions'] },
          ],
        },
      ],
    },
    {
      slug: 'essay-writing',
      name: 'Essay Writing',
      description: 'How to construct a compelling argument in writing — the core skill of academic and professional communication.',
      order: 4,
      estimatedHours: 4,
      prerequisites: ['writing-fundamentals'],
      assessment: languageAssessments['essay-writing'],
      modules: [
        {
          slug: 'types-of-essays',
          name: 'Types of Essays',
          order: 1,
          lessons: [
            { slug: 'expository-essays', name: 'Expository Essays: Explaining Clearly', order: 1, exercises: languageExercises4['expository-essays'] },
            { slug: 'argumentative-essays', name: 'Argumentative Essays: Making a Case', order: 2, exercises: languageExercises4['argumentative-essays'] },
            { slug: 'narrative-essays', name: 'Narrative Essays: Telling Your Story', order: 3, exercises: languageExercises4['narrative-essays'] },
            { slug: 'descriptive-essays', name: 'Descriptive Essays: Showing, Not Telling', order: 4, exercises: languageExercises4['descriptive-essays'] },
          ],
        },
        {
          slug: 'research-and-evidence',
          name: 'Research and Evidence',
          order: 2,
          lessons: [
            { slug: 'finding-sources', name: 'Finding and Evaluating Sources', order: 1, exercises: languageExercises4['finding-sources'] },
            { slug: 'using-evidence', name: 'Using Evidence: Quoting, Paraphrasing, Summarizing', order: 2, exercises: languageExercises4['using-evidence'] },
            { slug: 'citations', name: 'Citations: Why and How to Cite', order: 3, exercises: languageExercises5['citations'] },
          ],
        },
      ],
    },
    {
      slug: 'practical-writing',
      name: 'Practical & Professional Writing',
      description: 'Writing for real life — emails, resumes, reports, and communicating effectively at work.',
      order: 5,
      estimatedHours: 3,
      prerequisites: ['writing-fundamentals'],
      assessment: languageAssessments['practical-writing'],
      modules: [
        {
          slug: 'workplace-writing',
          name: 'Workplace Writing',
          order: 1,
          lessons: [
            { slug: 'professional-email', name: 'Professional Emails: Clear, Concise, Effective', order: 1, exercises: languageExercises5['professional-email'] },
            { slug: 'resumes-and-cover-letters', name: 'Resumes and Cover Letters That Work', order: 2, exercises: languageExercises5['resumes-and-cover-letters'] },
            { slug: 'reports-and-memos', name: 'Reports, Memos, and Business Documents', order: 3, exercises: languageExercises5['reports-and-memos'] },
          ],
        },
        {
          slug: 'everyday-writing',
          name: 'Everyday Writing',
          order: 2,
          lessons: [
            { slug: 'writing-for-the-web', name: 'Writing for the Web and Social Media', order: 1, exercises: languageExercises5['writing-for-the-web'] },
            { slug: 'persuasive-writing', name: 'Persuasive Writing in Everyday Life', order: 2, exercises: languageExercises5['persuasive-writing'] },
            { slug: 'writing-with-clarity', name: 'Plain Language: Writing That Gets Read', order: 3, exercises: languageExercises5['writing-with-clarity'] },
          ],
        },
      ],
    },
    {
      slug: 'creative-writing',
      name: 'Creative Writing',
      description: 'The craft of fiction and creative nonfiction — storytelling, character, voice, and the tools of the trade.',
      order: 6,
      estimatedHours: 4,
      prerequisites: ['writing-fundamentals'],
      assessment: languageAssessments['creative-writing'],
      modules: [
        {
          slug: 'storytelling-craft',
          name: 'The Craft of Storytelling',
          order: 1,
          lessons: [
            { slug: 'story-structure', name: 'Story Structure: How Narratives Work', order: 1, exercises: languageExercises6['story-structure'] },
            { slug: 'character', name: 'Character: Creating People That Feel Real', order: 2, exercises: languageExercises6['character'] },
            { slug: 'setting-and-scene', name: 'Setting and Scene', order: 3, exercises: languageExercises6['setting-and-scene'] },
            { slug: 'dialogue', name: 'Dialogue: How Characters Speak', order: 4, exercises: languageExercises6['dialogue'] },
          ],
        },
        {
          slug: 'forms-and-voice',
          name: 'Forms and Voice',
          order: 2,
          lessons: [
            { slug: 'short-fiction', name: 'Writing Short Fiction', order: 1, exercises: languageExercises6['short-fiction'] },
            { slug: 'personal-essay', name: 'The Personal Essay and Creative Nonfiction', order: 2, exercises: languageExercises6['personal-essay'] },
            { slug: 'poetry-basics', name: 'Poetry: Form, Rhythm, and Image', order: 3, exercises: languageExercises6['poetry-basics'] },
            { slug: 'finding-your-voice', name: 'Finding Your Voice as a Writer', order: 4, exercises: languageExercises6['finding-your-voice'] },
          ],
        },
      ],
    },
  ],
}

export default languageAndWriting
