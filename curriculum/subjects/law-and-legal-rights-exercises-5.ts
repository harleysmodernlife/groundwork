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

export const lawExercises5: Record<string, ExerciseDef[]> = {
  'security-deposits': [
    mc(
      'A security deposit is legally best described as:',
      ['A fee paid to secure the unit that belongs to the landlord', 'Your money held in trust, to be returned minus legitimate deductions at move-out', 'A prepayment of last month\'s rent', 'A non-refundable move-in cost'],
      'Your money held in trust, to be returned minus legitimate deductions at move-out',
      'A security deposit remains your money. The landlord holds it during your tenancy and must return it (minus documented, legitimate deductions) after you move out. It is not income for the landlord.',
      1,
    ),
    mc(
      'A landlord may legally deduct from your security deposit for:',
      ['Normal wear and tear from regular use', 'Faded paint from sunlight exposure over time', 'Burns on the carpet you caused', 'Small nail holes from hanging pictures'],
      'Burns on the carpet you caused',
      'Landlords can only deduct for damage beyond normal wear and tear. Burns on carpet are damage caused by the tenant. Faded paint, worn carpets from regular use, and small nail holes are normal wear and tear — not deductible.',
      2,
    ),
    mc(
      'If a landlord wrongfully withholds your security deposit, many states provide:',
      ['Only the right to recover the deposited amount', 'Double or triple the withheld amount plus attorney\'s fees as a penalty', 'A complaint process with no financial remedy', 'The right to stay in the unit rent-free for one month'],
      'Double or triple the withheld amount plus attorney\'s fees as a penalty',
      'Many states penalize landlords who wrongfully withhold security deposits by awarding the tenant double or triple the wrongfully withheld amount, plus attorney\'s fees. This is a strong incentive to document carefully and pursue claims.',
      3,
    ),
    mc(
      'The most important thing you can do to protect your security deposit is:',
      ['Pay rent on time throughout the tenancy', 'Document the unit\'s condition with photos and video at both move-in and move-out', 'Get renters insurance', 'Have the landlord verbally promise to return the deposit'],
      'Document the unit\'s condition with photos and video at both move-in and move-out',
      'Security deposit disputes are won or lost on documentation. Date-stamped photos at move-in prove pre-existing conditions; photos at move-out prove you left the unit in good shape. Without documentation, your word against the landlord\'s.',
      4,
    ),
    mc(
      'If you do not receive your security deposit or an itemized statement within your state\'s deadline, your best first step is to:',
      ['File a lawsuit immediately', 'Send a written demand letter stating the amount owed and a deadline to respond', 'Contact the local housing authority to report the landlord', 'Withhold the last month\'s rent on your next lease'],
      'Send a written demand letter stating the amount owed and a deadline to respond',
      'A written demand letter — stating the amount owed, citing the legal deadline, and giving the landlord a final deadline to respond — creates a record and often resolves disputes before litigation is needed.',
      5,
    ),
  ],

  'habitability-standards': [
    mc(
      'The implied warranty of habitability requires landlords to maintain rental units in:',
      ['Perfect cosmetic condition throughout the tenancy', 'A condition fit for human living, including working essential systems and freedom from health hazards', 'The exact condition described in the lease', 'Conditions that meet the tenant\'s personal standards'],
      'A condition fit for human living, including working essential systems and freedom from health hazards',
      'The implied warranty of habitability — recognized in virtually every state — requires landlords to maintain units fit for human habitation. This includes working heat, plumbing, electrical systems, structural safety, and freedom from infestations.',
      1,
    ),
    mc(
      'Which of the following IS a habitability violation?',
      ['A squeaky door hinge', 'A cracked bathroom tile with no exposed sharp edges', 'No working heat during winter', 'A dishwasher that stops working'],
      'No working heat during winter',
      'Working heat is a habitability requirement in most states. The absence of heat in winter threatens health and safety and is a clear habitability violation. Squeaky doors, cracked tiles, and broken dishwashers are generally not habitability issues.',
      2,
    ),
    mc(
      'When reporting a habitability problem to your landlord, you should always:',
      ['Call verbally to avoid escalating the relationship', 'Report in writing (email or text) to create a documented record', 'Contact code enforcement first before notifying the landlord', 'Wait until multiple problems accumulate before reporting'],
      'Report in writing (email or text) to create a documented record',
      'Always report habitability problems in writing. Written notice creates an undeniable record that you informed the landlord and when. Verbal complaints can be denied. Written ones cannot.',
      3,
    ),
    mc(
      'The "repair and deduct" remedy allows a tenant to:',
      ['Hire a contractor and withhold future rent indefinitely until repaid', 'Hire someone to fix the problem and deduct the cost from rent, subject to state-specific rules and dollar caps', 'Demand the landlord pay for any repairs the tenant makes', 'Apply the security deposit toward repairs without notice'],
      'Hire someone to fix the problem and deduct the cost from rent, subject to state-specific rules and dollar caps',
      'Repair and deduct is only available in some states and has strict procedural requirements — typically you must give the landlord notice and an opportunity to fix it first, and there are dollar caps. Done incorrectly, it can backfire.',
      4,
    ),
    mc(
      'Filing a complaint with your city\'s housing code enforcement office is an effective remedy because:',
      ['It automatically reduces your rent', 'An inspector can issue official violation notices the landlord must fix, creating an official record', 'The landlord is automatically fined $1,000 per violation', 'It terminates the lease on your behalf'],
      'An inspector can issue official violation notices the landlord must fix, creating an official record',
      'Code enforcement inspectors can cite landlords for violations and require correction. This creates official documentation, applies regulatory pressure, and is free — making it one of the most practical tools for habitability disputes.',
      5,
    ),
  ],

  'landlord-entry': [
    mc(
      'In most states, landlords must give how much advance notice before entering a rental unit for non-emergency purposes?',
      ['No notice required — landlords own the property', '24 to 48 hours', 'One week', 'Notice is only required for inspections, not repairs'],
      '24 to 48 hours',
      'Most states require 24 to 48 hours of advance notice before a landlord may enter for non-emergency purposes. The exact requirement varies by state, but entering without notice for routine matters violates the tenant\'s right to privacy.',
      1,
    ),
    mc(
      'A landlord may enter without advance notice in which situation?',
      ['To show the unit to a prospective tenant on short notice', 'A genuine emergency such as a burst pipe or gas leak', 'When the tenant has been one day late on rent', 'When the landlord believes the tenant has a pet violating the lease'],
      'A genuine emergency such as a burst pipe or gas leak',
      'Emergency entry without notice is allowed for genuine emergencies — situations where waiting would cause significant damage or harm. A landlord cannot manufacture a non-urgent "emergency" to avoid the notice requirement.',
      2,
    ),
    mc(
      'The covenant of quiet enjoyment means:',
      ['The landlord must ensure the unit has soundproofing', 'The tenant has the right to use the rental without interference from the landlord', 'Neighbors cannot make excessive noise', 'The landlord cannot raise rent during the lease term'],
      'The tenant has the right to use the rental without interference from the landlord',
      'Quiet enjoyment is the right to peaceful possession and use of the property without landlord interference. Unauthorized entries, cutting off utilities, and harassment all violate this covenant.',
      3,
    ),
    mc(
      'If your lease says the landlord can enter with zero notice, but your state law requires 24 hours, which controls?',
      ['The lease — parties can agree to any terms they want', 'State law — tenant rights that are non-waivable by law override lease terms that provide less protection', 'The landlord, since they own the property', 'Whichever term was agreed to first'],
      'State law — tenant rights that are non-waivable by law override lease terms that provide less protection',
      'Many landlord-tenant protections are non-waivable — lease terms cannot strip away rights the law gives you. A lease provision giving the landlord greater entry rights than state law allows is typically unenforceable.',
      4,
    ),
    mc(
      'A pattern of excessive, last-minute inspection notices by a landlord shortly after you complained about repairs may constitute:',
      ['Legal behavior — landlords can inspect as often as they want with proper notice', 'Harassment or a violation of quiet enjoyment, even if each individual entry had technical notice', 'A lease violation by the tenant', 'Grounds for a rent increase'],
      'Harassment or a violation of quiet enjoyment, even if each individual entry had technical notice',
      'While each individual entry with proper notice may be technically legal, a pattern of excessive inspections timed to harassment can constitute a violation of quiet enjoyment and potentially landlord retaliation.',
      5,
    ),
  ],

  'repairs-and-maintenance': [
    mc(
      'When requesting repairs from your landlord, you should always:',
      ['Call verbally and follow up if needed', 'Submit the request in writing — email or text — so there is a documented record', 'Submit requests only through certified mail for legal validity', 'Wait until the issue affects habitability before reporting'],
      'Submit the request in writing — email or text — so there is a documented record',
      'Written repair requests create a timestamp and an undeniable record that the landlord was notified. This is essential if the dispute escalates to legal action, affects your security deposit, or requires housing code enforcement.',
      1,
    ),
    mc(
      'A non-working heater in January is classified as what type of repair urgency?',
      ['Non-urgent — can wait up to 30 days', 'Urgent — should be addressed within a week', 'Emergency — requires a response within 24 to 48 hours or sooner', 'Cosmetic — landlord has no obligation to fix'],
      'Emergency — requires a response within 24 to 48 hours or sooner',
      'No heat in winter is an emergency that directly threatens health and habitability. Emergency repairs require the fastest response. If the landlord fails to act, you have the strongest grounds for escalating remedies.',
      2,
    ),
    mc(
      'The "repair and deduct" remedy carries significant risk if:',
      ['You give the landlord advance notice before using it', 'You do not follow your state\'s specific legal procedure exactly', 'The repair costs less than one month\'s rent', 'The problem relates to plumbing rather than heating'],
      'You do not follow your state\'s specific legal procedure exactly',
      'Repair and deduct has strict procedural requirements that vary by state. Done incorrectly — without proper notice, without giving the landlord a chance to fix it, or exceeding dollar caps — it can give the landlord grounds to pursue you for unpaid rent.',
      3,
    ),
    mc(
      'If your landlord ignores urgent repair requests, contacting your city\'s housing code enforcement is effective because:',
      ['It automatically withholds your rent on your behalf', 'An official inspector can issue binding violation notices requiring the landlord to act', 'It immediately terminates your lease', 'It results in immediate payment of damages to you'],
      'An official inspector can issue binding violation notices requiring the landlord to act',
      'Housing code enforcement inspectors carry official authority. Their violation notices compel the landlord to make corrections and create an official record — applying pressure that your individual requests may not.',
      4,
    ),
    mc(
      '"Constructive eviction" occurs when:',
      ['A landlord formally serves eviction papers', 'A landlord\'s failure to fix habitability problems is so severe that the tenant is effectively forced out', 'A tenant stops paying rent', 'A landlord raises rent to unaffordable levels'],
      'A landlord\'s failure to fix habitability problems is so severe that the tenant is effectively forced out',
      'Constructive eviction is when uninhabitable conditions, caused by the landlord\'s failure to repair after proper notice, make the unit unlivable — effectively forcing the tenant to leave. In many states, this allows the tenant to break the lease without penalty.',
      5,
    ),
  ],

  'retaliation-protections': [
    mc(
      'Landlord retaliation is defined as:',
      ['A landlord refusing to make any repairs', 'An adverse action taken against a tenant because they exercised a legally protected right', 'A landlord raising rent at any point during a tenancy', 'A landlord not renewing a lease for any reason'],
      'An adverse action taken against a tenant because they exercised a legally protected right',
      'Retaliation is specifically adverse action — rent increase, eviction, reduced services — taken because the tenant exercised protected rights like complaining about habitability, reporting code violations, or contacting a tenant rights organization.',
      1,
    ),
    mc(
      'In many states, if a landlord takes adverse action within 90 days of a tenant\'s housing code complaint, the law presumes:',
      ['The landlord had legitimate reasons', 'The action was retaliatory, shifting the burden to the landlord to prove otherwise', 'The tenant waived retaliation protections by complaining publicly', 'The tenant must vacate while the matter is resolved'],
      'The action was retaliatory, shifting the burden to the landlord to prove otherwise',
      'Many states have a rebuttable presumption of retaliation if adverse action closely follows protected activity. This powerful protection shifts the burden to the landlord — they must prove their action was for legitimate, independent reasons.',
      2,
    ),
    mc(
      'Which of the following is a tenant\'s protected activity under most state retaliation laws?',
      ['Withholding rent without prior notice', 'Reporting housing code violations to the city', 'Refusing to allow any landlord entry', 'Subletting without permission'],
      'Reporting housing code violations to the city',
      'Reporting code violations to city or county authorities is a core protected activity under most state retaliation laws. Landlords cannot retaliate against tenants who report conditions to government housing agencies.',
      3,
    ),
    mc(
      'Evidence that strongly supports a retaliation claim includes:',
      ['A single rent increase of any amount', 'An eviction notice issued one month after you filed a housing complaint', 'The landlord being in a generally bad mood', 'A rent increase smaller than average market increases'],
      'An eviction notice issued one month after you filed a housing complaint',
      'Timing is the strongest evidence of retaliation. An eviction notice issued shortly after protected activity — especially if the landlord otherwise had no complaint about the tenancy — strongly suggests the eviction is retaliation.',
      4,
    ),
    mc(
      'If you suspect you are being retaliated against, you should:',
      ['Immediately stop the protected activity that triggered the retaliation', 'Continue exercising your legal rights and document everything thoroughly', 'Accept the adverse action to avoid making the situation worse', 'Move out before the landlord can take further action'],
      'Continue exercising your legal rights and document everything thoroughly',
      'Stopping protected activity is exactly what retaliatory landlords want. Continue exercising your rights, document all protected activity and the landlord\'s responses with timestamps, and contact a tenant rights organization or attorney.',
      5,
    ),
  ],
}
