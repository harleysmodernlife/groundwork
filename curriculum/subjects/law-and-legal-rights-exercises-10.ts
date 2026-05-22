import type { ExerciseDef } from '../types'

function mc(question: string, options: string[], correctAnswer: string, explanation: string, order: number): ExerciseDef {
  return { question, type: 'MULTIPLE_CHOICE', options, correctAnswer, explanation, order }
}

export const lawExercises10: Record<string, ExerciseDef[]> = {
  'child-support': [
    mc(
      'Child support is primarily calculated based on which factors?',
      ['The child\'s school tuition only', 'Each parent\'s income, time with the child, and custody arrangement', 'The custodial parent\'s expenses alone', 'The non-custodial parent\'s income minus their personal expenses'],
      'Each parent\'s income, time with the child, and custody arrangement',
      'Child support formulas consider both parents\' incomes, the parenting time split, and the child\'s needs. No single factor determines it alone.',
      1
    ),
    mc(
      'What typically happens if a parent consistently fails to pay court-ordered child support?',
      ['The order is automatically canceled after 90 days', 'The custodial parent must renegotiate directly with the other parent', 'Wages can be garnished, licenses suspended, and the parent held in contempt', 'Nothing — enforcement is entirely voluntary'],
      'Wages can be garnished, licenses suspended, and the parent held in contempt',
      'States have strong enforcement tools: wage garnishment, tax refund interception, driver\'s license suspension, and contempt of court with possible jail time.',
      2
    ),
    mc(
      'When can child support typically be modified after it is set?',
      ['Never — the original order is final', 'Only if the paying parent requests it in writing', 'When there is a substantial change in circumstances, such as job loss or major income change', 'Automatically every year regardless of any change'],
      'When there is a substantial change in circumstances, such as job loss or major income change',
      'Courts will modify support when either parent experiences a significant change: job loss, new disability, change in custody time, or large income increase or decrease.',
      3
    ),
    mc(
      'Child support obligations generally end when:',
      ['The child turns 16', 'The custodial parent remarries', 'The child reaches the age of majority or graduates high school, as defined by state law', 'The non-custodial parent decides to stop paying'],
      'The child reaches the age of majority or graduates high school, as defined by state law',
      'Most states end child support at 18 or high school graduation, whichever is later. Some states extend it through college or for disabled children.',
      4
    ),
    mc(
      'Child support payments are treated how under federal tax law?',
      ['They are deductible for the paying parent and taxable income for the recipient', 'They are taxable income for the child', 'They are not deductible for the payer and not taxable income for the recipient', 'They are fully deductible for both parents'],
      'They are not deductible for the payer and not taxable income for the recipient',
      'Child support has no tax consequences — the paying parent cannot deduct it, and the receiving parent does not count it as income. This differs from alimony rules.',
      5
    ),
  ],
  'wills-basics': [
    mc(
      'What is the primary legal purpose of a will?',
      ['To avoid paying estate taxes', 'To direct how your property is distributed and who cares for minor children after you die', 'To transfer bank accounts automatically upon death', 'To cancel all outstanding debts'],
      'To direct how your property is distributed and who cares for minor children after you die',
      'A will lets you name beneficiaries for your assets, appoint a guardian for minor children, and name an executor to manage your estate.',
      1
    ),
    mc(
      'For a will to be legally valid in most states, it must generally be:',
      ['Notarized by a judge', 'Written, signed by the testator, and witnessed by two adults who are not beneficiaries', 'Filed with the county clerk before it takes effect', 'Approved by all intended beneficiaries'],
      'Written, signed by the testator, and witnessed by two adults who are not beneficiaries',
      'Most states require a written will signed by the person making it and witnessed by two disinterested adults. Some states also require notarization.',
      2
    ),
    mc(
      'What happens to assets that are designated in a will but are also subject to a beneficiary designation (like a 401k or life insurance)?',
      ['The will controls because it is a legal document', 'The beneficiary designation on the account controls, regardless of what the will says', 'The probate court decides which one applies', 'The most recently signed document controls'],
      'The beneficiary designation on the account controls, regardless of what the will says',
      'Beneficiary designations on retirement accounts, life insurance, and payable-on-death accounts pass outside of probate and override whatever the will says.',
      3
    ),
    mc(
      'What is probate?',
      ['A legal process to contest a will\'s contents', 'The court-supervised process of validating a will and distributing assets', 'A tax on estates over $1 million', 'A document that replaces a will'],
      'The court-supervised process of validating a will and distributing assets',
      'Probate is the legal process where a court verifies the will, appoints an executor if needed, pays debts, and oversees distribution. It can be time-consuming and public.',
      4
    ),
    mc(
      'A will should be updated when:',
      ['Only when a person turns 65', 'After major life events such as marriage, divorce, the birth of a child, or significant changes in assets', 'Once every 20 years by law', 'Never — wills are meant to be permanent'],
      'After major life events such as marriage, divorce, the birth of a child, or significant changes in assets',
      'Life changes can make a will outdated or legally problematic. Marriage, divorce, births, deaths of named beneficiaries, and major asset changes all warrant a review.',
      5
    ),
  ],
  'dying-without-a-will': [
    mc(
      'When someone dies without a valid will, their estate is distributed according to:',
      ['Their verbal wishes, as testified by family members', 'The state\'s intestacy laws, which follow a fixed order of priority', 'Equal shares to all living relatives regardless of relationship', 'The oldest surviving family member\'s decision'],
      'The state\'s intestacy laws, which follow a fixed order of priority',
      'Intestacy laws set a priority order: typically spouse, then children, then parents, then siblings, and so on. The state determines who inherits — not you.',
      1
    ),
    mc(
      'If an unmarried person with no children and no will dies, who typically inherits under intestacy laws?',
      ['The state automatically keeps all assets', 'Close friends designated verbally before death', 'The person\'s parents, or if deceased, their siblings', 'Whoever was living with them at the time'],
      'The person\'s parents, or if deceased, their siblings',
      'Without a spouse or children, most states move to the next tier: parents inherit. If parents are also deceased, assets typically pass to siblings.',
      2
    ),
    mc(
      'What is one significant risk of dying without a will for parents of minor children?',
      ['The children\'s assets are seized by the IRS', 'A court — not the parents — chooses who will be the children\'s legal guardian', 'The children automatically become wards of the state', 'Child support obligations are automatically canceled'],
      'A court — not the parents — chooses who will be the children\'s legal guardian',
      'Without a will naming a guardian, a judge decides who raises your children. The judge will try to act in the child\'s best interest, but your preferences won\'t be on record.',
      3
    ),
    mc(
      'Under intestacy, an unmarried long-term partner has:',
      ['The same rights as a legal spouse', 'The right to inherit if they lived together for more than 2 years', 'No automatic inheritance rights in most states', 'Rights equal to those of the deceased\'s children'],
      'No automatic inheritance rights in most states',
      'Intestacy laws do not recognize unmarried partners in most states. Without a will or beneficiary designation, a long-term partner receives nothing by default.',
      4
    ),
    mc(
      'Which of the following is the best reason to create a will even if you have few assets?',
      ['To reduce income taxes during your lifetime', 'To control who raises your minor children and who handles your estate', 'To keep your estate out of probate entirely', 'To automatically transfer all bank accounts without court involvement'],
      'To control who raises your minor children and who handles your estate',
      'Even with modest assets, a will lets you name a guardian for minor children, choose an executor you trust, and prevent family conflict over your wishes.',
      5
    ),
  ],
}
