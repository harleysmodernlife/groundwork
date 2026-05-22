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

export const lawExercises7: Record<string, ExerciseDef[]> = {
  'workplace-harassment': [
    mc(
      'For conduct to constitute illegal workplace harassment under federal law, it must be based on:',
      ['Any behavior the employee finds offensive', 'A protected characteristic such as race, sex, religion, or disability', 'Repeated behavior only — single incidents never qualify', 'Physical conduct only — verbal harassment is not covered'],
      'A protected characteristic such as race, sex, religion, or disability',
      'Illegal harassment must be based on a protected characteristic. Rude, unfair, or harsh treatment unconnected to a protected class — while unpleasant — is generally not illegal harassment under federal law.',
      1,
    ),
    mc(
      'Quid pro quo harassment occurs when:',
      ['Multiple coworkers create a hostile work environment', 'A supervisor makes employment benefits conditional on tolerating unwelcome conduct', 'An employee is harassed in the workplace parking lot', 'A customer harasses an employee on company premises'],
      'A supervisor makes employment benefits conditional on tolerating unwelcome conduct',
      'Quid pro quo ("something for something") harassment is when a supervisor conditions job benefits — hiring, promotion, continued employment — on the employee tolerating or submitting to unwelcome conduct. Even a single instance can constitute quid pro quo harassment.',
      2,
    ),
    mc(
      'Your employer\'s liability for coworker harassment depends on whether:',
      ['The coworker is a manager or supervisor', 'The employer knew or should have known about the harassment and failed to take reasonable corrective action', 'The harassment was physical rather than verbal', 'You reported the harassment to the EEOC before reporting internally'],
      'The employer knew or should have known about the harassment and failed to take reasonable corrective action',
      'For coworker harassment, employers are liable if they knew or should have known about the conduct and did not respond reasonably. This is why reporting harassment internally is important — it puts the employer on notice.',
      3,
    ),
    mc(
      'After reporting harassment to HR, your employer retaliates by cutting your hours. This retaliation is:',
      ['Legal — reporting harassment does not create special protections', 'A separate illegal act with its own legal remedies', 'Only illegal if your hours were cut by more than 50%', 'Legal under at-will employment principles'],
      'A separate illegal act with its own legal remedies',
      'Retaliation for reporting harassment is independently illegal and can itself be the basis of a legal claim. Not reporting — for fear of retaliation — can limit your legal options while also potentially ratifying the employer\'s defense.',
      4,
    ),
    mc(
      'To file a federal harassment claim, you must first:',
      ['Sue in federal district court within 90 days of the harassment', 'File a charge with the EEOC within 180 or 300 days of the harassing conduct', 'Complete an internal HR investigation process', 'File with the Department of Labor'],
      'File a charge with the EEOC within 180 or 300 days of the harassing conduct',
      'Before suing in federal court for harassment under Title VII, you must file an EEOC charge within the applicable deadline. Missing this deadline eliminates the federal lawsuit option regardless of how strong your underlying case is.',
      5,
    ),
  ],

  'filing-a-complaint': [
    mc(
      'The EEOC handles workplace complaints about:',
      ['Wage theft and unpaid overtime', 'Employment discrimination based on protected characteristics and retaliation', 'Workplace safety violations', 'Misclassification of workers as independent contractors'],
      'Employment discrimination based on protected characteristics and retaliation',
      'The EEOC handles discrimination based on race, color, sex, national origin, religion, age, disability, pregnancy, and genetic information, plus retaliation for protected activity. Wage claims go to the Department of Labor; safety complaints go to OSHA.',
      1,
    ),
    mc(
      'Before suing an employer for discrimination in federal court, filing an EEOC charge is:',
      ['Optional but recommended', 'A mandatory prerequisite', 'Only required for class action lawsuits', 'Required only for public sector employers'],
      'A mandatory prerequisite',
      'Filing an EEOC charge is a jurisdictional prerequisite to suing under Title VII, the ADA, and the ADEA in federal court. You cannot skip this step. The EEOC will eventually issue a right-to-sue letter authorizing federal litigation.',
      2,
    ),
    mc(
      'OSHA retaliation complaints must be filed within what timeframe for most industries?',
      ['180 days', '90 days', '30 days', '1 year'],
      '30 days',
      'OSHA retaliation claims have an extremely short deadline — just 30 days for most industries. This is one of the shortest complaint deadlines in employment law. Act immediately if you believe you were retaliated against for a safety complaint.',
      3,
    ),
    mc(
      'Reporting a workplace violation internally (to HR) before filing with a government agency is important because:',
      ['It is legally required before filing any external complaint', 'Some legal defenses require showing you used internal procedures, and it puts the employer on notice — making retaliation more visible', 'It automatically triggers a government investigation', 'It suspends the statute of limitations on your claim'],
      'Some legal defenses require showing you used internal procedures, and it puts the employer on notice — making retaliation more visible',
      'Internal reporting creates a record, can sometimes resolve issues faster, and is required as a threshold for some legal claims. It also means any adverse action afterward is more clearly retaliatory.',
      4,
    ),
    mc(
      'The National Labor Relations Board (NLRB) protects employees\' rights to:',
      ['File discrimination claims against non-union employers', 'Organize, form unions, and engage in concerted activity to improve working conditions — even in non-union workplaces', 'File wage theft claims under the FLSA', 'Request OSHA workplace inspections'],
      'Organize, form unions, and engage in concerted activity to improve working conditions — even in non-union workplaces',
      'The NLRB protects rights under the National Labor Relations Act. Crucially, concerted activity protection — two employees discussing wages or complaining to management together — applies in non-union workplaces, not just unionized ones.',
      5,
    ),
  ],

  'osha-basics': [
    mc(
      'The OSHA General Duty Clause requires employers to:',
      ['Follow only the specific safety standards listed in OSHA regulations', 'Provide a workplace free from recognized hazards likely to cause death or serious physical harm, even where no specific standard exists', 'Post OSHA standards in the breakroom', 'Conduct annual safety audits and submit results to OSHA'],
      'Provide a workplace free from recognized hazards likely to cause death or serious physical harm, even where no specific standard exists',
      'The General Duty Clause is a catch-all that covers hazards not specifically addressed by OSHA standards. Employers cannot avoid safety obligations simply because no specific regulation covers the exact hazard.',
      1,
    ),
    mc(
      'Under OSHA, you have the right to refuse dangerous work when:',
      ['Any task feels uncomfortable or risky', 'You asked the employer to fix an imminent danger, they refused, and a reasonable person would believe the danger is real', 'A coworker expresses concern about the same task', 'Your employment contract includes a safety clause'],
      'You asked the employer to fix an imminent danger, they refused, and a reasonable person would believe the danger is real',
      'The right to refuse dangerous work under OSHA is narrow. All conditions must be met: genuine imminent danger, request to fix it that was refused, and insufficient time to file an OSHA complaint. It is not a general right to refuse unpleasant tasks.',
      2,
    ),
    mc(
      'If you file an OSHA safety complaint, your employer:',
      ['May be notified of your name', 'Cannot retaliate against you, and you can request confidentiality — OSHA will not reveal who filed', 'Must be given 30 days to correct violations before OSHA contacts them', 'Has the right to terminate you for filing if they can show a business reason'],
      'Cannot retaliate against you, and you can request confidentiality — OSHA will not reveal who filed',
      'OSHA protects workers from retaliation for filing safety complaints. You can also request confidentiality — OSHA will not tell your employer who filed the complaint. Retaliation after filing is a separate violation.',
      3,
    ),
    mc(
      'Employers with 10 or more employees in most industries must keep OSHA records of:',
      ['Only fatalities and hospitalizations', 'All workplace incidents regardless of severity', 'Work-related injuries and illnesses requiring more than first aid, recorded in the OSHA 300 log', 'Near-miss incidents only'],
      'Work-related injuries and illnesses requiring more than first aid, recorded in the OSHA 300 log',
      'OSHA recordkeeping requires the OSHA 300 log to document work-related injuries and illnesses that go beyond basic first aid. Employees have the right to access this log to understand their workplace\'s injury history.',
      4,
    ),
    mc(
      'An employer must report a workplace fatality to OSHA within:',
      ['24 hours', '8 hours', '72 hours', '30 days'],
      '8 hours',
      'Employers must report workplace fatalities to OSHA within 8 hours. In-patient hospitalizations, amputations, and loss of an eye must be reported within 24 hours. These are mandatory reporting requirements, not optional.',
      5,
    ),
  ],

  'unemployment-insurance': [
    mc(
      'Unemployment insurance benefits are funded by:',
      ['Employee payroll deductions', 'Federal general revenue taxes', 'Employer payroll taxes', 'State lottery proceeds'],
      'Employer payroll taxes',
      'UI is funded by taxes on employers — not employees. This is why workers do not see UI deductions on their paychecks. It is an employer-paid insurance program specifically to support workers between jobs.',
      1,
    ),
    mc(
      'Being fired for "misconduct" disqualifies you from unemployment benefits only if the misconduct means:',
      ['Any policy violation that led to termination', 'Deliberate violation of policy or behavior showing willful disregard for the employer\'s interests — not poor performance or honest mistakes', 'The employer says you were fired for cause', 'Any termination the employer characterizes as for misconduct'],
      'Deliberate violation of policy or behavior showing willful disregard for the employer\'s interests — not poor performance or honest mistakes',
      '"Misconduct" in unemployment law is a specific legal standard — more than just being fired for any reason. Poor performance, not being a good fit, and honest mistakes often do not constitute disqualifying misconduct. Appeal if denied.',
      2,
    ),
    mc(
      'When should you apply for unemployment benefits after losing your job?',
      ['Wait until you have a new job offer to compare income levels', 'Apply immediately — a waiting period of roughly one week applies anyway, and you cannot retroactively recover it', 'Wait one month to see if the situation resolves itself', 'Apply only if you have been unemployed for more than 30 days'],
      'Apply immediately — a waiting period of roughly one week applies anyway, and you cannot retroactively recover it',
      'Apply as soon as you become unemployed. Most states have a one-week waiting period before benefits start. Waiting to apply does not extend how far back benefits are paid — it just delays when you start receiving them.',
      3,
    ),
    mc(
      'If your unemployment claim is denied, you should:',
      ['Accept the denial and look for work without benefits', 'File an appeal quickly — deadlines are usually 10 to 30 days from the denial and many initial denials are overturned', 'Wait 60 days and reapply from scratch', 'File a lawsuit in federal court'],
      'File an appeal quickly — deadlines are usually 10 to 30 days from the denial and many initial denials are overturned',
      'Appeals are common and frequently successful, especially when employers mischaracterize the reason for separation. The deadline is short — typically 10 to 30 days. Missing it can eliminate your right to appeal.',
      4,
    ),
    mc(
      'Unemployment benefits are:',
      ['Tax-free income', 'Taxable as ordinary income — federal income tax applies and sometimes state tax', 'Only taxable if received for more than six months', 'Exempt from federal taxes but subject to state taxes'],
      'Taxable as ordinary income — federal income tax applies and sometimes state tax',
      'Unemployment benefits are fully taxable as ordinary income at the federal level. You can elect to have taxes withheld from your payments, or you will owe them when you file your tax return.',
      5,
    ),
  ],

  'workers-compensation': [
    mc(
      'Workers\' compensation is a no-fault system, meaning:',
      ['You must prove your employer was negligent to receive benefits', 'You generally just need to show the injury happened at work — employer negligence is not required', 'Fault is determined by an independent arbitrator', 'The employer bears no responsibility if you contributed to the injury'],
      'You generally just need to show the injury happened at work — employer negligence is not required',
      'Workers\' comp is specifically designed as no-fault — you do not need to prove your employer did anything wrong. The trade-off is that workers\' comp is generally the exclusive remedy, meaning you cannot also sue your employer for negligence.',
      1,
    ),
    mc(
      'Workers\' compensation typically covers which of the following?',
      ['Injuries during your daily commute to work', 'Injuries sustained while performing job duties at the worksite', 'Self-inflicted injuries', 'Injuries from a fight you initiated at work'],
      'Injuries sustained while performing job duties at the worksite',
      'Workers\' comp covers work-related injuries. The daily commute is generally excluded under the "going and coming" rule. Self-inflicted injuries, injuries from fights you started, and injuries from intoxication are typically excluded.',
      2,
    ),
    mc(
      'You are injured at work. The most critical first step is to:',
      ['File a claim with the state workers\' compensation board immediately', 'Report the injury to your employer within the required timeframe — often 30 days or less', 'See any doctor of your choice before telling your employer', 'Document the injury privately before involving the employer'],
      'Report the injury to your employer within the required timeframe — often 30 days or less',
      'Missing the reporting deadline can jeopardize your entire workers\' comp claim. Report immediately and in writing. Your employer should then provide claim forms. Reporting to the employer is separate from filing with the state board.',
      3,
    ),
    mc(
      'Temporary disability benefits under workers\' comp typically pay:',
      ['Your full regular wage while you cannot work', 'Approximately two-thirds of your average weekly wage, up to a state maximum', 'A flat benefit amount regardless of prior wages', 'Nothing — workers\' comp only covers medical expenses'],
      'Approximately two-thirds of your average weekly wage, up to a state maximum',
      'Temporary disability benefits replace a portion of lost wages — typically about two-thirds of your average weekly wage, subject to state-specific maximum limits. They cover the period you are medically unable to work.',
      4,
    ),
    mc(
      'An employer who fires you for filing a workers\' compensation claim:',
      ['Has acted legally under at-will employment', 'Has committed an illegal retaliatory act with its own remedies separate from your workers\' comp claim', 'Can only be held accountable if you have a written employment contract', 'Has violated only civil (not employment) law'],
      'Has committed an illegal retaliatory act with its own remedies separate from your workers\' comp claim',
      'Retaliation for filing a workers\' comp claim is illegal in every state. It is a separate cause of action from your workers\' comp claim, with its own remedies. Document everything and consult an attorney immediately.',
      5,
    ),
  ],

  'fmla': [
    mc(
      'The FMLA applies to employees who work for employers with:',
      ['Any number of employees', '10 or more employees', '50 or more employees within 75 miles of the worksite', '100 or more employees nationally'],
      '50 or more employees within 75 miles of the worksite',
      'FMLA only covers employers with 50 or more employees within 75 miles of the employee\'s worksite. Small businesses are not covered, though many states have similar laws with lower thresholds.',
      1,
    ),
    mc(
      'FMLA leave provides employees with:',
      ['Paid leave of up to 12 weeks with full salary continuation', 'Unpaid, job-protected leave — your job is guaranteed when you return', 'Paid leave funded by the federal government', 'Up to 6 months of paid medical leave for any illness'],
      'Unpaid, job-protected leave — your job is guaranteed when you return',
      'FMLA is unpaid federal leave. Its primary protection is job security — you return to the same or equivalent position. Some employers offer paid leave on top of FMLA, and some states have separate paid family leave programs.',
      2,
    ),
    mc(
      'To be eligible for FMLA leave, you must have worked for your current employer for at least:',
      ['6 months and 500 hours', '12 months and 1,250 hours in the prior year', '2 years with any amount of hours', '90 days — the standard probationary period'],
      '12 months and 1,250 hours in the prior year',
      'FMLA eligibility requires both a 12-month tenure with the employer and at least 1,250 hours worked in the 12 months preceding the leave. Part-time workers who do not meet the hour threshold may not qualify.',
      3,
    ),
    mc(
      'FMLA leave can be taken in which of the following ways?',
      ['Only as a single continuous block of leave', 'Intermittently — in separate blocks or as a reduced schedule, such as a few hours per week for a chronic condition', 'Only at the start or end of a year', 'Only for full-week increments'],
      'Intermittently — in separate blocks or as a reduced schedule, such as a few hours per week for a chronic condition',
      'Intermittent FMLA is one of its most valuable features — for chronic conditions causing periodic flare-ups, employees can take FMLA leave as needed in small increments rather than all at once.',
      4,
    ),
    mc(
      'An employer that counts FMLA absences against an employee under an attendance policy is:',
      ['Acting within its rights — attendance policies apply to everyone equally', 'Violating the FMLA — it cannot penalize employees for using FMLA leave under no-fault attendance systems', 'Permitted to do so if the employee does not provide medical certification', 'Required to do so to maintain consistent policy enforcement'],
      'Violating the FMLA — it cannot penalize employees for using FMLA leave under no-fault attendance systems',
      'The FMLA specifically prohibits counting FMLA absences against employees under no-fault attendance policies. Doing so is an interference with FMLA rights and can be the basis for a complaint with the Department of Labor.',
      5,
    ),
  ],
}
