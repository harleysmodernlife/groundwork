import type { SubjectDef } from '../types'

const artsAndCreativeSkills: SubjectDef = {
  slug: 'arts-and-creative-skills',
  name: 'Arts & Creative Skills',
  description: 'Making things — drawing, music, design, photography, and the creative process. Building the skills to express ideas visually and aesthetically.',
  icon: '🎨',
  order: 13,
  courses: [
    {
      slug: 'visual-art-fundamentals',
      name: 'Visual Art Fundamentals',
      description: 'The core principles of visual art — the elements and rules that underlie all visual expression.',
      order: 1,
      estimatedHours: 3,
      modules: [
        {
          slug: 'elements-of-art',
          name: 'Elements of Art',
          order: 1,
          lessons: [
            { slug: 'line-and-shape', name: 'Line, Shape, and Form', order: 1 },
            { slug: 'color-theory', name: 'Color Theory: The Color Wheel and Color Relationships', order: 2 },
            { slug: 'value-and-contrast', name: 'Value, Contrast, and Light', order: 3 },
            { slug: 'texture-and-space', name: 'Texture and Space', order: 4 },
          ],
        },
        {
          slug: 'principles-of-design',
          name: 'Principles of Design',
          order: 2,
          lessons: [
            { slug: 'composition', name: 'Composition: Arranging What You See', order: 1 },
            { slug: 'balance-and-rhythm', name: 'Balance, Rhythm, and Emphasis', order: 2 },
            { slug: 'unity-and-variety', name: 'Unity and Variety', order: 3 },
          ],
        },
      ],
    },
    {
      slug: 'drawing',
      name: 'Drawing',
      description: 'Learning to see and draw — from basic observation skills to rendering form and depth.',
      order: 2,
      estimatedHours: 5,
      prerequisites: ['visual-art-fundamentals'],
      modules: [
        {
          slug: 'drawing-basics',
          name: 'Drawing Basics',
          order: 1,
          lessons: [
            { slug: 'learning-to-see', name: 'Learning to See: Drawing What Is There', order: 1 },
            { slug: 'gesture-drawing', name: 'Gesture Drawing: Capturing Movement', order: 2 },
            { slug: 'contour-drawing', name: 'Contour Drawing and Line Quality', order: 3 },
          ],
        },
        {
          slug: 'form-and-rendering',
          name: 'Form and Rendering',
          order: 2,
          lessons: [
            { slug: 'basic-forms', name: 'Drawing Basic Forms: Spheres, Cubes, Cylinders', order: 1 },
            { slug: 'shading-and-light', name: 'Shading: Making Things Look Three-Dimensional', order: 2 },
            { slug: 'perspective', name: 'Perspective: One-Point and Two-Point', order: 3 },
            { slug: 'drawing-from-observation', name: 'Drawing from Observation', order: 4 },
          ],
        },
      ],
    },
    {
      slug: 'graphic-design',
      name: 'Graphic Design',
      description: 'Using visual elements to communicate — the design skills behind logos, layouts, and digital media.',
      order: 3,
      estimatedHours: 4,
      prerequisites: ['visual-art-fundamentals'],
      modules: [
        {
          slug: 'design-fundamentals',
          name: 'Design Fundamentals',
          order: 1,
          lessons: [
            { slug: 'typography', name: 'Typography: Choosing and Using Fonts', order: 1 },
            { slug: 'layout-and-grid', name: 'Layout and Grid Systems', order: 2 },
            { slug: 'color-in-design', name: 'Color in Design: Palette and Psychology', order: 3 },
          ],
        },
        {
          slug: 'applied-design',
          name: 'Applied Design',
          order: 2,
          lessons: [
            { slug: 'logo-design', name: 'Logo Design: Simple, Memorable, Effective', order: 1 },
            { slug: 'social-media-graphics', name: 'Designing for Social Media', order: 2 },
            { slug: 'print-vs-digital', name: 'Print vs Digital Design', order: 3 },
            { slug: 'design-tools-overview', name: 'Design Tools: An Overview', order: 4 },
          ],
        },
      ],
    },
    {
      slug: 'photography',
      name: 'Photography',
      description: 'Making great images — from understanding your camera to composing compelling shots.',
      order: 4,
      estimatedHours: 3,
      modules: [
        {
          slug: 'camera-basics',
          name: 'Camera Basics',
          order: 1,
          lessons: [
            { slug: 'how-cameras-work', name: 'How Cameras Work: Light, Lens, and Sensor', order: 1 },
            { slug: 'exposure-triangle', name: 'The Exposure Triangle: Aperture, Shutter, ISO', order: 2 },
            { slug: 'focus-and-depth', name: 'Focus and Depth of Field', order: 3 },
          ],
        },
        {
          slug: 'composition-and-craft',
          name: 'Composition and Craft',
          order: 2,
          lessons: [
            { slug: 'photo-composition', name: 'Composition: Rule of Thirds and Beyond', order: 1 },
            { slug: 'light-in-photography', name: 'Working with Light', order: 2 },
            { slug: 'editing-basics', name: 'Basic Photo Editing', order: 3 },
            { slug: 'finding-your-eye', name: 'Finding Your Photographic Eye', order: 4 },
          ],
        },
      ],
    },
    {
      slug: 'music-fundamentals',
      name: 'Music Fundamentals',
      description: 'How music works — reading, rhythm, melody, harmony, and the language of sound.',
      order: 5,
      estimatedHours: 4,
      modules: [
        {
          slug: 'music-theory-basics',
          name: 'Music Theory Basics',
          order: 1,
          lessons: [
            { slug: 'sound-and-pitch', name: 'Sound, Pitch, and the Musical Alphabet', order: 1 },
            { slug: 'rhythm-and-meter', name: 'Rhythm, Beat, and Meter', order: 2 },
            { slug: 'scales-and-keys', name: 'Scales and Keys', order: 3 },
            { slug: 'chords-and-harmony', name: 'Chords and Basic Harmony', order: 4 },
          ],
        },
        {
          slug: 'reading-music',
          name: 'Reading Music',
          order: 2,
          lessons: [
            { slug: 'reading-notation', name: 'Reading Standard Music Notation', order: 1 },
            { slug: 'time-signatures', name: 'Time Signatures and Note Values', order: 2 },
            { slug: 'ear-training', name: 'Ear Training: Recognizing What You Hear', order: 3 },
          ],
        },
      ],
    },
    {
      slug: 'creative-process',
      name: 'The Creative Process',
      description: 'How creativity actually works — developing ideas, overcoming blocks, building a practice, and thinking like a maker.',
      order: 6,
      estimatedHours: 2,
      modules: [
        {
          slug: 'how-creativity-works',
          name: 'How Creativity Works',
          order: 1,
          lessons: [
            { slug: 'what-is-creativity', name: 'What Creativity Is (and Isn\'t)', order: 1 },
            { slug: 'idea-generation', name: 'Generating Ideas: Techniques That Work', order: 2 },
            { slug: 'creative-blocks', name: 'Overcoming Creative Blocks', order: 3 },
          ],
        },
        {
          slug: 'building-a-practice',
          name: 'Building a Creative Practice',
          order: 2,
          lessons: [
            { slug: 'habit-and-routine', name: 'Building Creative Habits and Routines', order: 1 },
            { slug: 'feedback-and-critique', name: 'Giving and Receiving Critique', order: 2 },
            { slug: 'sharing-your-work', name: 'Sharing Your Work with the World', order: 3 },
          ],
        },
      ],
    },
  ],
}

export default artsAndCreativeSkills
