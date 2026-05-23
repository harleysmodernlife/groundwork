import type { SubjectDef } from '../types'
import { financeExercises1 } from './finance-exercises-1'
import { financeExercises2 } from './finance-exercises-2'
import { financeExercises3 } from './finance-exercises-3'
import { financeExercises4 } from './finance-exercises-4'
import { financeExercises5 } from './finance-exercises-5'
import { financeExercises6 } from './finance-exercises-6'
import { financeExercises7 } from './finance-exercises-7'
import { financeExercises8 } from './finance-exercises-8'
import { financeExercises9 } from './finance-exercises-9'
import { financeExercises10 } from './finance-exercises-10'
import { personalFinanceAssessments } from './personal-finance-assessments'

const personalFinance: SubjectDef = {
  slug: 'personal-finance',
  name: 'Personal Finance & Money',
  description: 'How money actually works — budgeting, debt, credit, investing, taxes, and building long-term security. The class you never got in school.',
  icon: '💵',
  order: 2,
  courses: [
    {
      slug: 'budgeting-and-managing-money',
      name: 'Budgeting & Managing Money',
      description: 'Know where your money goes, make it go where you want, and stop running out before the month ends.',
      order: 1,
      estimatedHours: 4,
      assessment: personalFinanceAssessments['budgeting-and-managing-money'],
      modules: [
        {
          slug: 'income-and-expenses',
          name: 'Income & Expenses',
          order: 1,
          lessons: [
            { slug: 'where-does-money-come-from', name: 'Where Your Money Comes From', order: 1, exercises: financeExercises1['where-does-money-come-from'] },
            { slug: 'tracking-spending', name: 'Tracking Where It Goes', order: 2, exercises: financeExercises1['tracking-spending'] },
            { slug: 'fixed-vs-variable-expenses', name: 'Fixed vs Variable Expenses', order: 3, exercises: financeExercises1['fixed-vs-variable-expenses'] },
          ],
        },
        {
          slug: 'building-a-budget',
          name: 'Building a Budget',
          order: 2,
          lessons: [
            { slug: 'budgeting-methods', name: 'Budgeting Methods That Actually Work', order: 1, exercises: financeExercises1['budgeting-methods'] },
            { slug: 'zero-based-budgeting', name: 'Zero-Based Budgeting', order: 2, exercises: financeExercises1['zero-based-budgeting'] },
            { slug: 'the-fifty-thirty-twenty-rule', name: 'The 50/30/20 Rule', order: 3, exercises: financeExercises1['the-fifty-thirty-twenty-rule'] },
            { slug: 'budgeting-tools', name: 'Tools and Apps for Budgeting', order: 4, exercises: financeExercises1['budgeting-tools'] },
          ],
        },
        {
          slug: 'emergency-funds',
          name: 'Emergency Funds & Financial Cushion',
          order: 3,
          lessons: [
            { slug: 'why-emergency-funds-matter', name: 'Why an Emergency Fund Changes Everything', order: 1, exercises: financeExercises2['why-emergency-funds-matter'] },
            { slug: 'how-much-to-save', name: 'How Much You Actually Need', order: 2, exercises: financeExercises2['how-much-to-save'] },
            { slug: 'building-the-fund', name: 'Building It When Money Is Tight', order: 3, exercises: financeExercises2['building-the-fund'] },
          ],
        },
      ],
    },
    {
      slug: 'debt-and-credit',
      name: 'Debt & Credit',
      description: 'How credit scores work, how debt traps are built, and how to get free of them.',
      order: 2,
      estimatedHours: 4,
      assessment: personalFinanceAssessments['debt-and-credit'],
      modules: [
        {
          slug: 'understanding-credit',
          name: 'Understanding Credit',
          order: 1,
          lessons: [
            { slug: 'what-is-credit', name: 'What Credit Is and Why It Matters', order: 1, exercises: financeExercises2['what-is-credit'] },
            { slug: 'how-credit-scores-work', name: 'How Credit Scores Are Calculated', order: 2, exercises: financeExercises2['how-credit-scores-work'] },
            { slug: 'credit-reports', name: 'Reading Your Credit Report', order: 3, exercises: financeExercises2['credit-reports'] },
            { slug: 'building-credit-from-zero', name: 'Building Credit From Zero', order: 4, exercises: financeExercises2['building-credit-from-zero'] },
          ],
        },
        {
          slug: 'types-of-debt',
          name: 'Types of Debt',
          order: 2,
          lessons: [
            { slug: 'good-debt-vs-bad-debt', name: 'Good Debt vs Bad Debt', order: 1, exercises: financeExercises3['good-debt-vs-bad-debt'] },
            { slug: 'credit-cards', name: 'Credit Cards: How the Trap Works', order: 2, exercises: financeExercises3['credit-cards'] },
            { slug: 'student-loans', name: 'Student Loans', order: 3, exercises: financeExercises3['student-loans'] },
            { slug: 'predatory-lending', name: 'Payday Loans, Rent-to-Own, and Predatory Lending', order: 4, exercises: financeExercises3['predatory-lending'] },
          ],
        },
        {
          slug: 'getting-out-of-debt',
          name: 'Getting Out of Debt',
          order: 3,
          lessons: [
            { slug: 'debt-avalanche-vs-snowball', name: 'Avalanche vs Snowball: Two Methods', order: 1, exercises: financeExercises3['debt-avalanche-vs-snowball'] },
            { slug: 'negotiating-with-creditors', name: 'Negotiating with Creditors', order: 2, exercises: financeExercises3['negotiating-with-creditors'] },
            { slug: 'debt-consolidation', name: 'Debt Consolidation: When It Helps and When It Doesn\'t', order: 3, exercises: financeExercises3['debt-consolidation'] },
          ],
        },
      ],
    },
    {
      slug: 'banking-and-accounts',
      name: 'Banking & Financial Accounts',
      description: 'How banks actually work, what accounts you need, and how to stop paying fees you don\'t have to pay.',
      order: 3,
      estimatedHours: 3,
      assessment: personalFinanceAssessments['banking-and-accounts'],
      modules: [
        {
          slug: 'bank-accounts',
          name: 'Bank Accounts',
          order: 1,
          lessons: [
            { slug: 'checking-vs-savings', name: 'Checking vs Savings Accounts', order: 1, exercises: financeExercises4['checking-vs-savings'] },
            { slug: 'how-banks-make-money', name: 'How Banks Make Money Off You', order: 2, exercises: financeExercises4['how-banks-make-money'] },
            { slug: 'choosing-a-bank', name: 'Choosing the Right Bank or Credit Union', order: 3, exercises: financeExercises4['choosing-a-bank'] },
          ],
        },
        {
          slug: 'financial-products',
          name: 'Financial Products',
          order: 2,
          lessons: [
            { slug: 'cds-and-money-market', name: 'CDs and Money Market Accounts', order: 1, exercises: financeExercises4['cds-and-money-market'] },
            { slug: 'interest-rates', name: 'How Interest Rates Work', order: 2, exercises: financeExercises4['interest-rates'] },
            { slug: 'fdic-insurance', name: 'FDIC Insurance and Protecting Your Deposits', order: 3, exercises: financeExercises4['fdic-insurance'] },
          ],
        },
      ],
    },
    {
      slug: 'investing-basics',
      name: 'Investing Basics',
      description: 'How investing works, why compound interest is the most powerful force in personal finance, and how to start with almost nothing.',
      order: 4,
      estimatedHours: 5,
      assessment: personalFinanceAssessments['investing-basics'],
      modules: [
        {
          slug: 'why-invest',
          name: 'Why Invest',
          order: 1,
          lessons: [
            { slug: 'inflation-and-purchasing-power', name: 'Inflation: Why Saving Alone Isn\'t Enough', order: 1, exercises: financeExercises4['inflation-and-purchasing-power'] },
            { slug: 'compound-interest', name: 'Compound Interest: The Most Important Concept in Finance', order: 2, exercises: financeExercises5['compound-interest'] },
            { slug: 'risk-and-return', name: 'Risk and Return', order: 3, exercises: financeExercises5['risk-and-return'] },
          ],
        },
        {
          slug: 'investment-vehicles',
          name: 'Investment Vehicles',
          order: 2,
          lessons: [
            { slug: 'stocks-basics', name: 'Stocks: Owning a Piece of a Company', order: 1, exercises: financeExercises5['stocks-basics'] },
            { slug: 'bonds-basics', name: 'Bonds: Lending Your Money', order: 2, exercises: financeExercises5['bonds-basics'] },
            { slug: 'index-funds-and-etfs', name: 'Index Funds and ETFs: The Simple Path', order: 3, exercises: financeExercises5['index-funds-and-etfs'] },
            { slug: 'mutual-funds', name: 'Mutual Funds', order: 4, exercises: financeExercises5['mutual-funds'] },
          ],
        },
        {
          slug: 'building-a-portfolio',
          name: 'Building a Portfolio',
          order: 3,
          lessons: [
            { slug: 'diversification', name: 'Diversification: Not Putting All Eggs in One Basket', order: 1, exercises: financeExercises5['diversification'] },
            { slug: 'asset-allocation', name: 'Asset Allocation by Life Stage', order: 2, exercises: financeExercises6['asset-allocation'] },
            { slug: 'starting-with-little', name: 'How to Start Investing with Almost Nothing', order: 3, exercises: financeExercises6['starting-with-little'] },
            { slug: 'what-to-avoid', name: 'What to Avoid: Day Trading, Hot Tips, and Crypto Hype', order: 4, exercises: financeExercises6['what-to-avoid'] },
          ],
        },
      ],
    },
    {
      slug: 'insurance-fundamentals',
      name: 'Insurance Fundamentals',
      description: 'What insurance is, how it works, and how to not get caught without it when you need it most.',
      order: 5,
      estimatedHours: 3,
      assessment: personalFinanceAssessments['insurance-fundamentals'],
      modules: [
        {
          slug: 'how-insurance-works',
          name: 'How Insurance Works',
          order: 1,
          lessons: [
            { slug: 'insurance-basics', name: 'Premiums, Deductibles, and How Insurance Actually Works', order: 1, exercises: financeExercises6['insurance-basics'] },
            { slug: 'why-insurance-matters', name: 'Why You Need Insurance Before You Think You Do', order: 2, exercises: financeExercises6['why-insurance-matters'] },
          ],
        },
        {
          slug: 'types-of-insurance',
          name: 'Types of Insurance',
          order: 2,
          lessons: [
            { slug: 'health-insurance', name: 'Health Insurance: Plans, Networks, and Costs', order: 1, exercises: financeExercises6['health-insurance'] },
            { slug: 'auto-insurance', name: 'Auto Insurance', order: 2, exercises: financeExercises6['auto-insurance'] },
            { slug: 'renters-and-homeowners', name: 'Renters and Homeowners Insurance', order: 3, exercises: financeExercises7['renters-and-homeowners'] },
            { slug: 'life-insurance', name: 'Life Insurance: Term vs Whole', order: 4, exercises: financeExercises7['life-insurance'] },
            { slug: 'disability-insurance', name: 'Disability Insurance: Protecting Your Income', order: 5, exercises: financeExercises7['disability-insurance'] },
          ],
        },
      ],
    },
    {
      slug: 'taxes-for-individuals',
      name: 'Taxes for Individuals',
      description: 'How income tax works, how to file, and how to legally keep more of what you earn.',
      order: 6,
      estimatedHours: 4,
      assessment: personalFinanceAssessments['taxes-for-individuals'],
      modules: [
        {
          slug: 'how-income-tax-works',
          name: 'How Income Tax Works',
          order: 1,
          lessons: [
            { slug: 'tax-brackets', name: 'Tax Brackets: How Progressive Taxation Works', order: 1, exercises: financeExercises7['tax-brackets'] },
            { slug: 'w2-vs-1099', name: 'W-2 vs 1099: Employee vs Self-Employed', order: 2, exercises: financeExercises7['w2-vs-1099'] },
            { slug: 'withholding', name: 'Withholding and Why You Get a Refund (or Owe)', order: 3, exercises: financeExercises7['withholding'] },
          ],
        },
        {
          slug: 'filing-your-taxes',
          name: 'Filing Your Taxes',
          order: 2,
          lessons: [
            { slug: 'standard-vs-itemized', name: 'Standard Deduction vs Itemizing', order: 1, exercises: financeExercises7['standard-vs-itemized'] },
            { slug: 'tax-forms', name: 'Tax Forms You\'ll Actually See', order: 2, exercises: financeExercises8['tax-forms'] },
            { slug: 'free-filing-options', name: 'Free Filing Options', order: 3, exercises: financeExercises8['free-filing-options'] },
          ],
        },
        {
          slug: 'tax-strategies',
          name: 'Keeping More of What You Earn',
          order: 3,
          lessons: [
            { slug: 'tax-deductions', name: 'Common Deductions Most People Miss', order: 1, exercises: financeExercises8['tax-deductions'] },
            { slug: 'tax-advantaged-accounts', name: 'Tax-Advantaged Accounts: IRA, HSA, FSA', order: 2, exercises: financeExercises8['tax-advantaged-accounts'] },
            { slug: 'when-to-get-help', name: 'When to Get a Tax Professional', order: 3, exercises: financeExercises8['when-to-get-help'] },
          ],
        },
      ],
    },
    {
      slug: 'buying-a-home',
      name: 'Buying a Home',
      description: 'The biggest purchase most people ever make. How mortgages work, what to watch out for, and when renting is actually smarter.',
      order: 7,
      estimatedHours: 4,
      assessment: personalFinanceAssessments['buying-a-home'],
      modules: [
        {
          slug: 'rent-vs-buy',
          name: 'Renting vs Buying',
          order: 1,
          lessons: [
            { slug: 'the-real-cost-of-homeownership', name: 'The Real Cost of Owning a Home', order: 1, exercises: financeExercises8['the-real-cost-of-homeownership'] },
            { slug: 'when-renting-wins', name: 'When Renting Is the Smarter Choice', order: 2, exercises: financeExercises8['when-renting-wins'] },
            { slug: 'are-you-ready-to-buy', name: 'Are You Actually Ready to Buy?', order: 3, exercises: financeExercises9['are-you-ready-to-buy'] },
          ],
        },
        {
          slug: 'mortgages',
          name: 'Mortgages',
          order: 2,
          lessons: [
            { slug: 'how-mortgages-work', name: 'How Mortgages Work', order: 1, exercises: financeExercises9['how-mortgages-work'] },
            { slug: 'mortgage-types', name: 'Fixed vs Adjustable Rate', order: 2, exercises: financeExercises9['mortgage-types'] },
            { slug: 'down-payments-and-pmi', name: 'Down Payments and PMI', order: 3, exercises: financeExercises9['down-payments-and-pmi'] },
            { slug: 'getting-approved', name: 'Getting Approved: What Lenders Look At', order: 4, exercises: financeExercises9['getting-approved'] },
          ],
        },
        {
          slug: 'the-buying-process',
          name: 'The Buying Process',
          order: 3,
          lessons: [
            { slug: 'finding-a-home', name: 'Finding and Evaluating a Home', order: 1, exercises: financeExercises9['finding-a-home'] },
            { slug: 'making-an-offer', name: 'Making an Offer and Negotiating', order: 2, exercises: financeExercises9['making-an-offer'] },
            { slug: 'closing-costs', name: 'Closing Costs and What to Expect at Closing', order: 3, exercises: financeExercises10['closing-costs'] },
          ],
        },
      ],
    },
    {
      slug: 'retirement-planning',
      name: 'Retirement Planning',
      description: 'Why starting early matters more than anything else, and how to build a plan that doesn\'t depend on Social Security alone.',
      order: 8,
      estimatedHours: 4,
      assessment: personalFinanceAssessments['retirement-planning'],
      modules: [
        {
          slug: 'why-plan-for-retirement',
          name: 'Why Retirement Planning Matters',
          order: 1,
          lessons: [
            { slug: 'the-time-value-of-starting-early', name: 'Why Starting Early Changes Everything', order: 1, exercises: financeExercises10['the-time-value-of-starting-early'] },
            { slug: 'how-much-do-you-need', name: 'How Much Do You Actually Need to Retire?', order: 2, exercises: financeExercises10['how-much-do-you-need'] },
            { slug: 'social-security-reality', name: 'Social Security: What It Is and What It Isn\'t', order: 3, exercises: financeExercises10['social-security-reality'] },
          ],
        },
        {
          slug: 'retirement-accounts',
          name: 'Retirement Accounts',
          order: 2,
          lessons: [
            { slug: '401k-basics', name: '401(k) and Employer Plans', order: 1, exercises: financeExercises10['401k-basics'] },
            { slug: 'ira-basics', name: 'Traditional vs Roth IRA', order: 2, exercises: financeExercises10['ira-basics'] },
            { slug: 'self-employed-retirement', name: 'Retirement Accounts for the Self-Employed', order: 3, exercises: financeExercises10['self-employed-retirement'] },
            { slug: 'withdrawal-rules', name: 'Rules for Taking Money Out', order: 4, exercises: financeExercises10['withdrawal-rules'] },
          ],
        },
      ],
    },
  ],
}

export default personalFinance
