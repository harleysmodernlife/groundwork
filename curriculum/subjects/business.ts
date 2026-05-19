import type { SubjectDef } from '../types'

const business: SubjectDef = {
  slug: 'business',
  name: 'Business & Entrepreneurship',
  description: 'Everything you need to start, run, and grow a business. From legal structures to cash flow to sales — the real stuff.',
  icon: '🏢',
  order: 1,
  courses: [
    {
      slug: 'business-foundations',
      name: 'Business Foundations',
      description: 'What a business actually is, how to structure it legally, and how to get started without making the mistakes that kill most new businesses.',
      order: 1,
      estimatedHours: 3,
      modules: [
        {
          slug: 'what-is-a-business',
          name: 'What Is a Business?',
          order: 1,
          lessons: [
            {
              slug: 'defining-a-business',
              name: 'Defining a Business',
              order: 1,
              exercises: [
                {
                  question: 'Which of the following is NOT a requirement for something to be considered a business?',
                  type: 'MULTIPLE_CHOICE',
                  options: ['It provides a product or service', 'It must have at least 5 employees', 'It operates with the intent to generate value', 'It can exist as a one-person operation'],
                  correctAnswer: 'It must have at least 5 employees',
                  explanation: 'Businesses can be any size, including solo operations. What defines a business is the exchange of value, not its size.',
                  order: 1,
                },
                {
                  question: 'In your own words, explain the difference between a hobby and a business.',
                  type: 'OPEN_ENDED',
                  correctAnswer: 'A business operates with the consistent intent to generate profit or value in exchange for goods or services. A hobby may involve similar activities but without that consistent commercial intent or structure.',
                  explanation: 'The key distinction is intent and structure — businesses are built around consistently exchanging value for compensation.',
                  order: 2,
                },
              ],
            },
            {
              slug: 'business-structures',
              name: 'Business Structures: LLC, Sole Prop, and More',
              order: 2,
              exercises: [
                {
                  question: 'What is the main advantage of an LLC over a sole proprietorship?',
                  type: 'MULTIPLE_CHOICE',
                  options: ['LLCs pay less in taxes', 'LLCs protect your personal assets from business debts', 'LLCs are easier to set up', 'LLCs do not require any paperwork'],
                  correctAnswer: 'LLCs protect your personal assets from business debts',
                  explanation: 'The key benefit of an LLC is liability protection — if the business is sued or owes debt, your personal home, car, and savings are generally protected.',
                  order: 1,
                },
              ],
            },
            {
              slug: 'separating-finances',
              name: 'Separating Business and Personal Finances',
              order: 3,
              exercises: [
                {
                  question: 'Which of the following is a direct consequence of mixing personal and business finances?',
                  type: 'MULTIPLE_CHOICE',
                  options: ['Lower tax rates', 'Your LLC liability protection may be voided', 'Faster business growth', 'Better credit scores'],
                  correctAnswer: 'Your LLC liability protection may be voided',
                  explanation: 'Courts can "pierce the corporate veil" if you mix finances — meaning you lose the protection the LLC was supposed to provide.',
                  order: 1,
                },
              ],
            },
          ],
        },
        {
          slug: 'your-first-business-plan',
          name: 'Your First Business Plan',
          order: 2,
          lessons: [
            { slug: 'what-a-business-plan-actually-is', name: 'What a Business Plan Actually Is', order: 1 },
            { slug: 'defining-your-customer', name: 'Defining Your Customer', order: 2 },
            { slug: 'revenue-models', name: 'Revenue Models', order: 3 },
          ],
        },
      ],
      assessment: {
        title: 'Business Foundations Assessment',
        passingScore: 75,
        timeLimitMin: 30,
        questions: [
          { question: 'A sole proprietorship offers personal liability protection for the owner.', type: 'MULTIPLE_CHOICE', options: ['True', 'False'], correctAnswer: 'False', explanation: 'Sole proprietorships offer no liability protection — the owner is personally responsible for all business debts and legal issues.', points: 1, order: 1 },
          { question: 'Which business structure is typically best for a first-time solo business owner who wants liability protection without a lot of complexity?', type: 'MULTIPLE_CHOICE', options: ['Corporation', 'LLC', 'Sole Proprietorship', 'Partnership'], correctAnswer: 'LLC', explanation: 'An LLC offers liability protection with less complexity and cost than a corporation, making it the most common choice for solo entrepreneurs.', points: 1, order: 2 },
          { question: 'Explain in your own words why keeping business and personal finances separate matters.', type: 'OPEN_ENDED', correctAnswer: 'Mixing personal and business finances makes bookkeeping difficult, can invalidate your LLC liability protection, complicates taxes, and makes it hard to understand if your business is actually profitable.', explanation: 'Separation protects your legal status, simplifies taxes, and gives you a clear picture of business health.', points: 2, order: 3 },
        ],
      },
    },
    {
      slug: 'operations-and-finance',
      name: 'Operations & Finance',
      description: 'Cash flow, pricing, bookkeeping, and the numbers that determine whether your business lives or dies.',
      order: 2,
      estimatedHours: 4,
      modules: [
        {
          slug: 'cash-flow',
          name: 'Cash Flow',
          order: 1,
          lessons: [
            { slug: 'what-cash-flow-is', name: 'What Cash Flow Is (and Why It Kills Businesses)', order: 1 },
            { slug: 'reading-a-pl', name: 'Reading a Basic P&L', order: 2 },
            { slug: 'invoicing-and-getting-paid', name: 'Invoicing and Getting Paid', order: 3 },
          ],
        },
        {
          slug: 'pricing-for-profit',
          name: 'Pricing for Profit',
          order: 2,
          lessons: [
            { slug: 'cost-based-pricing', name: 'Cost-Based Pricing', order: 1 },
            { slug: 'value-based-pricing', name: 'Value-Based Pricing', order: 2 },
            { slug: 'pricing-mistakes', name: 'Common Pricing Mistakes', order: 3 },
          ],
        },
        {
          slug: 'bookkeeping-basics',
          name: 'Bookkeeping Basics',
          order: 3,
          lessons: [
            { slug: 'what-to-track', name: 'What to Track and Why', order: 1 },
            { slug: 'bookkeeping-tools', name: 'Tools and Software', order: 2 },
            { slug: 'working-with-accountant', name: 'Working with an Accountant', order: 3 },
          ],
        },
      ],
    },
    {
      slug: 'sales-and-marketing',
      name: 'Sales & Marketing',
      description: 'Finding customers, making the ask, and building a pipeline — without feeling like a used car salesman.',
      order: 3,
      estimatedHours: 4,
      modules: [
        {
          slug: 'finding-customers',
          name: 'Finding Customers',
          order: 1,
          lessons: [
            { slug: 'your-first-customer', name: 'Getting Your First Customer', order: 1 },
            { slug: 'ideal-customer-profile', name: 'Defining Your Ideal Customer', order: 2 },
            { slug: 'where-customers-are', name: 'Where Your Customers Actually Are', order: 3 },
          ],
        },
        {
          slug: 'sales-fundamentals',
          name: 'Sales Fundamentals',
          order: 2,
          lessons: [
            { slug: 'making-the-ask', name: 'Making the Ask', order: 1 },
            { slug: 'handling-objections', name: 'Handling Objections', order: 2 },
            { slug: 'follow-up', name: 'Follow-Up That Works', order: 3 },
          ],
        },
        {
          slug: 'basic-marketing',
          name: 'Basic Marketing',
          order: 3,
          lessons: [
            { slug: 'word-of-mouth', name: 'Word of Mouth and Referrals', order: 1 },
            { slug: 'online-presence', name: 'Building a Basic Online Presence', order: 2 },
            { slug: 'social-media-basics', name: 'Social Media Without Wasting Your Life', order: 3 },
          ],
        },
      ],
    },
    {
      slug: 'legal-basics',
      name: 'Legal Basics for Business',
      description: 'Contracts, intellectual property, liability, and when you actually need a lawyer.',
      order: 4,
      estimatedHours: 3,
      modules: [
        {
          slug: 'contracts',
          name: 'Contracts',
          order: 1,
          lessons: [
            { slug: 'what-makes-a-contract', name: 'What Makes a Contract Enforceable', order: 1 },
            { slug: 'reading-contracts', name: 'Reading a Contract Without a Law Degree', order: 2 },
            { slug: 'common-contract-mistakes', name: 'Common Contract Mistakes', order: 3 },
          ],
        },
        {
          slug: 'intellectual-property',
          name: 'Intellectual Property',
          order: 2,
          lessons: [
            { slug: 'trademarks', name: 'Trademarks: Protecting Your Name', order: 1 },
            { slug: 'copyright-basics', name: 'Copyright Basics', order: 2 },
            { slug: 'when-to-get-a-lawyer', name: 'When You Actually Need a Lawyer', order: 3 },
          ],
        },
      ],
    },
    {
      slug: 'taxes-for-business',
      name: 'Taxes for Business Owners',
      description: 'Self-employment tax, quarterly estimates, deductions, and how to not get blindsided every April.',
      order: 5,
      estimatedHours: 3,
      modules: [
        {
          slug: 'tax-basics',
          name: 'Tax Basics',
          order: 1,
          lessons: [
            { slug: 'self-employment-tax', name: 'Self-Employment Tax Explained', order: 1 },
            { slug: 'quarterly-estimates', name: 'Quarterly Estimated Taxes', order: 2 },
            { slug: 'business-deductions', name: 'Business Deductions You Can Actually Take', order: 3 },
          ],
        },
        {
          slug: 'tax-planning',
          name: 'Tax Planning',
          order: 2,
          lessons: [
            { slug: 'tax-planning-basics', name: 'Basic Tax Planning', order: 1 },
            { slug: 'retirement-accounts', name: 'Retirement Accounts for Business Owners', order: 2 },
            { slug: 'hiring-tax-help', name: 'When and How to Hire Tax Help', order: 3 },
          ],
        },
      ],
    },
    {
      slug: 'hiring-and-people',
      name: 'Hiring & People',
      description: 'Your first hire, contractor vs employee, payroll, and how to let someone go without it becoming a nightmare.',
      order: 6,
      estimatedHours: 3,
      modules: [
        {
          slug: 'first-hire',
          name: 'Your First Hire',
          order: 1,
          lessons: [
            { slug: 'when-to-hire', name: 'When to Hire (and When Not To)', order: 1 },
            { slug: 'contractor-vs-employee', name: 'Contractor vs Employee: The Real Difference', order: 2 },
            { slug: 'finding-good-people', name: 'Finding Good People', order: 3 },
          ],
        },
        {
          slug: 'managing-people',
          name: 'Managing People',
          order: 2,
          lessons: [
            { slug: 'onboarding', name: 'Onboarding That Works', order: 1 },
            { slug: 'payroll-basics', name: 'Payroll Basics', order: 2 },
            { slug: 'letting-someone-go', name: 'Letting Someone Go the Right Way', order: 3 },
          ],
        },
      ],
    },
  ],
}

export default business
