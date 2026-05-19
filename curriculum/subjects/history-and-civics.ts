import type { SubjectDef } from '../types'

const historyAndCivics: SubjectDef = {
  slug: 'history-and-civics',
  name: 'History & Civics',
  description: 'How governments work, how we got here, and why it matters. US and world history, civic participation, and how to think critically about the information you consume.',
  icon: '🏛️',
  order: 9,
  courses: [
    {
      slug: 'how-government-works',
      name: 'How Government Works',
      description: 'The structure of government, how laws are made, and how citizens participate in a democracy.',
      order: 1,
      estimatedHours: 3,
      modules: [
        {
          slug: 'us-government-structure',
          name: 'The Structure of US Government',
          order: 1,
          lessons: [
            { slug: 'three-branches', name: 'The Three Branches of Government', order: 1 },
            { slug: 'the-constitution', name: 'The Constitution: What It Is and Why It Matters', order: 2 },
            { slug: 'federalism', name: 'Federalism: Federal vs State vs Local', order: 3 },
            { slug: 'checks-and-balances', name: 'Checks and Balances', order: 4 },
          ],
        },
        {
          slug: 'how-laws-are-made',
          name: 'How Laws Are Made',
          order: 2,
          lessons: [
            { slug: 'congress-and-legislation', name: 'Congress and How a Bill Becomes a Law', order: 1 },
            { slug: 'the-courts', name: 'The Court System and Judicial Review', order: 2 },
            { slug: 'voting-and-elections', name: 'Voting, Elections, and Electoral Systems', order: 3 },
          ],
        },
      ],
    },
    {
      slug: 'us-history-foundations',
      name: 'US History: Foundations',
      description: 'From colonization through the Civil War — the events and ideas that shaped the United States.',
      order: 2,
      estimatedHours: 5,
      modules: [
        {
          slug: 'colonial-and-revolutionary',
          name: 'Colonial Era and Revolution',
          order: 1,
          lessons: [
            { slug: 'colonization', name: 'European Colonization of North America', order: 1 },
            { slug: 'causes-of-revolution', name: 'Causes of the American Revolution', order: 2 },
            { slug: 'revolution-and-founding', name: 'The Revolution and the Founding Documents', order: 3 },
            { slug: 'early-republic', name: 'The Early Republic: Challenges and Growth', order: 4 },
          ],
        },
        {
          slug: 'expansion-and-civil-war',
          name: 'Expansion and Civil War',
          order: 2,
          lessons: [
            { slug: 'westward-expansion', name: 'Westward Expansion and Manifest Destiny', order: 1 },
            { slug: 'slavery-and-sectional-crisis', name: 'Slavery and the Sectional Crisis', order: 2 },
            { slug: 'civil-war', name: 'The Civil War', order: 3 },
            { slug: 'reconstruction', name: 'Reconstruction: Promise and Failure', order: 4 },
          ],
        },
      ],
    },
    {
      slug: 'us-history-modern',
      name: 'US History: Modern Era',
      description: 'From the Gilded Age to the present — industrialization, the World Wars, Civil Rights, and America today.',
      order: 3,
      estimatedHours: 5,
      modules: [
        {
          slug: 'industrial-age-to-wwii',
          name: 'Industrialization Through World War II',
          order: 1,
          lessons: [
            { slug: 'gilded-age-and-progressive-era', name: 'The Gilded Age and Progressive Era', order: 1 },
            { slug: 'world-war-one', name: 'World War I and the Interwar Period', order: 2 },
            { slug: 'great-depression', name: 'The Great Depression and the New Deal', order: 3 },
            { slug: 'world-war-two', name: 'World War II', order: 4 },
          ],
        },
        {
          slug: 'postwar-to-present',
          name: 'Postwar America to the Present',
          order: 2,
          lessons: [
            { slug: 'cold-war', name: 'The Cold War', order: 1 },
            { slug: 'civil-rights-movement', name: 'The Civil Rights Movement', order: 2 },
            { slug: 'social-change-in-the-sixties', name: 'Social Change in the 1960s and 70s', order: 3 },
            { slug: 'america-in-the-21st-century', name: 'America Since 2000', order: 4 },
          ],
        },
      ],
    },
    {
      slug: 'world-history-ancient',
      name: 'World History: Ancient to Medieval',
      description: 'The origins of civilization through the medieval period — Mesopotamia, Greece, Rome, China, Islam, and Europe.',
      order: 4,
      estimatedHours: 5,
      modules: [
        {
          slug: 'ancient-civilizations',
          name: 'Ancient Civilizations',
          order: 1,
          lessons: [
            { slug: 'first-civilizations', name: 'The First Civilizations: Mesopotamia and Egypt', order: 1 },
            { slug: 'ancient-greece', name: 'Ancient Greece: Democracy and Philosophy', order: 2 },
            { slug: 'ancient-rome', name: 'Ancient Rome: Republic and Empire', order: 3 },
            { slug: 'ancient-asia', name: 'Ancient China and India', order: 4 },
          ],
        },
        {
          slug: 'medieval-world',
          name: 'The Medieval World',
          order: 2,
          lessons: [
            { slug: 'fall-of-rome-and-middle-ages', name: 'The Fall of Rome and the Middle Ages', order: 1 },
            { slug: 'islam-and-the-caliphates', name: 'The Rise of Islam and the Caliphates', order: 2 },
            { slug: 'feudalism-and-crusades', name: 'Feudalism and the Crusades', order: 3 },
            { slug: 'mongol-empire', name: 'The Mongol Empire and Global Trade', order: 4 },
          ],
        },
      ],
    },
    {
      slug: 'world-history-modern',
      name: 'World History: Modern Era',
      description: 'The Renaissance to today — revolutions, colonialism, industrialization, and the 20th century.',
      order: 5,
      estimatedHours: 5,
      modules: [
        {
          slug: 'early-modern',
          name: 'Early Modern World',
          order: 1,
          lessons: [
            { slug: 'renaissance-and-reformation', name: 'The Renaissance and Reformation', order: 1 },
            { slug: 'age-of-exploration', name: 'The Age of Exploration and Colonialism', order: 2 },
            { slug: 'scientific-revolution', name: 'The Scientific Revolution and Enlightenment', order: 3 },
            { slug: 'atlantic-revolutions', name: 'The Atlantic Revolutions', order: 4 },
          ],
        },
        {
          slug: 'modern-world',
          name: 'The Modern World',
          order: 2,
          lessons: [
            { slug: 'industrialization-and-imperialism', name: 'Industrialization and Imperialism', order: 1 },
            { slug: 'world-wars', name: 'World War I and II: Global Conflict', order: 2 },
            { slug: 'decolonization', name: 'Decolonization and the Cold War', order: 3 },
            { slug: 'globalization', name: 'Globalization and the 21st Century World', order: 4 },
          ],
        },
      ],
    },
    {
      slug: 'media-literacy',
      name: 'Media Literacy & Critical Thinking',
      description: 'How to evaluate information, identify bias, spot misinformation, and think clearly in a noisy information environment.',
      order: 6,
      estimatedHours: 3,
      modules: [
        {
          slug: 'evaluating-information',
          name: 'Evaluating Information',
          order: 1,
          lessons: [
            { slug: 'how-media-works', name: 'How News Media Works and Makes Money', order: 1 },
            { slug: 'identifying-bias', name: 'Identifying Bias in Sources', order: 2 },
            { slug: 'spotting-misinformation', name: 'Misinformation, Disinformation, and How to Spot Them', order: 3 },
          ],
        },
        {
          slug: 'critical-thinking',
          name: 'Critical Thinking',
          order: 2,
          lessons: [
            { slug: 'logical-fallacies', name: 'Common Logical Fallacies', order: 1 },
            { slug: 'evaluating-sources', name: 'How to Evaluate a Source', order: 2 },
            { slug: 'forming-your-own-views', name: 'Forming Your Own Views from Evidence', order: 3 },
          ],
        },
      ],
    },
  ],
}

export default historyAndCivics
