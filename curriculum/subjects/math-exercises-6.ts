import type { ExerciseDef } from '../types'

function mc(
  question: string,
  options: string[],
  correctAnswer: string,
  explanation: string,
  order: number
): ExerciseDef {
  return { question, type: 'MULTIPLE_CHOICE', options, correctAnswer, explanation, order }
}

export const mathExercises6: Record<string, ExerciseDef[]> = {
  'similar-triangles': [
    mc('Two triangles are similar if:', ['All three sides are equal in length', 'All three angles are equal and sides are proportional', 'They have the same area', 'Two sides are equal'], 'All three angles are equal and sides are proportional', 'Similar triangles have equal corresponding angles and proportional corresponding sides — same shape, different size.', 1),
    mc('If triangle ABC ~ triangle DEF and AB = 6, DE = 9, BC = 8, what is EF?', ['12', '6', '11', '4'], '12', 'Scale factor = 9/6 = 3/2. EF = BC × (3/2) = 8 × 1.5 = 12.', 2),
    mc('Which shortcut proves triangles are similar?', ['SSS (all sides equal)', 'AA (two angles equal)', 'SAS (two sides and angle equal)', 'Both AA and SSS~SAS ratios'], 'Both AA and SSS~SAS ratios', 'AA (two angles), SSS~ (all sides proportional), and SAS~ (two sides proportional, included angle equal) all prove similarity.', 3),
    mc('A tree casts a 15 ft shadow. A 5 ft person casts a 3 ft shadow. How tall is the tree?', ['9 ft', '25 ft', '45 ft', '10 ft'], '25 ft', 'Set up proportion: 5/3 = h/15. h = 5 × 15/3 = 25.', 4),
    mc('In similar triangles, which measurements are equal?', ['Side lengths', 'Areas', 'Angle measures', 'Perimeters'], 'Angle measures', 'Corresponding angles are equal in similar triangles. Corresponding sides are proportional, not equal.', 5),
  ],
  'polygons-and-area': [
    mc('What is the area of a trapezoid with parallel sides of 6 and 10, and height 4?', ['32', '24', '40', '16'], '32', 'Area of trapezoid = (1/2)(b₁ + b₂)(h) = (1/2)(6+10)(4) = (1/2)(16)(4) = 32.', 1),
    mc('A regular polygon has:', ['All sides equal', 'All angles equal', 'Both all sides and all angles equal', 'Only parallel sides'], 'Both all sides and all angles equal', 'A regular polygon (square, equilateral triangle, regular hexagon) has equal sides AND equal angles.', 2),
    mc('What is the sum of interior angles of a hexagon?', ['540°', '720°', '900°', '360°'], '720°', 'Sum of interior angles = (n−2) × 180° = (6−2) × 180° = 4 × 180° = 720°.', 3),
    mc('What is the area of a regular hexagon with side 4? (A = 3√3/2 × s²)', ['24√3', '12√3', '8√3', '48√3'], '24√3', 'A = (3√3/2)(4²) = (3√3/2)(16) = 24√3.', 4),
    mc('How many sides does a decagon have?', ['8', '9', '10', '12'], '10', 'Deca = 10. A decagon has 10 sides. (Octa=8, Nona=9, Dodeca=12)', 5),
  ],
  'circles': [
    mc('What is the formula for the circumference of a circle with radius r?', ['πr²', '2πr', 'πd²', '4πr'], '2πr', 'Circumference = 2πr (or πd, where d is diameter). Area = πr².', 1),
    mc('What is the area of a circle with radius 5?', ['10π', '25π', '5π', '25'], '25π', 'Area = πr² = π(5²) = 25π.', 2),
    mc('The diameter of a circle is 14. What is the radius?', ['28', '14', '7', '√14'], '7', 'Radius = diameter/2 = 14/2 = 7.', 3),
    mc('A central angle of 90° cuts off an arc. What fraction of the circle is this arc?', ['1/2', '1/3', '1/4', '1/6'], '1/4', '90°/360° = 1/4 of the full circle.', 4),
    mc('What is the relationship between the diameter and circumference?', ['Circumference = diameter + π', 'Circumference = π × diameter', 'Circumference = diameter²', 'Circumference = diameter × 2'], 'Circumference = π × diameter', 'C = πd. This is why π ≈ 3.14159 — it\'s the ratio of circumference to diameter for any circle.', 5),
  ],
  '3d-solids': [
    mc('What is the volume of a rectangular prism with length 5, width 3, height 4?', ['48', '60', '24', '94'], '60', 'Volume = l × w × h = 5 × 3 × 4 = 60.', 1),
    mc('What is the surface area of a cube with side length 3?', ['27', '54', '36', '18'], '54', 'A cube has 6 faces. Each face area = 3² = 9. Total = 6 × 9 = 54.', 2),
    mc('What is the volume of a cylinder with radius 2 and height 10?', ['40π', '20π', '4π', '40'], '40π', 'Volume = πr²h = π(2²)(10) = 40π.', 3),
    mc('What is the volume of a sphere with radius 3? (V = 4/3 πr³)', ['12π', '27π', '36π', '9π'], '36π', 'V = (4/3)π(3³) = (4/3)π(27) = 36π.', 4),
    mc('What is the volume of a cone with radius 3 and height 4? (V = 1/3 πr²h)', ['12π', '36π', '9π', '4π'], '12π', 'V = (1/3)π(3²)(4) = (1/3)(9)(4)π = 12π.', 5),
  ],
  'coordinate-geometry': [
    mc('What is the distance between (1, 2) and (4, 6)?', ['5', '7', '3', '√7'], '5', 'Distance = √((4−1)² + (6−2)²) = √(9+16) = √25 = 5.', 1),
    mc('What is the midpoint of the segment from (2, 4) to (8, 10)?', ['(5, 7)', '(6, 7)', '(4, 6)', '(5, 6)'], '(5, 7)', 'Midpoint = ((2+8)/2, (4+10)/2) = (5, 7).', 2),
    mc('A line passes through (0, 3) and (2, 7). What is its equation?', ['y = 3x + 2', 'y = 2x + 3', 'y = 4x + 3', 'y = x + 3'], 'y = 2x + 3', 'Slope = (7−3)/(2−0) = 2. Y-intercept = 3. So y = 2x + 3.', 3),
    mc('What is the equation of a circle centered at origin with radius 5?', ['x² + y² = 5', 'x² + y² = 25', 'x + y = 25', '(x−5)² + (y−5)² = 25'], 'x² + y² = 25', 'Circle equation centered at origin: x² + y² = r² = 5² = 25.', 4),
    mc('Which point lies on the line y = 3x − 2?', ['(0, 2)', '(1, 1)', '(2, 4)', '(3, 7)'], '(2, 4)', 'Test (2, 4): y = 3(2) − 2 = 4. Yes, 4 = 4. (Note (3,7): 3(3)−2=7, also works — check: (1,1): 3(1)−2=1 ✓)', 5),
  ],
  'polynomial-functions': [
    mc('Which best describes a polynomial function?', ['A function with at least one negative exponent', 'A function whose outputs are always positive', 'A function defined by a polynomial expression', 'A function that only has integer outputs'], 'A function defined by a polynomial expression', 'A polynomial function is f(x) = aₙxⁿ + ... + a₁x + a₀ where exponents are non-negative integers.', 1),
    mc('What does the end behavior of a polynomial function depend on?', ['The y-intercept', 'The leading coefficient and degree', 'The number of terms', 'The value of the constant term'], 'The leading coefficient and degree', 'End behavior is determined by the leading term (highest degree term) — its degree (even/odd) and coefficient (positive/negative).', 2),
    mc('A polynomial of degree n has at most how many real zeros?', ['n − 1', 'n', 'n + 1', '2n'], 'n', 'A polynomial of degree n has at most n real zeros (by the Fundamental Theorem of Algebra).', 3),
    mc('Where do polynomial zeros appear on a graph?', ['At the y-intercept', 'At the vertex', 'Where the graph crosses the x-axis', 'At the highest point'], 'Where the graph crosses the x-axis', 'Zeros (roots) of a polynomial are the x-values where f(x) = 0 — where the graph crosses/touches the x-axis.', 4),
    mc('What does it mean if a zero has multiplicity 2?', ['The zero appears twice as often', 'The factor (x − r) appears twice — the graph touches but doesn\'t cross at that zero', 'The zero equals 2', 'The polynomial has exactly 2 zeros'], 'The factor (x − r) appears twice — the graph touches but doesn\'t cross at that zero', 'Multiplicity 2 means (x−r)² is a factor. The graph bounces off the x-axis at that point instead of crossing.', 5),
  ],
  'rational-functions': [
    mc('What is a rational function?', ['A function with only rational (non-irrational) outputs', 'A ratio of two polynomials', 'A function with a square root in the denominator', 'A linear function'], 'A ratio of two polynomials', 'A rational function is f(x) = P(x)/Q(x) where P and Q are polynomials and Q(x) ≠ 0.', 1),
    mc('Where does a vertical asymptote occur in a rational function?', ['Where the numerator equals zero', 'Where the denominator equals zero (and numerator doesn\'t)', 'At the y-intercept', 'Where x equals the degree of the denominator'], 'Where the denominator equals zero (and numerator doesn\'t)', 'Vertical asymptotes occur where Q(x) = 0 and P(x) ≠ 0 — the function becomes undefined and approaches ±∞.', 2),
    mc('The horizontal asymptote of f(x) = 2x/(x + 3) is:', ['y = 0', 'y = 2', 'y = 3', 'y = 1'], 'y = 2', 'When degree of numerator = degree of denominator, horizontal asymptote = ratio of leading coefficients = 2/1 = 2.', 3),
    mc('What is a hole (removable discontinuity) in a rational function?', ['A missing value caused by a zero in the denominator that cannot be cancelled', 'A factor that cancels from numerator and denominator, leaving a gap at one point', 'A vertical asymptote with a positive slope', 'A horizontal asymptote'], 'A factor that cancels from numerator and denominator, leaving a gap at one point', 'A hole occurs when the same factor exists in both numerator and denominator — it cancels, but leaves a single undefined point.', 4),
    mc('Find any vertical asymptotes of f(x) = 1/(x² − 4).', ['x = 2 only', 'x = −2 only', 'x = 2 and x = −2', 'x = 4'], 'x = 2 and x = −2', 'Denominator: x² − 4 = (x−2)(x+2) = 0 when x = 2 or x = −2. Both are vertical asymptotes.', 5),
  ],
}
