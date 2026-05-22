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

export const lawExercises8: Record<string, ExerciseDef[]> = {
  'crimes-and-classifications': [
    mc(
      'A felony is generally defined as a crime punishable by:',
      ['A fine only', 'Up to one year in county jail', 'More than one year in state or federal prison', 'Any period of incarceration regardless of length'],
      'More than one year in state or federal prison',
      'Felonies are the most serious criminal offenses — punishable by more than one year, typically served in state or federal prison (not county jail). Misdemeanors carry up to one year in county jail.',
      1,
    ),
    mc(
      'Which of the following is typically classified as a misdemeanor rather than a felony?',
      ['Armed robbery', 'First-degree murder', 'Petty theft or simple assault', 'Kidnapping'],
      'Petty theft or simple assault',
      'Misdemeanors include less serious offenses like petty theft, simple assault, and first-offense DUI. Felonies include violent and serious crimes like murder, robbery, rape, and kidnapping.',
      2,
    ),
    mc(
      'Under the "dual sovereignty" doctrine, being prosecuted by a state for a crime does NOT bar:',
      ['A civil lawsuit by the victim for the same conduct', 'A federal prosecution for the same conduct', 'An appeal by the prosecutor', 'A retrial after a hung jury'],
      'A federal prosecution for the same conduct',
      'State and federal governments are separate sovereigns. The double jeopardy clause prohibits being tried twice by the same sovereign, but under dual sovereignty, both state and federal governments can prosecute for the same conduct.',
      3,
    ),
    mc(
      'A "strict liability" crime requires the prosecution to prove:',
      ['Specific intent to commit the crime', 'General intent to perform the act', 'Only that the defendant performed the prohibited act — intent is irrelevant', 'A pattern of similar behavior'],
      'Only that the defendant performed the prohibited act — intent is irrelevant',
      'Strict liability crimes do not require proof of intent. Traffic violations are a common example — you can violate the law accidentally. Most serious crimes require proving some level of intent or knowledge.',
      4,
    ),
    mc(
      'Conspiracy as a crime requires:',
      ['That the planned crime was actually completed', 'An agreement between two or more people to commit a crime, plus at least one overt act in furtherance', 'Physical participation in the underlying criminal act', 'Knowledge of every detail of the planned crime'],
      'An agreement between two or more people to commit a crime, plus at least one overt act in furtherance',
      'Conspiracy is an inchoate crime — the underlying crime need not be completed. The elements are: an agreement between two or more people to commit a crime, with intent to achieve that goal, and at least one overt act in furtherance of the conspiracy.',
      5,
    ),
  ],

  'from-arrest-to-trial': [
    mc(
      'At arraignment, defendants in almost all cases enter a plea of:',
      ['Guilty, to show remorse and receive a lighter sentence', 'No contest, to avoid admitting guilt', 'Not guilty, regardless of the facts, to preserve all options while the case develops', 'Guilty with an explanation to provide context'],
      'Not guilty, regardless of the facts, to preserve all options while the case develops',
      'Not guilty is the standard initial plea. It preserves the right to negotiate a plea deal, file pre-trial motions, and require the prosecution to prove its case. Pleading guilty at arraignment forecloses these options.',
      1,
    ),
    mc(
      'The Brady rule requires prosecutors to:',
      ['Disclose all evidence against the defendant before trial', 'Share evidence that is favorable to the defense', 'Provide the defense with the names of all witnesses', 'File charges within 48 hours of arrest'],
      'Share evidence that is favorable to the defense',
      'Brady material refers to evidence that is favorable to the defendant — exculpatory evidence or information that could be used to impeach a prosecution witness. Hiding Brady material is serious prosecutorial misconduct.',
      2,
    ),
    mc(
      'A successful pre-trial motion to suppress can:',
      ['Delay a trial but never prevent it', 'Exclude unconstitutionally obtained evidence from trial, potentially gutting the prosecution\'s case', 'Result in the case being transferred to federal court', 'Only affect physical evidence, not witness testimony'],
      'Exclude unconstitutionally obtained evidence from trial, potentially gutting the prosecution\'s case',
      'A motion to suppress is filed before trial and, if successful, prevents illegally obtained evidence from being used. If the suppressed evidence was central to the prosecution\'s case, charges may be dropped entirely.',
      3,
    ),
    mc(
      'The decision whether to accept or reject a plea deal ultimately belongs to:',
      ['The defense attorney', 'The judge', 'The defendant', 'The prosecutor\'s office'],
      'The defendant',
      'The plea decision is the defendant\'s alone. An attorney advises on the strength of the evidence and the risk of trial, but the defendant must make the final decision. An attorney who pressures a client to plead may be providing ineffective assistance.',
      4,
    ),
    mc(
      'A "hung jury" means:',
      ['The jury found the defendant guilty of all charges', 'The jury was unable to reach a unanimous verdict, resulting in a mistrial', 'The jury was dismissed for procedural violations', 'The jury returned a not guilty verdict on some counts but guilty on others'],
      'The jury was unable to reach a unanimous verdict, resulting in a mistrial',
      'A hung jury occurs when jurors cannot agree on a verdict. The result is a mistrial — not an acquittal. The prosecution can choose to retry the case with a new jury.',
      5,
    ),
  ],

  'plea-deals': [
    mc(
      'Approximately what percentage of criminal cases in the U.S. resolve through plea deals rather than trial?',
      ['About 30%', 'About 50%', 'Over 90%', 'About 70%'],
      'Over 90%',
      'More than 90% of criminal cases at the federal level resolve through guilty pleas, with similar rates in state courts. Trials are the exception, not the rule. The system would collapse if every case went to trial.',
      1,
    ),
    mc(
      '"Charge bargaining" in a plea deal means:',
      ['The defendant pays a reduced fine in exchange for a guilty plea', 'The defendant pleads guilty to a lesser charge than originally filed', 'The prosecution reduces the number of counts in exchange for cooperation', 'The defendant agrees to testify against others in exchange for sentencing leniency'],
      'The defendant pleads guilty to a lesser charge than originally filed',
      'Charge bargaining involves pleading guilty to a reduced charge — for example, robbery reduced to theft. This can have significant effects on sentencing and collateral consequences, such as avoiding a felony conviction.',
      2,
    ),
    mc(
      'When you plead guilty in a criminal case, you waive which constitutional rights?',
      ['Only the right to a jury trial', 'The right to trial, to confront witnesses, and against self-incrimination', 'Only the right against self-incrimination', 'No constitutional rights — you retain them all'],
      'The right to trial, to confront witnesses, and against self-incrimination',
      'A guilty plea waives multiple constitutional rights: the right to a jury trial, to confront witnesses against you, to require the prosecution to prove guilt, and the right against self-incrimination. The judge will confirm you understand this before accepting the plea.',
      3,
    ),
    mc(
      'For non-citizens, accepting a guilty plea to certain offenses can:',
      ['Have no immigration consequences if the offense is a misdemeanor', 'Trigger deportation and other severe immigration consequences', 'Only affect immigration status for felony convictions', 'Be fully remedied by a later expungement'],
      'Trigger deportation and other severe immigration consequences',
      'Criminal convictions — including guilty pleas — can have devastating immigration consequences including deportation, inadmissibility, and bars to naturalization. Non-citizens should consult an immigration attorney before accepting any plea.',
      4,
    ),
    mc(
      'Some innocent people plead guilty primarily because:',
      ['They are advised by attorneys that it is always the safest option', 'Pre-trial detention and the risk of a much harsher sentence at trial create pressure that makes a plea rational even for innocent defendants', 'The legal system provides financial compensation for false guilty pleas', 'Innocent people are identified and offered better plea terms'],
      'Pre-trial detention and the risk of a much harsher sentence at trial create pressure that makes a plea rational even for innocent defendants',
      'Pre-trial detention — being held in jail awaiting trial — creates intense pressure. Pleading guilty may mean immediate release on time served. The risk of a 10-year sentence at trial versus 2 years probation through a plea can make accepting a deal rational even for innocent people.',
      5,
    ),
  ],

  'right-to-counsel': [
    mc(
      'The right to appointed counsel for defendants who cannot afford an attorney was established in:',
      ['Miranda v. Arizona (1966)', 'Terry v. Ohio (1968)', 'Gideon v. Wainwright (1963)', 'Brady v. Maryland (1963)'],
      'Gideon v. Wainwright (1963)',
      'Gideon v. Wainwright established that states must provide attorneys to defendants in criminal cases who cannot afford one. This extended the Sixth Amendment right to counsel to state courts.',
      1,
    ),
    mc(
      'To properly invoke your Sixth Amendment right to counsel during a police interrogation, you must:',
      ['Stay silent until a lawyer arrives on their own', 'Clearly and unambiguously state that you want an attorney', 'Ask whether you need a lawyer', 'Tell police you will only speak with a lawyer eventually'],
      'Clearly and unambiguously state that you want an attorney',
      'Per Edwards v. Arizona, once you unambiguously invoke the right to counsel, all questioning must stop. Ambiguous requests ("Maybe I should get a lawyer") may not trigger the protection. Be direct: "I want an attorney."',
      2,
    ),
    mc(
      'To prevail on an "ineffective assistance of counsel" claim under Strickland v. Washington, you must show:',
      ['Your attorney made any mistake during the trial', 'Performance so deficient it fell below an objective standard of reasonableness, AND that the deficiency prejudiced the outcome', 'Your attorney was overworked with too many cases', 'Your attorney was a public defender rather than a private attorney'],
      'Performance so deficient it fell below an objective standard of reasonableness, AND that the deficiency prejudiced the outcome',
      'Strickland sets a high bar. You must show both prongs: (1) constitutionally deficient performance, and (2) a reasonable probability that the outcome would have been different with competent representation. Ordinary mistakes are generally not enough.',
      3,
    ),
    mc(
      'Public defenders are:',
      ['Paralegals who assist defendants without full attorney qualifications', 'Licensed attorneys who are often overworked but frequently experienced in criminal law', 'Volunteers from private law firms', 'Government employees who advise rather than represent defendants'],
      'Licensed attorneys who are often overworked but frequently experienced in criminal law',
      'Public defenders hold law degrees and bar licenses. Many are experienced criminal practitioners who try far more cases than private attorneys. Their primary challenge is caseload — resource constraints limit time per case, not their legal qualifications.',
      4,
    ),
    mc(
      'At which stage does the Sixth Amendment right to counsel first attach?',
      ['At the moment of arrest', 'When police begin any questioning', 'After formal charges are filed — at arraignment or indictment', 'Only at trial'],
      'After formal charges are filed — at arraignment or indictment',
      'The Sixth Amendment right to counsel attaches at the initiation of formal judicial proceedings — arraignment, preliminary hearing, or indictment. Before formal charges, the Miranda right to counsel (Fifth Amendment) applies during custodial interrogation.',
      5,
    ),
  ],

  'bail-and-pretrial': [
    mc(
      'Bail is primarily intended to:',
      ['Punish the defendant for the alleged crime', 'Ensure the defendant appears for future court dates by providing a financial incentive', 'Compensate victims for harm caused', 'Fund the public defender system'],
      'Ensure the defendant appears for future court dates by providing a financial incentive',
      'Bail is not punishment — the defendant has not been convicted. It is a financial guarantee designed to incentivize court appearance. If you show up as required, the money is returned at the end of the case.',
      1,
    ),
    mc(
      'A bail bondsman charges a non-refundable fee of approximately:',
      ['2% of the bail amount', '10% of the bail amount', '25% of the bail amount', '50% of the bail amount'],
      '10% of the bail amount',
      'Bail bondsmen typically charge 10% of the bail amount as their fee — non-refundable regardless of the outcome. If bail is $10,000, you pay $1,000 to the bondsman and do not get it back even if acquitted.',
      2,
    ),
    mc(
      'Pretrial detention — being held in jail before trial — has been shown to:',
      ['Have no effect on case outcomes when controlling for charge severity', 'Increase the likelihood of pleading guilty and result in longer sentences on average', 'Give defendants more time to prepare their defense with their attorney', 'Have a deterrent effect that reduces recidivism'],
      'Increase the likelihood of pleading guilty and result in longer sentences on average',
      'Research consistently shows pretrial detention worsens outcomes. Detained defendants lose jobs and housing, have less ability to help prepare their defense, and face intense pressure to plead guilty to get out — even if innocent.',
      3,
    ),
    mc(
      'A court may deny bail entirely under the Bail Reform Act when a defendant:',
      ['Is charged with any violent offense', 'Is found to be a flight risk or a danger to the community after a specific hearing', 'Has a prior criminal record of any kind', 'The prosecutor requests it'],
      'Is found to be a flight risk or a danger to the community after a specific hearing',
      'Preventive detention — holding a defendant without bail — requires a formal hearing with specific findings that the defendant poses either a serious flight risk or a danger to the community that cannot be managed by conditions of release.',
      4,
    ),
    mc(
      'The Eighth Amendment\'s prohibition on excessive bail means:',
      ['Bail must always be set at the minimum possible amount', 'Bail cannot be set at an amount designed to punish or ensure detention rather than ensure appearance', 'Bail is only constitutionally permitted for violent offenses', 'All defendants must receive a bail hearing within 24 hours'],
      'Bail cannot be set at an amount designed to punish or ensure detention rather than ensure appearance',
      'The Eighth Amendment bars excessive bail. Setting bail at an amount far beyond the defendant\'s means — when the only purpose is to ensure detention rather than ensure appearance — can be challenged as unconstitutionally excessive.',
      5,
    ),
  ],

  'criminal-records': [
    mc(
      'A criminal record can include which of the following?',
      ['Only convictions after a guilty verdict at trial', 'Guilty pleas and convictions only', 'Arrests, charges, court dispositions including dismissals, and sentences — even without conviction', 'Only felony convictions'],
      'Arrests, charges, court dispositions including dismissals, and sentences — even without conviction',
      'A criminal record (rap sheet) includes arrests even without conviction, charges filed, dismissals, acquittals, and sentences. People are often surprised that an arrest that resulted in dismissal still appears on their record unless cleared.',
      1,
    ),
    mc(
      'Expungement of a criminal record differs from sealing in that:',
      ['Expungement is available only for felonies; sealing is for misdemeanors', 'Expungement destroys or erases the record; sealing hides it from most but not all viewers (like law enforcement)', 'Expungement is permanent; sealing expires after a set period', 'There is no meaningful difference between the two'],
      'Expungement destroys or erases the record; sealing hides it from most but not all viewers (like law enforcement)',
      'Expungement typically means the record is destroyed — you can often legally deny the conviction on most applications. Sealing hides the record from public view but law enforcement can still access it. Availability and rules vary significantly by state.',
      2,
    ),
    mc(
      '"Ban the box" laws prohibit employers from:',
      ['Running any background check on job applicants', 'Asking about criminal history on initial job applications, delaying the inquiry to later in the hiring process', 'Considering any conviction more than five years old', 'Denying employment based on any criminal record'],
      'Asking about criminal history on initial job applications, delaying the inquiry to later in the hiring process',
      '"Ban the box" refers to removing the checkbox asking about criminal history from initial job applications. The inquiry moves to later in the process, giving applicants a chance to be evaluated on qualifications first. The criminal history inquiry still happens eventually.',
      3,
    ),
    mc(
      'Under the Fair Credit Reporting Act, if you are denied a job based on a background check, you have the right to:',
      ['Sue the employer for $1,000 automatically', 'See the report and dispute any errors in it', 'Have the employer explain their decision in writing', 'Have the conviction automatically removed from your record'],
      'See the report and dispute any errors in it',
      'The FCRA gives you the right to obtain a copy of the background check report used in the adverse decision and to dispute inaccuracies. Background check errors are more common than people realize and can cause significant harm.',
      4,
    ),
    mc(
      'Federal law prohibits felons from:',
      ['Voting in federal elections permanently', 'Possessing firearms', 'Applying for any federal student loan', 'Working for any government employer'],
      'Possessing firearms',
      'Federal law (18 U.S.C. § 922(g)) prohibits felons from possessing firearms. Voting rights vary widely by state — some restore them after sentence completion, others upon release, and Maine and Vermont have no voting restrictions even for incarcerated people.',
      5,
    ),
  ],
}
