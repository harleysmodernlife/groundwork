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

export const microExercises: Record<string, ExerciseDef[]> = {
  'scarcity-and-choice': [
    mc(
      'In economics, scarcity means:',
      ['Resources are rare luxury items', 'Resources are limited relative to unlimited human wants', 'Most people lack basic income', 'Natural resources are depleted'],
      'Resources are limited relative to unlimited human wants',
      'Scarcity is the universal condition that resources — time, money, labor — are finite while human wants are effectively unlimited. Every economic system exists to manage this gap.',
      1,
    ),
    mc(
      'Opportunity cost is defined as:',
      ['The price you paid for your first choice', 'The value of the next-best alternative you give up', 'The total cost of all available options', 'The cost of producing one more unit'],
      'The value of the next-best alternative you give up',
      'Opportunity cost is what you sacrifice — the value of the best option you did not choose. It is never zero, even when something appears "free."',
      2,
    ),
    mc(
      'The optimal decision rule in marginal analysis says to continue an activity as long as:',
      ['Total revenue exceeds total cost', 'Marginal cost is decreasing', 'Marginal benefit is greater than or equal to marginal cost', 'You are earning a positive profit'],
      'Marginal benefit is greater than or equal to marginal cost',
      'At every additional unit, compare what you gain (MB) to what it costs (MC). When MC exceeds MB, you are destroying value at the margin and should stop.',
      3,
    ),
    mc(
      'A point inside the Production Possibilities Frontier (PPF) represents:',
      ['An impossible combination of outputs', 'The maximum efficient output', 'Productive inefficiency — resources are not fully utilized', 'Equal production of both goods'],
      'Productive inefficiency — resources are not fully utilized',
      'Points inside the PPF are achievable but wasteful — some resources sit idle or are misallocated. Points on the curve are fully efficient; points outside are currently impossible.',
      4,
    ),
    mc(
      'If you spend Saturday studying instead of working a paid shift, the opportunity cost of studying is:',
      ['The cost of your textbooks and materials', 'Zero, because studying raises future income', 'The wages you would have earned working that shift', 'The enjoyment you missed from not relaxing'],
      'The wages you would have earned working that shift',
      'Opportunity cost is the value of the next-best alternative. If the best alternative to studying was working, those forgone wages are the opportunity cost — regardless of how valuable studying is.',
      5,
    ),
  ],

  'economic-systems': [
    mc(
      'Which economic system relies primarily on central government planning to allocate resources?',
      ['Market economy', 'Mixed economy', 'Command economy', 'Traditional economy'],
      'Command economy',
      'In a command economy (e.g., the Soviet Union), the government makes key production and distribution decisions. Prices are set administratively rather than by supply and demand.',
      1,
    ),
    mc(
      'A mixed economy is characterized by:',
      ['Purely private ownership of all production', 'Both private markets and significant government intervention', 'All decisions made by tradition and custom', 'No private property rights'],
      'Both private markets and significant government intervention',
      'Most modern economies are mixed — markets set most prices and allocate most goods, but governments regulate, tax, spend, and provide public goods alongside them.',
      2,
    ),
    mc(
      'What is the primary mechanism through which market economies coordinate millions of independent decisions?',
      ['Government regulation', 'Central planning committees', 'The price system', 'Social custom and tradition'],
      'The price system',
      'Prices aggregate information from countless buyers and sellers and send signals that coordinate behavior without any central authority. This decentralized coordination was Hayek\'s key insight.',
      3,
    ),
    mc(
      'Historically, pure command economies have struggled most with:',
      ['Distributing goods equitably', 'Building military and industrial capacity', 'Creating incentives for efficiency and innovation', 'Maintaining population growth'],
      'Creating incentives for efficiency and innovation',
      'Without price signals or profit incentives, command economies tend to produce goods inefficiently and lack the dynamic innovation seen in market systems. This was a key factor in Soviet economic stagnation.',
      4,
    ),
    mc(
      'The three fundamental questions every economic system must answer are:',
      ['Who owns the land, factories, and banks?', 'How much to tax, spend, and borrow?', 'What to produce, how to produce it, and for whom to produce it?', 'How to grow, compete, and trade internationally?'],
      'What to produce, how to produce it, and for whom to produce it?',
      'These three questions capture the core allocation problem all societies face: scarce resources must be directed toward specific goods, using specific methods, distributed to specific people.',
      5,
    ),
  ],

  'marginal-thinking': [
    mc(
      '"Thinking at the margin" means:',
      ['Analyzing the total cost and benefit of an entire project', 'Considering the additional cost or benefit of one more unit of something', 'Comparing this month\'s profit to last month\'s', 'Finding the smallest possible increment of any good'],
      'Considering the additional cost or benefit of one more unit of something',
      'Marginal analysis focuses on the next unit — the next hour worked, the next item produced — not the average or total. Most real economic decisions happen at the margin.',
      1,
    ),
    mc(
      'You are two hours into a four-hour drive and discover a faster route. Should you switch?',
      ['No — two hours are already invested in the current route', 'Yes — if the time saved on the new route exceeds the cost of switching now', 'No — changing plans midway is always inefficient', 'Yes — always take the fastest possible route regardless of current position'],
      'Yes — if the time saved on the new route exceeds the cost of switching now',
      'The two hours already driven are a sunk cost. The only relevant question is whether switching now — the marginal decision — saves time going forward. Past costs are irrelevant.',
      2,
    ),
    mc(
      'Diminishing marginal returns means:',
      ['Each unit produced costs less than the previous one', 'Total output eventually starts to decline', 'Each additional unit of input adds less to output than the previous one', 'Returns diminish only when physical resources are scarce'],
      'Each additional unit of input adds less to output than the previous one',
      'As you add more of one input (e.g., workers) while holding others fixed (e.g., equipment), each additional unit eventually contributes less than the one before. Output still grows, just more slowly.',
      3,
    ),
    mc(
      'To decide whether to stay open an extra hour, a restaurant should compare:',
      ['Total nightly revenue to total nightly fixed costs', 'This year\'s late-hour revenue to last year\'s', 'Revenue earned from the extra hour to the additional costs of staying open that hour', 'Customer count to the number of tables available'],
      'Revenue earned from the extra hour to the additional costs of staying open that hour',
      'Prior hours are irrelevant to this marginal decision. Only what the extra hour adds in revenue versus what it costs in additional labor, utilities, and supplies matters.',
      4,
    ),
    mc(
      'The general marginal rule is: stop any activity when:',
      ['You have spent more than your budget', 'Total costs exceed total revenue', 'Marginal cost exceeds marginal benefit', 'You have been doing it longer than originally planned'],
      'Marginal cost exceeds marginal benefit',
      'At the point where MC > MB, each additional unit adds more cost than value. The rational actor stops precisely at MB = MC — not before (leaving value on the table) and not after (destroying value).',
      5,
    ),
  ],

  'supply-and-demand': [
    mc(
      'According to the Law of Demand (holding all else constant), as the price of a good rises:',
      ['Quantity demanded also rises', 'Quantity demanded falls', 'The supply curve shifts rightward', 'The demand curve shifts rightward'],
      'Quantity demanded falls',
      'The inverse relationship between price and quantity demanded is one of the most robust findings in economics. Higher prices make goods less attractive and prompt consumers to seek substitutes.',
      1,
    ),
    mc(
      'Which of the following would cause the supply of electric cars to increase (shift the supply curve right)?',
      ['A rise in the market price of electric cars', 'Higher wages for autoworkers', 'A decrease in battery material costs', 'Increased consumer preference for electric vehicles'],
      'A decrease in battery material costs',
      'Lower input costs reduce the cost of production, making it profitable to supply more at any given price. A price rise causes movement along the supply curve, not a shift. Consumer preference is a demand factor.',
      2,
    ),
    mc(
      'When market price is below equilibrium:',
      ['A surplus exists and price will fall', 'A shortage exists and price will rise', 'Supply will automatically decrease', 'Demand will automatically increase'],
      'A shortage exists and price will rise',
      'Below equilibrium, quantity demanded exceeds quantity supplied — a shortage. Competitive pressure from buyers willing to pay more pushes the price upward until the market clears.',
      3,
    ),
    mc(
      'Which of these is a non-price determinant of demand (shifts the entire demand curve)?',
      ['The price of the good itself', 'The cost of raw materials used to make it', 'Consumer income', 'The number of firms producing the good'],
      'Consumer income',
      'Non-price determinants shift the entire demand curve left or right. These include income, tastes, prices of substitutes and complements, and expectations. The good\'s own price causes movement along the curve, not a shift.',
      4,
    ),
    mc(
      'If both supply and demand increase simultaneously, what is true of the new equilibrium price?',
      ['It definitely rises', 'It definitely falls', 'It stays the same', 'The direction is ambiguous — it depends on the relative size of each shift'],
      'The direction is ambiguous — it depends on the relative size of each shift',
      'Both shifts together guarantee higher equilibrium quantity. But price: higher demand pushes it up while higher supply pushes it down. Without knowing which shift dominates, the price direction is indeterminate.',
      5,
    ),
  ],

  'price-mechanism': [
    mc(
      'Market equilibrium occurs when:',
      ['All consumers can afford the good', 'Quantity supplied equals quantity demanded', 'Price equals the average cost of production', 'The government certifies a price as fair'],
      'Quantity supplied equals quantity demanded',
      'At equilibrium, the market "clears" — there is no surplus to push price down and no shortage to push it up. The price adjusts until QS = QD.',
      1,
    ),
    mc(
      'A price floor set above the equilibrium price results in:',
      ['A shortage', 'A surplus', 'No effect on the market', 'Lower prices for consumers'],
      'A surplus',
      'A price floor above equilibrium holds price artificially high. Producers supply more (attracted by the higher price) while buyers demand less, creating an unsold surplus. Minimum wage above the market-clearing wage is a classic example.',
      2,
    ),
    mc(
      'A price ceiling set below the equilibrium price leads to:',
      ['A surplus, as suppliers produce more at the lower price', 'A shortage, as demand exceeds supply at the lower price', 'An equilibrium, since consumers prefer lower prices', 'Higher prices as firms compete for fewer buyers'],
      'A shortage, as demand exceeds supply at the lower price',
      'Below-equilibrium price ceilings make goods cheaper (raising QD) while discouraging production (reducing QS), creating a persistent shortage. Rent control is a widely studied example.',
      3,
    ),
    mc(
      'Which best describes the role of prices in a market economy?',
      ['Prices are set by government to ensure fairness', 'Prices coordinate buyers and sellers by conveying information about scarcity and value', 'Prices are determined solely by production costs', 'Prices only matter to producers, not consumers'],
      'Prices coordinate buyers and sellers by conveying information about scarcity and value',
      'Prices encode information from millions of decisions. Rising prices signal scarcity and attract more production; falling prices signal surplus and discourage it — all without any central coordination.',
      4,
    ),
    mc(
      'If demand falls while supply remains constant, the new equilibrium will have:',
      ['Lower price and higher quantity', 'Higher price and lower quantity', 'Lower price and lower quantity', 'Higher price and higher quantity'],
      'Lower price and lower quantity',
      'Falling demand shifts the demand curve leftward. At any given price, less is demanded — so equilibrium price falls. With a lower price, suppliers also reduce output, so equilibrium quantity falls too.',
      5,
    ),
  ],

  'elasticity': [
    mc(
      'Price elasticity of demand is calculated as:',
      ['Change in price divided by change in quantity demanded', 'Percentage change in quantity demanded divided by percentage change in price', 'Change in quantity demanded multiplied by change in price', 'Total revenue divided by price'],
      'Percentage change in quantity demanded divided by percentage change in price',
      'Using percentage changes makes elasticity unit-free and comparable across goods with different prices and scales. An absolute change in quantity means nothing without knowing the baseline.',
      1,
    ),
    mc(
      'Which good is most likely to have inelastic demand?',
      ['Brand-name breakfast cereal', 'Luxury vacation packages', 'Insulin for diabetics', 'Restaurant meals'],
      'Insulin for diabetics',
      'Insulin has no close substitutes for diabetics and is a medical necessity — demand is highly inelastic because the alternative to paying is severe health consequences. Necessities with no substitutes always trend toward inelasticity.',
      2,
    ),
    mc(
      'When demand is elastic, raising the price will:',
      ['Increase total revenue', 'Decrease total revenue', 'Have no effect on total revenue', 'Increase quantity demanded'],
      'Decrease total revenue',
      'With elastic demand, the percentage drop in quantity demanded exceeds the percentage rise in price. Since revenue = price × quantity, the quantity drop more than offsets the price increase.',
      3,
    ),
    mc(
      'A price elasticity of demand of −0.3 indicates:',
      ['Elastic demand — consumers are very sensitive to price changes', 'Perfectly elastic demand', 'Inelastic demand — a 10% price rise leads to only a 3% quantity decrease', 'Unit elastic demand'],
      'Inelastic demand — a 10% price rise leads to only a 3% quantity decrease',
      'When the absolute value of elasticity is less than 1, demand is inelastic — quantity changes proportionally less than price. |−0.3| = 0.3 < 1, confirming inelastic demand.',
      4,
    ),
    mc(
      'Which factor tends to make demand more elastic?',
      ['The good has very few substitutes', 'The good is a medical or survival necessity', 'The good represents a small share of the consumer\'s budget', 'The good has many close substitutes available'],
      'The good has many close substitutes available',
      'When alternatives exist, consumers readily switch away when price rises, making demand more elastic. The other options — few substitutes, necessity status, small budget share — all point toward inelasticity.',
      5,
    ),
  ],

  'market-failures': [
    mc(
      'A negative externality occurs when:',
      ['A firm earns a negative profit', 'A transaction imposes costs on third parties not involved in the exchange', 'Government intervention reduces market efficiency', 'Prices fall below the cost of production'],
      'A transaction imposes costs on third parties not involved in the exchange',
      'Negative externalities (e.g., a factory polluting a river) mean the social cost of production exceeds its private cost. Markets that ignore these costs overproduce the harmful activity relative to the social optimum.',
      1,
    ),
    mc(
      'Public goods are defined by which two characteristics?',
      ['Produced by governments and sold at cost', 'Non-rival in consumption and non-excludable', 'Rival but non-excludable', 'Excludable but non-rival'],
      'Non-rival in consumption and non-excludable',
      'Non-rival means one person\'s use does not diminish availability for others. Non-excludable means you cannot prevent non-payers from benefiting. National defense is the classic example of both.',
      2,
    ),
    mc(
      'The free rider problem arises because:',
      ['Public transit is more efficient than private cars', 'People can benefit from a public good without contributing to its cost', 'Governments subsidize too many private industries', 'Private firms refuse to produce essential goods'],
      'People can benefit from a public good without contributing to its cost',
      'If people receive the benefit whether or not they pay, rational actors free ride — benefiting while letting others bear the cost. This leads to chronic underprovision by private markets.',
      3,
    ),
    mc(
      'Akerlof\'s "Market for Lemons" shows that information asymmetry leads to:',
      ['Overproduction of high-quality used cars', 'Buyers driving up prices to guarantee quality', 'Adverse selection, where low-quality goods dominate the market', 'Sellers knowing less about quality than buyers'],
      'Adverse selection, where low-quality goods dominate the market',
      'Because buyers cannot distinguish lemons from quality cars, they offer only average prices. Owners of quality cars won\'t sell at that price, so they exit — leaving mostly lemons. This is adverse selection.',
      4,
    ),
    mc(
      'Which government intervention is designed to correct a negative externality?',
      ['A production subsidy for high-cost firms', 'A price ceiling on essential medicines', 'A carbon tax on greenhouse gas emissions', 'A minimum wage law'],
      'A carbon tax on greenhouse gas emissions',
      'A Pigouvian tax equal to the external cost forces producers to internalize the social cost of their emissions, reducing output toward the socially optimal level. Subsidies and price ceilings address different problems.',
      5,
    ),
  ],
}
