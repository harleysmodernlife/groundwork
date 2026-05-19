import type { SubjectDef } from '../types'

const mathematics: SubjectDef = {
  slug: 'mathematics',
  name: 'Mathematics',
  description: 'The language of logic, pattern, and quantity. From basic arithmetic to calculus — rigorous, sequential, and genuinely useful.',
  icon: '📐',
  order: 7,
  courses: [
    {
      slug: 'arithmetic',
      name: 'Arithmetic & Number Sense',
      description: 'The foundation of all mathematics. Numbers, operations, fractions, decimals, and percentages.',
      order: 1,
      estimatedHours: 5,
      modules: [
        {
          slug: 'numbers-and-operations',
          name: 'Numbers and Operations',
          order: 1,
          lessons: [
            { slug: 'whole-numbers', name: 'Whole Numbers and Place Value', order: 1 },
            { slug: 'addition-and-subtraction', name: 'Addition and Subtraction', order: 2 },
            { slug: 'multiplication-and-division', name: 'Multiplication and Division', order: 3 },
            { slug: 'order-of-operations', name: 'Order of Operations (PEMDAS)', order: 4 },
          ],
        },
        {
          slug: 'fractions-decimals-percentages',
          name: 'Fractions, Decimals, and Percentages',
          order: 2,
          lessons: [
            { slug: 'fractions', name: 'Fractions: What They Are and How to Use Them', order: 1 },
            { slug: 'decimals', name: 'Decimals and Place Value', order: 2 },
            { slug: 'percentages', name: 'Percentages and Their Applications', order: 3 },
            { slug: 'ratios-and-proportions', name: 'Ratios and Proportions', order: 4 },
          ],
        },
        {
          slug: 'number-theory',
          name: 'Number Theory and Estimation',
          order: 3,
          lessons: [
            { slug: 'factors-and-multiples', name: 'Factors, Multiples, and Prime Numbers', order: 1 },
            { slug: 'estimation', name: 'Estimation and Rounding', order: 2 },
            { slug: 'negative-numbers', name: 'Negative Numbers and Absolute Value', order: 3 },
          ],
        },
      ],
    },
    {
      slug: 'pre-algebra',
      name: 'Pre-Algebra',
      description: 'Variables, expressions, equations, and the bridge from arithmetic to algebra.',
      order: 2,
      estimatedHours: 5,
      prerequisites: ['arithmetic'],
      modules: [
        {
          slug: 'variables-and-expressions',
          name: 'Variables and Expressions',
          order: 1,
          lessons: [
            { slug: 'what-is-a-variable', name: 'What Is a Variable?', order: 1 },
            { slug: 'writing-expressions', name: 'Writing and Evaluating Expressions', order: 2 },
            { slug: 'the-coordinate-plane', name: 'The Coordinate Plane', order: 3 },
          ],
        },
        {
          slug: 'equations-and-inequalities',
          name: 'Equations and Inequalities',
          order: 2,
          lessons: [
            { slug: 'solving-one-step-equations', name: 'Solving One-Step Equations', order: 1 },
            { slug: 'solving-two-step-equations', name: 'Solving Two-Step Equations', order: 2 },
            { slug: 'inequalities', name: 'Inequalities', order: 3 },
          ],
        },
        {
          slug: 'intro-to-geometry',
          name: 'Introduction to Geometry',
          order: 3,
          lessons: [
            { slug: 'perimeter-and-area', name: 'Perimeter and Area', order: 1 },
            { slug: 'angles-and-triangles', name: 'Angles and Triangles', order: 2 },
            { slug: 'pythagorean-theorem', name: 'The Pythagorean Theorem', order: 3 },
          ],
        },
      ],
    },
    {
      slug: 'algebra-i',
      name: 'Algebra I',
      description: 'Linear equations, functions, systems, and the foundation of abstract mathematical thinking.',
      order: 3,
      estimatedHours: 6,
      prerequisites: ['pre-algebra'],
      modules: [
        {
          slug: 'linear-equations',
          name: 'Linear Equations and Functions',
          order: 1,
          lessons: [
            { slug: 'linear-equations', name: 'Solving Linear Equations', order: 1 },
            { slug: 'slope-and-lines', name: 'Slope and the Equation of a Line', order: 2 },
            { slug: 'functions', name: 'Functions: Input, Output, and Notation', order: 3 },
            { slug: 'graphing-linear-functions', name: 'Graphing Linear Functions', order: 4 },
          ],
        },
        {
          slug: 'systems-and-inequalities',
          name: 'Systems and Inequalities',
          order: 2,
          lessons: [
            { slug: 'systems-of-equations', name: 'Systems of Equations', order: 1 },
            { slug: 'solving-systems', name: 'Solving Systems by Substitution and Elimination', order: 2 },
            { slug: 'linear-inequalities', name: 'Linear Inequalities and Their Graphs', order: 3 },
          ],
        },
        {
          slug: 'polynomials',
          name: 'Polynomials and Factoring',
          order: 3,
          lessons: [
            { slug: 'exponents', name: 'Exponents and Exponential Functions', order: 1 },
            { slug: 'polynomials', name: 'Polynomials: Adding, Subtracting, Multiplying', order: 2 },
            { slug: 'factoring', name: 'Factoring Polynomials', order: 3 },
            { slug: 'quadratic-equations', name: 'Quadratic Equations', order: 4 },
          ],
        },
      ],
    },
    {
      slug: 'geometry',
      name: 'Geometry',
      description: 'Shape, space, proof, and measurement. The visual side of mathematics.',
      order: 4,
      estimatedHours: 5,
      prerequisites: ['pre-algebra'],
      modules: [
        {
          slug: 'geometric-foundations',
          name: 'Geometric Foundations',
          order: 1,
          lessons: [
            { slug: 'points-lines-planes', name: 'Points, Lines, and Planes', order: 1 },
            { slug: 'angles', name: 'Angles and Angle Relationships', order: 2 },
            { slug: 'parallel-lines', name: 'Parallel Lines and Transversals', order: 3 },
          ],
        },
        {
          slug: 'triangles-and-polygons',
          name: 'Triangles and Polygons',
          order: 2,
          lessons: [
            { slug: 'triangle-properties', name: 'Triangle Properties and Congruence', order: 1 },
            { slug: 'similar-triangles', name: 'Similar Triangles and Proportionality', order: 2 },
            { slug: 'polygons-and-area', name: 'Polygons and Area', order: 3 },
          ],
        },
        {
          slug: 'circles-and-solids',
          name: 'Circles and 3D Solids',
          order: 3,
          lessons: [
            { slug: 'circles', name: 'Circles: Circumference, Area, and Arcs', order: 1 },
            { slug: '3d-solids', name: '3D Solids: Surface Area and Volume', order: 2 },
            { slug: 'coordinate-geometry', name: 'Coordinate Geometry', order: 3 },
          ],
        },
      ],
    },
    {
      slug: 'algebra-ii',
      name: 'Algebra II & Trigonometry',
      description: 'Advanced functions, complex numbers, and the trigonometry that connects algebra to the physical world.',
      order: 5,
      estimatedHours: 6,
      prerequisites: ['algebra-i', 'geometry'],
      modules: [
        {
          slug: 'advanced-functions',
          name: 'Advanced Functions',
          order: 1,
          lessons: [
            { slug: 'polynomial-functions', name: 'Polynomial Functions', order: 1 },
            { slug: 'rational-functions', name: 'Rational Functions', order: 2 },
            { slug: 'exponential-and-log', name: 'Exponential and Logarithmic Functions', order: 3 },
            { slug: 'radical-functions', name: 'Radical Functions and Complex Numbers', order: 4 },
          ],
        },
        {
          slug: 'trigonometry',
          name: 'Trigonometry',
          order: 2,
          lessons: [
            { slug: 'right-triangle-trig', name: 'Right Triangle Trigonometry: SOH-CAH-TOA', order: 1 },
            { slug: 'unit-circle', name: 'The Unit Circle', order: 2 },
            { slug: 'trig-functions-and-graphs', name: 'Trigonometric Functions and Their Graphs', order: 3 },
            { slug: 'trig-identities', name: 'Trigonometric Identities', order: 4 },
          ],
        },
      ],
    },
    {
      slug: 'pre-calculus',
      name: 'Pre-Calculus',
      description: 'The bridge to calculus — sequences, series, vectors, and limits.',
      order: 6,
      estimatedHours: 5,
      prerequisites: ['algebra-ii'],
      modules: [
        {
          slug: 'sequences-and-series',
          name: 'Sequences, Series, and Combinatorics',
          order: 1,
          lessons: [
            { slug: 'sequences', name: 'Arithmetic and Geometric Sequences', order: 1 },
            { slug: 'series-and-summation', name: 'Series and Summation', order: 2 },
            { slug: 'combinatorics', name: 'Permutations and Combinations', order: 3 },
          ],
        },
        {
          slug: 'limits-intro',
          name: 'Introduction to Limits',
          order: 2,
          lessons: [
            { slug: 'what-is-a-limit', name: 'What Is a Limit?', order: 1 },
            { slug: 'evaluating-limits', name: 'Evaluating Limits Algebraically', order: 2 },
            { slug: 'continuity', name: 'Continuity and Discontinuities', order: 3 },
          ],
        },
      ],
    },
    {
      slug: 'calculus',
      name: 'Calculus I',
      description: 'Derivatives, integrals, and the mathematics of change — one of the most powerful tools in science and engineering.',
      order: 7,
      estimatedHours: 7,
      prerequisites: ['pre-calculus'],
      modules: [
        {
          slug: 'derivatives',
          name: 'Derivatives',
          order: 1,
          lessons: [
            { slug: 'the-derivative', name: 'The Derivative: Rate of Change', order: 1 },
            { slug: 'differentiation-rules', name: 'Differentiation Rules', order: 2 },
            { slug: 'chain-product-quotient', name: 'Chain Rule, Product Rule, and Quotient Rule', order: 3 },
            { slug: 'applications-of-derivatives', name: 'Applications: Optimization and Related Rates', order: 4 },
          ],
        },
        {
          slug: 'integrals',
          name: 'Integrals',
          order: 2,
          lessons: [
            { slug: 'the-integral', name: 'The Integral: Accumulation and Area', order: 1 },
            { slug: 'fundamental-theorem', name: 'The Fundamental Theorem of Calculus', order: 2 },
            { slug: 'integration-techniques', name: 'Integration Techniques', order: 3 },
            { slug: 'applications-of-integrals', name: 'Applications: Area, Volume, and Averages', order: 4 },
          ],
        },
      ],
    },
    {
      slug: 'statistics',
      name: 'Statistics & Probability',
      description: 'Data, uncertainty, and decision-making under incomplete information. Essential for understanding the modern world.',
      order: 8,
      estimatedHours: 5,
      prerequisites: ['algebra-i'],
      modules: [
        {
          slug: 'descriptive-statistics',
          name: 'Descriptive Statistics',
          order: 1,
          lessons: [
            { slug: 'collecting-data', name: 'Collecting and Organizing Data', order: 1 },
            { slug: 'measures-of-center', name: 'Mean, Median, Mode, and Range', order: 2 },
            { slug: 'distributions-and-spread', name: 'Distributions, Variance, and Standard Deviation', order: 3 },
            { slug: 'data-visualization', name: 'Data Visualization: Charts and Graphs', order: 4 },
          ],
        },
        {
          slug: 'probability-and-inference',
          name: 'Probability and Statistical Inference',
          order: 2,
          lessons: [
            { slug: 'probability-basics', name: 'Probability: What Are the Chances?', order: 1 },
            { slug: 'probability-rules', name: 'Probability Rules and Conditional Probability', order: 2 },
            { slug: 'sampling-and-inference', name: 'Sampling, Confidence Intervals, and Inference', order: 3 },
            { slug: 'hypothesis-testing', name: 'Hypothesis Testing', order: 4 },
          ],
        },
      ],
    },
  ],
}

export default mathematics
