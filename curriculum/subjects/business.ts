import type { SubjectDef } from '../types'
import { businessExercises1 } from './business-exercises-1'
import { businessExercises2 } from './business-exercises-2'
import { businessExercises3 } from './business-exercises-3'
import { businessExercises4 } from './business-exercises-4'
import { businessExercises5 } from './business-exercises-5'
import { businessExercises6 } from './business-exercises-6'
import { businessAssessments } from './business-assessments'

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
      assessment: businessAssessments['business-foundations'],
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
                {
                  question: 'Which of the following is an example of a business, not a hobby?',
                  type: 'MULTIPLE_CHOICE',
                  options: ['Baking cakes occasionally for friends at no charge', 'Selling handmade jewelry consistently with the goal of making a profit', 'Playing guitar for personal enjoyment on weekends', 'Collecting stamps as a personal interest'],
                  correctAnswer: 'Selling handmade jewelry consistently with the goal of making a profit',
                  explanation: 'Consistent activity with profit intent = business. The others lack either the consistency or the commercial intent that define a business.',
                  order: 3,
                },
                {
                  question: 'A "value exchange" in business means:',
                  type: 'MULTIPLE_CHOICE',
                  options: ['The business gives something away for free to build goodwill', 'A customer receives something of value and gives something in return, usually money', 'The owner exchanges personal assets for business assets', 'Two businesses trade services without money changing hands'],
                  correctAnswer: 'A customer receives something of value and gives something in return, usually money',
                  explanation: 'Every business is built on value exchange — the customer gets a product or service, and in return the business receives compensation. No exchange, no business.',
                  order: 4,
                },
                {
                  question: 'Why does the IRS care whether your activity is a hobby or a business?',
                  type: 'MULTIPLE_CHOICE',
                  options: ['Businesses pay higher income tax rates than hobbies', 'Business losses can offset other income; hobby losses generally cannot', 'Hobbies must be registered with the state; businesses do not', 'Businesses are exempt from self-employment tax'],
                  correctAnswer: 'Business losses can offset other income; hobby losses generally cannot',
                  explanation: 'The IRS "hobby loss rule" means if your activity is classified as a hobby, you cannot deduct losses against your other income. Businesses can — which is a significant tax advantage.',
                  order: 5,
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
                {
                  question: 'A sole proprietorship means:',
                  type: 'MULTIPLE_CHOICE',
                  options: ['You own 100% of a corporation', 'You run a business as an individual with no legal separation between you and the business', 'You are the only employee allowed', 'You operate without needing to pay taxes'],
                  correctAnswer: 'You run a business as an individual with no legal separation between you and the business',
                  explanation: 'In a sole proprietorship, you and the business are legally the same entity. This means personal liability — business debts and lawsuits can reach your personal assets.',
                  order: 2,
                },
                {
                  question: 'Which structure is most appropriate for a small business owner who wants liability protection but minimal paperwork?',
                  type: 'MULTIPLE_CHOICE',
                  options: ['C-Corporation', 'S-Corporation', 'LLC', 'General Partnership'],
                  correctAnswer: 'LLC',
                  explanation: 'An LLC gives you liability protection like a corporation, but with far simpler setup and maintenance. No board meetings, simpler taxes, and it works for businesses of any size.',
                  order: 3,
                },
                {
                  question: 'What does "pass-through taxation" mean for an LLC?',
                  type: 'MULTIPLE_CHOICE',
                  options: ['The LLC pays no taxes at all', 'Business profits pass through to the owner\'s personal tax return, avoiding double taxation', 'Taxes are passed on to customers through pricing', 'The IRS passes the tax burden to the state instead'],
                  correctAnswer: 'Business profits pass through to the owner\'s personal tax return, avoiding double taxation',
                  explanation: 'Unlike C-Corporations (taxed at the corporate level AND when owners receive dividends), LLCs default to pass-through taxation — profits hit your personal return once, not twice.',
                  order: 4,
                },
                {
                  question: 'Briefly explain when you might choose an S-Corp election over a standard LLC.',
                  type: 'OPEN_ENDED',
                  correctAnswer: 'An S-Corp election can save self-employment taxes once the business earns enough profit. By splitting income into a reasonable salary and distributions, the distribution portion avoids self-employment tax — a benefit that typically makes sense when net profit exceeds $40,000–$50,000.',
                  explanation: 'S-Corp elections are a tax strategy, not a legal structure change. The LLC remains an LLC legally, but is taxed differently — valuable at higher income levels.',
                  order: 5,
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
                {
                  question: 'What is the first practical step most small business owners should take to separate their finances?',
                  type: 'MULTIPLE_CHOICE',
                  options: ['Hire a full-time accountant', 'Open a dedicated business checking account', 'Incorporate as a C-Corporation', 'Apply for a business credit card immediately'],
                  correctAnswer: 'Open a dedicated business checking account',
                  explanation: 'A dedicated business bank account is the foundation. All business income goes in, all business expenses come out. This creates a clean paper trail and keeps your personal finances separate.',
                  order: 2,
                },
                {
                  question: 'Why does "piercing the corporate veil" matter to an LLC owner?',
                  type: 'MULTIPLE_CHOICE',
                  options: ['It increases the LLC\'s tax rate', 'It allows a court to hold you personally liable for business debts, defeating the purpose of the LLC', 'It converts the LLC into a sole proprietorship automatically', 'It triggers an IRS audit'],
                  correctAnswer: 'It allows a court to hold you personally liable for business debts, defeating the purpose of the LLC',
                  explanation: 'If a court finds you treated the LLC as an extension of your personal finances, it can ignore the legal separation — making you personally responsible for business debts and judgments.',
                  order: 3,
                },
                {
                  question: 'Which of these is a sign that a business owner is NOT properly separating finances?',
                  type: 'MULTIPLE_CHOICE',
                  options: ['Using a business debit card for all business purchases', 'Paying personal rent directly from the business account', 'Keeping receipts for all business expenses', 'Transferring a monthly "salary" from business to personal account'],
                  correctAnswer: 'Paying personal rent directly from the business account',
                  explanation: 'Paying personal expenses from the business account is commingling. The right approach: transfer a salary or owner\'s draw to your personal account first, then pay personal bills from there.',
                  order: 4,
                },
                {
                  question: 'Describe one practical benefit of separating business and personal finances beyond legal protection.',
                  type: 'OPEN_ENDED',
                  correctAnswer: 'Clean separation makes bookkeeping and tax preparation dramatically simpler, reduces errors, makes it easy to see actual business profitability, and creates a clear financial history that helps with getting business loans or credit.',
                  explanation: 'Legal protection is the main reason, but the operational benefits — cleaner books, easier taxes, clearer profitability picture — make the business easier to run day to day.',
                  order: 5,
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
            { slug: 'what-a-business-plan-actually-is', name: 'What a Business Plan Actually Is', order: 1, exercises: businessExercises1['what-a-business-plan-actually-is'] },
            { slug: 'defining-your-customer', name: 'Defining Your Customer', order: 2, exercises: businessExercises1['defining-your-customer'] },
            { slug: 'revenue-models', name: 'Revenue Models', order: 3, exercises: businessExercises1['revenue-models'] },
          ],
        },
      ],
    },
    {
      slug: 'operations-and-finance',
      name: 'Operations & Finance',
      description: 'Cash flow, pricing, bookkeeping, and the numbers that determine whether your business lives or dies.',
      order: 2,
      estimatedHours: 4,
      assessment: businessAssessments['operations-and-finance'],
      modules: [
        {
          slug: 'cash-flow',
          name: 'Cash Flow',
          order: 1,
          lessons: [
            { slug: 'what-cash-flow-is', name: 'What Cash Flow Is (and Why It Kills Businesses)', order: 1, exercises: businessExercises1['what-cash-flow-is'] },
            { slug: 'reading-a-pl', name: 'Reading a Basic P&L', order: 2, exercises: businessExercises1['reading-a-pl'] },
            { slug: 'invoicing-and-getting-paid', name: 'Invoicing and Getting Paid', order: 3, exercises: businessExercises1['invoicing-and-getting-paid'] },
          ],
        },
        {
          slug: 'pricing-for-profit',
          name: 'Pricing for Profit',
          order: 2,
          lessons: [
            { slug: 'cost-based-pricing', name: 'Cost-Based Pricing', order: 1, exercises: businessExercises2['cost-based-pricing'] },
            { slug: 'value-based-pricing', name: 'Value-Based Pricing', order: 2, exercises: businessExercises2['value-based-pricing'] },
            { slug: 'pricing-mistakes', name: 'Common Pricing Mistakes', order: 3, exercises: businessExercises2['pricing-mistakes'] },
          ],
        },
        {
          slug: 'bookkeeping-basics',
          name: 'Bookkeeping Basics',
          order: 3,
          lessons: [
            { slug: 'what-to-track', name: 'What to Track and Why', order: 1, exercises: businessExercises2['what-to-track'] },
            { slug: 'bookkeeping-tools', name: 'Tools and Software', order: 2, exercises: businessExercises2['bookkeeping-tools'] },
            { slug: 'working-with-accountant', name: 'Working with an Accountant', order: 3, exercises: businessExercises2['working-with-accountant'] },
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
      assessment: businessAssessments['sales-and-marketing'],
      modules: [
        {
          slug: 'finding-customers',
          name: 'Finding Customers',
          order: 1,
          lessons: [
            { slug: 'your-first-customer', name: 'Getting Your First Customer', order: 1, exercises: businessExercises3['your-first-customer'] },
            { slug: 'ideal-customer-profile', name: 'Defining Your Ideal Customer', order: 2, exercises: businessExercises3['ideal-customer-profile'] },
            { slug: 'where-customers-are', name: 'Where Your Customers Actually Are', order: 3, exercises: businessExercises3['where-customers-are'] },
          ],
        },
        {
          slug: 'sales-fundamentals',
          name: 'Sales Fundamentals',
          order: 2,
          lessons: [
            { slug: 'making-the-ask', name: 'Making the Ask', order: 1, exercises: businessExercises3['making-the-ask'] },
            { slug: 'handling-objections', name: 'Handling Objections', order: 2, exercises: businessExercises3['handling-objections'] },
            { slug: 'follow-up', name: 'Follow-Up That Works', order: 3, exercises: businessExercises3['follow-up'] },
          ],
        },
        {
          slug: 'basic-marketing',
          name: 'Basic Marketing',
          order: 3,
          lessons: [
            { slug: 'word-of-mouth', name: 'Word of Mouth and Referrals', order: 1, exercises: businessExercises4['word-of-mouth'] },
            { slug: 'online-presence', name: 'Building a Basic Online Presence', order: 2, exercises: businessExercises4['online-presence'] },
            { slug: 'social-media-basics', name: 'Social Media Without Wasting Your Life', order: 3, exercises: businessExercises4['social-media-basics'] },
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
      assessment: businessAssessments['legal-basics'],
      modules: [
        {
          slug: 'contracts',
          name: 'Contracts',
          order: 1,
          lessons: [
            { slug: 'what-makes-a-contract', name: 'What Makes a Contract Enforceable', order: 1, exercises: businessExercises4['what-makes-a-contract'] },
            { slug: 'reading-contracts', name: 'Reading a Contract Without a Law Degree', order: 2, exercises: businessExercises4['reading-contracts'] },
            { slug: 'common-contract-mistakes', name: 'Common Contract Mistakes', order: 3, exercises: businessExercises4['common-contract-mistakes'] },
          ],
        },
        {
          slug: 'intellectual-property',
          name: 'Intellectual Property',
          order: 2,
          lessons: [
            { slug: 'trademarks', name: 'Trademarks: Protecting Your Name', order: 1, exercises: businessExercises6['trademarks'] },
            { slug: 'copyright-basics', name: 'Copyright Basics', order: 2, exercises: businessExercises5['copyright-basics'] },
            { slug: 'when-to-get-a-lawyer', name: 'When You Actually Need a Lawyer', order: 3, exercises: businessExercises5['when-to-get-a-lawyer'] },
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
      assessment: businessAssessments['taxes-for-business'],
      modules: [
        {
          slug: 'tax-basics',
          name: 'Tax Basics',
          order: 1,
          lessons: [
            { slug: 'self-employment-tax', name: 'Self-Employment Tax Explained', order: 1, exercises: businessExercises5['self-employment-tax'] },
            { slug: 'quarterly-estimates', name: 'Quarterly Estimated Taxes', order: 2, exercises: businessExercises5['quarterly-estimates'] },
            { slug: 'business-deductions', name: 'Business Deductions You Can Actually Take', order: 3, exercises: businessExercises5['business-deductions'] },
          ],
        },
        {
          slug: 'tax-planning',
          name: 'Tax Planning',
          order: 2,
          lessons: [
            { slug: 'tax-planning-basics', name: 'Basic Tax Planning', order: 1, exercises: businessExercises6['tax-planning-basics'] },
            { slug: 'retirement-accounts', name: 'Retirement Accounts for Business Owners', order: 2, exercises: businessExercises6['retirement-accounts'] },
            { slug: 'hiring-tax-help', name: 'When and How to Hire Tax Help', order: 3, exercises: businessExercises6['hiring-tax-help'] },
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
      assessment: businessAssessments['hiring-and-people'],
      modules: [
        {
          slug: 'first-hire',
          name: 'Your First Hire',
          order: 1,
          lessons: [
            { slug: 'when-to-hire', name: 'When to Hire (and When Not To)', order: 1, exercises: businessExercises6['when-to-hire'] },
            { slug: 'contractor-vs-employee', name: 'Contractor vs Employee: The Real Difference', order: 2, exercises: businessExercises6['contractor-vs-employee'] },
            { slug: 'finding-good-people', name: 'Finding Good People', order: 3, exercises: businessExercises6['finding-good-people'] },
          ],
        },
        {
          slug: 'managing-people',
          name: 'Managing People',
          order: 2,
          lessons: [
            { slug: 'onboarding', name: 'Onboarding That Works', order: 1, exercises: businessExercises6['onboarding'] },
            { slug: 'payroll-basics', name: 'Payroll Basics', order: 2, exercises: businessExercises6['payroll-basics'] },
            { slug: 'letting-someone-go', name: 'Letting Someone Go the Right Way', order: 3, exercises: businessExercises6['letting-someone-go'] },
          ],
        },
      ],
    },
  ],
}

export default business
