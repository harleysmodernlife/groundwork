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

export const businessExercises4: Record<string, ExerciseDef[]> = {
  'word-of-mouth': [
    mc(
      'Why does the lesson say referring a professional carries "Social Risk" for the referrer?',
      ['Referrers may be held legally liable if the work causes damage', 'If the operator does a poor job, the referrer loses social capital and looks untrustworthy for recommending them', 'Referrers are often pressured to give inflated reviews', 'Social media makes referrals publicly visible and difficult to retract'],
      'If the operator does a poor job, the referrer loses social capital and looks untrustworthy for recommending them',
      '"Referring a professional is also a Social Risk. If you do a poor job, the customer doesn\'t just lose money; they lose social capital with the friend who recommended you." This risk-reduction is key to engineering referrals.',
      1,
    ),
    mc(
      'The lesson recommends engineering referrals at the moment of "Peak Satisfaction." When is this?',
      ['At the 30-day mark after the job, when the customer has fully evaluated the result', 'The moment the final invoice is paid', 'The moment the customer sees the final result and is most emotionally aligned', 'During the initial consultation before work begins'],
      'The moment the customer sees the final result and is most emotionally aligned',
      '"The Trigger Point: The moment the customer sees the final result and says, \'Wow, this is great!\' By asking for a referral now, you are capturing the customer\'s enthusiasm before it fades."',
      2,
    ),
    mc(
      'A Strategic Partner Network works best when the partner businesses:',
      ['Offer the same services at different price points', 'Compete directly for the same customers in the same market', 'Serve the same Ideal Customer Profile but provide different, non-competing services', 'Are located in different geographic regions to avoid territory overlap'],
      'Serve the same Ideal Customer Profile but provide different, non-competing services',
      '"A strategic partner is a business that serves the same Ideal Customer Profile (ICP) as you, but provides a different, non-competing service." Example: painter → flooring contractor → interior designer all serve the same homeowner.',
      3,
    ),
    mc(
      'Why does the lesson recommend a "Value-Add Reward" over a cash "Bounty" for referrals?',
      ['Cash bounties are illegal in most states under referral marketing laws', 'Bounties can make the referrer feel like a salesperson and the new lead feel like they\'re being sold for a commission', 'Cash rewards must be reported as taxable income, creating accounting complexity', 'Bounties only work for B2B referrals, not B2C customers'],
      'Bounties can make the referrer feel like a salesperson and the new lead feel like they\'re being sold for a commission',
      '"The Bounty (The Wrong Way): This can make the referrer feel like a salesperson and the new lead feel like they are being \'sold\' for a commission." A service credit or "thank you" preserves the professional image.',
      4,
    ),
    mc(
      'The "Three-Way Text Method" for warm introductions works because:',
      ['Text messages have higher open rates than emails', 'The referrer initiates contact so the new lead sees the recommendation in real-time from a trusted source', 'It eliminates the need to ask for the new lead\'s phone number directly', 'Three-way texts are treated as more urgent by smartphone notification systems'],
      'The referrer initiates contact so the new lead sees the recommendation in real-time from a trusted source',
      '"Instant Social Proof: The lead sees the recommendation in real-time from a trusted source. Accountability: The lead is far more likely to respond because their friend is watching the conversation."',
      5,
    ),
  ],

  'online-presence': [
    mc(
      'The lesson describes the lead\'s "Trust Pipeline" as having three stages. What is the goal at the Validation stage?',
      ['Maximizing visibility so the lead finds the business in the first place', 'Risk mitigation — giving the lead reasons to trust rather than reasons to leave', 'Frictionless conversion — making it easy to contact the business', 'Brand recognition through consistent visual design across platforms'],
      'Risk mitigation — giving the lead reasons to trust rather than reasons to leave',
      '"Validation (The Proof): The lead clicks your profile and visits your website or reads your reviews. They are looking for reasons not to hire you. The goal here is Risk Mitigation."',
      1,
    ),
    mc(
      'NAP Consistency in Google Business Profile optimization refers to:',
      ['Natural, Authentic, and Professional brand voice across platforms', 'Name, Address, and Phone Number being identical across every platform on the web', 'Number of reviews, Average rating, and Profile completeness score', 'New, Active, and Positive content posted regularly to maintain visibility'],
      'Name, Address, and Phone Number being identical across every platform on the web',
      '"NAP stands for Name, Address, Phone Number. The Google algorithm rewards consistency. If your business is listed differently across platforms, the algorithm perceives this as unreliable and will lower your ranking."',
      2,
    ),
    mc(
      'The "Above the Fold" rule for websites states that within 5 seconds, a visitor must be able to answer:',
      ['Who the owner is, how long they\'ve been in business, and what area they serve', 'What you do, how it makes their life better, and how to get it', 'Your pricing, your hours, and your service area', 'Your credentials, your reviews, and your guarantee'],
      'What you do, how it makes their life better, and how to get it',
      '"\'Above the Fold\' must answer three questions in 5 seconds: What do you do? How does it make my life better? How do I get it?" These must be answered before the visitor scrolls.',
      3,
    ),
    mc(
      'The lesson recommends case studies over photo galleries because:',
      ['Photo galleries require professional photography that is too expensive for small businesses', 'Case studies show how you solve problems, not just that you did work — proving diagnostic expertise and justifying higher prices', 'Google ranks businesses with case studies higher in local search results', 'Case studies can be reused as social media content without additional photography'],
      'Case studies show how you solve problems, not just that you did work — proving diagnostic expertise and justifying higher prices',
      '"A gallery shows that you did work; a case study shows how you solve problems." The Problem-Solution-Result format proves you are a diagnostic expert, not just a parts-changer, and justifies a higher price.',
      4,
    ),
    mc(
      'Why does a slow page load time (more than 3 seconds) cause businesses to lose leads?',
      ['Google penalizes slow sites in search rankings, making the business unfindable', 'Over 70% of local searches happen on mobile devices where slow loads cause visitors to bounce', 'Slow sites signal to visitors that the business is using outdated technology', 'Slow loads reduce the number of review requests that can be sent per day'],
      'Over 70% of local searches happen on mobile devices where slow loads cause visitors to bounce',
      '"Over 70% of local searches happen on mobile devices. If your site takes more than 3 seconds to load, you are losing leads." The fix: compress images with tools like TinyPNG before uploading.',
      5,
    ),
  ],

  'social-media-basics': [
    mc(
      'The lesson defines the primary function of social media for a service business as:',
      ['Attracting millions of followers who become paying customers over time', 'Confirming the decision of leads who are already ready to hire you by proving competence and active operation', 'Running paid advertising campaigns to generate new leads at scale', 'Building a personal brand that eventually leads to speaking and consulting opportunities'],
      'Confirming the decision of leads who are already ready to hire you by proving competence and active operation',
      '"Your social media presence should not be designed to \'attract\' a million strangers; it should be designed to confirm the decision of the 10 people who are actually ready to hire you today."',
      1,
    ),
    mc(
      'According to the Platform-ICP mapping in the lesson, which platform is best for reaching hyper-local neighbors and responding to "Who do you recommend?" threads?',
      ['LinkedIn', 'Instagram', 'Nextdoor', 'Facebook'],
      'Nextdoor',
      '"Nextdoor: ICP Target — Hyper-Local Neighbors. Primary Function — Neighborhood Vetting. Focus on proximity and reputation. Respond to \'Who do you recommend?\' threads with a link to your proof-of-work."',
      2,
    ),
    mc(
      'The four content pillars are Proof, Educational, Personal, and The Offer. What is the strategic purpose of the Personal pillar?',
      ['To share your personal interests and hobbies to make your profile feel human', 'To prove you are a real, disciplined professional they can trust in their home or with their property', 'To document your business journey and attract entrepreneur-minded followers', 'To show your equipment and workspace to prove you have professional capacity'],
      'To prove you are a real, disciplined professional they can trust in their home or with their property',
      '"Personal (The Human): Purpose — To prove you are a real, reliable person they can trust in their home... Keep it professional. The goal is to show \'I am a disciplined professional,\' not \'Here is my personal life.\'"',
      3,
    ),
    mc(
      'The lesson warns that buying followers or using engagement pods destroys local reputation because:',
      ['Platform algorithms detect and remove fake engagement, reducing organic reach', 'Local customers can instantly recognize a fake profile by spotting inflated follower counts with zero local comments', 'Purchased followers are located in different countries and don\'t convert to customers', 'Social media platforms ban accounts with suspicious follower growth patterns'],
      'Local customers can instantly recognize a fake profile by spotting inflated follower counts with zero local comments',
      '"Buying Followers: A local customer will see 5,000 followers but zero local comments and immediately know the profile is fake." Authenticity is the highest currency in local service businesses.',
      4,
    ),
    mc(
      'The lesson\'s Minimum Viable Presence (MVP) schedule requires approximately how much time per week?',
      ['2-4 hours per week for content creation and engagement', '1 hour per day for posting and responding to comments', '30 minutes per week for capturing photos and scheduling 3 posts', '5 hours per week to maintain a competitive presence'],
      '30 minutes per week for capturing photos and scheduling 3 posts',
      '"Total Time Investment: 30 minutes per week. Daily (30 seconds): Capture 3-5 photos/videos on every job. Tuesday: Post one Proof piece. Thursday: Post one Educational tip. Saturday: Post your availability." Sustainable cadence beats burnout.',
      5,
    ),
  ],

  'what-makes-a-contract': [
    mc(
      'The four pillars required for a legally enforceable contract are:',
      ['Offer, Signature, Payment, and Witnesses', 'Offer, Acceptance, Consideration, and Mutual Intent', 'Scope, Price, Deadline, and Governing Law', 'Letter of Intent, Negotiation, Agreement, and Notarization'],
      'Offer, Acceptance, Consideration, and Mutual Intent',
      '"For an agreement to be legally binding it must satisfy four specific technical requirements: Offer, Acceptance, Consideration (value exchange), and Mutual Intent (Meeting of the Minds). If any are missing, you have a \'gentleman\'s agreement,\' not a contract."',
      1,
    ),
    mc(
      'The "Mirror Image Rule" in contract acceptance means that:',
      ['Both parties must use the same contract template', 'The customer\'s acceptance must exactly match the offer — any modification creates a counter-offer, not acceptance', 'Acceptance must be in writing to be legally valid', 'Both parties must sign the document simultaneously'],
      'The customer\'s acceptance must exactly match the offer — any modification creates a counter-offer, not acceptance',
      '"The Mirror Image Rule applies: the acceptance must exactly match the offer. If a customer says \'I accept your offer, but only if you also include a free oil change,\' they have not accepted — they have issued a Counter-Offer."',
      2,
    ),
    mc(
      'The "Past Consideration" trap means you cannot base a contract on:',
      ['Work that will be performed more than 30 days in the future', 'A verbal agreement made before any written document was created', 'Work you have already performed for free', 'Payment received before the work was formally agreed upon'],
      'Work you have already performed for free',
      '"You cannot base a contract on work you have already performed. If you spend ten hours fixing a car for free, and then ask the customer to sign a contract to pay you for those hours, that contract is often unenforceable because the consideration happened in the past."',
      3,
    ),
    mc(
      'A "Precedence Clause" in a contract is designed to solve the "Battle of the Forms" by:',
      ['Requiring all disputes to be settled in the service provider\'s home state', 'Explicitly stating which document controls when a provider\'s quote and a customer\'s Purchase Order have conflicting terms', 'Setting a maximum liability cap that takes precedence over insurance coverage', 'Requiring written change orders to be signed before any scope modification takes effect'],
      'Explicitly stating which document controls when a provider\'s quote and a customer\'s Purchase Order have conflicting terms',
      '"Your contracts should include a Precedence Clause: \'In the event of a conflict between this Agreement and any other document, the terms of this Agreement shall prevail.\' This prevents your professional terms from being overridden by a customer\'s generic corporate form."',
      4,
    ),
    mc(
      'The "Confirmation Email Sequence" after a verbal agreement is designed to create:',
      ['A formal contract that replaces the need for a signed written agreement', 'A digital paper trail of mutual intent that makes "he said, she said" disputes nearly impossible', 'Legal protection equal to a notarized contract', 'A record that qualifies the agreement as satisfying the Statute of Frauds in all jurisdictions'],
      'A digital paper trail of mutual intent that makes "he said, she said" disputes nearly impossible',
      '"Immediately after a verbal agreement, send an email: \'To make sure we\'re on the same page, here is my understanding...\' Ask the customer to reply \'Confirmed.\' This email chain serves as a legal record of mutual intent."',
      5,
    ),
  ],

  'reading-contracts': [
    mc(
      'The lesson identifies the Indemnification Clause as the most dangerous clause in any agreement. The professional fix is to:',
      ['Remove all indemnification clauses from any contract you sign', 'Limit your indemnification only to damages caused by your own negligence', 'Cap indemnification at 50% of the total contract value', 'Require mutual indemnification so both parties share equal liability'],
      'Limit your indemnification only to damages caused by your own negligence',
      '"Limit your indemnification to your own negligence. You should only be responsible for damages that you actually caused through a failure to meet professional standards, not for every possible accident that occurs on a job site."',
      1,
    ),
    mc(
      'A vague Scope of Work creates "Scope Creep" because:',
      ['Vague contracts are unenforceable and give customers unlimited leverage', 'Without a defined "Done" state, the customer can claim the work is incomplete indefinitely', 'Vague scopes require more time to execute, increasing costs above the quoted price', 'Courts automatically rule against vague contract terms in contract disputes'],
      'Without a defined "Done" state, the customer can claim the work is incomplete indefinitely',
      '"Most disputes arise not from the price, but from a disagreement over what the price actually covers. When a contract says \'full tune-up,\' there is no defined \'Done\' state, and the client can claim the work is incomplete indefinitely."',
      2,
    ),
    mc(
      'The "Integration Clause" (or Merger Clause) means that:',
      ['All changes to the contract must be integrated into a single amended document', 'Any promise made verbally or by text before signing is legally irrelevant if not written in the final contract', 'Both parties must be physically present in the same location when the contract is signed', 'The contract automatically integrates the terms of the service provider\'s standard pricing schedule'],
      'Any promise made verbally or by text before signing is legally irrelevant if not written in the final contract',
      '"This means that any promise you made in a text message, an email, or a face-to-face meeting is legally irrelevant if it is not written in the final signed contract." If it\'s not in the document, it doesn\'t exist in court.',
      3,
    ),
    mc(
      'The "Redlining" process when a client sends their standard contract means:',
      ['Refusing to sign until the client uses your contract template instead', 'Highlighting, modifying, and proposing alternatives to predatory clauses while providing justification for each change', 'Having your lawyer read the contract without marking any changes', 'Signing the contract under protest and filing a complaint with the state bar afterward'],
      'Highlighting, modifying, and proposing alternatives to predatory clauses while providing justification for each change',
      '"Identify the Conflict. Propose the Alternative. Justify the Change. Once agreed, the document is cleaned and signed. This is the only way to ensure the final contract is a fair agreement."',
      4,
    ),
    mc(
      'The lesson\'s Contract Review Checklist asks four yes/no questions. Which question is specifically about limiting financial exposure from a single mistake?',
      ['"Is the Scope Technical?" — can a stranger determine when the job is done?', '"Is the Payment Trigger Clear?" — is it clear when money is due?', '"Is the Liability Capped?" — is there a limitation clause preventing a single mistake from destroying the business?', '"Is the Exit Defined?" — do you know how to end this contract?'],
      '"Is the Liability Capped?" — is there a limitation clause preventing a single mistake from destroying the business?',
      '"Is there a limitation of liability clause that prevents a single mistake from destroying my entire business?" Without a cap, one error could theoretically bankrupt the business through an unlimited damage claim.',
      5,
    ),
  ],

  'common-contract-mistakes': [
    mc(
      'The lesson warns against using generic internet contract templates primarily because:',
      ['Templates are protected by copyright and cannot be legally modified', 'Contract law is jurisdictional — a template written for one state may be invalid or even illegal in another', 'Templates don\'t include payment terms specific to your industry', 'Generic templates lack the professional formatting required by courts'],
      'Contract law is jurisdictional — a template written for one state may be invalid or even illegal in another',
      '"Laws regarding employment, non-compete agreements, and liability limits vary wildly by state. Always verify the \'Governing Law\' clause. If you are the service provider, the contract should be governed by the laws of your state."',
      1,
    ),
    mc(
      'An engineering-quality Statement of Work (SOW) defines deliverables in "binary terms." This means:',
      ['All payment terms are expressed as fixed-dollar amounts rather than percentages', 'Deliverables are so precisely defined that a third party can determine exactly when the project is finished without asking you', 'The contract uses technical language that only industry experts can interpret', 'All costs are broken into two categories: materials and labor'],
      'Deliverables are so precisely defined that a third party can determine exactly when the project is finished without asking you',
      '"If a third party who knows nothing about the project cannot look at the SOW and determine exactly when the project is finished, the SOW is too vague." Binary means either delivered or not — no interpretation required.',
      2,
    ),
    mc(
      'The "Suspension of Work" clause protects a service provider by:',
      ['Allowing the provider to pause work during weather or supply chain delays without penalty', 'Giving the provider the right to stop all work if an invoice becomes overdue, without being in breach of contract', 'Suspending the payment timeline if the provider encounters unforeseen complications', 'Freezing the contract terms if the customer requests changes mid-project'],
      'Giving the provider the right to stop all work if an invoice becomes overdue, without being in breach of contract',
      '"Suspension of Work: If an invoice is more than X days overdue, the provider has the right to stop all work immediately without being in breach of contract. This forces the client to pay to keep the project moving."',
      3,
    ),
    mc(
      'A "Change Order" is used when a project\'s scope changes because:',
      ['Verbal agreements about scope changes are enforceable but generate extra paperwork', 'Merger/Integration clauses in the original contract make verbal modifications legally irrelevant', 'Clients must be formally charged a change order fee before any scope discussion', 'Tax law requires separate documentation for any project expense exceeding the original budget'],
      'Merger/Integration clauses in the original contract make verbal modifications legally irrelevant',
      '"In a legal dispute, oral agreements are notoriously difficult to prove and often unenforceable if the contract contains a Merger clause." A signed Change Order formally amends the contract with specific price and deadline adjustments.',
      4,
    ),
    mc(
      'The lesson\'s standard recommendation for a Liability Cap is to limit total financial exposure to:',
      ['$1,000,000 or the policy limit of your general liability insurance', 'The total amount of fees paid under the contract over the previous 12 months', 'The retail replacement value of any property involved in the project', '10% of the client\'s annual revenue for commercial clients'],
      'The total amount of fees paid under the contract over the previous 12 months',
      '"The Standard Cap: The most common cap is the total amount of fees paid under the contract over the previous 12 months. Alternatively, cap it at the limit of your professional liability insurance policy."',
      5,
    ),
  ],
}
