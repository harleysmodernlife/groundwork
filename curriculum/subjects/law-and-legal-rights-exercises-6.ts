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

export const lawExercises6: Record<string, ExerciseDef[]> = {
  'eviction-process': [
    mc(
      'A landlord who wants to remove a tenant must:',
      ['Change the locks if the tenant is behind on rent', 'Follow a legal court process — self-help eviction is illegal in virtually every state', 'Shut off utilities to pressure the tenant to leave', 'Remove the tenant\'s belongings if they do not respond to notices'],
      'Follow a legal court process — self-help eviction is illegal in virtually every state',
      'Self-help eviction — changing locks, removing belongings, cutting utilities — is illegal virtually everywhere. Landlords must go through court, and a tenant subject to self-help eviction may have a claim for damages and re-entry.',
      1,
    ),
    mc(
      'A "pay or quit" notice gives the tenant the opportunity to:',
      ['Contest the eviction in court immediately', 'Pay the full rent owed within the notice period to stop the eviction proceeding', 'Request a 30-day extension automatically', 'Transfer the lease to another tenant'],
      'Pay the full rent owed within the notice period to stop the eviction proceeding',
      'A pay or quit notice is the first step in non-payment evictions. If the tenant pays the full amount owed within the specified period (typically 3 to 14 days depending on state), the eviction stops.',
      2,
    ),
    mc(
      'If you receive an eviction summons and do not appear at the hearing:',
      ['The judge will grant a default continuance', 'The landlord wins by default', 'The eviction is automatically dismissed', 'You receive an automatic 30-day extension'],
      'The landlord wins by default',
      'Failing to appear at an eviction hearing results in an automatic default judgment for the landlord. Even if you have valid defenses, not showing up eliminates your ability to present them. Always appear.',
      3,
    ),
    mc(
      'Procedural defects in how a landlord served an eviction notice can:',
      ['Only delay the eviction by one week', 'Defeat the eviction entirely, even if the tenant owes rent', 'Never affect the outcome of an eviction', 'Only matter if the tenant has a lawyer'],
      'Defeat the eviction entirely, even if the tenant owes rent',
      'Landlords must follow exact legal procedures in serving eviction notices. Errors in the notice period, service method, or notice content can be grounds to dismiss the eviction — even if the underlying nonpayment is real.',
      4,
    ),
    mc(
      'An eviction judgment on your record:',
      ['Automatically expunges after one year', 'Can make it significantly harder to rent in the future, as many landlords screen for prior evictions', 'Only affects credit scores, not rental applications', 'Has no effect because landlords cannot see court records'],
      'Can make it significantly harder to rent in the future, as many landlords screen for prior evictions',
      'Eviction records are public court records and show up in tenant screening. Many landlords will not rent to anyone with a prior eviction. Sometimes a "cash for keys" negotiated move-out is better long-term than fighting an eviction you will likely lose.',
      5,
    ),
  ],

  'minimum-wage-and-overtime': [
    mc(
      'If your state minimum wage is $15/hour and the federal minimum wage is $7.25/hour, you are legally entitled to:',
      ['$7.25/hour — federal law sets the floor that all states must follow', '$15/hour — you are entitled to the higher of federal, state, or local minimum wage', 'The average of the two rates', '$11.13/hour — the midpoint between state and federal rates'],
      '$15/hour — you are entitled to the higher of federal, state, or local minimum wage',
      'Workers are entitled to whichever minimum wage is highest — federal, state, or local. States and cities can set higher minimums than the federal floor, and if they do, those higher rates control.',
      1,
    ),
    mc(
      'Federal overtime under the FLSA requires 1.5x pay for hours worked over:',
      ['8 hours in a single day', '40 hours in a workweek', '80 hours in a two-week pay period', '160 hours in a month'],
      '40 hours in a workweek',
      'The FLSA calculates overtime on a 7-day workweek: 1.5x pay for every hour over 40 in that workweek. Some states (notably California) also require daily overtime after 8 hours, but federal law uses the weekly standard.',
      2,
    ),
    mc(
      'An employer who requires you to answer emails at home after your shift must:',
      ['Pay you only if you spend more than 30 minutes on it', 'Pay you for that time — off-the-clock work is still work under the FLSA', 'Pay only if this was specified in your offer letter', 'Only pay if you specifically requested permission to work remotely'],
      'Pay you for that time — off-the-clock work is still work under the FLSA',
      'If your employer knows you are working, they must pay you for it. Requiring or allowing off-the-clock work — before clocking in, after clocking out, or from home — violates the FLSA.',
      3,
    ),
    mc(
      'To qualify as exempt from overtime under the FLSA "white collar" exemptions, an employee must meet:',
      ['Only the salary threshold of $684/week', 'Both the salary threshold AND the duties test — management or professional judgment', 'Only the duties test — job title determines exemption', 'A single criterion at the employer\'s discretion'],
      'Both the salary threshold AND the duties test — management or professional judgment',
      'Both tests must be met. Simply paying a salary or calling someone a "manager" does not create an exemption. The employee must actually earn above the threshold AND primarily perform qualifying duties.',
      4,
    ),
    mc(
      'If you are not being paid correctly, the statute of limitations for FLSA claims is typically:',
      ['6 months', '1 year', '2 years (3 for willful violations)', '5 years'],
      '2 years (3 for willful violations)',
      'The FLSA statute of limitations is 2 years from the violation, extended to 3 years if the violation was willful. Act promptly — waiting too long forfeits the ability to recover back wages for earlier periods.',
      5,
    ),
  ],

  'employee-vs-contractor': [
    mc(
      'As an independent contractor, you are responsible for paying:',
      ['Only the employee share of FICA taxes (7.65%)', 'Both halves of FICA — self-employment tax of approximately 15.3%', 'No payroll taxes — the hiring company handles all taxes', 'Federal income tax only, not FICA'],
      'Both halves of FICA — self-employment tax of approximately 15.3%',
      'Employees pay 7.65% FICA and employers match it. Independent contractors pay both halves — the full 15.3% self-employment tax — plus handle their own health insurance, retirement, and quarterly estimated tax payments.',
      1,
    ),
    mc(
      'Under the ABC test used in California and some other states, a worker is presumed to be an employee unless:',
      ['The worker signed a contractor agreement', 'All three conditions are met: free from control, work outside the company\'s usual business, and engaged in an independently established trade', 'The worker works for multiple clients', 'The worker is paid by the project rather than hourly'],
      'All three conditions are met: free from control, work outside the company\'s usual business, and engaged in an independently established trade',
      'The ABC test presumes employee status. All three conditions must be met to classify someone as an independent contractor — failure of any one condition means the worker is an employee with all associated legal protections.',
      2,
    ),
    mc(
      'Which of the following factors most strongly suggests employee status rather than contractor status?',
      ['Being paid by the project', 'Having multiple clients', 'The company sets your hours, location, and methods', 'Using your own tools and equipment'],
      'The company sets your hours, location, and methods',
      'Behavioral control — the company directing how, when, and where you work, not just the end result — is a strong indicator of employee status. Contractor status typically involves more independence in how the work gets done.',
      3,
    ),
    mc(
      'If you are misclassified as an independent contractor when you should be an employee, you may recover:',
      ['Only future benefits going forward after the classification is corrected', 'Back pay for unpaid overtime, reimbursement of excess FICA taxes, and other remedies', 'A one-time settlement payment of $1,000', 'Nothing — misclassification is not legally actionable'],
      'Back pay for unpaid overtime, reimbursement of excess FICA taxes, and other remedies',
      'Misclassified workers can recover significant amounts: unpaid overtime wages, reimbursement for the employer\'s share of FICA taxes they paid, and potentially other benefits. The Department of Labor and state agencies investigate misclassification complaints.',
      4,
    ),
    mc(
      'A legitimate independent contractor who enjoys their contractor status should:',
      ['Try to get reclassified as an employee to gain stability', 'Set aside 25–30% of income for taxes and make quarterly estimated payments', 'Not worry about taxes since clients issue 1099s that handle everything', 'Only accept cash payments to simplify tax reporting'],
      'Set aside 25–30% of income for taxes and make quarterly estimated payments',
      'Legitimate contractors are running small businesses. Setting aside 25–30% for taxes and making quarterly estimated payments to the IRS (and state) is essential. Failure to do so results in large tax bills and potential penalties.',
      5,
    ),
  ],

  'at-will-employment': [
    mc(
      'At-will employment means your employer can terminate you:',
      ['Only for documented performance reasons', 'For any reason or no reason, as long as it is not an illegal reason', 'With at least two weeks advance notice', 'Only after following a formal disciplinary process'],
      'For any reason or no reason, as long as it is not an illegal reason',
      'At-will employment allows either party to end the employment at any time for any reason — or no reason — without cause or notice. The critical exception is that the reason cannot be illegal (discrimination, retaliation, etc.).',
      1,
    ),
    mc(
      'Which of the following is NOT a valid reason to fire an at-will employee?',
      ['Downsizing the department', 'Not being the right cultural fit', 'Filing a workers\' compensation claim', 'Making a business decision the employee opposed'],
      'Filing a workers\' compensation claim',
      'Firing someone in retaliation for filing a workers\' compensation claim is illegal — it violates anti-retaliation laws. At-will status does not override these protections. The other options are generally lawful reasons for termination.',
      2,
    ),
    mc(
      'An employee handbook stating that employees will only be fired "for cause" may create:',
      ['No legal obligation — handbooks are not contracts', 'An implied contract that restricts the employer\'s ability to fire at will', 'A public policy obligation binding on all employees', 'A union contract requirement'],
      'An implied contract that restricts the employer\'s ability to fire at will',
      'In some states, promises in employee handbooks or company policies — particularly that termination will only occur "for cause" or after specific procedures — can create an implied contract that limits at-will termination.',
      3,
    ),
    mc(
      'Montana is notable among U.S. states because:',
      ['It has the highest minimum wage in the country', 'After a probationary period, employers must have good cause to terminate employees — largely abandoning at-will employment', 'It prohibits all non-compete agreements', 'It requires severance pay for all terminations'],
      'After a probationary period, employers must have good cause to terminate employees — largely abandoning at-will employment',
      'Montana is the only state that has largely moved away from at-will employment by statute. After a probationary period, employers must have good cause to terminate — a significantly higher standard than the at-will default elsewhere.',
      4,
    ),
    mc(
      'For discrimination-based wrongful termination claims, before suing in federal court you must first:',
      ['Attempt mediation with your employer for 60 days', 'File a charge with the EEOC within 180 or 300 days of the discriminatory act', 'Obtain a determination from the Department of Labor', 'File in state court and lose first'],
      'File a charge with the EEOC within 180 or 300 days of the discriminatory act',
      'Filing an EEOC charge is a mandatory prerequisite to suing under Title VII, the ADA, and the ADEA in federal court. Missing the deadline — 180 days in most states, 300 days where the state has its own agency — forfeits the right to sue federally.',
      5,
    ),
  ],

  'protected-classes': [
    mc(
      'Title VII of the Civil Rights Act prohibits employment discrimination based on:',
      ['Age, disability, and genetic information only', 'Race, color, national origin, sex, and religion', 'Only race and national origin', 'All characteristics that could result in bias'],
      'Race, color, national origin, sex, and religion',
      'Title VII (1964) prohibits discrimination based on race, color, national origin, sex, and religion. Subsequent laws extended protection to age (ADEA), disability (ADA), pregnancy (PDA), and genetic information (GINA).',
      1,
    ),
    mc(
      'The Age Discrimination in Employment Act (ADEA) protects workers who are:',
      ['Any age experiencing age-based discrimination', '40 years old or older', 'Over 65 and nearing retirement', 'Under 25 as new workers facing age-based hiring bias'],
      '40 years old or older',
      'The ADEA specifically protects workers aged 40 and older from age-based employment discrimination. Younger workers facing age discrimination may have fewer federal protections, though some states have broader protections.',
      2,
    ),
    mc(
      'Under the ADA, "reasonable accommodation" for a disability means:',
      ['Giving the employee any accommodation they request', 'Modifications or adjustments that allow the employee to perform the essential functions of the job, unless they cause undue hardship', 'Excusing the employee from all performance standards', 'Providing a private workspace at no cost to the employee'],
      'Modifications or adjustments that allow the employee to perform the essential functions of the job, unless they cause undue hardship',
      'Reasonable accommodation is tailored to the employee\'s specific limitations. Employers must provide accommodations that are effective and not an undue hardship — the threshold scales with the employer\'s size and resources.',
      3,
    ),
    mc(
      'Disparate impact discrimination occurs when:',
      ['A supervisor treats one employee differently from others', 'A neutral policy disproportionately harms a protected class without business justification', 'An employer explicitly states a discriminatory preference in a job posting', 'An employer retaliates against an employee for filing a complaint'],
      'A neutral policy disproportionately harms a protected class without business justification',
      'Disparate impact does not require discriminatory intent. A facially neutral policy (like a height requirement) that disproportionately screens out members of a protected class can constitute illegal discrimination if it lacks business justification.',
      4,
    ),
    mc(
      'The EEOC charge deadline for most discrimination claims is:',
      ['30 days from the discriminatory act', '90 days from the discriminatory act', '180 days from the discriminatory act (300 days in states with their own agency)', '1 year from the discriminatory act'],
      '180 days from the discriminatory act (300 days in states with their own agency)',
      'The EEOC deadline is 180 calendar days from the date of discrimination — extended to 300 days in states that have their own fair employment agencies. Missing this deadline bars you from suing in federal court under Title VII, the ADA, or the ADEA.',
      5,
    ),
  ],
}
