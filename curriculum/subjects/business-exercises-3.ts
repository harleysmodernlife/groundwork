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

export const businessExercises3: Record<string, ExerciseDef[]> = {
  'your-first-customer': [
    mc(
      'The lesson says your first customer\'s primary value is as a source of validation, not significant income. What three things are you validating?',
      ['Your brand, your website, and your pricing', 'Demand, price alignment, and your ability to deliver professionally', 'Your legal structure, your tax strategy, and your revenue model', 'Your marketing channel, your conversion rate, and your referral system'],
      'Demand, price alignment, and your ability to deliver professionally',
      '"You are validating three critical technical points: Demand Validation, Price Validation, and Delivery Validation." The first few jobs are a paid apprenticeship to refine your process.',
      1,
    ),
    mc(
      'The "Beta Client" strategy is distinguished from asking friends for a favor because:',
      ['Beta clients pay full price with no discount', 'It frames the discounted price as a professional exchange for specific deliverables like a testimonial and portfolio access', 'It only applies to B2B clients, not individual consumers', 'Beta clients sign a multi-year retainer agreement'],
      'It frames the discounted price as a professional exchange for specific deliverables like a testimonial and portfolio access',
      '"By making the discount conditional on the testimonial and portfolio access, you signal that your work has a high market value, but you are currently trading that value for marketing assets."',
      2,
    ),
    mc(
      'The "Portfolio Credit" framing protects your price integrity by:',
      ['Hiding the discount so competitors don\'t undercut you', 'Making clear the full market value of the service while explaining the discount as temporary and conditional', 'Allowing you to charge above-market rates to recoup the beta discount later', 'Positioning the client as a business partner rather than a customer'],
      'Making clear the full market value of the service while explaining the discount as temporary and conditional',
      '"My standard rate for this service is $100. However... I am offering a one-time Portfolio Credit of $50... This brings your total to $50." The client knows the real value is $100.',
      3,
    ),
    mc(
      'After a successful first job, the "Specific Request" referral method asks for:',
      ['A general "let me know if you know anyone" request', 'A five-star review on Google before requesting a referral', 'One specific person the client knows who has the same specific problem you solve', 'Permission to use their name in your marketing materials'],
      'One specific person the client knows who has the same specific problem you solve',
      '"I\'m looking to help two more people in [Neighborhood/Industry]... Who is one person you know who is currently dealing with [Problem]?" Specificity triggers memory and makes it easy for clients to help.',
      4,
    ),
    mc(
      'The "First-Customer Post-Mortem" asks whether the customer seemed "blown away" by the result. Why is this significant for pricing?',
      ['If they were blown away, you should offer them a loyalty discount on future work', 'If they were blown away, you are likely underpricing — the value exceeded their expectations by too much', 'A delighted customer always refers others, so the job value is automatically justified', 'It means your marketing described the result too conservatively'],
      'If they were blown away, you are likely underpricing — the value exceeded their expectations by too much',
      '"If the customer seemed surprised by the result: If they were \'blown away,\' you are likely underpricing. If they were indifferent, your value proposition is weak." Surprise signals unpriced value.',
      5,
    ),
  ],

  'ideal-customer-profile': [
    mc(
      'The lesson distinguishes a Target Market from an Ideal Customer Profile (ICP). A Target Market is:',
      ['A detailed profile of your most profitable client type', 'A broad demographic category that is too vague to drive specific marketing actions', 'The geographic area where your business operates', 'The specific industry your business specializes in serving'],
      'A broad demographic category that is too vague to drive specific marketing actions',
      '"A Target Market is a broad group of people who could potentially use your service. It is defined by demographics and geography... too broad to be actionable." The ICP is the specific, actionable version.',
      1,
    ),
    mc(
      'The Profitability Scoring Matrix evaluates leads across three vectors. Which vector asks whether the customer will generate repeat business over multiple years?',
      ['Profitability (Budget)', 'Ease of Service (Friction)', 'Lifetime Value (LTV)', 'Decision Speed (Urgency)'],
      'Lifetime Value (LTV)',
      '"Vector 3: Lifetime Value (LTV) — Is this a one-time transaction, or is this a customer who will require your services for years?" A customer with a fleet of vehicles has a significantly higher LTV than a one-time buyer.',
      2,
    ),
    mc(
      'When a lead constantly shifts the requirements during the quoting process, the lesson calls this a red flag called:',
      ['The Price-Shopper', 'The Scope-Shifter', 'The Respect-Gap', 'The Bandwidth Issue'],
      'The Scope-Shifter',
      '"The Scope-Shifter: They constantly change the requirements of the job during the quoting process. They don\'t know what they want, which means they won\'t know when the job is \'done.\'"',
      3,
    ),
    mc(
      'The "Niche Paradox" argues that narrowing your ICP to a hyper-specific niche:',
      ['Reduces revenue by excluding too many potential customers', 'Is only viable for businesses in large metropolitan areas', 'Moves you from competing on price to charging for expertise with no local competition', 'Requires expensive paid advertising to reach such a narrow audience'],
      'Moves you from competing on price to charging for expertise with no local competition',
      '"The \'Porsche 911 Air-Cooled Specialist\' has no local competition. The customer doesn\'t care about the price because they cannot find anyone else with the same level of expertise. The specialist is an authority."',
      4,
    ),
    mc(
      'A "Nuisance Premium" is a quote set at:',
      ['The fair market rate plus a 10% convenience fee', 'A price so high you\'re happy to do the work but the non-ICP lead is likely to go elsewhere', 'The bottom of your pricing range for simple, low-skill jobs', 'The rate charged to clients who pay late more than once'],
      'A price so high you\'re happy to do the work but the non-ICP lead is likely to go elsewhere',
      '"You can either refer them out or quote them a \'Nuisance Premium\' — a price so high that you are happy to do the work, but they are likely to go elsewhere." This filters out bad-fit clients profitably.',
      5,
    ),
  ],

  'where-customers-are': [
    mc(
      'According to the Lead Source Matrix, which quadrant represents the highest-priority targets for most service businesses?',
      ['Low Intent / Low Cost — long-game nurture channels', 'High Intent / High Cost — paid advertising engines', 'High Intent / Low Cost — referrals and Google Maps searches', 'Low Intent / High Cost — broad-reach billboards and radio'],
      'High Intent / Low Cost — referrals and Google Maps searches',
      '"High Intent / Low Cost (The Gold Mine): These are your primary targets. Examples include Google Maps searches for \'Emergency [Service]\' or direct referrals from trusted partners. These leads convert the fastest and have the highest ROI."',
      1,
    ),
    mc(
      'Why does the lesson say speed is the primary competitive advantage when handling high-intent leads?',
      ['High-intent leads are willing to pay a premium for fast service', 'High-intent leads are in "Panic Mode" and not shopping price — they want the first reliable person to say yes', 'Fast response rates improve your Google Maps ranking', 'High-intent leads are more likely to refer others if served quickly'],
      'High-intent leads are in "Panic Mode" and not shopping price — they want the first reliable person to say yes',
      '"High-Intent Leads: These leads are in \'Panic Mode.\' They are not shopping for the best price; they are shopping for the fastest, most reliable solution to a pressing problem."',
      2,
    ),
    mc(
      'The Digital Footprint Audit tells you where your customers are by:',
      ['Running surveys with your current customer base', 'Reverse-engineering the lead flow of successful competitors by analyzing their reviews and ads', 'Purchasing market research reports from industry associations', 'Analyzing your own historical lead data from the past two years'],
      'Reverse-engineering the lead flow of successful competitors by analyzing their reviews and ads',
      '"You do not need to guess where your customers are; your most successful competitors have already found them." Analyze their review velocity, Facebook Ads Library, and Nextdoor recommendations.',
      3,
    ),
    mc(
      'If Channel A gives 100 leads per month with a 2% conversion rate, and Channel B gives 10 leads with a 50% conversion rate, which should be prioritized and why?',
      ['Channel A, because raw lead volume is the most important metric', 'Channel B, because conversion rate determines actual jobs and revenue', 'Both equally, since they produce the same number of closed jobs', 'Neither, since both channels are underperforming the industry average'],
      'Channel B, because conversion rate determines actual jobs and revenue',
      '"Channel A gives you 100 leads but only 2 convert (2%), and Channel B gives 10 leads but 5 convert (50%), Channel B is your priority. Stop spending time on high-volume, low-conversion channels."',
      4,
    ),
    mc(
      'The "Speed-to-Lead" protocol recommends responding to high-intent leads within:',
      ['24 hours, as this is the industry standard', '4 hours during business hours', '15 minutes', '1 hour during peak business times'],
      '15 minutes',
      '"Implement a \'Speed-to-Lead\' protocol. Aim to respond to high-intent leads in under 15 minutes." In high-intent channels like Google Maps, the lead has often hired someone else within hours of reaching out.',
      5,
    ),
  ],

  'making-the-ask': [
    mc(
      'The "Assumption Close" differs from the "Pressure Close" because it:',
      ['Uses urgency and scarcity to force a decision', 'Assumes the sale has already happened and moves the conversation to logistics rather than the decision itself', 'Offers a discount if the customer commits within a specific timeframe', 'Requires the customer to explicitly say "yes" before scheduling'],
      'Assumes the sale has already happened and moves the conversation to logistics rather than the decision itself',
      '"Instead of asking \'Do you want to do this?\', you ask \'I\'ve got an opening this Wednesday at 9 AM or Thursday at 1 PM. Which one works better for your schedule?\'" This moves focus from cost to logistics.',
      1,
    ),
    mc(
      'When a customer says "I need to think about it," the lesson recommends using the "Clarification Pivot," which asks:',
      ['"When would be a good time for me to follow up with you?"', '"Is it the price, the timeline, or the technical approach that you\'re unsure of?"', '"Would a 10% discount help you make the decision today?"', '"What would make you feel more comfortable moving forward?"'],
      '"Is it the price, the timeline, or the technical approach that you\'re unsure of?"',
      'This turns a vague stall into a specific, solvable problem. If they identify the concern, you solve it. If they genuinely need time, you schedule a concrete follow-up — turning a "maybe" into an appointment.',
      2,
    ),
    mc(
      'The "Project Initiation Fee" framing is recommended instead of calling it a "deposit" because:',
      ['Deposits are legally regulated in most states', 'It frames the payment as confirming project scope rather than as a down payment, sounding more professional', 'Customers are more likely to pay a fee than a deposit', 'It allows the fee to be non-refundable without legal complications'],
      'It frames the payment as confirming project scope rather than as a down payment, sounding more professional',
      '"Avoid calling it a \'deposit,\' which can sound like a down payment on a product. Instead, frame it as a Project Initiation Fee or a Scheduling Deposit... I\'ll apply this amount directly to your final bill."',
      3,
    ),
    mc(
      'When a customer reacts to the price with silence or surprise, the "Pivot to Pain" response does what?',
      ['Immediately offers an alternative lower-cost option', 'Shifts focus from the cost of the solution to the cost of leaving the problem unfixed', 'Explains the breakdown of the price in detail to justify it', 'Asks the customer how much they were expecting to pay'],
      'Shifts focus from the cost of the solution to the cost of leaving the problem unfixed',
      '"If we don\'t address [Specific Problem] now, you\'re looking at [Major Failure] within the next few months, which would cost [Much Higher Amount]." When the cost of the problem exceeds the cost of the solution, price becomes secondary.',
      4,
    ),
    mc(
      'The lesson says a deal is not truly "closed" when the customer says "Yes" — it is closed when:',
      ['The customer signs a formal service agreement', 'The deposit or Project Initiation Fee is actually paid', 'A scheduled appointment is confirmed in writing', 'The customer shares the business with a friend as proof of commitment'],
      'The deposit or Project Initiation Fee is actually paid',
      '"In a professional service business, a deal is not \'closed\' when the customer says \'Yes\'; it is closed when the deposit is paid. A verbal agreement is a statement of intent, but a deposit is a financial commitment."',
      5,
    ),
  ],

  'handling-objections': [
    mc(
      'The lesson distinguishes "Smoke Screens" from "Real Barriers." A smoke screen is:',
      ['A legitimate financial constraint preventing the customer from buying', 'A specific logistical concern that can be solved to advance the deal', 'A polite way of ending the conversation when the customer isn\'t interested or doesn\'t trust you', 'A comparison to a competitor\'s lower price'],
      'A polite way of ending the conversation when the customer isn\'t interested or doesn\'t trust you',
      '"Smoke Screen: The customer isn\'t interested, or they don\'t trust you, but they don\'t want to be rude." Trying to solve a smoke screen wastes time because there is no real obstacle to remove.',
      1,
    ),
    mc(
      'The Isolation Technique prevents the "Whack-a-Mole" effect by:',
      ['Addressing all possible objections proactively before the customer can raise them', 'Confirming that price (or the stated concern) is the only remaining barrier before solving it', 'Refusing to move forward until the customer commits to a decision', 'Sending the customer a written summary of the value proposition before the call ends'],
      'Confirming that price (or the stated concern) is the only remaining barrier before solving it',
      '"Aside from the price, is there anything else that would stop you from moving forward today?" If they say no, you have a verbal contract. Solving the price removes all barriers.',
      2,
    ),
    mc(
      'In the "Feel-Felt-Found" framework, what is the purpose of the "Felt" step?',
      ['To explain how the product was designed to solve the customer\'s specific problem', 'To provide social proof that other customers had the same fear and overcame it', 'To quantify the financial cost of the customer\'s current problem', 'To ask the customer to articulate what a successful outcome would look like'],
      'To provide social proof that other customers had the same fear and overcame it',
      '"Felt: \'Many of my other clients felt the same way when we first started talking; they were concerned about the upfront expense.\'" This normalizes the fear through social proof before presenting the outcome.',
      3,
    ),
    mc(
      'The "Reverse Close" strategy is most useful when:',
      ['The customer is ready to buy but hasn\'t said yes yet', 'You are stuck in a loop of objections and the conversation is stalling', 'The customer explicitly requests a lower price', 'A second decision-maker needs to be brought into the conversation'],
      'You are stuck in a loop of objections and the conversation is stalling',
      '"When you are stuck in a loop of objections and the conversation is stalling, stop trying to solve the problem for the customer. Instead, ask: \'What would need to happen for this to be a yes for you today?\'"',
      4,
    ),
    mc(
      'The lesson\'s script for handling a "bad experience with a similar service" objection uses the Contrast Framework, which:',
      ['Criticizes the previous provider to differentiate your quality', 'Contrasts your specific process step with the step most providers skip to explain why failures happen', 'Offers a guarantee that eliminates all risk of the same failure recurring', 'Asks the customer to describe exactly what went wrong so you can avoid it'],
      'Contrasts your specific process step with the step most providers skip to explain why failures happen',
      '"That\'s actually why I do [Specific Step in Process]. Most people in this industry skip that step, which is why [Common Failure] happens. I make that a mandatory part of my workflow." This differentiates without attacking competitors.',
      5,
    ),
  ],

  'follow-up': [
    mc(
      'The "Rule of 7" in follow-up means that:',
      ['You should send exactly 7 follow-up messages before closing a lead as dead', 'The average person needs about 7 touchpoints before feeling safe enough to make a buying decision', 'After 7 days without a response, a lead is statistically unrecoverable', 'Seven is the maximum number of follow-up attempts legally permitted under anti-spam laws'],
      'The average person needs about 7 touchpoints before feeling safe enough to make a buying decision',
      '"The Rule of 7: Marketing data shows that the average person needs to encounter a brand or a professional 7 times before they feel safe enough to make a buying decision." Most operators stop at 2.',
      1,
    ),
    mc(
      'The Multi-Channel Sequence (MCS) rotates communication channels to:',
      ['Comply with messaging regulations that limit contact on any single channel', 'Avoid channel fatigue and reach the customer where they are most receptive at that moment', 'Reduce the cost of follow-up by using free channels before paid ones', 'Demonstrate the business\'s technological sophistication'],
      'Avoid channel fatigue and reach the customer where they are most receptive at that moment',
      '"Every channel has a different failure point: emails hit spam filters, texts are forgotten in a busy day, and phone calls are often ignored. Rotate channels to prevent \'channel fatigue\' and ensure visibility."',
      2,
    ),
    mc(
      'The "Day 14 Negative Close" script closing a lead\'s file is designed to trigger:',
      ['A final discount offer to convert the lead before losing them', 'Loss aversion — high-value leads often re-engage when they fear losing access to you', 'A referral request as a last interaction before the lead goes cold', 'A price increase notification for future work'],
      'Loss aversion — high-value leads often re-engage when they fear losing access to you',
      '"I\'m closing out your file now to make room for new clients." The lesson explains this is designed to "Purge low-value leads and trigger \'Loss Aversion\' in high-value ones." It forces a decision.',
      3,
    ),
    mc(
      'The lesson distinguishes "Pestering" from "Professional Persistence." Pestering means every message:',
      ['Uses a different communication channel without adding new information', 'Requests the customer to take an action without providing new value', 'Contains a discounted offer designed to pressure a quick decision', 'References a specific competitor to create urgency'],
      'Requests the customer to take an action without providing new value',
      '"Pestering (Demand): Every message is a request for the customer to do something. This puts the burden of work on the customer and lowers your perceived value." Persistence adds new value in each touch.',
      4,
    ),
    mc(
      'The Lead Recovery Protocol recommends waiting 60-90 days before re-contacting a cold lead because:',
      ['This is the legally required cooling-off period after an initial quote', 'It prevents the contact from being flagged as spam by email providers', 'It acts as a "pattern interrupt" — the lead is surprised you remembered them and the problem may now be urgent', 'It gives time for prices to increase, justifying a higher new quote'],
      'It acts as a "pattern interrupt" — the lead is surprised you remembered them and the problem may now be urgent',
      '"This works because it\'s a \'pattern interrupt.\' It doesn\'t ask for money; it asks about the problem. If the problem is still there, the customer will feel a sense of relief that you remembered them."',
      5,
    ),
  ],
}
