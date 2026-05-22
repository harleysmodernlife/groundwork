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

export const lawExercises1: Record<string, ExerciseDef[]> = {
  'bill-of-rights': [
    mc(
      'The Bill of Rights was ratified in which year?',
      ['1776', '1789', '1791', '1803'],
      '1791',
      'The Bill of Rights — the first ten amendments to the Constitution — was ratified in 1791, two years after the Constitution itself took effect.',
      1,
    ),
    mc(
      'Which amendment protects against unreasonable searches and seizures?',
      ['Second Amendment', 'Third Amendment', 'Fourth Amendment', 'Fifth Amendment'],
      'Fourth Amendment',
      'The Fourth Amendment protects people from unreasonable government searches and seizures, generally requiring a warrant supported by probable cause.',
      2,
    ),
    mc(
      'The First Amendment does NOT protect which of the following?',
      ['Criticism of public officials', 'Peaceful protest', 'Flag burning as symbolic speech', 'Speech by a private employer restricting workplace topics'],
      'Speech by a private employer restricting workplace topics',
      'The First Amendment only limits government action, not private actors. A private employer can restrict speech at work without violating the First Amendment.',
      3,
    ),
    mc(
      '"Pleading the Fifth" refers to the right against:',
      ['Unreasonable searches', 'Double jeopardy only', 'Self-incrimination', 'Cruel and unusual punishment'],
      'Self-incrimination',
      'The Fifth Amendment includes the right against self-incrimination — you cannot be compelled to testify against yourself. "Pleading the Fifth" invokes this right.',
      4,
    ),
    mc(
      'Which amendment establishes that powers not delegated to the federal government belong to the states or the people?',
      ['Eighth Amendment', 'Ninth Amendment', 'Tenth Amendment', 'First Amendment'],
      'Tenth Amendment',
      'The Tenth Amendment is the foundation of federalism — if the Constitution does not grant a power to the federal government, that power belongs to the states or the people.',
      5,
    ),
  ],

  'first-amendment': [
    mc(
      'A private social media company removes your post. Under the First Amendment, this is:',
      ['A clear First Amendment violation', 'Potentially illegal under federal law', 'Not a First Amendment issue because the company is private', 'Illegal only if the post was political speech'],
      'Not a First Amendment issue because the company is private',
      'The First Amendment restricts government action, not private companies. Private platforms can moderate content under their own policies without triggering constitutional protections.',
      1,
    ),
    mc(
      'Which category of speech is NOT protected under the First Amendment?',
      ['Offensive political opinions', 'Flag burning as protest', 'True threats communicating serious intent to commit violence', 'Criticism of the President'],
      'True threats communicating serious intent to commit violence',
      'True threats — statements where the speaker intends to communicate a serious intent to commit violence — fall outside First Amendment protection. Offensive or unpopular political speech is generally protected.',
      2,
    ),
    mc(
      'Under U.S. law, "hate speech" that is merely offensive or bigoted but does not incite imminent lawless action is generally:',
      ['A federal crime', 'Protected by the First Amendment', 'A misdemeanor in most states', 'Unprotected but not criminal'],
      'Protected by the First Amendment',
      'Unlike many other democracies, the U.S. has no hate speech exception to the First Amendment. Offensive, bigoted, or hateful speech is generally protected unless it falls into a recognized unprotected category such as incitement or true threats.',
      3,
    ),
    mc(
      'For a public figure to win a defamation lawsuit, they must prove the speaker acted with:',
      ['Negligence', 'Actual malice — knowing the statement was false or acting with reckless disregard for the truth', 'Any intent to harm reputation', 'Bad faith'],
      'Actual malice — knowing the statement was false or acting with reckless disregard for the truth',
      'Public figures face a higher bar in defamation cases. They must prove "actual malice" — that the speaker knew the statement was false or acted with reckless disregard for its truth or falsity.',
      4,
    ),
    mc(
      'A public university (a government institution) bans all student political speeches on campus. This is most likely:',
      ['Permissible because universities set their own rules', 'A First Amendment violation', 'Legal if the speeches were disruptive', 'Protected under the Tenth Amendment'],
      'A First Amendment violation',
      'Public universities are government entities and therefore bound by the First Amendment. Banning political speech categorically would likely constitute a First Amendment violation, unlike private universities which are not bound by the Constitution.',
      5,
    ),
  ],

  'fourth-amendment': [
    mc(
      'A warrant to search your kitchen for narcotics gives police the authority to:',
      ['Search your entire home thoroughly', 'Search only the kitchen for narcotics', 'Search any area they believe drugs could be hidden', 'Search anywhere on the property'],
      'Search only the kitchen for narcotics',
      'A warrant must describe with particularity the place to be searched and items to be seized. A warrant for the kitchen does not authorize a search of the bedroom or other areas.',
      1,
    ),
    mc(
      'The "automobile exception" to the warrant requirement allows police to search a car without a warrant when:',
      ['They pull a car over for any traffic violation', 'They have probable cause to believe the car contains contraband or evidence of a crime', 'The driver does not have a license', 'Any officer requests it'],
      'They have probable cause to believe the car contains contraband or evidence of a crime',
      'The automobile exception allows a warrantless search when police have probable cause to believe the vehicle contains contraband or evidence. It does not apply to every traffic stop.',
      2,
    ),
    mc(
      'If you voluntarily consent to a police search, evidence found during that search is:',
      ['Inadmissible because you had no lawyer present', 'Generally admissible because you waived your Fourth Amendment rights', 'Admissible only if you were advised of your right to refuse', 'Inadmissible unless there was probable cause'],
      'Generally admissible because you waived your Fourth Amendment rights',
      'When you voluntarily consent to a search, you waive your Fourth Amendment protections for that search. Evidence found is generally admissible, which is why declining a search is usually advisable.',
      3,
    ),
    mc(
      'The exclusionary rule means that evidence obtained through an illegal search:',
      ['Must be returned to the defendant', 'Cannot be used against you at trial', 'Results in automatic dismissal of all charges', 'Creates a civil claim for damages'],
      'Cannot be used against you at trial',
      'The exclusionary rule suppresses evidence obtained in violation of the Fourth Amendment — it cannot be used against you at trial. This is enforced through a pre-trial motion to suppress.',
      4,
    ),
    mc(
      'A Terry stop allows police to briefly detain you based on:',
      ['Probable cause that you committed a crime', 'Reasonable suspicion that criminal activity is afoot', 'Any officer\'s discretion', 'A warrant signed by a judge'],
      'Reasonable suspicion that criminal activity is afoot',
      'A Terry stop requires reasonable suspicion — a lower standard than probable cause. During a Terry stop, police can also pat down outer clothing for weapons if they believe you may be armed.',
      5,
    ),
  ],

  'fifth-amendment': [
    mc(
      'After Berghuis v. Thompkins (2010), to properly invoke your right to remain silent you must:',
      ['Simply stay quiet without saying anything', 'Affirmatively state you are invoking the right, such as "I am invoking my right to remain silent"', 'Ask police to stop questioning you three times', 'Request a lawyer only'],
      'Affirmatively state you are invoking the right, such as "I am invoking my right to remain silent"',
      'Merely staying silent is no longer sufficient to invoke the Fifth Amendment right to remain silent. After Berghuis v. Thompkins, you must explicitly and affirmatively invoke the right.',
      1,
    ),
    mc(
      'The Fifth Amendment right against self-incrimination protects you from being compelled to provide:',
      ['A blood sample', 'Fingerprints', 'Testimony that incriminates you', 'A handwriting sample'],
      'Testimony that incriminates you',
      'The Fifth Amendment protects against compelled testimonial self-incrimination — being forced to say something incriminating. It does not protect against compelled physical evidence such as blood samples, fingerprints, or handwriting samples.',
      2,
    ),
    mc(
      'Miranda rights must be read before:',
      ['Any police questioning', 'Arresting a suspect', 'Custodial interrogation — when you are in custody AND being questioned', 'Any interaction with law enforcement'],
      'Custodial interrogation — when you are in custody AND being questioned',
      'Miranda warnings are required before custodial interrogation: when you are both in custody (not free to leave) and being questioned by law enforcement. An arrest without interrogation does not require Miranda.',
      3,
    ),
    mc(
      'Double jeopardy prevents the government from:',
      ['Charging you with multiple crimes for one act', 'Retrying you for the same offense after a final verdict', 'Prosecuting you in both state and federal court', 'Appealing an acquittal in any court'],
      'Retrying you for the same offense after a final verdict',
      'Double jeopardy prohibits being tried twice for the same offense after a final verdict. However, under dual sovereignty, state and federal governments can separately prosecute for the same conduct, as they are separate sovereigns.',
      4,
    ),
    mc(
      'The best advice from criminal defense attorneys when stopped or detained by police is:',
      ['Cooperate fully and explain your side of the story', 'Invoke your right to remain silent and request an attorney before answering questions', 'Be polite and answer questions briefly to show you have nothing to hide', 'Refuse to provide your name under any circumstances'],
      'Invoke your right to remain silent and request an attorney before answering questions',
      'Criminal defense attorneys consistently advise: do not talk to police without an attorney present. Even innocent people can make statements that are twisted or misinterpreted. Invoking your rights is always your right to use.',
      5,
    ),
  ],

  'being-stopped-by-police': [
    mc(
      'To determine whether you are free to leave during a police encounter, you should:',
      ['Assume you are always free to leave', 'Wait for the officer to tell you', 'Ask directly: "Am I free to leave?"', 'Attempt to walk away and see if you are stopped'],
      'Ask directly: "Am I free to leave?"',
      'Asking "Am I free to leave?" is the clearest way to determine what type of police encounter you are in. If yes, you may leave calmly. If no, you are being detained.',
      1,
    ),
    mc(
      'During a traffic stop, if an officer orders you to step out of the vehicle, you should:',
      ['Refuse until you are told why', 'Comply — the Supreme Court ruled officers can order drivers out during a lawful stop', 'Ask to speak with a supervisor first', 'Only comply if you are formally placed under arrest'],
      'Comply — the Supreme Court ruled officers can order drivers out during a lawful stop',
      'In Pennsylvania v. Mimms, the Supreme Court held that officers may order drivers out of their vehicles during a lawful traffic stop. Refusing to exit is not a valid exercise of rights in this situation.',
      2,
    ),
    mc(
      'If you believe a police stop is unlawful, the correct course of action is to:',
      ['Resist physically to assert your rights', 'Flee the scene', 'Comply in the moment and challenge it later in court', 'Argue loudly with the officer until they explain themselves'],
      'Comply in the moment and challenge it later in court',
      'Physical resistance can escalate the situation and result in additional charges. The place to challenge an unlawful stop is in a courtroom, not on the street. Document everything immediately after.',
      3,
    ),
    mc(
      'When recording police officers in public who are performing their duties, you:',
      ['May only record if you announce you are doing so', 'Have the right to record as long as you do not physically interfere', 'May not record without the officer\'s consent', 'May only record from a distance of at least 50 feet'],
      'Have the right to record as long as you do not physically interfere',
      'Courts have broadly upheld the right to record police performing their duties in public, as long as you do not physically interfere with those duties.',
      4,
    ),
    mc(
      'You are NOT required to answer police questions about where you are going or what you are doing. The best way to decline is:',
      ['Stay completely silent and ignore the officer', 'Say "I\'d rather not answer questions without a lawyer present"', 'Tell them to mind their own business', 'Provide false information to redirect the inquiry'],
      'Say "I\'d rather not answer questions without a lawyer present"',
      'Declining politely and non-confrontationally is the right approach. "I\'d rather not answer questions without a lawyer present" asserts your rights without escalating the situation.',
      5,
    ),
  ],
}
