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

export const lawExercises3: Record<string, ExerciseDef[]> = {
  'what-makes-a-contract': [
    mc(
      'Which of the following is NOT one of the four required elements of an enforceable contract?',
      ['Offer', 'Consideration', 'Notarization', 'Mutual assent'],
      'Notarization',
      'The four required elements of a contract are offer, acceptance, consideration, and mutual assent. Notarization is not required for most contracts, though it is required for some specific documents like deeds.',
      1,
    ),
    mc(
      'You say "I\'ll pay $2,000 if you paint my house." The painter says "I\'ll do it for $1,800." This exchange is:',
      ['A binding contract at $2,000 since you made the offer', 'A binding contract at $1,800 since the painter accepted the job', 'A counteroffer that rejects the original offer — no contract yet', 'A valid contract with a disputed price term'],
      'A counteroffer that rejects the original offer — no contract yet',
      'Acceptance must match the offer exactly. A response that changes the price or terms is a counteroffer, which rejects the original offer. No contract exists until one party accepts the other\'s exact terms.',
      2,
    ),
    mc(
      'A promise to give someone $500 as a gift, with nothing expected in return, is generally:',
      ['A binding contract', 'Unenforceable — gifts lack consideration', 'Enforceable only if in writing', 'Enforceable based on the promisee\'s reliance'],
      'Unenforceable — gifts lack consideration',
      'Consideration requires both parties to give something. A pure gift promise has no consideration from the recipient, so courts generally will not enforce it as a contract.',
      3,
    ),
    mc(
      'Under the Statute of Frauds, which type of contract MUST be in writing to be enforceable?',
      ['Any contract worth more than $100', 'A contract for the sale of real estate', 'A contract for services lasting more than two weeks', 'Any business contract'],
      'A contract for the sale of real estate',
      'The Statute of Frauds requires specific categories of contracts to be in writing, including real estate sales, contracts not completable within one year, and sales of goods over $500. Real estate is the clearest example.',
      4,
    ),
    mc(
      'A contract to pay someone to commit burglary is:',
      ['Voidable at the victim\'s option', 'Enforceable as a private business agreement', 'Void — courts will not enforce contracts for illegal purposes', 'Enforceable until one party reports it to police'],
      'Void — courts will not enforce contracts for illegal purposes',
      'Contracts must have a legal purpose to be enforceable. A contract for illegal activity is void from the start — courts will not help either party enforce it or recover money paid under it.',
      5,
    ),
  ],

  'verbal-vs-written': [
    mc(
      'A verbal contract that meets all four elements of a contract is:',
      ['Never enforceable', 'Legally binding but difficult to prove in a dispute', 'Only enforceable if witnessed by a third party', 'Enforceable only for amounts under $100'],
      'Legally binding but difficult to prove in a dispute',
      'Verbal contracts are legally valid in most situations when offer, acceptance, consideration, and mutual assent are present. The problem is evidence — in a dispute, you must establish what the parties agreed to without documentation.',
      1,
    ),
    mc(
      'The primary advantage of a written contract over a verbal one is:',
      ['Written contracts cannot be contested in court', 'Written contracts create a record at the time of agreement that both parties can refer to later', 'Verbal contracts are automatically void after 30 days', 'Written contracts are required for any amount over $50'],
      'Written contracts create a record at the time of agreement that both parties can refer to later',
      'A written contract eliminates disputes about what was agreed. When terms are documented, there is no argument about the price, deadline, or scope. This is the fundamental advantage of written over verbal agreements.',
      2,
    ),
    mc(
      'You had a verbal agreement that went wrong. The best immediate action is to:',
      ['File a lawsuit immediately before evidence is lost', 'Write down everything you remember with dates, and preserve any related texts or emails', 'Contact the other party and try to get them to agree verbally again', 'Accept that verbal agreements are unenforceable and move on'],
      'Write down everything you remember with dates, and preserve any related texts or emails',
      'After a verbal contract dispute, document everything immediately while memories are fresh. Written notes, texts, and emails referencing the agreement are valuable evidence. You may still win in court with strong evidence.',
      3,
    ),
    mc(
      'A lease for 18 months agreed to only verbally is:',
      ['Fully enforceable as any verbal contract would be', 'Unenforceable under the Statute of Frauds — leases over one year must be in writing', 'Valid but only for the first 12 months', 'Enforceable only if two witnesses were present'],
      'Unenforceable under the Statute of Frauds — leases over one year must be in writing',
      'The Statute of Frauds requires leases for more than one year to be in writing. An 18-month verbal lease cannot be enforced based on the verbal agreement alone, no matter how clearly both parties remember it.',
      4,
    ),
    mc(
      'You verbally agreed to terms with a contractor. The safest follow-up action is to:',
      ['Trust the relationship and proceed without documentation', 'Send an email confirming the agreed terms, asking them to confirm — this creates a written record', 'Have a third party witness the agreement retroactively', 'Wait to see if there is a dispute before documenting anything'],
      'Send an email confirming the agreed terms, asking them to confirm — this creates a written record',
      'An email confirming verbal terms ("Just following up — you\'ll complete by [date] for $[amount]?") and a confirming reply creates a written record of the agreement, even without a formal contract document.',
      5,
    ),
  ],

  'when-contracts-are-void': [
    mc(
      'A void contract differs from a voidable contract in that:',
      ['A void contract can be ratified by both parties; a voidable contract cannot', 'A void contract has no legal effect from the start; a voidable contract is valid until the protected party cancels it', 'A void contract requires court action to cancel; a voidable contract is automatically invalid', 'There is no practical difference — both are unenforceable'],
      'A void contract has no legal effect from the start; a voidable contract is valid until the protected party cancels it',
      'Void contracts are legally dead from inception — neither party can enforce them. Voidable contracts are valid and enforceable unless and until the protected party (e.g., a minor) chooses to cancel them.',
      1,
    ),
    mc(
      'A 16-year-old signs a lease. This contract is typically:',
      ['Void — minors cannot enter any contracts', 'Voidable by the minor, who can choose to honor or cancel it', 'Fully enforceable since the landlord entered in good faith', 'Valid only with a parent\'s signature'],
      'Voidable by the minor, who can choose to honor or cancel it',
      'Contracts with minors are typically voidable by the minor. The minor can choose to enforce or cancel the contract, but the adult party cannot cancel based on the minor\'s age. The minor has the option, not an obligation.',
      2,
    ),
    mc(
      'You signed a contract based on the other party\'s deliberate false statements about material facts. This contract is:',
      ['Void because fraud makes all contracts illegal', 'Voidable by you — the defrauded party can cancel the contract', 'Fully binding because you signed it', 'Valid only if you can prove the fraud in court first'],
      'Voidable by you — the defrauded party can cancel the contract',
      'Fraud makes a contract voidable by the defrauded party. You were induced to sign based on lies, so you have the option to void the contract. You must act promptly — delays can undermine the claim.',
      3,
    ),
    mc(
      'A non-compete clause preventing you from working anywhere in the country in your industry for five years is likely:',
      ['Fully enforceable as a standard business practice', 'Void or unenforceable for violating public policy by being unreasonably broad', 'Enforceable only if you were paid extra for signing it', 'Only unenforceable in California'],
      'Void or unenforceable for violating public policy by being unreasonably broad',
      'Courts routinely refuse to enforce non-compete clauses that are too broad in scope, duration, or geographic reach. A nationwide five-year ban on working in your entire industry is likely void or unenforceable as against public policy.',
      4,
    ),
    mc(
      'If a contract is voidable and the protected party continues performing under it after gaining the right to void it, they may have:',
      ['Extended the voiding period for another full term', 'Ratified the contract, making it fully enforceable', 'Created a new contract on the same terms', 'No effect — the right to void cannot be lost by performance'],
      'Ratified the contract, making it fully enforceable',
      'A voidable contract can be ratified — if the protected party continues performing after they could have voided it (e.g., a minor continuing to pay rent after turning 18), they may be found to have ratified the contract, and the window to void it may close.',
      5,
    ),
  ],

  'key-clauses-to-find': [
    mc(
      'An arbitration clause in a contract typically means:',
      ['You can sue in court but must first try to settle', 'Disputes must go to a private arbitrator instead of court, often waiving your right to sue', 'The company will pay for your attorney if there is a dispute', 'You agree to mediation before any legal action'],
      'Disputes must go to a private arbitrator instead of court, often waiving your right to sue',
      'Arbitration clauses require disputes to be resolved in private arbitration rather than courts. They commonly include class action waivers and tend to favor the party that regularly uses arbitration — usually the business.',
      1,
    ),
    mc(
      'A "limitation of liability" clause stating "our liability shall not exceed fees paid" means that if the company\'s failure costs you $50,000, you can likely recover:',
      ['$50,000 — courts routinely override these clauses', 'Only what you paid them, potentially far less than your actual loss', 'Nothing — liability clauses are complete shields', '$50,000 plus attorney\'s fees as a penalty'],
      'Only what you paid them, potentially far less than your actual loss',
      'Limitation of liability clauses cap the other party\'s financial exposure at a set amount — often the fees you paid. If you paid $500 and the company\'s failure costs you $50,000, you may only recover $500.',
      2,
    ),
    mc(
      'Before signing a contract, the most efficient way to find important clauses is to:',
      ['Read every word from beginning to end', 'Search the document for terms like "arbitrat," "terminat," "renew," "liabilit," and "indemnif"', 'Look only at the sections with headings you recognize', 'Ask the other party to summarize the key terms verbally'],
      'Search the document for terms like "arbitrat," "terminat," "renew," "liabilit," and "indemnif"',
      'Searching for keyword stems quickly locates the most consequential clauses without reading every word of a long document. These terms reliably appear in arbitration, termination, renewal, liability, and indemnification clauses.',
      3,
    ),
    mc(
      'An automatic renewal clause means:',
      ['You automatically receive a price reduction at renewal', 'The contract renews for another term unless you cancel by a specific date, often locking you in for another period', 'Both parties must agree in writing to continue', 'The contract converts to month-to-month after the initial term'],
      'The contract renews for another term unless you cancel by a specific date, often locking you in for another period',
      'Automatic renewal clauses extend the contract for another full term unless you cancel by a specified deadline. Missing the deadline can result in being locked in for another year or longer.',
      4,
    ),
    mc(
      'An indemnification clause requiring you to "indemnify, defend, and hold harmless" the other party could make you responsible for:',
      ['Only your own legal fees if there is a dispute', 'The other party\'s legal defense costs and damages if claims arise from your use of the service', 'Nothing — these clauses are rarely enforced', 'Damages up to the amount you paid'],
      'The other party\'s legal defense costs and damages if claims arise from your use of the service',
      'Broad indemnification clauses can make you financially responsible for the other party\'s defense costs and liability — even if you did nothing wrong. This is a significant and often overlooked risk in consumer and service contracts.',
      5,
    ),
  ],

  'fine-print-tactics': [
    mc(
      'When a contract uses a capitalized word like "Service," you should:',
      ['Assume it means the same as the everyday definition of the word', 'Find the definitions section to see the specific defined meaning, which may differ significantly from everyday usage', 'Treat it as emphasis on an important term', 'Assume it refers to all services the company provides'],
      'Find the definitions section to see the specific defined meaning, which may differ significantly from everyday usage',
      'Contracts define capitalized terms in a definitions section. "Service" may include only specific things — or many things — that differ from what you picture. Always find and read the definitions before reading the rest of the contract.',
      1,
    ),
    mc(
      'A clause saying "We may update these terms at any time; continued use constitutes acceptance" allows the company to:',
      ['Update pricing only, not other terms', 'Change the contract after you\'ve agreed, without getting your explicit consent each time', 'Terminate your account for any reason', 'Charge you more than the initial agreed price'],
      'Change the contract after you\'ve agreed, without getting your explicit consent each time',
      'Unilateral modification clauses let companies change terms and treat your continued use of the service as acceptance of the new terms, even if the terms are substantially worse than what you originally agreed to.',
      2,
    ),
    mc(
      'The combined effect of an arbitration clause and a class action waiver in a consumer contract is that:',
      ['You can sue in either arbitration or court, giving you more options', 'You can only bring a small individual claim in private arbitration, making large-scale accountability very difficult', 'The company can waive arbitration and bring you to court', 'You lose the right to any dispute resolution'],
      'You can only bring a small individual claim in private arbitration, making large-scale accountability very difficult',
      'Together, these clauses mean you must arbitrate individually and cannot join others harmed by the same practice. If the company wrongs millions of people in small ways, no single claim is worth pursuing, effectively insulating the company from accountability.',
      3,
    ),
    mc(
      'All-caps blocks in contracts are typically used for:',
      ['Sections that are purely optional', 'Warranty disclaimers and liability limitations — technically disclosed but easy to skip over', 'The most important consumer protections in the agreement', 'Terms that vary by state'],
      'Warranty disclaimers and liability limitations — technically disclosed but easy to skip over',
      'All-caps is often used for warranty disclaimers and liability limitations — companies are sometimes legally required to make these disclosures conspicuous. Paradoxically, all-caps blocks are often glossed over. Read them carefully.',
      4,
    ),
    mc(
      'A contract describing deliverables as "professional consulting services as mutually agreed upon" is problematic because:',
      ['The word "professional" is legally undefined', 'There is no specific deliverable — "mutually agreed" allows the other party to claim they delivered what they said they would', 'Consulting agreements cannot be enforced in court', 'The phrase violates the Statute of Frauds'],
      'There is no specific deliverable — "mutually agreed" allows the other party to claim they delivered what they said they would',
      'Vague deliverable descriptions protect the provider, not the customer. "Mutually agreed" means future disputes about what was agreed. Always insist on a specific list of what will be delivered.',
      5,
    ),
  ],
}
