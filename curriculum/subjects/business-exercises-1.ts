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

export const businessExercises1: Record<string, ExerciseDef[]> = {
  'what-a-business-plan-actually-is': [
    mc(
      'According to the lesson, what is the primary purpose of a business plan written for yourself (not for outside investors)?',
      ['To satisfy legal requirements for forming an LLC', 'To force you to confront untested assumptions and identify gaps', 'To produce a 40-page document that impresses lenders', 'To predict your revenue three years into the future'],
      'To force you to confront untested assumptions and identify gaps',
      'Writing a business plan for yourself is a thinking tool. It reveals what you know and what you don\'t — gaps that are invisible when they\'re only in your head.',
      1,
    ),
    mc(
      'Which of the five core questions a business plan must answer is described as "the most underestimated question"?',
      ['What problem do you solve and for whom?', 'What does the money look like?', 'How will customers find out you exist?', 'What do you need to get started?'],
      'How will customers find out you exist?',
      'The lesson explicitly calls the marketing/discovery question "the most underestimated." A perfect product means nothing if customers can\'t find you.',
      2,
    ),
    mc(
      'The Lean Canvas format is recommended specifically because:',
      ['It satisfies SBA loan application requirements', 'It forces specific answers by fitting on a single page', 'It includes 3-year financial projections', 'It is required for seeking outside investors'],
      'It forces specific answers by fitting on a single page',
      'The Lean Canvas\'s constraint — fitting on one page — is exactly the point. You can\'t hide behind elaborate prose; you must commit to specific answers.',
      3,
    ),
    mc(
      'The lesson says financial projections in a business plan are best understood as:',
      ['Accurate forecasts you can bank on', 'Scenarios and assumptions, not predictions', 'Requirements set by the SBA', 'Guarantees of success for investors'],
      'Scenarios and assumptions, not predictions',
      'The lesson explicitly states: "Financial projections are scenarios and assumptions, not forecasts. Label them accordingly." You cannot accurately predict revenue 3 years out.',
      4,
    ),
    mc(
      'What does the lesson recommend as the goal of a first business plan draft?',
      ['Achieving a complete, polished 40-page document', 'Seeing what you know and what you don\'t', 'Satisfying all lender documentation requirements', 'Getting sign-off from a SCORE mentor before starting'],
      'Seeing what you know and what you don\'t',
      '"The goal of the first draft is not completeness. The goal is to see what you know and what you don\'t." A plan with identified gaps is useful; a blank page is not.',
      5,
    ),
  ],

  'defining-your-customer': [
    mc(
      'Why does the lesson argue that getting specific about your customer makes it easier to reach them?',
      ['Because niche markets always have less competition', 'Because a specific description tells you where to find them, what to say, and what they care about', 'Because regulators require a defined target market for LLC formation', 'Because broad audiences are too expensive to advertise to'],
      'Because a specific description tells you where to find them, what to say, and what they care about',
      'The lesson shows that a specific customer definition (e.g., restaurants with 1-3 locations) immediately tells you where to find them, what to say, and what they care about — making every decision easier.',
      1,
    ),
    mc(
      'The Jobs-to-Be-Done framework asks you to reframe customer definition by asking:',
      ['Who is my customer demographically?', 'What job is my customer trying to get done?', 'How much will my customer pay?', 'Where does my customer currently shop?'],
      'What job is my customer trying to get done?',
      'The Jobs-to-Be-Done lens shifts focus from "who is my customer?" to "what outcome are they trying to achieve?" This reveals who your real competitors are and what messaging resonates.',
      2,
    ),
    mc(
      'In the Jobs-to-Be-Done example about a cordless drill, what is identified as the customer\'s real job?',
      ['Making holes in the wall', 'Hanging a picture on the wall', 'Owning a power tool', 'Reducing home improvement costs'],
      'Hanging a picture on the wall',
      '"A cordless drill is hired to make holes. But that\'s not the real job. The real job is \'hang a picture on the wall.\'" Understanding the real job reveals your true competitors.',
      3,
    ),
    mc(
      'The "1000 True Fans" principle argues that a sustainable business requires:',
      ['At least one million social media followers', 'Customers across every demographic and geography', 'A small number of fans who will buy everything you make and refer others', 'A product appealing to the broadest possible market'],
      'A small number of fans who will buy everything you make and refer others',
      'Kevin Kelly\'s principle: 1,000 true fans at $100/year = $100,000 in revenue. The goal is to identify who would love what you do most, not the largest possible market.',
      4,
    ),
    mc(
      'When interviewing potential customers to test your assumptions, the lesson advises asking:',
      ['"Would you buy this product if we built it?"', '"How much would you pay for this?"', '"Tell me about the last time this was a problem for you. How did you handle it?"', '"What features would make you choose us over a competitor?"'],
      '"Tell me about the last time this was a problem for you. How did you handle it?"',
      'The lesson warns that "Would you buy this?" gets polite yes-answers. Open-ended questions about past behavior reveal real patterns and honest insights.',
      5,
    ),
  ],

  'revenue-models': [
    mc(
      'What is the primary disadvantage of a one-time transaction (direct sales) revenue model?',
      ['It is too complex to communicate to customers', 'Revenue doesn\'t compound — you\'re always hunting for the next sale', 'It requires a large upfront technology investment', 'Customers rarely pay on time for one-time purchases'],
      'Revenue doesn\'t compound — you\'re always hunting for the next sale',
      'The lesson lists the core disadvantage of direct sales as "Revenue doesn\'t compound — you\'re always hunting for the next sale" with no predictability.',
      1,
    ),
    mc(
      'Which revenue model gives businesses a "valuation premium" because investors and acquirers prefer it?',
      ['One-time transaction', 'Usage-based / metered', 'Recurring revenue / subscription', 'Advertising'],
      'Recurring revenue / subscription',
      'The lesson explicitly states that subscription/recurring revenue gives businesses a "valuation premium" because investors and acquirers love the predictability of recurring revenue.',
      2,
    ),
    mc(
      'In a freemium model, what conversion rate does the lesson say is typical for free users becoming paying customers?',
      ['20-30%', '10-15%', '2-5%', '50%+'],
      '2-5%',
      'The lesson states freemium "requires large user base to make the economics work (typically 2-5% convert to paid)." This is why freemium requires scale to be financially viable.',
      3,
    ),
    mc(
      'A retainer is described as a specific type of recurring revenue. What does the lesson identify as the key risk with retainers?',
      ['Clients are unlikely to pay monthly fees', 'Scope creep when what\'s included isn\'t clearly defined', 'Retainers require more administrative overhead than hourly billing', 'Clients prefer one-time pricing over retainers'],
      'Scope creep when what\'s included isn\'t clearly defined',
      '"Define scope carefully. A retainer without a clear definition of what\'s included leads to scope creep — the client asks for more and more and you\'re obligated to deliver without additional compensation."',
      4,
    ),
    mc(
      'According to the lesson, when is usage-based (metered) pricing most appropriate?',
      ['For service businesses where delivery is continuous', 'When customers can\'t predict their monthly budget', 'When usage varies significantly across customers and over time', 'For products where customers should pay a flat fee regardless of use'],
      'When usage varies significantly across customers and over time',
      'The lesson says usage-based is right for "businesses where usage varies significantly across customers and over time; infrastructure or API businesses." Examples include AWS and payment processors.',
      5,
    ),
  ],

  'what-cash-flow-is': [
    mc(
      'What does the lesson call the most dangerous belief a business owner can hold?',
      ['That profit equals revenue minus costs', 'That profit equals cash', 'That cash flow is only relevant for large businesses', 'That invoicing can be done monthly'],
      'That profit equals cash',
      '"The most dangerous lie a business owner can believe is that \'Profit = Cash.\'" A business can be profitable on paper and still go bankrupt because it ran out of actual cash.',
      1,
    ),
    mc(
      'In the Cash Conversion Cycle (CCC), what does a "Negative Cash Cycle" mean?',
      ['Your business is losing money on every job', 'You are collecting payments before you must pay your own suppliers', 'Your bank account balance is below zero', 'Your Days Payable Outstanding exceeds your revenue'],
      'You are collecting payments before you must pay your own suppliers',
      '"If you can collect money from customers faster (Lower DSO) and pay your suppliers slower (Higher DPO), you create a \'Negative Cash Cycle,\' where your customers are effectively financing your growth."',
      2,
    ),
    mc(
      'The lesson recommends a 13-week rolling forecast primarily because:',
      ['Banks require it for loan applications', 'Most business crises happen in the short term, requiring a granular near-term view', 'Annual budgets are too complex to build', 'It is required by GAAP accounting standards'],
      'Most business crises happen in the short term, requiring a granular near-term view',
      '"A yearly budget is for planning; a 13-Week Forecast is for survival. Because most business crises happen in the short term, you need a granular view of the next quarter."',
      3,
    ),
    mc(
      'How does the lesson define "Net Burn"?',
      ['Total monthly revenue minus total monthly profit', 'Total monthly expenses minus total monthly revenue', 'Total cash in the bank divided by monthly expenses', 'The interest rate on a business line of credit'],
      'Total monthly expenses minus total monthly revenue',
      'Net Burn = Total expenses minus total revenue. If monthly expenses are $5,000 and revenue is $3,000, Net Burn is $2,000 — the rate at which cash reserves are depleting.',
      4,
    ),
    mc(
      'The "Stability Pool" strategy is designed to solve which cash flow problem?',
      ['Slow-paying customers ignoring invoice due dates', 'Lumpy income — huge payments followed by dry spells that lead to overspending', 'High credit card processing fees reducing margins', 'Difficulty tracking expenses across multiple projects'],
      'Lumpy income — huge payments followed by dry spells that lead to overspending',
      'The Stability Pool addresses "lumpy income — huge payments followed by dry spells" and "Lifestyle Inflation" where the owner spends the windfall and then struggles during the dip.',
      5,
    ),
  ],

  'reading-a-pl': [
    mc(
      'The lesson describes Total Revenue (the top line) as a "vanity metric" because:',
      ['It is easy to manipulate through accounting tricks', 'It tells you how much the market wants your service but nothing about how much you actually keep', 'It doesn\'t account for taxes owed on profits', 'It is calculated differently by every accounting software'],
      'It tells you how much the market wants your service but nothing about how much you actually keep',
      '"Total Revenue (The Top Line): Every dollar that entered the business from sales. This is a vanity metric; it tells you how much the market wants your service, but it tells you nothing about how much you actually keep."',
      1,
    ),
    mc(
      'The "Direct vs. Indirect" test for distinguishing COGS from OpEx asks:',
      ['"Is this expense tax-deductible?"', '"Did I pay for this with the business account?"', '"If I didn\'t perform a single job this month, would I still have this expense?"', '"Is this expense over $500?"'],
      '"If I didn\'t perform a single job this month, would I still have this expense?"',
      'If yes, it\'s OpEx (overhead). If no, it\'s COGS (direct cost). Misclassifying expenses corrupts your margins and leads to wrong pricing decisions.',
      2,
    ),
    mc(
      'If a business has a high Gross Margin but a low Net Margin, the lesson says this signals:',
      ['The business is losing customers to competitors', 'A delivery leak — services are being underpriced', 'An overhead problem — administrative costs are eating the profit', 'The business is growing too slowly'],
      'An overhead problem — administrative costs are eating the profit',
      '"If you have a high Gross Margin but a low Net Margin, you have an \'Overhead Problem.\' Your delivery is efficient, but your administrative costs (OpEx) are eating all the profit."',
      3,
    ),
    mc(
      'The "Margin Compression" red flag in the P&L occurs when:',
      ['Revenue grows but expenses grow faster', 'Gross Margin steadily declines over several months as costs rise but prices don\'t', 'Net Income spikes unexpectedly in a single month', 'The gap between revenue and operating expenses widens'],
      'Gross Margin steadily declines over several months as costs rise but prices don\'t',
      '"If your Gross Margin is steadily declining over several months, you are facing \'Margin Compression.\' This happens when your costs (parts, labor) are rising, but you are failing to raise your prices to match."',
      4,
    ),
    mc(
      'In the "Growth Trap" case study, an operator tripled revenue but saw net income barely grow. The diagnosis included:',
      ['Losing high-margin customers to competitors', 'Gross Margin erosion from less-skilled labor plus OpEx bloat from a larger shop', 'Declining revenue per job due to poor pricing strategy', 'Tax increases that consumed most of the additional profit'],
      'Gross Margin erosion from less-skilled labor plus OpEx bloat from a larger shop',
      'The case study shows: hiring a less-skilled helper increased COGS (Gross Margin erosion) while moving to a larger shop increased fixed costs (OpEx bloat). The result: 3x the work for only 25% more profit.',
      5,
    ),
  ],

  'invoicing-and-getting-paid': [
    mc(
      'According to the lesson, what does a sloppy or delayed invoice subconsciously signal to the customer?',
      ['That the operator values relationships over profit', 'That the operator is unorganized, giving the customer a psychological excuse to deprioritize payment', 'That the operator is flexible and willing to negotiate terms', 'That the invoice amount may be too high'],
      'That the operator is unorganized, giving the customer a psychological excuse to deprioritize payment',
      '"When a customer receives a messy invoice, it signals that the operator is unorganized. This subconsciously gives the customer a psychological excuse to deprioritize the payment or question the charges."',
      1,
    ),
    mc(
      'The lesson\'s "Strategic Rule" for payment terms states that:',
      ['All customers should receive Net 30 terms as a professional courtesy', 'For small jobs always use credit cards; for large jobs always use checks', 'The larger the project, the more aggressive your payment terms should be', 'Net 15 is the universal best practice for service businesses'],
      'The larger the project, the more aggressive your payment terms should be',
      '"The Strategic Rule: The larger the project, the more aggressive your payment terms should be. Never use Net 30 for a job where you have high upfront material costs."',
      2,
    ),
    mc(
      'Why does the lesson recommend requiring a deposit before starting any project?',
      ['It is legally required in most states for projects over $1,000', 'It covers material costs and filters out unreliable clients who won\'t pay the final invoice', 'It allows the operator to charge a higher total price', 'It is the only way to qualify for early payment discounts from suppliers'],
      'It covers material costs and filters out unreliable clients who won\'t pay the final invoice',
      '"A deposit is not just for materials; it is a \'commitment fee.\' If a customer is unwilling to pay a deposit, they are a high-risk client who is likely to struggle with the final payment."',
      3,
    ),
    mc(
      'For large jobs, the lesson recommends prioritizing ACH or checks over credit cards because:',
      ['Credit cards have chargeback risk that can reverse payments', 'Credit card processing fees (2.9%+) can cost hundreds of dollars on large jobs', 'ACH payments are legally required for jobs over $5,000', 'Credit cards don\'t create an adequate audit trail'],
      'Credit card processing fees (2.9%+) can cost hundreds of dollars on large jobs',
      '"For large jobs, prioritize ACH or Checks to avoid losing hundreds of dollars in processing fees." The payment method strategy balances customer convenience against the cost to the business.',
      4,
    ),
    mc(
      'When is late fee language legally enforceable, according to the lesson?',
      ['Whenever it appears on the final invoice', 'Only when a contract is signed in the presence of a notary', 'Only when it was disclosed and agreed upon before the work began', 'Whenever the customer is more than 30 days overdue'],
      'Only when it was disclosed and agreed upon before the work began',
      '"To successfully charge a late fee, it must be disclosed and agreed upon before the work begins. If you simply add a late fee to a final invoice without prior notice, it is often unenforceable in court."',
      5,
    ),
  ],
}
