import type { SubjectDef } from '../types'

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
      modules: [
        {
          slug: 'foundations-of-economics',
          name: 'Foundations of Economics',
          order: 1,
          lessons: [
            { slug: 'scarcity-and-choice', name: 'Scarcity, Choice, and Opportunity Cost', order: 1 },
            { slug: 'economic-systems', name: 'Economic Systems: Market, Command, Mixed', order: 2 },
            { slug: 'marginal-thinking', name: 'Thinking at the Margin', order: 3 },
          ],
        },
        {
          slug: 'markets',
          name: 'Markets',
          order: 2,
          lessons: [
            { slug: 'supply-and-demand', name: 'Supply and Demand', order: 1 },
            { slug: 'price-mechanism', name: 'The Price Mechanism and Market Equilibrium', order: 2 },
            { slug: 'elasticity', name: 'Elasticity: How Sensitive Are Buyers and Sellers?', order: 3 },
            { slug: 'market-failures', name: 'Market Failures: When Markets Don\'t Work', order: 4 },
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
      modules: [
        {
          slug: 'costs-and-production',
          name: 'Costs and Production',
          order: 1,
          lessons: [
            { slug: 'types-of-costs', name: 'Fixed Costs, Variable Costs, and Profit', order: 1 },
            { slug: 'economies-of-scale', name: 'Economies of Scale', order: 2 },
            { slug: 'production-decisions', name: 'How Firms Decide What to Produce', order: 3 },
          ],
        },
        {
          slug: 'market-structures',
          name: 'Market Structures',
          order: 2,
          lessons: [
            { slug: 'perfect-competition', name: 'Perfect Competition', order: 1 },
            { slug: 'monopoly', name: 'Monopoly: When One Firm Controls a Market', order: 2 },
            { slug: 'oligopoly-and-monopolistic', name: 'Oligopoly and Monopolistic Competition', order: 3 },
            { slug: 'antitrust', name: 'Antitrust and Regulation', order: 4 },
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
      modules: [
        {
          slug: 'measuring-the-economy',
          name: 'Measuring the Economy',
          order: 1,
          lessons: [
            { slug: 'gdp', name: 'GDP: What It Measures and What It Misses', order: 1 },
            { slug: 'unemployment', name: 'Unemployment: Types and Measurement', order: 2 },
            { slug: 'inflation', name: 'Inflation: Causes and Consequences', order: 3 },
            { slug: 'business-cycles', name: 'Business Cycles: Boom and Bust', order: 4 },
          ],
        },
        {
          slug: 'economic-policy',
          name: 'Economic Policy',
          order: 2,
          lessons: [
            { slug: 'fiscal-policy', name: 'Fiscal Policy: Government Spending and Taxes', order: 1 },
            { slug: 'monetary-policy', name: 'Monetary Policy: The Federal Reserve', order: 2 },
            { slug: 'national-debt', name: 'The National Debt and Deficits', order: 3 },
            { slug: 'economic-schools', name: 'Keynesian vs Supply-Side Economics', order: 4 },
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
      modules: [
        {
          slug: 'international-trade',
          name: 'International Trade',
          order: 1,
          lessons: [
            { slug: 'why-countries-trade', name: 'Why Countries Trade: Comparative Advantage', order: 1 },
            { slug: 'tariffs-and-trade-barriers', name: 'Tariffs, Trade Barriers, and Free Trade Agreements', order: 2 },
            { slug: 'trade-deficits', name: 'Trade Deficits and Surpluses', order: 3 },
          ],
        },
        {
          slug: 'global-financial-system',
          name: 'The Global Financial System',
          order: 2,
          lessons: [
            { slug: 'exchange-rates', name: 'Exchange Rates: How Currency Values Work', order: 1 },
            { slug: 'imf-and-world-bank', name: 'The IMF, World Bank, and Global Finance', order: 2 },
            { slug: 'economic-development', name: 'Economic Development and Inequality', order: 3 },
            { slug: 'globalization-tradeoffs', name: 'Globalization: Benefits and Downsides', order: 4 },
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
      modules: [
        {
          slug: 'cognitive-biases',
          name: 'Cognitive Biases and Economic Decisions',
          order: 1,
          lessons: [
            { slug: 'rationality-and-its-limits', name: 'Why We\'re Not Rational Actors', order: 1 },
            { slug: 'loss-aversion', name: 'Loss Aversion and Prospect Theory', order: 2 },
            { slug: 'heuristics', name: 'Heuristics: Mental Shortcuts and Their Costs', order: 3 },
            { slug: 'nudges', name: 'Nudges: Designing Better Choices', order: 4 },
          ],
        },
      ],
    },
  ],
}

export default economics
