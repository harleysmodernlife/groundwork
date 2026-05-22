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

export const businessExercises6: Record<string, ExerciseDef[]> = {
  'trademarks': [
    mc(
      'The legal purpose of a trademark is to:',
      ['Prevent anyone from using a similar name in any industry', 'Identify the source of goods or services and prevent consumer confusion', 'Protect the visual design of a product', 'Register a business name with the state government'],
      'Identify the source of goods or services and prevent consumer confusion',
      'A trademark is a "source identifier." It tells consumers who is responsible for the quality of what they\'re buying — not just to protect the owner\'s brand, but to prevent the public from being misled.',
      1,
    ),
    mc(
      'On the trademark distinctiveness spectrum, which type of mark is the strongest and most protectable?',
      ['Descriptive marks that describe the product', 'Generic terms for the product category', 'Fanciful or arbitrary marks with no prior meaning', 'Geographic terms identifying where a product is made'],
      'Fanciful or arbitrary marks with no prior meaning',
      'Fanciful marks (invented words like "Xerox") and arbitrary marks (real words with no connection to the product, like "Apple" for computers) receive the strongest protection because they are the most distinctive.',
      2,
    ),
    mc(
      'What is the key risk of using a business name for years without registering it as a trademark?',
      ['You pay more in taxes without registration', 'Another party may register it first, legally forcing you to rebrand', 'Your business license becomes invalid', 'You cannot open a business bank account'],
      'Another party may register it first, legally forcing you to rebrand',
      'Common law rights from use have limits. A registered trademark owner can force you to stop using a name even if you used it first in your local area, destroying your SEO, signage, and customer recognition.',
      3,
    ),
    mc(
      'The ® symbol may only be used when:',
      ['You have been using the mark in commerce for at least 5 years', 'You have filed a trademark application with the USPTO', 'Your trademark has been officially registered by the USPTO', 'Your business is incorporated as an LLC or corporation'],
      'Your trademark has been officially registered by the USPTO',
      '™ can be used any time you claim rights to a mark. ® is reserved for marks that have completed the USPTO registration process — using it before registration is a federal violation.',
      4,
    ),
    mc(
      'Trademark protection requires:',
      ['Paying annual renewal fees regardless of whether the mark is used', 'Continuous use in commerce — abandonment voids protection', 'Only the initial registration fee with no future maintenance', 'Registration in every country where you sell products'],
      'Continuous use in commerce — abandonment voids protection',
      'A trademark that is not actively used in commerce can be deemed abandoned, voiding the registration. Owners must also police their mark — failure to challenge infringers can weaken or eliminate the protection.',
      5,
    ),
  ],

  'tax-planning-basics': [
    mc(
      'The key difference between tax compliance and tax planning is:',
      ['Compliance is illegal; planning is the legal approach', 'Compliance is reactive (filing based on past results); planning is proactive (structuring the business to minimize liability year-round)', 'Compliance requires a CPA; planning can be done independently', 'Planning applies only to corporations, not sole proprietors'],
      'Compliance is reactive (filing based on past results); planning is proactive (structuring the business to minimize liability year-round)',
      'Most owners only do compliance — they find out what they owe in April. Tax planning means making decisions throughout the year to legally reduce what you\'ll owe before it happens.',
      1,
    ),
    mc(
      'A business owner buys new equipment before December 31. This is an example of:',
      ['Tax evasion — accelerating deductions is illegal', 'Timing strategy — shifting deductions into the current tax year to reduce this year\'s liability', 'Income deferral — pushing taxable income into the next year', 'A capital gains optimization strategy'],
      'Timing strategy — shifting deductions into the current tax year to reduce this year\'s liability',
      'Purchasing deductible equipment before year-end moves the deduction into the current tax year, reducing taxable income now. This is a legal and common tax planning move.',
      2,
    ),
    mc(
      'For most small business owners, the most effective single tax reduction strategy is:',
      ['Incorporating as a C-Corporation to access lower corporate tax rates', 'Contributing the maximum allowed amount to a qualified retirement account', 'Filing taxes quarterly instead of annually', 'Registering in a state with no income tax'],
      'Contributing the maximum allowed amount to a qualified retirement account',
      'Pre-tax retirement contributions directly reduce taxable income dollar-for-dollar. A SEP-IRA or Solo 401(k) can shield tens of thousands from taxation annually — often more impactful than any other single strategy.',
      3,
    ),
    mc(
      'The home office deduction requires that the space be used:',
      ['At least 8 hours per week for business purposes', 'Regularly and exclusively for business — no personal use allowed', 'In a separate building from the main residence', 'Only if the business is an LLC or corporation'],
      'Regularly and exclusively for business — no personal use allowed',
      '"Exclusive use" is the IRS\'s strict requirement. A guest room that doubles as an office doesn\'t qualify. The space must be used only for business to claim the deduction.',
      4,
    ),
    mc(
      'Quarterly estimated tax payments are required when you expect to owe:',
      ['Any amount of federal taxes', 'At least $1,000 in taxes after withholding and credits', 'More than $10,000 in self-employment income', 'Taxes in more than one state'],
      'At least $1,000 in taxes after withholding and credits',
      'The IRS requires quarterly estimates when your expected tax liability exceeds $1,000 after accounting for withholding. Missing these payments results in underpayment penalties, even if you pay the full amount by April.',
      5,
    ),
  ],

  'retirement-accounts': [
    mc(
      'The primary tax advantage of a traditional retirement account for a self-employed person is:',
      ['Withdrawals in retirement are tax-free', 'Contributions reduce taxable income in the year they are made', 'The IRS matches contributions up to 3% of income', 'Capital gains inside the account are taxed at a lower rate'],
      'Contributions reduce taxable income in the year they are made',
      'Traditional accounts (SEP-IRA, Solo 401k traditional) are funded with pre-tax dollars — every dollar contributed reduces your taxable income that year. You pay taxes on the money when you withdraw it in retirement.',
      1,
    ),
    mc(
      'A SEP-IRA allows self-employed individuals to contribute up to:',
      ['$7,000 per year regardless of income', '25% of net self-employment income, up to the annual IRS limit', '15% of gross revenue before expenses', '$23,000 per year if under age 50'],
      '25% of net self-employment income, up to the annual IRS limit',
      'The SEP-IRA contribution limit is 25% of net self-employment earnings (after the self-employment tax deduction), up to the IRS annual maximum. This makes it one of the most powerful retirement tools for high-earning self-employed individuals.',
      2,
    ),
    mc(
      'Compared to a SEP-IRA, the Solo 401(k) has the advantage of:',
      ['Lower administrative costs and no paperwork', 'Allowing Roth (after-tax) contributions and potentially higher contribution limits at lower income levels', 'Being available to businesses with up to 10 employees', 'Requiring no earned income to contribute'],
      'Allowing Roth (after-tax) contributions and potentially higher contribution limits at lower income levels',
      'The Solo 401(k) allows both employee and employer contributions, enabling higher total contributions at lower income levels. It also allows a Roth option, where contributions are after-tax but withdrawals in retirement are tax-free.',
      3,
    ),
    mc(
      'The Roth retirement account trade-off is:',
      ['Pay taxes now on contributions; withdrawals in retirement are tax-free', 'Pay no taxes now; pay taxes on all withdrawals in retirement', 'Pay reduced taxes now; pay no taxes in retirement', 'No taxes at any stage, but contribution limits are lower'],
      'Pay taxes now on contributions; withdrawals in retirement are tax-free',
      'Roth accounts use after-tax dollars — you get no deduction today. The benefit is that qualified withdrawals in retirement, including all growth, are completely tax-free. This is valuable when you expect to be in a higher tax bracket in retirement.',
      4,
    ),
    mc(
      'Early withdrawal from a retirement account before age 59½ typically results in:',
      ['A 5% penalty plus income taxes on the amount withdrawn', 'A 10% early withdrawal penalty plus ordinary income taxes on the amount', 'No penalty if the funds are repaid within 60 days', 'Forfeiture of the entire account balance'],
      'A 10% early withdrawal penalty plus ordinary income taxes on the amount',
      'Withdrawing retirement funds early triggers a 10% penalty on top of ordinary income taxes on the withdrawn amount. This double cost — penalty plus taxes — makes early withdrawal extremely expensive and should be a last resort.',
      5,
    ),
  ],

  'hiring-tax-help': [
    mc(
      'The key distinction between a bookkeeper and a CPA is:',
      ['Bookkeepers handle taxes; CPAs handle payroll', 'Bookkeepers record daily financial transactions; CPAs analyze, plan, and handle complex tax work', 'CPAs are required by law for any business over $100k in revenue', 'Bookkeepers are only needed for cash-based businesses'],
      'Bookkeepers record daily financial transactions; CPAs analyze, plan, and handle complex tax work',
      'A bookkeeper maintains the financial records — categorizing transactions, reconciling accounts. A CPA uses those records for tax strategy, planning, and filing. Both roles are distinct and often both are needed.',
      1,
    ),
    mc(
      'When should a business owner first engage a CPA, according to best practice?',
      ['Only after the business reaches $500,000 in annual revenue', 'After the first tax season to review past returns', 'Before starting the business, during the entity formation stage', 'When the IRS sends a notice or audit request'],
      'Before starting the business, during the entity formation stage',
      'Entity type (LLC, S-Corp, etc.) has significant tax implications that are hard to undo later. A CPA consulted before formation can structure the business to optimize taxes from day one rather than clean up mistakes later.',
      2,
    ),
    mc(
      'An S-Corp election can save self-employment taxes because:',
      ['S-Corps pay no federal income taxes', 'Only the "reasonable salary" portion is subject to self-employment tax; distributions are not', 'S-Corp owners receive a 20% deduction on all income', 'The IRS exempts S-Corps from quarterly estimated payments'],
      'Only the "reasonable salary" portion is subject to self-employment tax; distributions are not',
      'Self-employed individuals pay 15.3% SE tax on all net profit. An S-Corp owner pays SE tax only on their salary. Additional profit taken as a distribution avoids SE tax, which can mean significant savings at higher income levels.',
      3,
    ),
    mc(
      'The most important thing to provide a new tax professional at the start of the relationship is:',
      ['A list of all planned future purchases', 'Complete, organized financial records and prior-year tax returns', 'A projection of next year\'s expected revenue', 'The business\'s articles of incorporation'],
      'Complete, organized financial records and prior-year tax returns',
      'A tax professional can only work with the data you provide. Disorganized or incomplete records force them to spend billable time on cleanup rather than strategy. Prior-year returns show your history and any carryforward items.',
      4,
    ),
    mc(
      'Red flags that suggest you need to find a new tax professional include:',
      ['They ask detailed questions about your business model and deductions', 'They suggest aggressive deductions without documentation and never proactively contact you', 'They charge more than $500 for a business tax return', 'They recommend quarterly estimated payments'],
      'They suggest aggressive deductions without documentation and never proactively contact you',
      'A good tax professional asks questions, documents everything, and reaches out proactively with planning opportunities. One who files without questions and pushes undocumented deductions is creating legal risk for you — you sign the return and are responsible for it.',
      5,
    ),
  ],

  'when-to-hire': [
    mc(
      'The "true cost" of a hire is typically how much more than the employee\'s salary?',
      ['5–10% more, just for payroll taxes', '25–40% more, including taxes, benefits, equipment, and management overhead', 'Exactly the salary — benefits are optional', '50–75% more due to training and onboarding costs alone'],
      '25–40% more, including taxes, benefits, equipment, and management overhead',
      'Beyond salary, an employer pays payroll taxes (~7.65%), often contributes to benefits, provides equipment and software, spends management time, and absorbs the cost of the learning curve. The true cost is substantially higher than the salary.',
      1,
    ),
    mc(
      'The clearest signal that it\'s time to hire is when:',
      ['Your revenue has grown for two consecutive months', 'You are consistently turning away work or delivering poor quality because you\'re at capacity', 'A competitor has more employees than you', 'You feel overwhelmed on busy days'],
      'You are consistently turning away work or delivering poor quality because you\'re at capacity',
      'Occasional busy periods don\'t justify a hire. When you\'re regularly losing revenue or damaging quality because one person can\'t do it all, the business has outgrown its current capacity — that\'s the signal.',
      2,
    ),
    mc(
      'Before hiring a full-time employee, the preferred lower-risk approach is to:',
      ['Hire two part-time workers instead of one full-time', 'Work longer hours yourself to delay the cost as long as possible', 'Start with a contractor or fractional hire to validate the need before committing', 'Post a job ad and hire whoever applies first'],
      'Start with a contractor or fractional hire to validate the need before committing',
      'Contractors have no guaranteed hours and fewer legal obligations. Using a contractor first lets you test whether the workload is real and sustained before taking on the fixed cost and legal obligations of a permanent employee.',
      3,
    ),
    mc(
      'Hiring too early most commonly results in:',
      ['Better customer service from having extra capacity', 'Cash flow problems when revenue doesn\'t cover the new fixed labor cost', 'Lower quality work because the new hire is underutilized', 'IRS scrutiny over payroll tax increases'],
      'Cash flow problems when revenue doesn\'t cover the new fixed labor cost',
      'A premature hire adds a fixed monthly cost before the revenue to support it exists. If revenue dips or growth stalls, the business is stuck paying for a person it can\'t fully utilize — a common cause of small business cash crises.',
      4,
    ),
    mc(
      'Which task is the best candidate to delegate to a first hire?',
      ['Strategic business decisions that require owner judgment', 'Repetitive, well-documented tasks that consume the owner\'s time but don\'t require their expertise', 'Customer relationship management with key accounts', 'Tasks the owner hasn\'t done themselves and can\'t teach'],
      'Repetitive, well-documented tasks that consume the owner\'s time but don\'t require their expertise',
      'Delegating repetitive, documentable tasks frees the owner for high-value work only they can do. Tasks the owner can\'t explain or hasn\'t done themselves are impossible to delegate effectively — you can\'t manage what you don\'t understand.',
      5,
    ),
  ],

  'contractor-vs-employee': [
    mc(
      'The IRS determines worker classification primarily based on:',
      ['Whether the worker prefers to be a contractor', 'The label used in the contract (contractor vs. employee)', 'The degree of behavioral, financial, and type-of-relationship control the business exercises', 'Whether the worker has their own business license'],
      'The degree of behavioral, financial, and type-of-relationship control the business exercises',
      'The IRS "Right to Control" test looks at whether the business controls how work is done (behavioral), whether the business controls financial aspects (financial), and the nature of the relationship. Labels in contracts are irrelevant if the reality is an employment relationship.',
      1,
    ),
    mc(
      'Which situation most strongly indicates a worker should be classified as an employee, not a contractor?',
      ['The worker sets their own hours and works from home', 'The worker uses their own tools and works for multiple clients', 'The business dictates exactly how, when, and where the work must be done', 'The worker invoices the business monthly'],
      'The business dictates exactly how, when, and where the work must be done',
      'Behavioral control — telling a worker when to show up, exactly how to do every task, and requiring them to use your tools on your schedule — is a hallmark of employment. Independent contractors control their own methods and schedule.',
      2,
    ),
    mc(
      'Misclassifying an employee as a contractor exposes the business to:',
      ['Only a small administrative fine from the IRS', 'Back payroll taxes, unpaid overtime, benefits owed, and potential criminal liability', 'A temporary suspension of business operations', 'Loss of contractor\'s invoices as tax deductions'],
      'Back payroll taxes, unpaid overtime, benefits owed, and potential criminal liability',
      'The penalties for misclassification are severe: back taxes for the employer\'s share of FICA, potential overtime pay, workers\' compensation claims, and state labor board fines. These can reach six figures and threaten the business\'s survival.',
      3,
    ),
    mc(
      'A legitimate independent contractor relationship typically includes:',
      ['The contractor working exclusively for one client indefinitely', 'The contractor being free to work for multiple clients and control their own methods', 'The business providing all tools, software, and equipment', 'The contractor receiving the same benefits as employees'],
      'The contractor being free to work for multiple clients and control their own methods',
      'True contractors run their own businesses. They typically have multiple clients, use their own tools, set their own hours, and bear their own business expenses. Exclusivity and tool provision by the client are signs of employment.',
      4,
    ),
    mc(
      'When issuing payments to a contractor, the business must:',
      ['Withhold federal and state income taxes just like an employee', 'Send a 1099-NEC for payments of $600 or more in a calendar year', 'Pay the contractor\'s half of Social Security and Medicare taxes', 'Register the contractor on the state payroll system'],
      'Send a 1099-NEC for payments of $600 or more in a calendar year',
      'Contractors handle their own taxes — no withholding. However, the business must issue a 1099-NEC to any contractor paid $600 or more in a year and file a copy with the IRS. Failing to file 1099s is itself a penalty-triggering mistake.',
      5,
    ),
  ],

  'finding-good-people': [
    mc(
      'Why does posting a job ad on job boards often fail to attract top-tier talent?',
      ['Job boards charge too much for small businesses to compete', 'The best candidates are already employed and not actively searching job boards', 'Job ads attract too many applicants to evaluate effectively', 'Top candidates require higher salaries than small businesses can afford'],
      'The best candidates are already employed and not actively searching job boards',
      'The top 10–20% of workers are generally satisfied and employed. They\'re not browsing Indeed. Reaching them requires active scouting — identifying people who are already demonstrating their value in the real world.',
      1,
    ),
    mc(
      'The most reliable source for finding high-quality candidates is:',
      ['Anonymous job board postings', 'Referrals from your existing trusted employees and network', 'Recruiting agencies that specialize in your industry', 'Social media job posts'],
      'Referrals from your existing trusted employees and network',
      'People refer people they\'d stake their reputation on. A referral from a trusted employee comes pre-vetted by someone who knows both the candidate and your culture. Referred hires consistently outperform cold-recruited ones.',
      2,
    ),
    mc(
      'A work sample test during hiring is valuable because:',
      ['It reduces the time spent on reference checks', 'Past performance on actual job tasks predicts future performance better than interviews alone', 'It filters out candidates who aren\'t willing to work for free', 'It satisfies legal requirements for non-discrimination'],
      'Past performance on actual job tasks predicts future performance better than interviews alone',
      'Interviews measure how well someone interviews. Work samples — a real task relevant to the job — measure how well they actually do the work. They\'re among the highest-validity predictors of job performance.',
      3,
    ),
    mc(
      'When evaluating references, the most useful question to ask is:',
      ['"Would you rehire this person?"', '"What were their greatest strengths?"', '"Did they get along with the team?"', '"What were their biggest accomplishments?"'],
      '"Would you rehire this person?"',
      '"Would you rehire them?" is the most predictive reference question. It forces a yes/no answer that cuts through polished praise. Hesitation or a "no" reveals more than any answer about strengths.',
      4,
    ),
    mc(
      'Hiring for cultural fit alongside skills means:',
      ['Only hiring people who share the owner\'s personality and background', 'Selecting candidates whose values and work style align with how the team operates, reducing friction and attrition', 'Avoiding candidates with different opinions or approaches', 'Prioritizing personality over all technical qualifications'],
      'Selecting candidates whose values and work style align with how the team operates, reducing friction and attrition',
      'Cultural fit is about values and working style — not personality clones. Someone with the right skills but wrong values causes more damage than someone with slightly fewer skills who fits the team well.',
      5,
    ),
  ],

  'onboarding': [
    mc(
      '"Time-to-value" in onboarding refers to:',
      ['How quickly a new hire can type and communicate', 'The time between a hire\'s first paycheck and when they produce more value than they cost', 'The length of the probationary period before benefits begin', 'How fast a new hire completes required compliance training'],
      'The time between a hire\'s first paycheck and when they produce more value than they cost',
      'Every new hire starts as a net cost — salary plus management overhead exceeds their output. Good onboarding shrinks this period by giving new hires the information, tools, and clarity to become productive as fast as possible.',
      1,
    ),
    mc(
      'The first week of onboarding should primarily focus on:',
      ['Assigning the new hire their most complex project to test their capabilities', 'Context, culture, and foundational systems — not yet expecting full output', 'Getting the new hire up to 100% productivity immediately', 'Completing all HR paperwork and compliance requirements'],
      'Context, culture, and foundational systems — not yet expecting full output',
      'Week one is about orientation: who does what, how decisions are made, what the tools are, and what success looks like. Throwing complex work at someone before they have context creates frustration and poor-quality output.',
      2,
    ),
    mc(
      'Written processes and SOPs (Standard Operating Procedures) matter most during onboarding because:',
      ['They satisfy legal HR requirements', 'They allow the owner to stop answering the same questions repeatedly and ensure consistent quality', 'They prove to the new hire that the business is professional', 'They are required for all hires in regulated industries'],
      'They allow the owner to stop answering the same questions repeatedly and ensure consistent quality',
      'If there\'s no written process, every new hire learns differently and the owner spends time re-explaining the same things. SOPs capture institutional knowledge, reducing training time and quality variance.',
      3,
    ),
    mc(
      'Setting a 30-60-90 day plan for a new hire accomplishes:',
      ['Gives the owner a reason to end employment if goals aren\'t met in 30 days', 'Creates clear milestones so both the hire and the owner know what success looks like at each stage', 'Satisfies IRS requirements for documenting employment relationships', 'Replaces the need for regular check-in meetings'],
      'Creates clear milestones so both the hire and the owner know what success looks like at each stage',
      'Ambiguity is the enemy of onboarding. A 30-60-90 plan gives the new hire a concrete roadmap and gives the owner measurable checkpoints to assess progress and course-correct early.',
      4,
    ),
    mc(
      'Most new hire failures can be traced to:',
      ['The candidate exaggerating qualifications in the interview', 'Poor onboarding — unclear expectations, insufficient training, and lack of feedback', 'Personality conflicts with existing team members', 'Compensation that is below market rate'],
      'Poor onboarding — unclear expectations, insufficient training, and lack of feedback',
      'Studies consistently show that most early-tenure failures aren\'t due to lack of skill — they\'re due to the new hire not knowing what\'s expected, not being trained on the actual systems, or never receiving feedback on their performance.',
      5,
    ),
  ],

  'payroll-basics': [
    mc(
      'Why is payroll considered a "legal trust" rather than just a business expense?',
      ['Employees can sue for breach of contract if paid late', 'Withheld taxes belong to the government, not the business — misusing them is a criminal offense', 'Payroll is governed by trust law in most states', 'Employees must sign a trust agreement before receiving wages'],
      'Withheld taxes belong to the government, not the business — misusing them is a criminal offense',
      'When you withhold income taxes and FICA from an employee\'s paycheck, that money is held in trust for the IRS. Using it for business expenses and failing to remit it is tax fraud — a criminal charge, not just a civil penalty.',
      1,
    ),
    mc(
      'The employer\'s share of FICA (Social Security and Medicare) taxes is:',
      ['0% — only employees pay FICA', '7.65% of each employee\'s wages', '15.3% — the full FICA rate is paid by the employer', '3% of total annual payroll'],
      '7.65% of each employee\'s wages',
      'FICA is split 50/50. Employees pay 7.65% withheld from their check; employers pay a matching 7.65% out of pocket. Self-employed individuals pay both halves (15.3%) since they are both employer and employee.',
      2,
    ),
    mc(
      'The difference between gross pay and net pay is:',
      ['Gross is annual salary; net is the monthly amount', 'Gross is before all deductions; net is what the employee actually receives after taxes and withholdings', 'Gross includes overtime; net does not', 'Net pay is always exactly 75% of gross pay'],
      'Gross is before all deductions; net is what the employee actually receives after taxes and withholdings',
      'Gross pay is the full amount earned. Net pay — the amount deposited in the employee\'s account — is gross minus federal and state income tax withholding, FICA, health insurance premiums, retirement contributions, and other deductions.',
      3,
    ),
    mc(
      'Payroll taxes must be deposited with the IRS:',
      ['Annually when the business files its tax return', 'Only when the total accumulated taxes exceed $50,000', 'On a schedule (semi-weekly or monthly) determined by the business\'s total tax liability', 'Quarterly, at the same time as estimated income taxes'],
      'On a schedule (semi-weekly or monthly) determined by the business\'s total tax liability',
      'The IRS assigns deposit schedules based on prior-year payroll tax liability. Missing the deposit deadline triggers penalties that compound quickly — unlike income taxes, payroll tax deposits have strict, frequent deadlines.',
      4,
    ),
    mc(
      'Using payroll software or a payroll service is recommended primarily because:',
      ['It eliminates all payroll tax liability for the business owner', 'Payroll regulations are complex and constantly changing — errors create automatic IRS penalties', 'The IRS requires digital payroll processing for businesses over $100k in revenue', 'It allows the business to delay tax deposits by 30 days'],
      'Payroll regulations are complex and constantly changing — errors create automatic IRS penalties',
      'Payroll involves federal and state withholding tables, deposit schedules, multiple forms (941, W-2, etc.), and state-specific rules. The IRS automatically assesses penalties for late deposits and filing errors — software reduces but doesn\'t eliminate this risk.',
      5,
    ),
  ],

  'letting-someone-go': [
    mc(
      '"At-will employment" means:',
      ['Employees can only be fired if they agree to it', 'Either party can end the employment relationship at any time, for any legal reason, with no required notice', 'Employers must provide 30 days notice before terminating an employee', 'Employees can leave without notice but employers cannot'],
      'Either party can end the employment relationship at any time, for any legal reason, with no required notice',
      'At-will is the default in most US states. Employers can terminate for any reason that isn\'t illegal (discrimination, retaliation). However, contracts and implied promises can override at-will status, and documentation still matters for unemployment claims.',
      1,
    ),
    mc(
      'The most important reason to document performance issues before terminating an employee is:',
      ['It gives the employee a chance to improve', 'It protects the business against wrongful termination claims and unemployment disputes', 'It satisfies OSHA safety documentation requirements', 'It reduces the employee\'s severance entitlement'],
      'It protects the business against wrongful termination claims and unemployment disputes',
      'Without documentation, a fired employee can claim the termination was discriminatory or retaliatory. Written warnings, performance improvement plans, and dated records create a paper trail showing the decision was based on documented, consistent, legitimate business reasons.',
      2,
    ),
    mc(
      'A Performance Improvement Plan (PIP) should include:',
      ['A predetermined termination date regardless of performance', 'Specific measurable goals, a clear timeline, and the consequences of not meeting them', 'Only positive reinforcement without mentioning termination', 'Approval from an employment attorney before every use'],
      'Specific measurable goals, a clear timeline, and the consequences of not meeting them',
      'A vague PIP is useless legally and practically. It must specify exactly what improvement is expected (measurable), by when, and what happens if the standard isn\'t met. This creates clarity for the employee and documentation for the employer.',
      3,
    ),
    mc(
      'During a termination meeting, best practice is to:',
      ['Give extensive feedback on all past performance issues to help the employee grow', 'Keep it brief, clear, and final — state the decision without lengthy debate or negotiation', 'Allow the employee to argue their case and reconsider if they make good points', 'Have the conversation over email to create a written record'],
      'Keep it brief, clear, and final — state the decision without lengthy debate or negotiation',
      'A termination meeting is not a performance review or a negotiation. Prolonging it or reopening the decision creates emotional distress and legal risk. State the decision clearly, provide next steps (final pay, return of equipment), and end the meeting.',
      4,
    ),
    mc(
      'Providing a small severance package during a termination primarily serves to:',
      ['Guarantee the employee won\'t file for unemployment benefits', 'Compensate the employee for their loyalty as required by law', 'Obtain a signed release of claims in exchange for the payment, reducing litigation risk', 'Satisfy IRS requirements for business deductions on labor costs'],
      'Obtain a signed release of claims in exchange for the payment, reducing litigation risk',
      'Severance is rarely legally required (absent a contract). Its value is in the exchange: the business offers payment; the employee signs a separation agreement releasing legal claims. This closes the door on future lawsuits related to the employment.',
      5,
    ),
  ],
}
