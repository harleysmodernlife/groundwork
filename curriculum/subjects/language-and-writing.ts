import type { SubjectDef } from '../types'

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
      modules: [
        {
          slug: 'active-reading',
          name: 'Active Reading',
          order: 1,
          lessons: [
            { slug: 'before-you-read', name: 'Before You Read: Previewing and Predicting', order: 1 },
            { slug: 'reading-actively', name: 'Annotating, Questioning, and Summarizing', order: 2 },
            { slug: 'main-idea-and-detail', name: 'Finding the Main Idea and Supporting Details', order: 3 },
            { slug: 'inference-and-implication', name: 'Reading Between the Lines: Inference', order: 4 },
          ],
        },
        {
          slug: 'critical-reading',
          name: 'Critical Reading',
          order: 2,
          lessons: [
            { slug: 'authors-purpose', name: "Author's Purpose and Point of View", order: 1 },
            { slug: 'tone-and-voice', name: 'Tone, Voice, and Word Choice', order: 2 },
            { slug: 'evaluating-arguments', name: 'Evaluating Arguments in Texts', order: 3 },
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
      modules: [
        {
          slug: 'sentences',
          name: 'Sentences and Structure',
          order: 1,
          lessons: [
            { slug: 'parts-of-speech', name: 'Parts of Speech: Nouns, Verbs, and Friends', order: 1 },
            { slug: 'sentence-structure', name: 'Sentence Structure: Simple, Compound, Complex', order: 2 },
            { slug: 'fragments-and-run-ons', name: 'Fixing Fragments and Run-On Sentences', order: 3 },
            { slug: 'subject-verb-agreement', name: 'Subject-Verb Agreement', order: 4 },
          ],
        },
        {
          slug: 'punctuation-and-usage',
          name: 'Punctuation and Usage',
          order: 2,
          lessons: [
            { slug: 'commas', name: 'Commas: When and Why to Use Them', order: 1 },
            { slug: 'apostrophes', name: "Apostrophes: Possession and Contractions", order: 2 },
            { slug: 'common-errors', name: "Common Errors: Their/There/They're and Friends", order: 3 },
            { slug: 'capitalization', name: 'Capitalization Rules', order: 4 },
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
      modules: [
        {
          slug: 'the-writing-process',
          name: 'The Writing Process',
          order: 1,
          lessons: [
            { slug: 'brainstorming', name: 'Brainstorming and Generating Ideas', order: 1 },
            { slug: 'drafting', name: 'Drafting: Getting Words on the Page', order: 2 },
            { slug: 'revising', name: 'Revising: Making It Better', order: 3 },
            { slug: 'editing-and-proofreading', name: 'Editing and Proofreading', order: 4 },
          ],
        },
        {
          slug: 'paragraphs-and-structure',
          name: 'Paragraphs and Structure',
          order: 2,
          lessons: [
            { slug: 'the-paragraph', name: 'The Paragraph: Topic Sentence and Support', order: 1 },
            { slug: 'transitions', name: 'Transitions: Connecting Ideas', order: 2 },
            { slug: 'introductions-and-conclusions', name: 'Introductions and Conclusions', order: 3 },
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
      modules: [
        {
          slug: 'types-of-essays',
          name: 'Types of Essays',
          order: 1,
          lessons: [
            { slug: 'expository-essays', name: 'Expository Essays: Explaining Clearly', order: 1 },
            { slug: 'argumentative-essays', name: 'Argumentative Essays: Making a Case', order: 2 },
            { slug: 'narrative-essays', name: 'Narrative Essays: Telling Your Story', order: 3 },
            { slug: 'descriptive-essays', name: 'Descriptive Essays: Showing, Not Telling', order: 4 },
          ],
        },
        {
          slug: 'research-and-evidence',
          name: 'Research and Evidence',
          order: 2,
          lessons: [
            { slug: 'finding-sources', name: 'Finding and Evaluating Sources', order: 1 },
            { slug: 'using-evidence', name: 'Using Evidence: Quoting, Paraphrasing, Summarizing', order: 2 },
            { slug: 'citations', name: 'Citations: Why and How to Cite', order: 3 },
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
      modules: [
        {
          slug: 'workplace-writing',
          name: 'Workplace Writing',
          order: 1,
          lessons: [
            { slug: 'professional-email', name: 'Professional Emails: Clear, Concise, Effective', order: 1 },
            { slug: 'resumes-and-cover-letters', name: 'Resumes and Cover Letters That Work', order: 2 },
            { slug: 'reports-and-memos', name: 'Reports, Memos, and Business Documents', order: 3 },
          ],
        },
        {
          slug: 'everyday-writing',
          name: 'Everyday Writing',
          order: 2,
          lessons: [
            { slug: 'writing-for-the-web', name: 'Writing for the Web and Social Media', order: 1 },
            { slug: 'persuasive-writing', name: 'Persuasive Writing in Everyday Life', order: 2 },
            { slug: 'writing-with-clarity', name: 'Plain Language: Writing That Gets Read', order: 3 },
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
      modules: [
        {
          slug: 'storytelling-craft',
          name: 'The Craft of Storytelling',
          order: 1,
          lessons: [
            { slug: 'story-structure', name: 'Story Structure: How Narratives Work', order: 1 },
            { slug: 'character', name: 'Character: Creating People That Feel Real', order: 2 },
            { slug: 'setting-and-scene', name: 'Setting and Scene', order: 3 },
            { slug: 'dialogue', name: 'Dialogue: How Characters Speak', order: 4 },
          ],
        },
        {
          slug: 'forms-and-voice',
          name: 'Forms and Voice',
          order: 2,
          lessons: [
            { slug: 'short-fiction', name: 'Writing Short Fiction', order: 1 },
            { slug: 'personal-essay', name: 'The Personal Essay and Creative Nonfiction', order: 2 },
            { slug: 'poetry-basics', name: 'Poetry: Form, Rhythm, and Image', order: 3 },
            { slug: 'finding-your-voice', name: 'Finding Your Voice as a Writer', order: 4 },
          ],
        },
      ],
    },
  ],
}

export default languageAndWriting
