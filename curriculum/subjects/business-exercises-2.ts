import type { ExerciseDef } from '../types'

function mc(
  question: string,
  options: string[],
  correctAnswer: string,
  explanation: string,
  order: number,
): ExerciseDef {
  return { question, type: 'MULTIPLE_CHOICE', options, correctAnswer, explanation, order }
}

export const businessExercises2: Record<string, ExerciseDef[]> = {
  'cost-based-pricing': [
    mc(
      'The lesson calls cost-based pricing a tool for the "price floor" because:',
      ['It matches competitor pricing in the market', 'It tells you the minimum you can charge without losing money, not the maximum you can charge', 'It automatically adjusts prices based on demand', 'It guarantees a fixed profit on every job'],
      'It tells you the minimum you can charge without losing money, not the maximum you can charge',
      '"Cost-based pricing tells you the absolute minimum you can charge without losing money — it does not tell you the maximum you can charge." It\'s a floor, not a ceiling.',
      1,
    ),
    mc(
      'What is the "fatal mistake" the lesson identifies in simple markup pricing?',
      ['Applying markup to revenue instead of costs', 'Only applying markup to variable costs while ignoring fixed cost allocation per job', 'Setting markup too high and losing customers to competitors', 'Failing to include labor costs in the markup calculation'],
      'Only applying markup to variable costs while ignoring fixed cost allocation per job',
      '"Many owners only apply a markup to variable costs... But if your monthly fixed costs are $2,000 and you only do 10 jobs, your fixed cost per job is $200. You just lost $150 on a job you thought was profitable."',
      2,
    ),
    mc(
      'The "Efficiency Penalty" in cost-based pricing means:',
      ['Faster workers earn less per hour than slower workers for the same job', 'As you become more skilled and faster, your cost-based price drops and so does your profit', 'Clients pay less for work completed ahead of schedule', 'Overtime rates reduce profitability on complex jobs'],
      'As you become more skilled and faster, your cost-based price drops and so does your profit',
      '"By becoming twice as fast, you have cut your profit in half. You are being penalized for your own expertise." This is why professionals move to value-based pricing.',
      3,
    ),
    mc(
      'Using the True Floor Formula with a Variable Cost of $300, Allocated Fixed Cost of $100, and a 20% desired margin, what is the correct price?',
      ['$480', '$500', '$400', '$520'],
      '$500',
      'Price = ($300 + $100) / (1 - 0.20) = $400 / 0.80 = $500. This price ensures all materials, overhead, and the desired profit margin are covered.',
      4,
    ),
    mc(
      'According to the lesson, when is cost-plus pricing most appropriate?',
      ['When serving high-value customers who pay for expertise', 'In commodity markets, cost-plus contracts, or as a sanity-check baseline against value-based prices', 'For any service business generating more than $100k in annual revenue', 'When the business has no fixed overhead costs'],
      'In commodity markets, cost-plus contracts, or as a sanity-check baseline against value-based prices',
      'The lesson identifies three appropriate scenarios: commodity markets, cost-plus government/industrial contracts, and as a "sanity check" baseline — to ensure value-based prices still exceed the cost floor.',
      5,
    ),
  ],

  'value-based-pricing': [
    mc(
      'In the three pricing paradigms, what is the core flaw of market-based pricing (the "Commodity Way")?',
      ['It ignores the cost of delivering the service', 'It leads to a race to the bottom and attracts price-shoppers with zero loyalty', 'It requires access to proprietary competitor pricing data', 'It only works in markets with fewer than five competitors'],
      'It leads to a race to the bottom and attracts price-shoppers with zero loyalty',
      '"This leads to a \'race to the bottom.\' If you price based on the average, you are admitting that your work is no different than the average. It attracts price-shoppers who have zero loyalty."',
      1,
    ),
    mc(
      'The Economic Value to the Customer (EVC) formula calculates:',
      ['The average price competitors charge for a similar service', 'The total cost of the customer\'s problem — immediate costs plus long-term risk — minus your solution cost', 'The customer\'s total annual budget divided by the number of vendors they use', 'The markup percentage needed to hit a 20% net margin'],
      'The total cost of the customer\'s problem — immediate costs plus long-term risk — minus your solution cost',
      'EVC quantifies the customer\'s total pain: immediate costs + potential long-term costs. The gap between that total and your price is the value the customer gains. "You should never price higher than the EVC."',
      2,
    ),
    mc(
      'The "Anchor and Pivot" strategy presents a high-end premium option first in order to:',
      ['Ensure customers always buy the most expensive option', 'Make the standard professional option feel like a high-value compromise rather than an expense', 'Comply with FTC regulations on tiered pricing', 'Test whether customers can afford the service before revealing the real price'],
      'Make the standard professional option feel like a high-value compromise rather than an expense',
      '"Because the customer has already seen the $2,500 anchor, the $1,200 option feels like a high-value compromise rather than an expensive expense." Anchoring shifts the frame of comparison.',
      3,
    ),
    mc(
      'The "Underpricing Spiral" demonstrates that charging below your value rate eventually leads to:',
      ['A loyal customer base that refers others', 'Burnout from overwork, reduced quality, and permanent inability to charge professional rates', 'Faster business growth through higher volume', 'A reputation for being affordable that attracts high-lifetime-value customers'],
      'Burnout from overwork, reduced quality, and permanent inability to charge professional rates',
      '"Because you are underpaid, you must work twice as many hours to reach your financial goals. This leads to burnout, which leads to a decrease in quality, which eventually destroys your ability to ever charge the professional rate."',
      4,
    ),
    mc(
      'The "10% Rule" for price testing recommends raising rates every 3-5 jobs and looking for:',
      ['A 10% increase in total revenue', 'The "Resistance Point" — where the conversion rate begins to drop significantly', 'Customer feedback confirming the new price is fair', 'A 10% increase in the number of referrals received'],
      'The "Resistance Point" — where the conversion rate begins to drop significantly',
      '"You are looking for the \'Resistance Point\' — the moment where the conversion rate of your quotes begins to drop significantly." If customers don\'t flinch, you\'re still underpricing.',
      5,
    ),
  ],

  'pricing-mistakes': [
    mc(
      'The lesson shows that a 10% price discount on a job with a 20% margin results in what impact on net profit?',
      ['A 10% reduction in net profit', 'A 20% reduction in net profit', 'A 50% reduction in net profit', 'A 30% reduction in net profit'],
      'A 50% reduction in net profit',
      '"A 10% reduction in price led to a 50% reduction in profit." Fixed costs don\'t decrease with the discount, so the entire reduction comes out of the thin profit margin.',
      1,
    ),
    mc(
      'Instead of discounting the price when a customer can\'t afford the full amount, the lesson recommends:',
      ['Offering a payment plan spread over several months', 'Removing a feature or service from the scope to protect the margin', 'Offering a discount in exchange for a written testimonial', 'Lowering the price and adding a rush fee for faster delivery'],
      'Removing a feature or service from the scope to protect the margin',
      '"Never discount the price; instead, change the scope. If a customer cannot afford the price, remove a feature or a service. This protects your margin and signals that your time has a fixed value."',
      2,
    ),
    mc(
      'Why does the lesson warn that low prices attract "Bargain Hunters" who are the worst customers?',
      ['They tend to pay with credit cards, which increases processing fees', 'They are statistically the most demanding, most likely to complain, and least likely to pay on time', 'They buy only one service and never refer others', 'They require more customization that reduces operational efficiency'],
      'They are statistically the most demanding, most likely to complain, and least likely to pay on time',
      '"Price is a signal of quality. If you are the cheapest option in town, you will attract \'Bargain Hunters.\' These customers are statistically the most demanding, the most likely to complain, and the least likely to pay on time."',
      3,
    ),
    mc(
      'In the "Good-Better-Best" framework, where do most customers naturally gravitate?',
      ['The cheapest option to minimize spending', 'The most expensive option to signal quality', 'The middle option, avoiding both fear of low quality and fear of overpaying', 'Whichever option the operator recommends most enthusiastically'],
      'The middle option, avoiding both fear of low quality and fear of overpaying',
      '"Most customers will avoid the cheapest option (fear of low quality) and the most expensive option (fear of overpaying), naturally gravitating toward the middle option."',
      4,
    ),
    mc(
      'The "True Rate" worksheet establishes your pricing floor based on:',
      ['Competitor pricing research plus a 10% premium', 'Your annual overhead plus desired personal draw divided by billable hours', 'The average hourly rate in your industry multiplied by your years of experience', 'A fixed markup percentage applied to variable costs'],
      'Your annual overhead plus desired personal draw divided by billable hours',
      'Annual Overhead + Desired Personal Draw = Total Annual Requirement. Divided by actual billable hours = the floor rate. Charging below this means you are effectively paying the customer to work for them.',
      5,
    ),
  ],

  'what-to-track': [
    mc(
      'The lesson distinguishes "vanity metrics" from "actionable metrics." Which of the following is an example of a vanity metric?',
      ['Net Profit Margin', 'Customer Acquisition Cost (CAC)', 'Gross Revenue', 'Conversion Rate'],
      'Gross Revenue',
      '"Gross Revenue: The total amount of money that passed through your hands. A business can do $1M in revenue and still go bankrupt if its expenses are $1.1M." Vanity metrics feel impressive but don\'t reveal profitability.',
      1,
    ),
    mc(
      'The "Gold Standard" LTV:CAC ratio described in the lesson is:',
      ['1:1', '3:1', '5:1', '10:1'],
      '3:1',
      '"Ratio 3:1: This is the \'Gold Standard\' for a healthy business. You are making three times what it costs to acquire the customer." A ratio below 1:1 means you\'re paying more to get customers than they\'re worth.',
      2,
    ),
    mc(
      'A Utilization Rate above 90% is described as a breaking point because:',
      ['Tax regulations limit billable hours above this threshold', 'There is no room for errors, growth, or strategic planning — burnout is imminent', 'Insurance premiums increase dramatically at this utilization level', 'Customers become dissatisfied when operators are too busy'],
      'There is no room for errors, growth, or strategic planning — burnout is imminent',
      '"Above 90%: You are at a breaking point. You have no room for errors, no time for growth, and you are on the verge of burnout. This is the signal that you must either raise your prices or hire your first employee."',
      3,
    ),
    mc(
      'In the Lead-to-Cash funnel, a low "Quote to Closed Job" percentage indicates:',
      ['Your intake process is too slow at turning inquiries into quotes', 'Your pricing is off or your value proposition is weak', 'You have an operational or labor problem completing jobs', 'You have a collections problem with unpaid invoices'],
      'Your pricing is off or your value proposition is weak',
      '"Quote → Closed Job: What % of quotes are accepted? (If this is low, your pricing is off or your value proposition is weak.)" Each stage of the funnel points to a specific type of problem.',
      4,
    ),
    mc(
      'The lesson recommends checking the "Cash Position" daily as part of the Daily Pulse because:',
      ['Banks require daily balance confirmation for business accounts', 'It determines whether you have enough cash for tomorrow\'s obligations', 'Daily reconciliation is required by GAAP accounting standards', 'It helps track which customers still owe you money'],
      'It determines whether you have enough cash for tomorrow\'s obligations',
      '"Daily Pulse (5 Minutes): Cash Position — Do I have enough in the bank for tomorrow\'s obligations?" Profit is a concept; cash is what pays employees and suppliers today.',
      5,
    ),
  ],

  'bookkeeping-tools': [
    mc(
      'The three layers of the financial tool hierarchy are, in order from operational to strategic:',
      ['Spreadsheets, accounting software, and financial dashboards', 'Invoicing and billing, accounting software, and financial dashboards', 'Tax preparation, payroll software, and banking', 'CRM, invoicing software, and bank statements'],
      'Invoicing and billing, accounting software, and financial dashboards',
      'Layer 1: Invoicing/billing tools (collect revenue). Layer 2: Accounting software / General Ledger (compliance, P&L). Layer 3: Financial dashboards (strategy, trends). Each layer serves a distinct purpose.',
      1,
    ),
    mc(
      'The lesson warns against relying on "Auto-Categorization" in accounting software because:',
      ['It is only available in premium software plans', 'AI miscategorizations corrupt your tax deductions and produce inaccurate P&L reports', 'It slows down the reconciliation process significantly', 'It creates duplicate entries that distort the balance sheet'],
      'AI miscategorizations corrupt your tax deductions and produce inaccurate P&L reports',
      '"If the AI miscategorizes a large equipment purchase as a \'Supply Expense,\' your tax deductions will be wrong and your P&L will be lied to." Every transaction must be manually reviewed and cleared.',
      2,
    ),
    mc(
      'The "Single Source of Truth" principle in bookkeeping means:',
      ['Only one person in the company should have access to financial data', 'Every financial event is recorded in one system with one receipt attached to each entry', 'Only one accounting software should be used per business', 'The bank balance and accounting balance must match at year-end'],
      'Every financial event is recorded in one system with one receipt attached to each entry',
      '"Implement a workflow where every single financial event is recorded in one place. One Entry, One Source, One Truth: the bank balance in the software must match the actual bank balance to the penny every day."',
      3,
    ),
    mc(
      'When correcting a bookkeeping mistake, the lesson says you should void a transaction rather than delete it because:',
      ['Deletion is not available in most accounting software', 'Deleting creates a gap in entries that signals hidden income or expenses during an audit', 'Voided transactions are excluded from tax calculations', 'Deletion requires approval from your accountant'],
      'Deleting creates a gap in entries that signals hidden income or expenses during an audit',
      '"Deleting: Removing a transaction entirely. This creates a gap in the sequence of entries and is a major red flag during an audit." Voiding maintains the audit trail while marking the transaction invalid.',
      4,
    ),
    mc(
      'According to the lesson, at what point should a business owner hire a professional bookkeeper?',
      ['When annual revenue exceeds $250,000', 'When spending more than 4 hours per month on data entry, finding consistent errors, or managing complex revenue streams', 'When preparing to apply for a business loan', 'When the IRS sends a notice of audit'],
      'When spending more than 4 hours per month on data entry, finding consistent errors, or managing complex revenue streams',
      'The three thresholds: Time (4+ hours/month on reconciliation), Error (consistent discrepancies), and Complexity (multiple revenue streams, payroll, multi-state sales tax).',
      5,
    ),
  ],

  'working-with-accountant': [
    mc(
      'The lesson distinguishes between a bookkeeper and an accountant/CPA. What is the bookkeeper\'s primary focus?',
      ['Designing tax strategies to minimize liability', 'The past — recording and reconciliation to produce an accurate P&L', 'The future — forecasting revenue and planning for growth', 'Filing quarterly estimated tax payments'],
      'The past — recording and reconciliation to produce an accurate P&L',
      '"The Bookkeeper (The Data Technician): Primary Focus: The Past. Their job is recording and reconciliation... to produce an accurate, reconciled P&L and Balance Sheet every month."',
      1,
    ),
    mc(
      'Why does the lesson recommend giving your accountant "Read-Only" or "Accountant-Level" access to your software rather than your primary admin credentials?',
      ['Read-only access is less expensive than full access', 'It maintains security, creates an audit trail of their changes, and keeps ownership of data with you', 'Accountants are legally prohibited from having full access', 'It prevents the accountant from accidentally deleting transactions'],
      'It maintains security, creates an audit trail of their changes, and keeps ownership of data with you',
      '"Security: Your primary password remains private. Audit Trail: You can see exactly what changes the accountant made. Control: You maintain ownership of the data while allowing the professional to perform their analysis."',
      2,
    ),
    mc(
      'The lesson says "tax compliance" and "tax planning" are fundamentally different. Tax planning is:',
      ['Accurately reporting what happened in the past to avoid audit penalties', 'Making strategic decisions before the year ends to legally lower your tax liability', 'Preparing quarterly estimated tax payments based on prior-year figures', 'Reviewing your P&L with your accountant annually in March or April'],
      'Making strategic decisions before the year ends to legally lower your tax liability',
      '"Tax planning is the act of making strategic decisions before the year ends to legally lower your tax liability. It is a forward-looking process." Examples include S-Corp elections, Section 179, and retirement contributions.',
      3,
    ),
    mc(
      'When vetting a potential accountant, what answer to "How do you handle tax planning?" signals a strategic partner rather than a compliance officer?',
      ['"I\'ll look at your numbers in March and find all the deductions we can take."', '"I make sure your taxes are filed correctly and on time."', '"We meet quarterly to project your year-end profit and implement strategies to lower your liability before December 31st."', '"I require all receipts by February 1st to begin your return."'],
      '"We meet quarterly to project your year-end profit and implement strategies to lower your liability before December 31st."',
      'This answer demonstrates proactive, forward-looking planning. The other answers describe reactive compliance — reporting what already happened rather than engineering a better outcome.',
      4,
    ),
    mc(
      'The lesson frames a good accountant as a "profit center" rather than a cost. The example given shows an accountant charging $2,000 who generates what total value?',
      ['$2,000 in tax savings, breaking even on the fee', '$5,000 in savings, a 150% ROI', '$13,000 in combined tax savings and wasted overhead reduction', '$20,000 in savings, covering five years of future fees'],
      '$13,000 in combined tax savings and wasted overhead reduction',
      '"If an accountant charges you $2,000 a year but finds $10,000 in tax savings and $5,000 in wasted overhead, they have generated $13,000 in value." The ROI of strategic accounting far exceeds the fee.',
      5,
    ),
  ],
}
