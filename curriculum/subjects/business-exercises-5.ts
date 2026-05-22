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

export const businessExercises5: Record<string, ExerciseDef[]> = {
  trademarks: [
    mc(
      'On the trademark distinctiveness spectrum, which category is the hardest to protect and provides the weakest legal coverage?',
      ['Fanciful marks (completely made-up words)', 'Arbitrary marks (real words used out of context)', 'Suggestive marks (hint at the product with imagination required)', 'Descriptive marks (describe a quality or characteristic of the product)'],
      'Descriptive marks (describe a quality or characteristic of the product)',
      '"Descriptive marks describe a quality, ingredient, or characteristic of the product... These are generally not protectable unless they acquire \'Secondary Meaning\' over many years of use." The lesson advises aiming for Arbitrary or Fanciful.',
      1,
    ),
    mc(
      'The "Likelihood of Confusion" standard used by the USPTO evaluates marks across three dimensions:',
      ['Size, color, and industry classification', 'Sight (visual similarity), Sound (phonetic similarity), and Meaning (same idea)', 'Price, quality, and geographic market', 'Registration date, usage history, and geographic scope'],
      'Sight (visual similarity), Sound (phonetic similarity), and Meaning (same idea)',
      '"The Three-Point Test: Sight (Do the marks look similar?), Sound (Do they sound the same when spoken?), Meaning (Do they convey the same idea?)" If any overlap and the businesses are in the same industry, the mark is likely infringing.',
      2,
    ),
    mc(
      'What is the difference between using the ™ symbol and the ® symbol?',
      ['™ is for products; ® is for services', '™ indicates common law rights from use in commerce; ® can only be used after the USPTO officially grants federal registration', '™ is for small businesses; ® is for corporations', '™ protects the name; ® protects the logo design'],
      '™ indicates common law rights from use in commerce; ® can only be used after the USPTO officially grants federal registration',
      '"Common Law Rights (™): As soon as you sell a product under a name, you have Common Law rights. Federal Registration (®): To get nationwide protection, you must register with the USPTO. You can only use ® after the government officially grants the registration."',
      3,
    ),
    mc(
      '"Genericide" is the process by which a trademark is lost because:',
      ['The owner fails to pay the maintenance fees to the USPTO', 'The brand becomes so successful that its name becomes the common word for the product category', 'A competitor successfully challenges the mark in the Trademark Trial and Appeal Board', 'The owner allows the mark to be used without a license for more than five years'],
      'The brand becomes so successful that its name becomes the common word for the product category',
      '"\'Genericide\' happens when a brand becomes so successful that its name becomes the common word for the product. \'Escalator,\' \'Aspirin,\' and \'Thermos\' were all once trademarks." The fix: never use your trademark as a noun or a verb.',
      4,
    ),
    mc(
      'An Intent-to-Use (ITU) trademark application is most useful when:',
      ['Your mark has been rejected once and you want to appeal the decision', 'You haven\'t launched yet but want to reserve a name while building the business', 'You are filing internationally under the Madrid Protocol', 'Your business has been operating for less than one year'],
      'You haven\'t launched yet but want to reserve a name while building the business',
      '"If you haven\'t launched yet but want to lock in a name, you can file an ITU application. This reserves the name for you while you build the business, preventing others from stealing it before you launch."',
      5,
    ),
  ],

  'copyright-basics': [
    mc(
      'When you hire a freelancer to create a logo, who owns the copyright by default under US law?',
      ['The business that paid for it, because they funded the work', 'The freelancer, because creators own their work unless a written transfer occurs', 'Both parties jointly, in proportion to the amount paid', 'Neither party until the work is registered with the US Copyright Office'],
      'The freelancer, because creators own their work unless a written transfer occurs',
      '"Under US law, the creator is the owner unless a specific legal transfer occurs. If an independent contractor creates work, they own the copyright by default. The client only receives a \'license\' to use the work unless there is a written agreement stating otherwise."',
      1,
    ),
    mc(
      'Of the four Fair Use factors, which one is most likely to make a use unfair?',
      ['The use is transformative and adds new meaning', 'The original work is factual rather than creative', 'The use is for educational rather than commercial purposes', 'The use replaces the original and reduces demand for it in the market'],
      'The use replaces the original and reduces demand for it in the market',
      '"Factor 4 — The Effect on the Market: Does your use of the work replace the original? If people stop buying the original because they can get it from you, it is almost never Fair Use." This is the factor that most directly harms the copyright owner.',
      2,
    ),
    mc(
      'What are the two major legal benefits of registering a copyright with the US Copyright Office before infringement occurs?',
      ['Automatic takedown of infringing content and criminal prosecution of infringers', 'Access to statutory damages ($750-$30,000 per work) and a presumption of ownership in court', 'Unlimited license to use other registered works and free legal representation in infringement cases', 'A 20-year extension of the copyright term and exemption from fair use claims'],
      'Access to statutory damages ($750-$30,000 per work) and a presumption of ownership in court',
      '"1. Statutory Damages: If you register before the infringement occurs, you can claim statutory damages (often $750 to $30,000). 2. Presumption of Validity: A registration certificate is prime evidence in court that you are the legal owner."',
      3,
    ),
    mc(
      'A DMCA Takedown Notice allows you to force a web host to remove infringing content. For it to be valid, it must include:',
      ['A letter from your attorney and a copy of your copyright registration', 'A description of the original work, the exact URL of the infringing content, your contact info, and a statement of accuracy under penalty of perjury', 'Payment of the DMCA filing fee to the US Copyright Office', 'Proof that you contacted the infringer directly at least once before filing'],
      'A description of the original work, the exact URL of the infringing content, your contact info, and a statement of accuracy under penalty of perjury',
      'These are the required components of a valid DMCA notice. Missing any element can invalidate the notice. Filing a false DMCA notice is also a legal offense.',
      4,
    ),
    mc(
      'To legally use a copyrighted song in a video ad, you need two separate licenses because music has two distinct copyrights. They are:',
      ['The Performance License and the Distribution License', 'The Sync License (composition) and the Master Use License (recording)', 'The Public Display License and the Reproduction License', 'The Publishing License and the Broadcast License'],
      'The Sync License (composition) and the Master Use License (recording)',
      '"Every song has two separate copyrights: The Composition (lyrics and melody — owned by the songwriter/publisher) and The Master Recording (specific audio — owned by the record label). You must obtain both a Sync License AND a Master Use License. Getting only one still means you\'re infringing."',
      5,
    ),
  ],

  'when-to-get-a-lawyer': [
    mc(
      'The lesson identifies three categories of business problems. Which category requires calling a lawyer immediately?',
      ['Business disputes over expectations or performance (e.g., a customer unhappy with paint color)', 'Grey area situations with high mistake risk (e.g., drafting a partnership agreement)', 'Legal liabilities involving violated rights or statutory requirements (e.g., a breach of contract or injury claim)', 'Operational inefficiencies that affect profit margins'],
      'Legal liabilities involving violated rights or statutory requirements (e.g., a breach of contract or injury claim)',
      '"Legal Liability (Call a Lawyer Immediately): These are situations where a legal right has been violated or a statutory requirement has been missed. These problems cannot be \'negotiated\' away without legal risk."',
      1,
    ),
    mc(
      'Using the wrong type of specialist — such as hiring a general practitioner to handle a patent dispute — is compared in the lesson to:',
      ['Using a screwdriver when you need a wrench', 'Hiring a general practitioner to perform heart surgery', 'Driving across town when you could fly', 'Using a template contract when you need a custom agreement'],
      'Hiring a general practitioner to perform heart surgery',
      '"Using the wrong type of lawyer is like hiring a general practitioner to perform heart surgery. While a general lawyer can handle basic tasks, complex problems require a specialist." The lesson lists Employment, Tax Attorney, IP, and Litigator as distinct specialties.',
      2,
    ),
    mc(
      'The "Lawyer-Ready" protocol reduces your legal bill by 30-50% because:',
      ['You can negotiate a fixed-fee arrangement rather than hourly billing', 'Organizing a chronological timeline and communication log allows the lawyer to spend time on strategy rather than discovery', 'Paralegals complete preparation work at lower rates when documents are well organized', 'Many routine legal tasks can be skipped when documentation is comprehensive'],
      'Organizing a chronological timeline and communication log allows the lawyer to spend time on strategy rather than discovery',
      '"When you provide a structured file, the lawyer spends their time giving you advice rather than doing discovery. This is the most efficient way to use professional legal counsel."',
      3,
    ),
    mc(
      'The ROI calculation for preventative legal review is illustrated by comparing a $500 contract review fee to:',
      ['The $1,000 cost of a simple contract template from a legal website', 'A $10,000 litigation cost to defend a lawsuit caused by a vague liability clause', 'The $2,500 annual retainer fee for ongoing legal counsel', 'A $5,000 penalty for missing a licensing requirement'],
      'A $10,000 litigation cost to defend a lawsuit caused by a vague liability clause',
      '"The Cost of Prevention: Paying a lawyer $500 to review a contract for 2 hours. The Cost of Failure: Spending $10,000 on a litigator to defend a lawsuit because that contract had a vague liability clause." Prevention is 20x cheaper.',
      4,
    ),
    mc(
      'The lesson\'s "Preventative Law Calendar" recommends a Q4 (October-December) activity of:',
      ['Reviewing your corporate entity formation documents and meeting minutes', 'Reviewing your standard service agreements and updating liability caps', 'Reviewing your insurance policies against your current business scale', 'Auditing labor classifications to verify contractors are correctly classified'],
      'Auditing labor classifications to verify contractors are correctly classified',
      '"Q4 (Employee/Contractor Audit): Review your labor classifications. Are your contractors actually contractors, or have they become employees in the eyes of the law?" This prevents year-end misclassification penalties.',
      5,
    ),
  ],

  'self-employment-tax': [
    mc(
      'Self-employed individuals pay 15.3% in SE tax because they are paying:',
      ['A penalty for not having a traditional employer', 'Both the employee portion (7.65%) and the employer portion (7.65%) of Social Security and Medicare taxes', 'Federal income tax at a flat rate of 15.3% instead of progressive brackets', 'The standard income tax rate plus a 7.65% self-employment surcharge'],
      'Both the employee portion (7.65%) and the employer portion (7.65%) of Social Security and Medicare taxes',
      '"When you are a sole proprietor or a single-member LLC, you occupy both roles. You are the worker and you are the company. Consequently, the IRS requires you to pay the full 15.3%." This combines Social Security (12.4%) and Medicare (2.9%).',
      1,
    ),
    mc(
      'Why does the SE tax calculation multiply net profit by 0.9235 before applying the 15.3% rate?',
      ['To account for the standard deduction available to all taxpayers', 'To ensure you are only taxed on the portion an employee would pay tax on — not the employer\'s half you\'re constructively paying', 'To convert net profit from an accrual basis to a cash basis for tax purposes', 'To reflect the Medicare surtax threshold for high earners'],
      'To ensure you are only taxed on the portion an employee would pay tax on — not the employer\'s half you\'re constructively paying',
      '"The IRS allows you to multiply your net profit by 0.9235. This adjustment exists to ensure that you are only taxed on the portion of your income that an employee would actually pay tax on (since employees don\'t pay the employer\'s half)."',
      2,
    ),
    mc(
      'The "SE Tax Deduction" (the AGI Shield) allows you to deduct from your income:',
      ['100% of your self-employment tax from gross income', '50% of your total SE tax from your Adjusted Gross Income when calculating federal income tax', '25% of your net business profit as a qualified business income deduction', 'The full cost of any business expenses used to generate self-employment income'],
      '50% of your total SE tax from your Adjusted Gross Income when calculating federal income tax',
      '"You can deduct 50% of your total SE tax from your Adjusted Gross Income (AGI) when calculating your federal income tax." This reduces your taxable income before bracket rates are applied.',
      3,
    ),
    mc(
      'The Social Security portion of SE tax (12.4%) has a Wage Base Cap, which means:',
      ['You stop paying all SE tax once you exceed the cap', 'Social Security tax only applies to income up to a specific annual limit; the Medicare portion continues with no cap', 'The cap prevents your Social Security tax from exceeding your income tax in any given year', 'High earners pay a reduced Social Security rate above the cap'],
      'Social Security tax only applies to income up to a specific annual limit; the Medicare portion continues with no cap',
      '"The 12.4% Social Security tax only applies to income up to a specific limit (e.g., $168,600 for 2024). Once your net profit exceeds this cap, you stop paying the 12.4% on each additional dollar. The 2.9% Medicare tax has no cap."',
      4,
    ),
    mc(
      'In the S-Corp SE tax mitigation strategy, the owner\'s income is split into a "Reasonable Salary" and "Shareholder Distributions." Why are distributions not subject to SE tax?',
      ['The IRS exempts small business distributions under $100,000 from SE tax', 'Distributions are classified as investment returns on ownership, not wages for labor performed', 'S-Corp distributions are taxed at the corporate rate rather than the individual SE tax rate', 'Federal law exempts the first $50,000 in S-Corp distributions from payroll taxes'],
      'Distributions are classified as investment returns on ownership, not wages for labor performed',
      '"The remaining profit paid to the owner as a dividend... is not subject to SE tax; it is only subject to standard income tax." SE tax applies to wages for labor; distributions are returns on the owner\'s equity investment in the company.',
      5,
    ),
  ],

  'quarterly-estimates': [
    mc(
      'Why does the IRS charge underpayment penalties even if you pay all taxes by April 15th?',
      ['April 15th is no longer the legal deadline — the IRS now requires earlier payment', 'The US tax system operates on a "pay-as-you-go" basis, and the IRS views delayed payment as an unauthorized loan from them', 'Penalties are automatically triggered for any tax bill exceeding $5,000', 'The IRS charges processing fees for large lump-sum payments received in April'],
      'The US tax system operates on a "pay-as-you-go" basis, and the IRS views delayed payment as an unauthorized loan from them',
      '"The US tax system operates on a \'pay-as-you-go\' basis, meaning the government expects its cut as you earn the money, not just once a year. If you wait until April 15th to pay your total liability, you are effectively taking an unauthorized loan from the IRS."',
      1,
    ),
    mc(
      'The Q2 quarterly estimated tax payment (covering April 1 - May 31) is due on which date?',
      ['May 15', 'June 15', 'July 15', 'April 30'],
      'June 15',
      '"Q2 (Apr 1 - May 31): Due June 15." The quarterly schedule does not follow clean calendar quarters — Q2 covers only two months but is due in the middle of the following month.',
      2,
    ),
    mc(
      'The Safe Harbor Method protects most taxpayers from underpayment penalties by requiring them to pay:',
      ['At least 90% of the current year\'s actual tax liability in quarterly installments', '100% of the total tax shown on the previous year\'s return (110% for high earners with AGI over $150k)', 'At least the estimated tax based on current-year projected income', 'A flat 25% of projected gross revenue each quarter'],
      '100% of the total tax shown on the previous year\'s return (110% for high earners with AGI over $150k)',
      '"The \'Safe Harbor\' rule: if you pay 100% of the tax you owed in the previous year (or 110% for high earners with AGI > $150k), the IRS will not penalize you for underpayment, regardless of how much more you make this year."',
      3,
    ),
    mc(
      'The "Tax Bucket" system requires moving a percentage of profit into a separate savings account when:',
      ['At the end of each calendar quarter, one week before the estimated payment deadline', 'Every time a customer pays an invoice — immediately upon receipt', 'Monthly, on the last business day of the month', 'Annually, after your accountant calculates the year\'s final tax liability'],
      'Every time a customer pays an invoice — immediately upon receipt',
      '"Every time a customer pays an invoice, immediately transfer a fixed percentage of that profit into the Tax Bucket. Do not wait until the end of the quarter to save." This prevents accidental spending of the government\'s money.',
      4,
    ),
    mc(
      'The lesson recommends using the IRS Direct Pay portal instead of mailing a check because:',
      ['Checks are no longer accepted by the IRS for estimated tax payments', 'The portal provides immediate digital confirmation that serves as a paper trail in your bookkeeping records', 'Direct Pay payments receive a 0.5% discount on the amount owed', 'Mailed checks take 30 days to process, triggering late payment fees'],
      'The portal provides immediate digital confirmation that serves as a paper trail in your bookkeeping records',
      '"Do not mail a check. Use the IRS Direct Pay system for an immediate, digital paper trail... Save the confirmation number as a PDF and attach it to your bookkeeping records." Digital confirmation is immediate and indisputable.',
      5,
    ),
  ],

  'business-deductions': [
    mc(
      'The IRS\'s "Ordinary and Necessary" test for deductions requires that an expense be:',
      ['Over $25 in value and supported by a physical receipt', 'Common and accepted in your specific trade (ordinary) AND helpful and appropriate for the trade (necessary)', 'Both a legitimate business expense and personally useful to the owner', 'Pre-approved by your CPA and supported by written business justification'],
      'Common and accepted in your specific trade (ordinary) AND helpful and appropriate for the trade (necessary)',
      '"An expense is ordinary if it is common and accepted in your specific trade or business. An expense is necessary if it is helpful and appropriate for your trade." Both tests must be met simultaneously.',
      1,
    ),
    mc(
      'The "De Minimis Safe Harbor" rule allows a business to immediately expense (rather than depreciate over time):',
      ['Any asset with a useful life of less than five years', 'Any single piece of equipment costing less than $2,500', 'Any business purchase made with the business debit or credit card', 'Any asset that depreciates faster than the standard IRS schedule'],
      'Any single piece of equipment costing less than $2,500',
      '"De Minimis Safe Harbor: Generally, any single piece of equipment costing less than $2,500 can be immediately expensed rather than capitalized. This allows you to write off most tools in the year you buy them."',
      2,
    ),
    mc(
      'Section 179 is described as a powerful tax planning tool because it allows:',
      ['Business owners to deduct 50% of all expenses in the first year of operation', 'The full purchase price of qualifying equipment to be deducted in the first year rather than depreciated over many years', 'Businesses to defer tax payments on capital gains for up to three years', 'Sole proprietors to deduct home office expenses equal to 10% of gross income'],
      'The full purchase price of qualifying equipment to be deducted in the first year rather than depreciated over many years',
      '"Section 179 Deduction: This allows a business to deduct the full purchase price of qualifying equipment in the first year, rather than spreading it over a decade. This is a powerful tool for reducing a high-profit year\'s tax bill."',
      3,
    ),
    mc(
      'For vehicle deductions, the "Commuting Trap" means that driving from home to your first job site each morning is:',
      ['A fully deductible business expense because you are traveling for work', 'Not a business mile — commuting starts only once you\'re at your first place of business or traveling between job sites', 'Deductible only if you have a home office designation for your primary workplace', 'Deductible at 50% of the standard IRS mileage rate'],
      'Not a business mile — commuting starts only once you\'re at your first place of business or traveling between job sites',
      '"The IRS does not consider the drive from your home to your first job site as a business mile; that is \'commuting.\' Business miles start once you are at your first place of business or traveling between job sites."',
      4,
    ),
    mc(
      'The "Round-Number Syndrome" red flag for auditors occurs when:',
      ['A business claims the same deduction amount in multiple consecutive tax years', 'Expenses are consistently entered as round figures like $500 or $1,000, suggesting guesses rather than actual receipts', 'A business claims vehicle deductions at exactly 100% business use', 'Travel and meal expenses exceed 10% of total revenue for a local service business'],
      'Expenses are consistently entered as round figures like $500 or $1,000, suggesting guesses rather than actual receipts',
      '"The Round-Number Syndrome: Entering expenses as \'$500.00\' or \'$1,000.00\' repeatedly suggests you are guessing rather than using actual receipts." Real expenses rarely come out to perfectly round numbers.',
      5,
    ),
  ],
}
