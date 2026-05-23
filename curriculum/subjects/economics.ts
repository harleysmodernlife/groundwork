import type { SubjectDef } from '../types'
import { microExercises } from './economics-exercises-micro'
import { businessEconExercises } from './economics-exercises-business'
import { macroExercises } from './economics-exercises-macro'
import { globalEconExercises } from './economics-exercises-global'
import { behavioralExercises } from './economics-exercises-behavioral'
import { economicsAssessments } from './economics-assessments'

const economics: SubjectDef = {
  slug: 'economics',
  name: 'Economics',
  description: 'How individuals, businesses, and societies make decisions about scarce resources. Micro, macro, behavioral, and global economics.',
  icon: '📊',
  order: 10,
  courses: [
    {
      slug: 'economic-thinking',
      name: 'Economic Thinking & Microeconomics',
      description: 'How economists think about choices, trade-offs, and the behavior of individuals and firms.',
      order: 1,
      estimatedHours: 4,
      assessment: economicsAssessments['economic-thinking'],
      modules: [
        {
          slug: 'foundations-of-economics',
          name: 'Foundations of Economics',
          order: 1,
          lessons: [
            { slug: 'scarcity-and-choice', name: 'Scarcity, Choice, and Opportunity Cost', order: 1, exercises: microExercises['scarcity-and-choice'] },
            { slug: 'economic-systems', name: 'Economic Systems: Market, Command, Mixed', order: 2, exercises: microExercises['economic-systems'] },
            { slug: 'marginal-thinking', name: 'Thinking at the Margin', order: 3, exercises: microExercises['marginal-thinking'] },
          ],
        },
        {
          slug: 'markets',
          name: 'Markets',
          order: 2,
          lessons: [
            { slug: 'supply-and-demand', name: 'Supply and Demand', order: 1, exercises: microExercises['supply-and-demand'] },
            { slug: 'price-mechanism', name: 'The Price Mechanism and Market Equilibrium', order: 2, exercises: microExercises['price-mechanism'] },
            { slug: 'elasticity', name: 'Elasticity: How Sensitive Are Buyers and Sellers?', order: 3, exercises: microExercises['elasticity'] },
            { slug: 'market-failures', name: 'Market Failures: When Markets Don\'t Work', order: 4, exercises: microExercises['market-failures'] },
          ],
        },
      ],
    },
    {
      slug: 'business-economics',
      name: 'Business Economics: Firms and Competition',
      description: 'How firms behave, how competition shapes markets, and how businesses make production and pricing decisions.',
      order: 2,
      estimatedHours: 4,
      prerequisites: ['economic-thinking'],
      assessment: economicsAssessments['business-economics'],
      modules: [
        {
          slug: 'costs-and-production',
          name: 'Costs and Production',
          order: 1,
          lessons: [
            { slug: 'types-of-costs', name: 'Fixed Costs, Variable Costs, and Profit', order: 1, exercises: businessEconExercises['types-of-costs'] },
            { slug: 'economies-of-scale', name: 'Economies of Scale', order: 2, exercises: businessEconExercises['economies-of-scale'] },
            { slug: 'production-decisions', name: 'How Firms Decide What to Produce', order: 3, exercises: businessEconExercises['production-decisions'] },
          ],
        },
        {
          slug: 'market-structures',
          name: 'Market Structures',
          order: 2,
          lessons: [
            { slug: 'perfect-competition', name: 'Perfect Competition', order: 1, exercises: businessEconExercises['perfect-competition'] },
            { slug: 'monopoly', name: 'Monopoly: When One Firm Controls a Market', order: 2, exercises: businessEconExercises['monopoly'] },
            { slug: 'oligopoly-and-monopolistic', name: 'Oligopoly and Monopolistic Competition', order: 3, exercises: businessEconExercises['oligopoly-and-monopolistic'] },
            { slug: 'antitrust', name: 'Antitrust and Regulation', order: 4, exercises: businessEconExercises['antitrust'] },
          ],
        },
      ],
    },
    {
      slug: 'macroeconomics',
      name: 'Macroeconomics & Government Policy',
      description: 'The economy as a whole — GDP, unemployment, inflation, and how government and central banks respond.',
      order: 3,
      estimatedHours: 5,
      prerequisites: ['economic-thinking'],
      assessment: economicsAssessments['macroeconomics'],
      modules: [
        {
          slug: 'measuring-the-economy',
          name: 'Measuring the Economy',
          order: 1,
          lessons: [
            { slug: 'gdp', name: 'GDP: What It Measures and What It Misses', order: 1, exercises: macroExercises['gdp'] },
            { slug: 'unemployment', name: 'Unemployment: Types and Measurement', order: 2, exercises: macroExercises['unemployment'] },
            { slug: 'inflation', name: 'Inflation: Causes and Consequences', order: 3, exercises: macroExercises['inflation'] },
            { slug: 'business-cycles', name: 'Business Cycles: Boom and Bust', order: 4, exercises: macroExercises['business-cycles'] },
          ],
        },
        {
          slug: 'economic-policy',
          name: 'Economic Policy',
          order: 2,
          lessons: [
            { slug: 'fiscal-policy', name: 'Fiscal Policy: Government Spending and Taxes', order: 1, exercises: macroExercises['fiscal-policy'] },
            { slug: 'monetary-policy', name: 'Monetary Policy: The Federal Reserve', order: 2, exercises: macroExercises['monetary-policy'] },
            { slug: 'national-debt', name: 'The National Debt and Deficits', order: 3, exercises: macroExercises['national-debt'] },
            { slug: 'economic-schools', name: 'Keynesian vs Supply-Side Economics', order: 4, exercises: macroExercises['economic-schools'] },
          ],
        },
      ],
    },
    {
      slug: 'global-economics',
      name: 'Global Economics & Trade',
      description: 'International trade, globalization, exchange rates, and how countries relate economically.',
      order: 4,
      estimatedHours: 4,
      prerequisites: ['macroeconomics'],
      assessment: economicsAssessments['global-economics'],
      modules: [
        {
          slug: 'international-trade',
          name: 'International Trade',
          order: 1,
          lessons: [
            { slug: 'why-countries-trade', name: 'Why Countries Trade: Comparative Advantage', order: 1, exercises: globalEconExercises['why-countries-trade'] },
            { slug: 'tariffs-and-trade-barriers', name: 'Tariffs, Trade Barriers, and Free Trade Agreements', order: 2, exercises: globalEconExercises['tariffs-and-trade-barriers'] },
            { slug: 'trade-deficits', name: 'Trade Deficits and Surpluses', order: 3, exercises: globalEconExercises['trade-deficits'] },
          ],
        },
        {
          slug: 'global-financial-system',
          name: 'The Global Financial System',
          order: 2,
          lessons: [
            { slug: 'exchange-rates', name: 'Exchange Rates: How Currency Values Work', order: 1, exercises: globalEconExercises['exchange-rates'] },
            { slug: 'imf-and-world-bank', name: 'The IMF, World Bank, and Global Finance', order: 2, exercises: globalEconExercises['imf-and-world-bank'] },
            { slug: 'economic-development', name: 'Economic Development and Inequality', order: 3, exercises: globalEconExercises['economic-development'] },
            { slug: 'globalization-tradeoffs', name: 'Globalization: Benefits and Downsides', order: 4, exercises: globalEconExercises['globalization-tradeoffs'] },
          ],
        },
      ],
    },
    {
      slug: 'behavioral-economics',
      name: 'Behavioral Economics',
      description: 'Why people don\'t behave like rational economic actors — psychology, bias, and decision-making.',
      order: 5,
      estimatedHours: 3,
      prerequisites: ['economic-thinking'],
      assessment: economicsAssessments['behavioral-economics'],
      modules: [
        {
          slug: 'cognitive-biases',
          name: 'Cognitive Biases and Economic Decisions',
          order: 1,
          lessons: [
            { slug: 'rationality-and-its-limits', name: 'Why We\'re Not Rational Actors', order: 1, exercises: globalEconExercises['rationality-and-its-limits'] },
            { slug: 'loss-aversion', name: 'Loss Aversion and Prospect Theory', order: 2, exercises: behavioralExercises['loss-aversion'] },
            { slug: 'heuristics', name: 'Heuristics: Mental Shortcuts and Their Costs', order: 3, exercises: behavioralExercises['heuristics'] },
            { slug: 'nudges', name: 'Nudges: Designing Better Choices', order: 4, exercises: globalEconExercises['nudges'] },
          ],
        },
        {
          slug: 'decision-biases',
          name: 'Judgment and Decision Biases',
          order: 2,
          lessons: [
            { slug: 'overconfidence-bias', name: 'Overconfidence Bias and Calibration', order: 1, exercises: behavioralExercises['overconfidence-bias'] },
            { slug: 'sunk-cost-fallacy', name: 'The Sunk Cost Fallacy', order: 2, exercises: behavioralExercises['sunk-cost-fallacy'] },
            { slug: 'anchoring-and-adjustment', name: 'Anchoring and Adjustment', order: 3, exercises: behavioralExercises['anchoring-and-adjustment'] },
          ],
        },
      ],
    },
  ],
}

export default economics
