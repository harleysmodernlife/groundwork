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

export const behavioralExercises: Record<string, ExerciseDef[]> = {
  'loss-aversion': [
    mc(
      'Research suggests that losing $100 causes psychological pain roughly equivalent to the pleasure of gaining:',
      ['$50', '$100', '$200', '$500'],
      '$200',
      'The roughly 2:1 loss aversion ratio — identified by Kahneman and Tversky — means losses loom about twice as large as equivalent gains in psychological impact. This asymmetry is a core finding of Prospect Theory.',
      1,
    ),
    mc(
      'Prospect Theory was developed by:',
      ['Adam Smith and David Ricardo', 'Milton Friedman and Friedrich Hayek', 'Daniel Kahneman and Amos Tversky', 'John Maynard Keynes and Paul Samuelson'],
      'Daniel Kahneman and Amos Tversky',
      'Published in 1979, Prospect Theory replaced classical utility theory with a value function centered on a reference point, capturing loss aversion, diminishing sensitivity, and probability weighting.',
      2,
    ),
    mc(
      'The Endowment Effect predicts that people:',
      ['Value things more before they purchase them', 'Are indifferent to whether they own something or not', 'Value things more highly once they own them', 'Overestimate the value of future gains'],
      'Value things more highly once they own them',
      'Once an object enters your "endowment," giving it up feels like a loss — which is weighted more heavily than an equivalent gain. This explains why sellers consistently demand more than buyers will pay for the same item.',
      3,
    ),
    mc(
      'Status Quo Bias refers to:',
      ['Preferring well-known brands regardless of quality', 'The tendency to prefer the current state of affairs, even when change would be beneficial', 'Overconfidence in the accuracy of current market information', 'Resistance to adopting new workplace technology'],
      'The tendency to prefer the current state of affairs, even when change would be beneficial',
      'Because any change from the current baseline feels like a potential loss, people systematically undervalue switching — even when the new option is objectively better.',
      4,
    ),
    mc(
      'Loss-framing a message is generally more persuasive than gain-framing because:',
      ['People process losses more analytically than gains', 'Gain-framing creates unrealistic expectations', 'Losses always exceed gains in dollar terms', 'Fear of losing something activates a stronger psychological response than the prospect of gaining something equivalent'],
      'Fear of losing something activates a stronger psychological response than the prospect of gaining something equivalent',
      'The brain\'s loss-avoidance system is evolutionarily older and more powerful than its approach system. Framing a choice as preventing a loss consistently drives stronger action than framing it as achieving a gain.',
      5,
    ),
  ],

  'heuristics': [
    mc(
      'Heuristics are best described as:',
      ['Mathematical formulas for optimal decisions', 'Mental shortcuts that speed up decision-making at some cost to accuracy', 'Strict logical procedures for solving complex problems', 'Subconscious biases that always produce errors'],
      'Mental shortcuts that speed up decision-making at some cost to accuracy',
      'Heuristics are fast rules of thumb that allow the brain to make adequate decisions without full analysis. They are often correct but fail in predictable, systematic ways.',
      1,
    ),
    mc(
      'Compared to System 1, System 2 thinking is:',
      ['Faster and more automatic', 'Emotional and subconscious', 'Slow, effortful, and analytical', 'Triggered by familiar or routine situations'],
      'Slow, effortful, and analytical',
      'System 2 is the deliberate, logical mode of thought. It is accurate but metabolically expensive — the brain avoids it whenever System 1 can handle the task adequately.',
      2,
    ),
    mc(
      'The Availability Heuristic leads people to overestimate the likelihood of events that:',
      ['Have occurred frequently over long historical periods', 'Are logically probable based on statistical base rates', 'Come to mind easily because they are vivid or recent', 'Have low emotional impact on the observer'],
      'Come to mind easily because they are vivid or recent',
      'The brain treats ease of recall as a proxy for frequency or probability. Dramatic plane crashes are overestimated relative to far more common but less memorable car accidents because they are so vivid.',
      3,
    ),
    mc(
      'Base rate neglect means:',
      ['Ignoring new evidence in favor of older beliefs', 'Forgetting statistical data when under emotional stress', 'Overweighting a specific anecdote while ignoring the overall statistical base rate', 'Overweighting long-term trends while ignoring recent data'],
      'Overweighting a specific anecdote while ignoring the overall statistical base rate',
      'People overweight the one vivid story they know and underweight the statistical reality. Knowing one person whose surgery failed doesn\'t change the 99% success rate — but it feels like it should.',
      4,
    ),
    mc(
      'Decision paralysis is most likely to occur when a customer is presented with:',
      ['Two clearly distinct options', 'One strong recommendation from a trusted expert', 'Too many options, creating cognitive overload', 'A simple yes-or-no decision'],
      'Too many options, creating cognitive overload',
      'The Paradox of Choice (Barry Schwartz) shows that beyond a certain threshold, more options reduce satisfaction and increase the probability of choosing nothing at all — the customer defers indefinitely.',
      5,
    ),
  ],

  'overconfidence-bias': [
    mc(
      'The Planning Fallacy refers to:',
      ['Overestimating the probability of rare catastrophic events', 'Underestimating the time, cost, and risks of future projects while overestimating benefits', 'Planning too conservatively for uncertain outcomes', 'Overweighting past failures when making forecasts'],
      'Underestimating the time, cost, and risks of future projects while overestimating benefits',
      'When planning, people imagine the "happy path" — no delays, no complications, everything goes right. They fail to account for the realistic distribution of outcomes, which almost always includes problems.',
      1,
    ),
    mc(
      'Reference Class Forecasting counters the Planning Fallacy by:',
      ['Adding a standard 50% buffer to all time estimates', 'Consulting three or more independent experts before deciding', 'Using historical data from similar past projects instead of relying on intuition', 'Ignoring past projects to focus on what makes this one unique'],
      'Using historical data from similar past projects instead of relying on intuition',
      'Instead of estimating how this specific project will go, reference class forecasting asks: how long did the last 10 similar projects actually take? The historical average is far more accurate than intuition.',
      2,
    ),
    mc(
      'The Dunning-Kruger Effect describes:',
      ['Experts being overconfident about topics outside their specialty', 'People growing less confident as they gain expertise', 'Low-skill individuals overestimating their own competence', 'High performers underestimating how skilled their peers are'],
      'Low-skill individuals overestimating their own competence',
      'The critical insight is that the skills needed to produce correct answers are the same skills needed to recognize correct answers. Those who lack the skill also lack the ability to detect their own errors.',
      3,
    ),
    mc(
      'A "pre-mortem" analysis involves:',
      ['Reviewing what went wrong after a project fails', 'Imagining a future project has already failed and working backwards to identify why', 'Assigning accountability for past failures before starting a new project', 'Setting conservative targets to guarantee success'],
      'Imagining a future project has already failed and working backwards to identify why',
      'By assuming failure in advance, a pre-mortem forces identification of blind spots that overconfidence would otherwise hide. It converts vague optimism into concrete risk mitigation steps.',
      4,
    ),
    mc(
      'When asked to give 90% confidence intervals, people\'s intervals actually contain the correct answer roughly:',
      ['90% of the time, confirming good calibration', '75% of the time', '50% of the time, revealing systematic overconfidence', '30% of the time'],
      '50% of the time, revealing systematic overconfidence',
      'People\'s confidence consistently outpaces their accuracy. A well-calibrated person\'s 90% interval should contain the truth 90% of the time — but most people\'s intervals are far too narrow, hitting only about 50%.',
      5,
    ),
  ],

  'sunk-cost-fallacy': [
    mc(
      'A sunk cost is best defined as:',
      ['Any cost that is too large to ignore', 'A past expenditure that cannot be recovered', 'An uncertain future cost', 'The financial cost of a bad decision'],
      'A past expenditure that cannot be recovered',
      'Sunk costs are gone regardless of what you do next. Because they are identical across all future choices, they cannot affect which option is better going forward — and should be ignored.',
      1,
    ),
    mc(
      'The rational approach to sunk costs when making future decisions is to:',
      ['Use them as motivation to recoup your losses', 'Weight them proportionally to their original size', 'Ignore them and evaluate only future costs and benefits', 'Always finish a project once costs have been incurred'],
      'Ignore them and evaluate only future costs and benefits',
      'Because sunk costs do not change regardless of your choice, including them in your analysis can only distort the decision. The only relevant factors are future costs versus future value.',
      2,
    ),
    mc(
      'The "Concorde Fallacy" refers to:',
      ['French miscalculations about supersonic travel demand', 'Continuing to fund the Concorde jet long after it was clear it would never be commercially viable', 'An engineering error in the aircraft\'s design', 'Economic losses from the Concorde\'s retirement'],
      'Continuing to fund the Concorde jet long after it was clear it would never be commercially viable',
      'The British and French governments continued the Concorde project for years despite clear evidence of commercial unviability, purely because of what had already been spent — the archetypal sunk cost trap.',
      3,
    ),
    mc(
      'According to the Exit Decision Matrix, you should stop a project if:',
      ['You have spent more than 50% of the budget', 'The project is more than one month behind schedule', 'The expected future value of completion is less than the remaining future cost', 'A competitor has released a comparable product'],
      'The expected future value of completion is less than the remaining future cost',
      'The filter is purely forward-looking: ignore what was spent, and ask only whether the remaining investment is justified by the expected outcome. If future costs exceed future value, exit.',
      4,
    ),
    mc(
      'The sunk cost fallacy is reinforced by loss aversion because:',
      ['People fear competitors will exploit their abandoned projects', 'Quitting a failing project forces the brain to accept a certain loss, which feels worse than continuing with hope of recovery', 'Future gains are always underweighted relative to past costs', 'People overestimate future regret about past decisions'],
      'Quitting a failing project forces the brain to accept a certain loss, which feels worse than continuing with hope of recovery',
      'Continuing allows the operator to maintain the illusion that the loss has not yet "happened." Loss aversion makes the pain of finalizing a loss feel worse than the ongoing cost of continuing — even when stopping is the rational choice.',
      5,
    ),
  ],

  'anchoring-and-adjustment': [
    mc(
      'In price negotiation, an "anchor" is:',
      ['The lowest price a seller will accept', 'The first number introduced, which disproportionately influences the final outcome', 'A formal commitment to a specific price', 'The average of all offers made during negotiation'],
      'The first number introduced, which disproportionately influences the final outcome',
      'The anchor acts as a psychological baseline. All subsequent judgments are made relative to it — so the person who sets the anchor often controls the range in which the final price lands.',
      1,
    ),
    mc(
      'Insufficient adjustment from an anchor occurs because:',
      ['People deliberately hold back their true preferences', 'First offers are usually close to fair market value', 'The brain stops adjusting once it reaches a value that feels plausible rather than objectively correct', 'Anchors are always set at the midpoint of realistic options'],
      'The brain stops adjusting once it reaches a value that feels plausible rather than objectively correct',
      'Adjustment is effortful (System 2 work). The brain terminates the process at the first acceptable value it reaches, which is systematically biased toward the anchor — even when the anchor is arbitrary or irrelevant.',
      2,
    ),
    mc(
      'The Decoy Effect works by:',
      ['Making the cheapest option appear more valuable', 'Confusing customers with too many similar choices', 'Introducing a third option designed to make the target option look superior by comparison', 'Hiding the most expensive option until after the customer has committed'],
      'Introducing a third option designed to make the target option look superior by comparison',
      'The decoy is never intended to be chosen — its sole purpose is to shift relative perceived value. By making the target look like a bargain compared to the decoy, it drives customers toward the preferred choice.',
      3,
    ),
    mc(
      'To neutralize a customer\'s very low anchor price, the best approach is to:',
      ['Counter with a price slightly below your target to seem reasonable', 'Acknowledge the low price and negotiate upward from it', 'Refuse to treat it as a valid baseline and immediately introduce your own anchor', 'Walk away from the negotiation immediately'],
      'Refuse to treat it as a valid baseline and immediately introduce your own anchor',
      'Negotiating from the customer\'s low anchor accepts it as the frame of reference. Instead, acknowledge the number without validating it, then reset the conversation by introducing a new anchor from your side.',
      4,
    ),
    mc(
      'The "Victory Illusion" in anchoring describes:',
      ['The false belief that the high anchor is always the fair price', 'A buyer feeling they won a negotiation even when the final price still reflects the seller\'s high anchor', 'A seller\'s confidence after successfully closing a deal', 'The belief that anchoring only affects inexperienced negotiators'],
      'A buyer feeling they won a negotiation even when the final price still reflects the seller\'s high anchor',
      'The dopamine hit of getting a price lower than the anchor masks the fact that the final price may still be far above objective value. The buyer celebrates a "win" while still paying a significant premium.',
      5,
    ),
  ],
}
