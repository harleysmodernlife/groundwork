import type { SubjectDef } from '../types'

const healthAndWellness: SubjectDef = {
  slug: 'health-and-wellness',
  name: 'Health & Wellness',
  description: 'How the human body works, how to keep it healthy, how to respond when something goes wrong, and how to understand the healthcare system you have to navigate.',
  icon: '🏥',
  order: 6,
  courses: [
    {
      slug: 'human-body',
      name: 'The Human Body: Anatomy & Physiology',
      description: 'How your body\'s major systems work — from cells to organs to the whole system.',
      order: 1,
      estimatedHours: 5,
      modules: [
        {
          slug: 'cells-and-tissues',
          name: 'Cells and Tissues',
          order: 1,
          lessons: [
            { slug: 'cell-basics', name: 'The Cell: Basic Unit of Life', order: 1 },
            { slug: 'tissues-and-organs', name: 'Tissues, Organs, and Organ Systems', order: 2 },
            { slug: 'homeostasis', name: 'Homeostasis: How the Body Stays Balanced', order: 3 },
          ],
        },
        {
          slug: 'major-body-systems',
          name: 'Major Body Systems',
          order: 2,
          lessons: [
            { slug: 'cardiovascular-system', name: 'The Cardiovascular System: Heart and Blood', order: 1 },
            { slug: 'respiratory-system', name: 'The Respiratory System: Lungs and Breathing', order: 2 },
            { slug: 'digestive-system', name: 'The Digestive System', order: 3 },
            { slug: 'nervous-system', name: 'The Nervous System: Brain and Nerves', order: 4 },
            { slug: 'musculoskeletal-system', name: 'Muscles and Bones', order: 5 },
            { slug: 'immune-system', name: 'The Immune System', order: 6 },
          ],
        },
      ],
    },
    {
      slug: 'nutrition-and-diet',
      name: 'Nutrition & Eating Well',
      description: 'What food actually does in your body, what a healthy diet looks like, and how to eat well without spending a fortune.',
      order: 2,
      estimatedHours: 4,
      modules: [
        {
          slug: 'nutrition-fundamentals',
          name: 'Nutrition Fundamentals',
          order: 1,
          lessons: [
            { slug: 'macronutrients', name: 'Macronutrients: Protein, Carbs, and Fat', order: 1 },
            { slug: 'micronutrients', name: 'Micronutrients: Vitamins and Minerals', order: 2 },
            { slug: 'reading-food-labels', name: 'Reading Food Labels', order: 3 },
            { slug: 'calories-and-energy', name: 'Calories, Energy Balance, and Metabolism', order: 4 },
          ],
        },
        {
          slug: 'eating-in-practice',
          name: 'Eating Well in Practice',
          order: 2,
          lessons: [
            { slug: 'what-a-healthy-diet-looks-like', name: 'What a Healthy Diet Actually Looks Like', order: 1 },
            { slug: 'eating-on-a-budget', name: 'Eating Well on a Tight Budget', order: 2 },
            { slug: 'common-diet-myths', name: 'Common Diet Myths Debunked', order: 3 },
            { slug: 'special-dietary-needs', name: 'Special Dietary Considerations', order: 4 },
          ],
        },
      ],
    },
    {
      slug: 'mental-health-fundamentals',
      name: 'Mental Health Fundamentals',
      description: 'What mental health is, how common conditions work, how to take care of yourself, and how to get help.',
      order: 3,
      estimatedHours: 4,
      modules: [
        {
          slug: 'understanding-mental-health',
          name: 'Understanding Mental Health',
          order: 1,
          lessons: [
            { slug: 'what-is-mental-health', name: 'What Mental Health Is (and Isn\'t)', order: 1 },
            { slug: 'anxiety-and-depression', name: 'Anxiety and Depression: What They Are', order: 2 },
            { slug: 'trauma-and-stress', name: 'Trauma, Stress, and PTSD', order: 3 },
            { slug: 'mental-health-stigma', name: 'The Stigma Around Mental Health', order: 4 },
          ],
        },
        {
          slug: 'taking-care-of-yourself',
          name: 'Taking Care of Yourself',
          order: 2,
          lessons: [
            { slug: 'self-care-that-works', name: 'Self-Care That Actually Works', order: 1 },
            { slug: 'sleep-and-mental-health', name: 'Sleep and Mental Health', order: 2 },
            { slug: 'getting-professional-help', name: 'Getting Professional Help: Types of Therapy', order: 3 },
            { slug: 'helping-someone-else', name: 'How to Help Someone Else Who Is Struggling', order: 4 },
          ],
        },
      ],
    },
    {
      slug: 'first-aid-and-emergency-response',
      name: 'First Aid & Emergency Response',
      description: 'What to do in a medical emergency — the skills that can keep someone alive until help arrives.',
      order: 4,
      estimatedHours: 3,
      modules: [
        {
          slug: 'emergency-basics',
          name: 'Emergency Basics',
          order: 1,
          lessons: [
            { slug: 'assessing-an-emergency', name: 'Assessing an Emergency Scene', order: 1 },
            { slug: 'calling-for-help', name: 'Calling 911: What to Say and Do', order: 2 },
            { slug: 'cpr-basics', name: 'CPR: The Fundamentals', order: 3 },
            { slug: 'aed-use', name: 'AED Use', order: 4 },
          ],
        },
        {
          slug: 'common-emergencies',
          name: 'Common Emergencies',
          order: 2,
          lessons: [
            { slug: 'choking', name: 'Choking: The Heimlich Maneuver', order: 1 },
            { slug: 'bleeding-and-wounds', name: 'Controlling Bleeding and Wound Care', order: 2 },
            { slug: 'burns-and-injuries', name: 'Burns, Fractures, and Sprains', order: 3 },
            { slug: 'overdose-and-poisoning', name: 'Overdose and Poisoning Response', order: 4 },
          ],
        },
      ],
    },
    {
      slug: 'fitness-and-exercise',
      name: 'Fitness & Exercise Science',
      description: 'How exercise affects the body, how to build a sustainable fitness habit, and what the evidence actually says.',
      order: 5,
      estimatedHours: 3,
      modules: [
        {
          slug: 'exercise-fundamentals',
          name: 'Exercise Fundamentals',
          order: 1,
          lessons: [
            { slug: 'why-exercise-matters', name: 'Why Exercise Matters Beyond Weight Loss', order: 1 },
            { slug: 'cardio-vs-strength', name: 'Cardiovascular vs Strength Training', order: 2 },
            { slug: 'progressive-overload', name: 'Progressive Overload: How Fitness Actually Improves', order: 3 },
          ],
        },
        {
          slug: 'building-a-routine',
          name: 'Building a Routine',
          order: 2,
          lessons: [
            { slug: 'designing-a-workout-plan', name: 'Designing a Workout Plan', order: 1 },
            { slug: 'recovery-and-rest', name: 'Recovery, Rest, and Why Rest Days Matter', order: 2 },
            { slug: 'exercise-without-a-gym', name: 'Staying Active Without a Gym Membership', order: 3 },
          ],
        },
      ],
    },
    {
      slug: 'navigating-healthcare',
      name: 'Navigating the Healthcare System',
      description: 'How to actually use the healthcare system — insurance, doctors, prescriptions, and advocating for yourself.',
      order: 6,
      estimatedHours: 3,
      modules: [
        {
          slug: 'healthcare-basics',
          name: 'Healthcare Basics',
          order: 1,
          lessons: [
            { slug: 'primary-care-and-specialists', name: 'Primary Care, Specialists, and When to See Each', order: 1 },
            { slug: 'understanding-your-insurance', name: 'Understanding Your Health Insurance', order: 2 },
            { slug: 'prescriptions-and-medications', name: 'Prescriptions, Generic Drugs, and Medication Safety', order: 3 },
          ],
        },
        {
          slug: 'being-your-own-advocate',
          name: 'Being Your Own Advocate',
          order: 2,
          lessons: [
            { slug: 'medical-records', name: 'Your Medical Records and Your Rights', order: 1 },
            { slug: 'second-opinions', name: 'When and How to Get a Second Opinion', order: 2 },
            { slug: 'medical-billing', name: 'Medical Billing: How to Read and Fight Bills', order: 3 },
          ],
        },
      ],
    },
  ],
}

export default healthAndWellness
