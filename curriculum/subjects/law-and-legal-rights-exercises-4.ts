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

export const lawExercises4: Record<string, ExerciseDef[]> = {
  'negotiating-terms': [
    mc(
      'When approaching contract negotiations, the best starting assumption is:',
      ['All terms are fixed — negotiating will damage the relationship', 'Terms can be changed until you are explicitly told otherwise', 'Only price is negotiable in most contracts', 'Negotiating signals inexperience and mistrust'],
      'Terms can be changed until you are explicitly told otherwise',
      'Assume terms are negotiable until proven otherwise. The worst outcome is hearing "no" and accepting the original terms. Many contracts — service agreements, employment contracts, leases — are more negotiable than people assume.',
      1,
    ),
    mc(
      'Before entering negotiations, you should:',
      ['List every term you want changed to show thoroughness', 'Read the contract and prioritize the terms that actually matter most to you', 'Demand changes verbally to preserve flexibility', 'Only focus on price — other terms rarely matter in practice'],
      'Read the contract and prioritize the terms that actually matter most to you',
      'Going into negotiations with 20 changes signals inexperience and strains the relationship. Read first, identify your actual priorities — dealbreakers vs. preferred changes — and negotiate selectively.',
      2,
    ),
    mc(
      'Any terms you successfully negotiate should be:',
      ['Documented in an email from the other party after signing', 'Written into the contract itself or a signed amendment before you sign', 'Confirmed verbally in front of witnesses', 'Added as a handwritten note on your copy of the contract'],
      'Written into the contract itself or a signed amendment before you sign',
      'Negotiated changes must appear in the actual contract document. An email or verbal promise outside the contract is worthless if the written contract says something different and the other party later denies the side agreement.',
      3,
    ),
    mc(
      'Automatic renewal clauses are commonly negotiable in service contracts. When you ask to remove one, the likely best outcome is:',
      ['The other party refuses — these clauses are always non-negotiable', 'The clause is removed or changed to opt-in renewal, giving you control each term', 'You receive a discount in exchange for keeping the clause', 'The clause moves to a different section but remains in effect'],
      'The clause is removed or changed to opt-in renewal, giving you control each term',
      'Automatic renewal clauses are frequently negotiable, especially with smaller businesses and contractors. Asking to remove them or change to opt-in renewal often succeeds, giving you full control over whether to continue.',
      4,
    ),
    mc(
      'Your negotiating leverage is greatest when:',
      ['You express urgency and need for the deal quickly', 'The other party needs your business or skills more than you need the deal', 'You are negotiating a standard consumer contract online', 'You are one of many applicants for a position'],
      'The other party needs your business or skills more than you need the deal',
      'Leverage depends on who needs the deal more. When the other party needs you more than you need them — when you have specialized skills, a competing offer, or they need your business — you have more leverage to negotiate terms.',
      5,
    ),
  ],

  'employment-contracts': [
    mc(
      'A non-compete clause is most likely to be unenforceable in:',
      ['Texas', 'New York', 'Florida', 'California'],
      'California',
      'California essentially bans non-compete agreements against most employees. They are unenforceable regardless of what an employment contract says. Other states enforce non-competes if they are "reasonable" in scope, duration, and geography.',
      1,
    ),
    mc(
      'An intellectual property clause in an employment contract that claims "everything you create during employment belongs to the company" could affect:',
      ['Only work done on company time using company equipment', 'Side projects and inventions you develop on your own time if the clause is broad enough', 'Only patentable inventions, not creative work', 'Nothing — these clauses are uniformly unenforceable'],
      'Side projects and inventions you develop on your own time if the clause is broad enough',
      'Some employment IP clauses claim ownership of everything created during employment, even on personal time and unrelated to the job. Some states limit how broad these can be, but it is critical to clarify and potentially carve out pre-existing work before signing.',
      2,
    ),
    mc(
      'A non-solicitation agreement prevents you from:',
      ['Working for any company in your industry after leaving', 'Recruiting former colleagues or soliciting former clients after departure', 'Starting a business in a competing field', 'All post-employment activity related to your former employer'],
      'Recruiting former colleagues or soliciting former clients after departure',
      'Non-solicitation agreements are distinct from non-competes — they specifically bar you from recruiting former colleagues or going after your former employer\'s clients. They are generally more enforceable than broad non-competes.',
      3,
    ),
    mc(
      'A separation agreement that comes with severance pay almost always includes:',
      ['A guarantee of a positive reference letter', 'A release of all legal claims against the employer', 'Continuation of health insurance at no cost', 'An admission by the employer of wrongdoing'],
      'A release of all legal claims against the employer',
      'Severance offers almost always come with a release — you sign away your right to sue the employer for any claims related to your employment or termination. Never sign a separation agreement without reading it carefully, and consider having an attorney review it for significant amounts.',
      4,
    ),
    mc(
      'Discussing your salary with coworkers is:',
      ['Prohibited by most valid NDA clauses', 'Generally protected under the National Labor Relations Act', 'Legal only for union members', 'Grounds for termination under at-will employment law'],
      'Generally protected under the National Labor Relations Act',
      'The NLRA protects employees\' right to discuss wages and working conditions with coworkers. NDA provisions that prohibit wage discussions with coworkers are generally unenforceable under the NLRA.',
      5,
    ),
  ],

  'service-agreements': [
    mc(
      'The most critical section of a service agreement is:',
      ['The payment terms section', 'The scope of services / deliverables section', 'The governing law section', 'The signature block'],
      'The scope of services / deliverables section',
      'Most service disputes originate from ambiguous scope. "Website development" is a recipe for conflict; a specific list of pages, features, and delivery dates is not. Vague scope protects the provider, not the client.',
      1,
    ),
    mc(
      'A "change order" provision in a service contract protects both parties by:',
      ['Allowing the provider to change the price at any time', 'Requiring written agreement and pricing for any work outside the original scope before it begins', 'Giving the client the right to expand scope without additional payment', 'Limiting the client\'s ability to request changes after signing'],
      'Requiring written agreement and pricing for any work outside the original scope before it begins',
      'Change order provisions require that scope expansions be documented and priced in writing before the extra work starts. This prevents disputes about whether additional work was included in the original price.',
      2,
    ),
    mc(
      'Without an explicit intellectual property clause in a service contract, who owns work a freelancer creates for a client?',
      ['Always the client who paid for it', 'The freelancer may retain rights — ownership must be explicitly assigned in writing', 'The government through copyright registration', 'Whoever files for copyright first'],
      'The freelancer may retain rights — ownership must be explicitly assigned in writing',
      'Without a written IP assignment clause, freelancers and contractors may retain copyright in work they create, even if the client paid for it. Clients should insist on a written assignment of ownership in the service agreement.',
      3,
    ),
    mc(
      'When a service provider fails to deliver as promised, your first step should be:',
      ['File in small claims court immediately', 'Document what was promised and not delivered, then give them a reasonable written opportunity to fix it', 'Contact their professional licensing board', 'Withhold payment for all prior work'],
      'Document what was promised and not delivered, then give them a reasonable written opportunity to fix it',
      'Start by documenting the failure and communicating concerns in writing. Give the provider a reasonable chance to cure the problem. This creates a record and often resolves the dispute without litigation.',
      4,
    ),
    mc(
      'Mechanics\' lien laws may protect a contractor who has done work on real property by:',
      ['Guaranteeing payment from the property owner\'s insurance', 'Allowing them to place a lien on the property for unpaid work, potentially affecting sale or refinancing', 'Requiring the property owner to pay within 10 days', 'Allowing them to repossess materials used in construction'],
      'Allowing them to place a lien on the property for unpaid work, potentially affecting sale or refinancing',
      'Mechanics\' lien laws give contractors who perform work on real property a legal claim against the property itself for unpaid compensation. A lien can prevent the owner from selling or refinancing until the debt is resolved.',
      5,
    ),
  ],

  'terms-of-service': [
    mc(
      'Clicking "I agree" on a terms of service page is legally:',
      ['Not binding because no one actually reads terms of service', 'Generally binding — courts treat it as acceptance of the contract', 'Only binding if you are over 18', 'Binding only for purchases, not free services'],
      'Generally binding — courts treat it as acceptance of the contract',
      'Courts have consistently upheld click-wrap agreements as binding contracts. The fact that most people do not read them does not make them void. You had the opportunity to read the terms and chose to proceed.',
      1,
    ),
    mc(
      'Most terms of service grant the platform regarding content you post:',
      ['No rights — your copyright is fully preserved', 'A broad license to use your content in virtually any way they choose, while you retain copyright', 'Full ownership of your content', 'The right to use your content only within the platform'],
      'A broad license to use your content in virtually any way they choose, while you retain copyright',
      'Most platforms use a license model: you retain copyright but grant the company a broad, worldwide, royalty-free license to use, distribute, and monetize your content. You own it in name but the company can use it freely.',
      2,
    ),
    mc(
      'A class action waiver in terms of service means that if the company wrongs millions of customers in a small way:',
      ['Each customer can sue in small claims court easily', 'No individual can affordably pursue a claim, effectively shielding the company from accountability at scale', 'Customers can still organize a class action outside of court', 'The government steps in to enforce claims on behalf of customers'],
      'No individual can affordably pursue a claim, effectively shielding the company from accountability at scale',
      'Class action waivers prevent customers from combining claims. When individual harms are small (a few dollars each), no one case is worth the cost of arbitration. The company can harm millions of people in small ways with no practical accountability.',
      3,
    ),
    mc(
      'For high-stakes services like financial apps or professional tools, the terms of service section most important to read is:',
      ['The section describing the company\'s address and jurisdiction', 'The arbitration clause and data use section', 'The section describing the company\'s branding guidelines', 'The section describing premium features'],
      'The arbitration clause and data use section',
      'For high-stakes services, prioritize the arbitration clause (you are waiving class action rights and court access) and the data use section (what they collect, share, and do with your information).',
      4,
    ),
    mc(
      'Terms of service for most consumer services are:',
      ['Fully negotiable on request', 'Non-negotiable — take it or leave it, though you can look for alternatives with better terms', 'Superseded by your state\'s consumer protection laws in all cases', 'Automatically void after one year without re-acceptance'],
      'Non-negotiable — take it or leave it, though you can look for alternatives with better terms',
      'Most consumer terms of service are non-negotiable. Your options are to accept, decline, or find an alternative service. Enterprise and business agreements are often negotiable. Sites like tosdr.org summarize and rate major platforms\' terms.',
      5,
    ),
  ],

  'lease-agreements': [
    mc(
      'A fixed-term lease of 12 months provides the tenant with the benefit of:',
      ['The ability to leave at any time with 30 days notice', 'Rent stability — the landlord cannot raise rent during the term unless the lease permits it', 'Automatic renewal at the same rent for a second year', 'Protection from eviction for any reason during the term'],
      'Rent stability — the landlord cannot raise rent during the term unless the lease permits it',
      'A fixed-term lease locks in rent for the term and protects the tenant from rent increases. The trade-off is reduced flexibility — leaving early can result in liability for remaining rent.',
      1,
    ),
    mc(
      '"Joint and several liability" in a multi-tenant lease means:',
      ['Each tenant is responsible only for their proportional share of rent', 'Each tenant is individually responsible for the full rent — if one roommate does not pay, the landlord can pursue any tenant for the full amount', 'Tenants must sue jointly if there is a dispute', 'All tenants must sign any modification to the lease'],
      'Each tenant is individually responsible for the full rent — if one roommate does not pay, the landlord can pursue any tenant for the full amount',
      'Joint and several liability means each tenant is on the hook for the entire rent, not just their share. If your roommate disappears, the landlord can demand the full amount from you.',
      2,
    ),
    mc(
      'Before signing a lease, you should document the unit\'s condition by:',
      ['Reviewing the previous tenant\'s security deposit return', 'Taking date-stamped photos and video of every room and noting all pre-existing damage in writing', 'Having the landlord sign a general statement that the unit is in good condition', 'Asking neighbors about any prior issues'],
      'Taking date-stamped photos and video of every room and noting all pre-existing damage in writing',
      'Documenting condition at move-in with photos, video, and written notes protects your security deposit at move-out. Without this documentation, landlords can claim damage was caused by you even if it pre-existed.',
      3,
    ),
    mc(
      'A lease clause stating "Tenant waives all rights to habitability" is:',
      ['Fully enforceable as a negotiated contract term', 'Generally unenforceable — habitability rights are often non-waivable by law', 'Valid only if the tenant initialed the clause separately', 'Enforceable only in commercial leases'],
      'Generally unenforceable — habitability rights are often non-waivable by law',
      'Many tenant-protective laws are non-waivable — landlords and tenants cannot contract around them. Clauses purporting to waive habitability rights are often void as against public policy, even though they appear in signed leases.',
      4,
    ),
    mc(
      'When a fixed-term lease expires and neither party signs a new lease, it typically:',
      ['Terminates automatically with no further obligation', 'Converts to a month-to-month tenancy', 'Automatically renews for another full fixed term', 'Requires the tenant to vacate within 30 days'],
      'Converts to a month-to-month tenancy',
      'When a fixed-term lease ends without renewal, it typically converts to a month-to-month arrangement unless the lease says otherwise. Either party can then end it with proper notice (usually 30 days).',
      5,
    ),
  ],
}
