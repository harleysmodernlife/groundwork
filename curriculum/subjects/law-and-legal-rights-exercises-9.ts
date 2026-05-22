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

export const lawExercises9: Record<string, ExerciseDef[]> = {
  'legal-aspects-of-marriage': [
    mc(
      'When you marry, property acquired during the marriage becomes:',
      ['Solely owned by whoever earned the income to purchase it', 'Marital property — jointly owned in most states regardless of whose name is on it', 'Community property only in states that have adopted community property law', 'Your separate property unless you sign a joint title document'],
      'Marital property — jointly owned in most states regardless of whose name is on it',
      'In most states, income earned and property purchased during marriage is marital property regardless of which spouse\'s name appears on accounts or titles. What this means at divorce depends on whether the state uses community property or equitable distribution.',
      1,
    ),
    mc(
      'Common-law marriage is recognized in:',
      ['All 50 states', 'No U.S. states — it was abolished nationwide', 'A minority of states including Colorado, Texas, and Iowa, plus D.C.', 'Only states that border Canada'],
      'A minority of states including Colorado, Texas, and Iowa, plus D.C.',
      'A small number of states recognize common-law marriage for couples who live together, hold themselves out as married, and intend to be married — without a formal ceremony. In states that do not recognize it, no amount of cohabitation creates a legal marriage.',
      2,
    ),
    mc(
      'A surviving spouse has inheritance rights called an "elective share," meaning:',
      ['They get everything the deceased owned', 'They can claim a portion of the deceased spouse\'s estate even if not mentioned in the will', 'They can elect to have the will set aside entirely', 'They inherit only debts, not assets'],
      'They can claim a portion of the deceased spouse\'s estate even if not mentioned in the will',
      'Most states give surviving spouses an elective share — the right to claim a minimum portion of the estate (often one-third to one-half) regardless of what the will says. This prevents a spouse from being completely disinherited.',
      3,
    ),
    mc(
      'Property you owned before marriage is typically classified as:',
      ['Marital property from the date of marriage forward', 'Separate property that generally remains yours in a divorce', 'Community property in all states', 'Joint property if used by both spouses during the marriage'],
      'Separate property that generally remains yours in a divorce',
      'Pre-marital assets are generally separate property — not subject to division in divorce. However, separate property can become marital property through commingling (mixing with marital funds) or transmutation.',
      4,
    ),
    mc(
      'Spousal privilege in criminal proceedings means:',
      ['You can file criminal charges on your spouse\'s behalf', 'Neither spouse can generally be forced to testify against the other in most criminal proceedings', 'Your spouse\'s attorney-client privilege extends to you', 'Your spouse cannot be arrested while you are present'],
      'Neither spouse can generally be forced to testify against the other in most criminal proceedings',
      'Spousal privilege protects marital communications and generally prevents one spouse from being compelled to testify against the other in criminal proceedings. The specifics vary by state and type of privilege.',
      5,
    ),
  ],

  'prenuptial-agreements': [
    mc(
      'Which of the following CAN a prenuptial agreement legally address?',
      ['Who will have custody of children if the marriage ends', 'How property and debts will be divided if the marriage ends', 'Lifestyle requirements such as household duties', 'Waiving the right to Social Security spousal benefits'],
      'How property and debts will be divided if the marriage ends',
      'Prenups can address property division, debt allocation, protection of pre-marital assets, business interests, and spousal support. They cannot predetermine child custody (courts decide based on the child\'s best interest at the time) or govern non-financial matters.',
      1,
    ),
    mc(
      'A prenup signed the night before the wedding is vulnerable to challenge because:',
      ['Prenups must be signed at least one year before marriage', 'Last-minute signing suggests the party had no meaningful time to review or seek independent counsel, raising duress concerns', 'Prenups become void within 24 hours if not properly notarized', 'The law requires a minimum 30-day review period'],
      'Last-minute signing suggests the party had no meaningful time to review or seek independent counsel, raising duress concerns',
      'Courts scrutinize prenups signed under time pressure. A prenup presented the night before the wedding — with no opportunity to consult an attorney or negotiate — can be challenged as signed under duress or without informed consent.',
      2,
    ),
    mc(
      'For a prenup to be enforceable, full financial disclosure by both parties is required because:',
      ['The IRS requires disclosure of all assets before marriage', 'A prenup based on incomplete or false disclosure of assets can be voided — informed consent requires knowing what you are agreeing to give up', 'Courts must verify net worth before approving any prenup', 'Full disclosure converts the prenup into a tax-advantaged agreement'],
      'A prenup based on incomplete or false disclosure of assets can be voided — informed consent requires knowing what you are agreeing to give up',
      'Both parties must know what assets and debts are in play to meaningfully agree to terms. Hiding assets or providing false financial information voids the prenup — you cannot make an informed agreement about something you were deceived about.',
      3,
    ),
    mc(
      'Which of the following makes a prenuptial agreement easier to challenge in court?',
      ['Both parties had independent attorneys', 'The prenup was signed six months before the wedding', 'Only one party had an attorney and the other signed without legal advice', 'The terms were somewhat favorable to one party'],
      'Only one party had an attorney and the other signed without legal advice',
      'Independent legal counsel for both parties significantly strengthens a prenup\'s enforceability. A prenup where one party had no attorney is much more vulnerable to challenge on grounds of unequal bargaining power and lack of informed consent.',
      4,
    ),
    mc(
      'A postnuptial agreement differs from a prenuptial agreement in that it is:',
      ['Only available in community property states', 'Signed after the marriage has already taken place', 'Automatically invalid because spouses cannot contract with each other', 'Limited to addressing only real estate and retirement accounts'],
      'Signed after the marriage has already taken place',
      'Postnuptial agreements serve the same purpose as prenups — establishing property rights in the event of divorce — but are signed during the marriage. Courts scrutinize them somewhat more carefully given the power dynamics of an ongoing marriage.',
      5,
    ),
  ],

  'divorce-process': [
    mc(
      'No-fault divorce allows one spouse to file for divorce:',
      ['Only if the other spouse agrees', 'Only after a mandatory separation period of at least two years', 'Based on irreconcilable differences — without proving wrongdoing by either spouse', 'Only for marriages shorter than five years'],
      'Based on irreconcilable differences — without proving wrongdoing by either spouse',
      'All states have no-fault divorce. "Irreconcilable differences" or "irretrievable breakdown of the marriage" is sufficient. One spouse wanting a divorce is generally enough — the other cannot indefinitely prevent it.',
      1,
    ),
    mc(
      'An uncontested divorce is one where:',
      ['One spouse does not hire an attorney', 'Both spouses agree on all issues — property, debt, custody, and support', 'The divorce is granted in less than 30 days', 'Neither spouse contests the filing fee'],
      'Both spouses agree on all issues — property, debt, custody, and support',
      'An uncontested divorce occurs when spouses reach agreement on all issues. It is faster, cheaper, and less emotionally damaging than a contested divorce. For simple situations with no children, it can cost a few hundred dollars in filing fees.',
      2,
    ),
    mc(
      'In a community property state, marital property is typically divided:',
      ['According to each spouse\'s contribution to acquiring the property', 'Equally — 50/50 — with limited judicial discretion', 'Based on whose name appears on the title or account', 'By the judge\'s determination of what is fair given all circumstances'],
      'Equally — 50/50 — with limited judicial discretion',
      'Community property states (including California, Texas, and Arizona) treat most marital property as jointly owned and divide it equally at divorce. Equitable distribution states divide marital property fairly but not necessarily equally.',
      3,
    ),
    mc(
      'Alimony (spousal support) in modern divorces is typically:',
      ['Permanent in all cases — the higher earner always pays indefinitely', 'Temporary — designed to help the lower-earning spouse become self-sufficient, not necessarily permanent', 'Only available to women, not men', 'Automatically awarded in all divorces where incomes differ'],
      'Temporary — designed to help the lower-earning spouse become self-sufficient, not necessarily permanent',
      'Modern alimony is often time-limited and rehabilitative — designed to support the lower-earning spouse during a transition period. Permanent alimony is rare and typically reserved for long marriages where one spouse cannot become self-supporting.',
      4,
    ),
    mc(
      'Legal separation differs from divorce in that:',
      ['Legal separation is only available for couples married fewer than five years', 'Legally separated spouses are still legally married and cannot remarry', 'Legal separation automatically converts to divorce after one year', 'Legal separation has no legal effect on property rights'],
      'Legally separated spouses are still legally married and cannot remarry',
      'Legal separation is a court-ordered status that establishes rights and obligations but does not end the marriage. Legally separated spouses remain married — they cannot remarry without a divorce. It is used for religious, insurance, or transitional reasons.',
      5,
    ),
  ],

  'property-division': [
    mc(
      'The nine community property states treat most marital property as:',
      ['Belonging to whoever earned the money', 'Owned 50/50 by both spouses regardless of income contribution', 'Subject to judicial discretion based on fairness', 'Automatically transferred to the higher-earning spouse'],
      'Owned 50/50 by both spouses regardless of income contribution',
      'In community property states — California, Texas, Arizona, Nevada, Washington, Idaho, New Mexico, Louisiana, and Wisconsin — most property acquired during marriage is jointly owned equally by both spouses.',
      1,
    ),
    mc(
      'Separate property (owned before marriage or received as a gift/inheritance during marriage) can become marital property through:',
      ['Passage of time — all property becomes marital after five years of marriage', 'Commingling — mixing it with marital funds or joint accounts', 'The other spouse using it', 'Including it on joint tax returns'],
      'Commingling — mixing it with marital funds or joint accounts',
      'Separate property can lose its separate character if commingled with marital assets. An inherited $50,000 deposited into a shared account that both spouses used may become marital property. Keeping separate property truly separate preserves its character.',
      2,
    ),
    mc(
      'Dividing a retirement account in divorce typically requires:',
      ['Simply listing it in the divorce decree', 'A special court order called a QDRO (Qualified Domestic Relations Order) for most employer plans', 'Converting it to cash before division', 'The spouse\'s employer\'s approval'],
      'A special court order called a QDRO (Qualified Domestic Relations Order) for most employer plans',
      'Most employer retirement plans (401k, pension) require a QDRO to divide the account without triggering taxes and penalties. Errors in retirement division create tax consequences. IRAs can be divided via the divorce decree itself.',
      3,
    ),
    mc(
      'If a divorce decree says your ex-spouse is responsible for a joint credit card debt, and they stop paying, your credit:',
      ['Is fully protected because the court order binds the creditor', 'Will still be damaged — a divorce decree does not bind creditors who are not parties to the divorce', 'Is only affected if the debt exceeds $10,000', 'Is protected for two years while the court enforces the order'],
      'Will still be damaged — a divorce decree does not bind creditors who are not parties to the divorce',
      'Creditors are not parties to divorce proceedings. If your name is on a joint account and your ex doesn\'t pay, your credit suffers — regardless of what the divorce decree says. Try to close joint accounts or refinance them out of both names.',
      4,
    ),
    mc(
      'Hiding assets during divorce proceedings is:',
      ['Permitted if the assets were acquired before marriage', 'Illegal — and courts may award the other spouse more than 50% as a sanction', 'Only actionable if the hidden amount exceeds $50,000', 'Legal if the assets are in a business entity'],
      'Illegal — and courts may award the other spouse more than 50% as a sanction',
      'Full financial disclosure is required in divorce. Hiding assets is fraud on the court and can result in severe consequences, including the court awarding the other spouse an even larger share of assets as a punitive sanction.',
      5,
    ),
  ],

  'child-custody': [
    mc(
      'The primary standard courts apply in all child custody decisions is:',
      ['The preference of the parent who earns more', 'Equal time for both parents regardless of circumstances', 'The best interests of the child', 'The child\'s preference in all cases regardless of age'],
      'The best interests of the child',
      'Every custody decision is governed by one standard: the best interests of the child. This applies whether parents are negotiating or a judge is deciding. It focuses on the child\'s physical, emotional, and developmental needs — not the parents\' preferences or dispute.',
      1,
    ),
    mc(
      '"Legal custody" refers to:',
      ['Where the child physically lives', 'The right to make major decisions about the child\'s life — education, medical care, and religious upbringing', 'The parent who has more overnights per year', 'Who has physical possession of the child\'s birth certificate'],
      'The right to make major decisions about the child\'s life — education, medical care, and religious upbringing',
      'Legal custody is about decision-making authority. Physical custody is about where the child lives. They are distinct — parents can share legal custody (joint decision-making) while one parent has primary physical custody.',
      2,
    ),
    mc(
      'Courts view a parent who actively undermines the child\'s relationship with the other parent:',
      ['Favorably — protecting children from potentially harmful relationships is responsible', 'Neutrally — parental relationships are the parents\' private concern', 'Negatively — the ability to support the child\'s relationship with the other parent is a factor courts weigh heavily', 'With no concern unless violence is involved'],
      'Negatively — the ability to support the child\'s relationship with the other parent is a factor courts weigh heavily',
      'Courts consistently look poorly on parental alienation — efforts to damage the child\'s relationship with the other parent. Supporting the child\'s relationship with both parents is a factor judges explicitly consider in custody decisions.',
      3,
    ),
    mc(
      'Modifying an existing custody order requires showing:',
      ['That you prefer the new arrangement', 'A substantial change in circumstances that warrants a change in the child\'s best interests', 'That more than one year has passed since the original order', 'Agreement of both parents'],
      'A substantial change in circumstances that warrants a change in the child\'s best interests',
      'Courts do not change custody orders based on general dissatisfaction. A substantial change in circumstances — relocation, significant change in the child\'s needs, a parent\'s substance abuse — is required. Courts value stability in children\'s lives.',
      4,
    ),
    mc(
      'Relocating to another state with your children without the other parent\'s consent or court approval:',
      ['Is legal if you have primary physical custody', 'Can constitute parental abduction and has severe legal consequences', 'Is allowed with 30 days advance notice in most states', 'Is only restricted for non-custodial parents'],
      'Can constitute parental abduction and has severe legal consequences',
      'Relocating with children without the other parent\'s consent or court approval — particularly across state lines — can constitute parental abduction, violate custody orders, and result in being ordered to return the children and losing custody rights.',
      5,
    ),
  ],
}
