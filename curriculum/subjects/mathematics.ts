import type { SubjectDef } from '../types'
import { mathExercises1 } from './math-exercises-1'
import { mathExercises2 } from './math-exercises-2'
import { mathExercises3 } from './math-exercises-3'
import { mathExercises4 } from './math-exercises-4'
import { mathExercises5 } from './math-exercises-5'
import { mathExercises6 } from './math-exercises-6'
import { mathExercises7 } from './math-exercises-7'
import { mathExercises8 } from './math-exercises-8'
import { mathExercises9 } from './math-exercises-9'
import { mathExercises10 } from './math-exercises-10'
import { mathematicsAssessments } from './mathematics-assessments'

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
      assessment: mathematicsAssessments['arithmetic'],
      modules: [
        {
          slug: 'numbers-and-operations',
          name: 'Numbers and Operations',
          order: 1,
          lessons: [
            { slug: 'whole-numbers', name: 'Whole Numbers and Place Value', order: 1, exercises: mathExercises1['whole-numbers'] },
            { slug: 'addition-and-subtraction', name: 'Addition and Subtraction', order: 2, exercises: mathExercises1['addition-and-subtraction'] },
            { slug: 'multiplication-and-division', name: 'Multiplication and Division', order: 3, exercises: mathExercises1['multiplication-and-division'] },
            { slug: 'order-of-operations', name: 'Order of Operations (PEMDAS)', order: 4, exercises: mathExercises1['order-of-operations'] },
          ],
        },
        {
          slug: 'fractions-decimals-percentages',
          name: 'Fractions, Decimals, and Percentages',
          order: 2,
          lessons: [
            { slug: 'fractions', name: 'Fractions: What They Are and How to Use Them', order: 1, exercises: mathExercises1['fractions'] },
            { slug: 'decimals', name: 'Decimals and Place Value', order: 2, exercises: mathExercises1['decimals'] },
            { slug: 'percentages', name: 'Percentages and Their Applications', order: 3, exercises: mathExercises1['percentages'] },
            { slug: 'ratios-and-proportions', name: 'Ratios and Proportions', order: 4, exercises: mathExercises2['ratios-and-proportions'] },
          ],
        },
        {
          slug: 'number-theory',
          name: 'Number Theory and Estimation',
          order: 3,
          lessons: [
            { slug: 'factors-and-multiples', name: 'Factors, Multiples, and Prime Numbers', order: 1, exercises: mathExercises2['factors-and-multiples'] },
            { slug: 'estimation', name: 'Estimation and Rounding', order: 2, exercises: mathExercises2['estimation'] },
            { slug: 'negative-numbers', name: 'Negative Numbers and Absolute Value', order: 3, exercises: mathExercises2['negative-numbers'] },
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
      assessment: mathematicsAssessments['pre-algebra'],
      modules: [
        {
          slug: 'variables-and-expressions',
          name: 'Variables and Expressions',
          order: 1,
          lessons: [
            { slug: 'what-is-a-variable', name: 'What Is a Variable?', order: 1, exercises: mathExercises2['what-is-a-variable'] },
            { slug: 'writing-expressions', name: 'Writing and Evaluating Expressions', order: 2, exercises: mathExercises2['writing-expressions'] },
            { slug: 'the-coordinate-plane', name: 'The Coordinate Plane', order: 3, exercises: mathExercises2['the-coordinate-plane'] },
          ],
        },
        {
          slug: 'equations-and-inequalities',
          name: 'Equations and Inequalities',
          order: 2,
          lessons: [
            { slug: 'solving-one-step-equations', name: 'Solving One-Step Equations', order: 1, exercises: mathExercises3['solving-one-step-equations'] },
            { slug: 'solving-two-step-equations', name: 'Solving Two-Step Equations', order: 2, exercises: mathExercises3['solving-two-step-equations'] },
            { slug: 'inequalities', name: 'Inequalities', order: 3, exercises: mathExercises3['inequalities'] },
          ],
        },
        {
          slug: 'intro-to-geometry',
          name: 'Introduction to Geometry',
          order: 3,
          lessons: [
            { slug: 'perimeter-and-area', name: 'Perimeter and Area', order: 1, exercises: mathExercises3['perimeter-and-area'] },
            { slug: 'angles-and-triangles', name: 'Angles and Triangles', order: 2, exercises: mathExercises3['angles-and-triangles'] },
            { slug: 'pythagorean-theorem', name: 'The Pythagorean Theorem', order: 3, exercises: mathExercises3['pythagorean-theorem'] },
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
      assessment: mathematicsAssessments['algebra-i'],
      modules: [
        {
          slug: 'linear-equations',
          name: 'Linear Equations and Functions',
          order: 1,
          lessons: [
            { slug: 'linear-equations', name: 'Solving Linear Equations', order: 1, exercises: mathExercises3['linear-equations'] },
            { slug: 'slope-and-lines', name: 'Slope and the Equation of a Line', order: 2, exercises: mathExercises4['slope-and-lines'] },
            { slug: 'functions', name: 'Functions: Input, Output, and Notation', order: 3, exercises: mathExercises4['functions'] },
            { slug: 'graphing-linear-functions', name: 'Graphing Linear Functions', order: 4, exercises: mathExercises4['graphing-linear-functions'] },
          ],
        },
        {
          slug: 'systems-and-inequalities',
          name: 'Systems and Inequalities',
          order: 2,
          lessons: [
            { slug: 'systems-of-equations', name: 'Systems of Equations', order: 1, exercises: mathExercises4['systems-of-equations'] },
            { slug: 'solving-systems', name: 'Solving Systems by Substitution and Elimination', order: 2, exercises: mathExercises4['solving-systems'] },
            { slug: 'linear-inequalities', name: 'Linear Inequalities and Their Graphs', order: 3, exercises: mathExercises4['linear-inequalities'] },
          ],
        },
        {
          slug: 'polynomials',
          name: 'Polynomials and Factoring',
          order: 3,
          lessons: [
            { slug: 'exponents', name: 'Exponents and Exponential Functions', order: 1, exercises: mathExercises4['exponents'] },
            { slug: 'polynomials', name: 'Polynomials: Adding, Subtracting, Multiplying', order: 2, exercises: mathExercises5['polynomials'] },
            { slug: 'factoring', name: 'Factoring Polynomials', order: 3, exercises: mathExercises5['factoring'] },
            { slug: 'quadratic-equations', name: 'Quadratic Equations', order: 4, exercises: mathExercises5['quadratic-equations'] },
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
      assessment: mathematicsAssessments['geometry'],
      modules: [
        {
          slug: 'geometric-foundations',
          name: 'Geometric Foundations',
          order: 1,
          lessons: [
            { slug: 'points-lines-planes', name: 'Points, Lines, and Planes', order: 1, exercises: mathExercises5['points-lines-planes'] },
            { slug: 'angles', name: 'Angles and Angle Relationships', order: 2, exercises: mathExercises5['angles'] },
            { slug: 'parallel-lines', name: 'Parallel Lines and Transversals', order: 3, exercises: mathExercises5['parallel-lines'] },
          ],
        },
        {
          slug: 'triangles-and-polygons',
          name: 'Triangles and Polygons',
          order: 2,
          lessons: [
            { slug: 'triangle-properties', name: 'Triangle Properties and Congruence', order: 1, exercises: mathExercises5['triangle-properties'] },
            { slug: 'similar-triangles', name: 'Similar Triangles and Proportionality', order: 2, exercises: mathExercises6['similar-triangles'] },
            { slug: 'polygons-and-area', name: 'Polygons and Area', order: 3, exercises: mathExercises6['polygons-and-area'] },
          ],
        },
        {
          slug: 'circles-and-solids',
          name: 'Circles and 3D Solids',
          order: 3,
          lessons: [
            { slug: 'circles', name: 'Circles: Circumference, Area, and Arcs', order: 1, exercises: mathExercises6['circles'] },
            { slug: '3d-solids', name: '3D Solids: Surface Area and Volume', order: 2, exercises: mathExercises6['3d-solids'] },
            { slug: 'coordinate-geometry', name: 'Coordinate Geometry', order: 3, exercises: mathExercises6['coordinate-geometry'] },
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
      assessment: mathematicsAssessments['algebra-ii'],
      modules: [
        {
          slug: 'advanced-functions',
          name: 'Advanced Functions',
          order: 1,
          lessons: [
            { slug: 'polynomial-functions', name: 'Polynomial Functions', order: 1, exercises: mathExercises6['polynomial-functions'] },
            { slug: 'rational-functions', name: 'Rational Functions', order: 2, exercises: mathExercises6['rational-functions'] },
            { slug: 'exponential-and-log', name: 'Exponential and Logarithmic Functions', order: 3, exercises: mathExercises7['exponential-and-log'] },
            { slug: 'radical-functions', name: 'Radical Functions and Complex Numbers', order: 4, exercises: mathExercises7['radical-functions'] },
          ],
        },
        {
          slug: 'trigonometry',
          name: 'Trigonometry',
          order: 2,
          lessons: [
            { slug: 'right-triangle-trig', name: 'Right Triangle Trigonometry: SOH-CAH-TOA', order: 1, exercises: mathExercises7['right-triangle-trig'] },
            { slug: 'unit-circle', name: 'The Unit Circle', order: 2, exercises: mathExercises7['unit-circle'] },
            { slug: 'trig-functions-and-graphs', name: 'Trigonometric Functions and Their Graphs', order: 3, exercises: mathExercises7['trig-functions-and-graphs'] },
            { slug: 'trig-identities', name: 'Trigonometric Identities', order: 4, exercises: mathExercises7['trig-identities'] },
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
      assessment: mathematicsAssessments['pre-calculus'],
      modules: [
        {
          slug: 'sequences-and-series',
          name: 'Sequences, Series, and Combinatorics',
          order: 1,
          lessons: [
            { slug: 'sequences', name: 'Arithmetic and Geometric Sequences', order: 1, exercises: mathExercises7['sequences'] },
            { slug: 'series-and-summation', name: 'Series and Summation', order: 2, exercises: mathExercises8['series-and-summation'] },
            { slug: 'combinatorics', name: 'Permutations and Combinations', order: 3, exercises: mathExercises8['combinatorics'] },
          ],
        },
        {
          slug: 'limits-intro',
          name: 'Introduction to Limits',
          order: 2,
          lessons: [
            { slug: 'what-is-a-limit', name: 'What Is a Limit?', order: 1, exercises: mathExercises8['what-is-a-limit'] },
            { slug: 'evaluating-limits', name: 'Evaluating Limits Algebraically', order: 2, exercises: mathExercises8['evaluating-limits'] },
            { slug: 'continuity', name: 'Continuity and Discontinuities', order: 3, exercises: mathExercises8['continuity'] },
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
      assessment: mathematicsAssessments['calculus'],
      modules: [
        {
          slug: 'derivatives',
          name: 'Derivatives',
          order: 1,
          lessons: [
            { slug: 'the-derivative', name: 'The Derivative: Rate of Change', order: 1, exercises: mathExercises8['the-derivative'] },
            { slug: 'differentiation-rules', name: 'Differentiation Rules', order: 2, exercises: mathExercises8['differentiation-rules'] },
            { slug: 'chain-product-quotient', name: 'Chain Rule, Product Rule, and Quotient Rule', order: 3, exercises: mathExercises9['chain-product-quotient'] },
            { slug: 'applications-of-derivatives', name: 'Applications: Optimization and Related Rates', order: 4, exercises: mathExercises9['applications-of-derivatives'] },
          ],
        },
        {
          slug: 'integrals',
          name: 'Integrals',
          order: 2,
          lessons: [
            { slug: 'the-integral', name: 'The Integral: Accumulation and Area', order: 1, exercises: mathExercises9['the-integral'] },
            { slug: 'fundamental-theorem', name: 'The Fundamental Theorem of Calculus', order: 2, exercises: mathExercises9['fundamental-theorem'] },
            { slug: 'integration-techniques', name: 'Integration Techniques', order: 3, exercises: mathExercises9['integration-techniques'] },
            { slug: 'applications-of-integrals', name: 'Applications: Area, Volume, and Averages', order: 4, exercises: mathExercises9['applications-of-integrals'] },
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
      assessment: mathematicsAssessments['statistics'],
      modules: [
        {
          slug: 'descriptive-statistics',
          name: 'Descriptive Statistics',
          order: 1,
          lessons: [
            { slug: 'collecting-data', name: 'Collecting and Organizing Data', order: 1, exercises: mathExercises9['collecting-data'] },
            { slug: 'measures-of-center', name: 'Mean, Median, Mode, and Range', order: 2, exercises: mathExercises10['measures-of-center'] },
            { slug: 'distributions-and-spread', name: 'Distributions, Variance, and Standard Deviation', order: 3, exercises: mathExercises10['distributions-and-spread'] },
            { slug: 'data-visualization', name: 'Data Visualization: Charts and Graphs', order: 4, exercises: mathExercises10['data-visualization'] },
          ],
        },
        {
          slug: 'probability-and-inference',
          name: 'Probability and Statistical Inference',
          order: 2,
          lessons: [
            { slug: 'probability-basics', name: 'Probability: What Are the Chances?', order: 1, exercises: mathExercises10['probability-basics'] },
            { slug: 'probability-rules', name: 'Probability Rules and Conditional Probability', order: 2, exercises: mathExercises10['probability-rules'] },
            { slug: 'sampling-and-inference', name: 'Sampling, Confidence Intervals, and Inference', order: 3, exercises: mathExercises10['sampling-and-inference'] },
            { slug: 'hypothesis-testing', name: 'Hypothesis Testing', order: 4, exercises: mathExercises10['hypothesis-testing'] },
          ],
        },
      ],
    },
  ],
}

export default mathematics
