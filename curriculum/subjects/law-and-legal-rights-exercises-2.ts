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

export const lawExercises2: Record<string, ExerciseDef[]> = {
  'consent-to-search': [
    mc(
      'If an officer asks "Mind if I look in your car?" and you say yes, the result is:',
      ['You have waived your Fourth Amendment rights for that search', 'The search is still limited to what the officer already suspects', 'You can revoke consent at any time before anything is found', 'The officer still needs probable cause to use what they find'],
      'You have waived your Fourth Amendment rights for that search',
      'Consenting to a search waives your Fourth Amendment protection for that search. Everything found can be used against you. Declining is almost always in your interest.',
      1,
    ),
    mc(
      'Refusing to consent to a police search can legally be used as:',
      ['Probable cause to search anyway', 'Evidence of guilt at trial', 'Grounds for temporary detention', 'None of the above — courts have held refusal cannot be used against you'],
      'None of the above — courts have held refusal cannot be used against you',
      'Courts have repeatedly held that refusing to consent to a search cannot be used as evidence of guilt or as probable cause. Exercising a constitutional right is not suspicious behavior.',
      2,
    ),
    mc(
      'If you consent to a search of your trunk only, and officers then search your glove compartment, evidence from the glove compartment may be:',
      ['Fully admissible since you gave initial consent', 'Challengeable because the search exceeded the scope of your consent', 'Admissible if they found something in the trunk first', 'Inadmissible only if you verbally objected during the search'],
      'Challengeable because the search exceeded the scope of your consent',
      'You can limit the scope of consent. Officers who exceed that scope — searching areas you did not authorize — may have conducted an unlawful search, and evidence found beyond your authorized scope may be suppressible.',
      3,
    ),
    mc(
      'After consenting to a search, you may:',
      ['Never withdraw consent once given', 'Withdraw consent mid-search by clearly stating you are withdrawing it', 'Withdraw consent only before the officer touches anything', 'Withdraw consent only if you hired an attorney'],
      'Withdraw consent mid-search by clearly stating you are withdrawing it',
      'You can withdraw consent at any time during a search by clearly stating so. Officers must stop. Evidence already found before withdrawal remains admissible, but the search cannot continue.',
      4,
    ),
    mc(
      'If an officer already has probable cause to search your car, asking for your consent is:',
      ['Required by law before any search', 'Unnecessary — they do not need your permission', 'A courtesy that reduces your legal options', 'Grounds for an automatic search warrant'],
      'Unnecessary — they do not need your permission',
      'If an officer has probable cause or another valid exception, they can search without your consent. When they ask for consent, it often signals they do not have probable cause and need your permission to search legally.',
      5,
    ),
  ],

  'if-you-are-arrested': [
    mc(
      'At the moment of arrest, the single most important thing to do is:',
      ['Explain your side of the story clearly to the officer', 'State you are invoking your right to remain silent and want an attorney, then stop talking', 'Cooperate fully and answer questions to demonstrate innocence', 'Ask to call a family member immediately'],
      'State you are invoking your right to remain silent and want an attorney, then stop talking',
      'Clearly invoking both rights — to remain silent and to an attorney — and then stopping all discussion of the case is the most protective action you can take at the moment of arrest.',
      1,
    ),
    mc(
      'During jail booking, conversations with cellmates and visitors are:',
      ['Protected attorney-client communications', 'Confidential under the Fifth Amendment', 'Almost certainly monitored and can be used against you', 'Protected unless used as the only evidence against you'],
      'Almost certainly monitored and can be used against you',
      'Jail phone calls, in-person visits, and conversations with cellmates are monitored. Never discuss your case in custody except with your attorney in a protected setting.',
      2,
    ),
    mc(
      'At arraignment, the recommended initial plea in nearly all cases is:',
      ['Guilty, to show cooperation and receive leniency', 'No contest, to preserve civil liability options', 'Not guilty, to preserve all options while your attorney reviews the case', 'Guilty with an explanation'],
      'Not guilty, to preserve all options while your attorney reviews the case',
      'Pleading not guilty at arraignment is standard practice regardless of the facts. It preserves all options — including accepting a plea deal later — while your attorney has time to review the evidence.',
      3,
    ),
    mc(
      'If you cannot afford a private attorney after arrest, you are entitled to:',
      ['Represent yourself with court assistance', 'A public defender appointed by the court at no cost', 'A reduced-fee attorney from the bar association', 'Legal help only for felony charges'],
      'A public defender appointed by the court at no cost',
      'The Sixth Amendment, as interpreted in Gideon v. Wainwright, guarantees the right to appointed counsel if you cannot afford an attorney. Request the public defender at your arraignment.',
      4,
    ),
    mc(
      'Bail is best described as:',
      ['A fine paid to the government for the crime charged', 'A financial guarantee held by the court to ensure you appear, returned when the case concludes', 'A non-refundable fee paid to secure release', 'A government loan to cover release costs'],
      'A financial guarantee held by the court to ensure you appear, returned when the case concludes',
      'Bail is money paid to the court as assurance you will appear for future court dates. It is returned at the end of the case if you appear as required. It is not punishment and not a fine.',
      5,
    ),
  ],

  'due-process': [
    mc(
      'Due process appears in the Constitution in:',
      ['The First and Fourth Amendments', 'The Fifth and Fourteenth Amendments', 'The Sixth and Eighth Amendments', 'Only the Fifth Amendment'],
      'The Fifth and Fourteenth Amendments',
      'The Fifth Amendment applies due process to the federal government; the Fourteenth Amendment extends it to state governments. Together they guarantee that no government — federal or state — may deprive you of life, liberty, or property without due process.',
      1,
    ),
    mc(
      'Procedural due process at minimum requires:',
      ['A jury trial for any government action', 'Notice of what is happening and a meaningful opportunity to be heard', 'An attorney present for all government proceedings', 'Proof beyond a reasonable doubt for any adverse government action'],
      'Notice of what is happening and a meaningful opportunity to be heard',
      'The core of procedural due process is notice and an opportunity to be heard. The required level of process scales with what is at stake — a criminal trial requires far more process than revoking a parking permit.',
      2,
    ),
    mc(
      'A private employer fires you without giving any reason. This is:',
      ['A due process violation', 'Legal — due process only restricts government action', 'Illegal under the Fifth Amendment', 'A potential civil rights violation'],
      'Legal — due process only restricts government action',
      'Constitutional due process only limits government action. Private employers are not bound by the due process clause. They may fire at-will employees without explanation (subject to other laws like anti-discrimination statutes).',
      3,
    ),
    mc(
      'Substantive due process protects:',
      ['Only rights explicitly listed in the Constitution', 'Fundamental rights so important the government cannot infringe them regardless of procedure', 'Rights created by state legislatures', 'Rights established by the Bill of Rights exclusively'],
      'Fundamental rights so important the government cannot infringe them regardless of procedure',
      'Substantive due process holds that some rights — privacy, marriage, contraception — are so fundamental that the government cannot infringe them even if it follows proper procedures. Courts have used it to protect unenumerated rights.',
      4,
    ),
    mc(
      'In a criminal case, due process requires the government to prove guilt by:',
      ['Preponderance of the evidence', 'Clear and convincing evidence', 'Beyond a reasonable doubt', 'Any standard the legislature chooses'],
      'Beyond a reasonable doubt',
      'Due process requires the highest standard of proof — beyond a reasonable doubt — in criminal cases because the consequences (loss of liberty) are so severe. This protects against wrongful conviction.',
      5,
    ),
  ],

  'equal-protection': [
    mc(
      'The Equal Protection Clause is found in the:',
      ['First Amendment', 'Fifth Amendment', 'Fourteenth Amendment', 'Tenth Amendment'],
      'Fourteenth Amendment',
      'The Equal Protection Clause — "no State shall deny to any person within its jurisdiction the equal protection of the laws" — is in the Fourteenth Amendment, ratified in 1868 after the Civil War.',
      1,
    ),
    mc(
      'A law classifying people by race is subject to which level of scrutiny?',
      ['Rational basis review', 'Intermediate scrutiny', 'Strict scrutiny', 'Heightened scrutiny'],
      'Strict scrutiny',
      'Racial classifications are "suspect classifications" that trigger strict scrutiny — the most demanding standard. The law must be narrowly tailored to serve a compelling government interest. Very few laws survive strict scrutiny.',
      2,
    ),
    mc(
      'Brown v. Board of Education (1954) held that:',
      ['Separate schools for different races were permissible if equal in quality', 'Racial segregation in public schools violates the Equal Protection Clause', 'States could set their own school integration timelines', 'Equal protection only applies to adults, not children'],
      'Racial segregation in public schools violates the Equal Protection Clause',
      'Brown v. Board overturned Plessy v. Ferguson\'s "separate but equal" doctrine, holding that racially segregated public schools are inherently unequal and violate the Fourteenth Amendment\'s Equal Protection Clause.',
      3,
    ),
    mc(
      'The Equal Protection Clause directly restricts:',
      ['Private employers from discriminating', 'Social media companies from banning users', 'Government action — laws and official conduct', 'All entities receiving federal funding'],
      'Government action — laws and official conduct',
      'The Equal Protection Clause is a constitutional limit on government action, not private conduct. Private discrimination is addressed by civil rights statutes (Title VII, Fair Housing Act, ADA), not the Constitution directly.',
      4,
    ),
    mc(
      'Sex-based classifications by the government are subject to:',
      ['Rational basis review', 'Intermediate scrutiny', 'Strict scrutiny', 'No constitutional scrutiny'],
      'Intermediate scrutiny',
      'Sex-based classifications trigger intermediate scrutiny — the law must be substantially related to an important government interest. This is more demanding than rational basis but less demanding than strict scrutiny applied to racial classifications.',
      5,
    ),
  ],

  'civil-vs-criminal': [
    mc(
      'In a criminal case, the party who brings charges against the defendant is:',
      ['The victim', 'The victim\'s attorney', 'The government/prosecutor', 'The judge'],
      'The government/prosecutor',
      'In criminal cases, charges are brought by the government — a prosecutor representing "the people." The victim is a witness, not the party. In civil cases, the injured party files the lawsuit themselves.',
      1,
    ),
    mc(
      'O.J. Simpson was acquitted in criminal court but found liable in civil court for the same deaths. This was possible because:',
      ['The civil case used different evidence', 'The criminal and civil standards of proof are different', 'The civil jury did not follow the law', 'Double jeopardy does not apply to civil cases and criminal cases used different charges'],
      'The criminal and civil standards of proof are different',
      'Criminal cases require proof beyond a reasonable doubt; civil cases require only a preponderance of the evidence (more likely than not). The same facts can result in acquittal in criminal court and liability in civil court.',
      2,
    ),
    mc(
      'In a civil lawsuit, the primary remedy available to the winning plaintiff is typically:',
      ['Incarceration of the defendant', 'Money damages and/or court orders', 'A criminal record for the defendant', 'Government investigation of the defendant'],
      'Money damages and/or court orders',
      'Civil remedies are compensatory damages (money), punitive damages in egregious cases, and injunctions (court orders). Jail is not a civil remedy except in the specific case of civil contempt of court.',
      3,
    ),
    mc(
      'If you are sued in a civil case, you have:',
      ['A constitutional right to a court-appointed attorney', 'No right to a court-appointed attorney — you must hire one or represent yourself', 'The same protections as in a criminal case', 'The right to a jury trial in all civil cases'],
      'No right to a court-appointed attorney — you must hire one or represent yourself',
      'The Sixth Amendment right to appointed counsel applies only in criminal cases. In civil cases, each party must provide their own attorney or represent themselves (pro se).',
      4,
    ),
    mc(
      'A contractor fails to complete the job you paid for. This dispute is best resolved through:',
      ['Filing a police report — it is theft', 'The civil system — small claims or civil court', 'An EEOC complaint', 'A constitutional rights claim'],
      'The civil system — small claims or civil court',
      'Contract disputes are civil matters. Police generally do not respond to contract disputes because they are not criminal matters. Small claims court is designed for exactly this type of dispute and does not require an attorney.',
      5,
    ),
  ],
}
