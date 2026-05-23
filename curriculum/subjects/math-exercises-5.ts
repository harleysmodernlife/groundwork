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

export const mathExercises5: Record<string, ExerciseDef[]> = {
  'polynomials': [
    mc('What is a polynomial?', ['Any equation with an equals sign', 'An expression with variables raised to non-negative integer powers', 'An equation with exactly two terms', 'An expression with only negative exponents'], 'An expression with variables raised to non-negative integer powers', 'Polynomials are sums of terms with variables raised to whole-number powers — like 3x² + 2x − 5.', 1),
    mc('What is the degree of the polynomial 4x³ − 2x + 7?', ['1', '2', '3', '7'], '3', 'The degree is the highest exponent. In 4x³ − 2x + 7, the highest power is 3.', 2),
    mc('Add: (3x² + 2x − 1) + (x² − 4x + 5)', ['4x² − 2x + 4', '4x² + 6x + 4', '2x² + 2x + 4', '4x² − 2x − 4'], '4x² − 2x + 4', 'Combine like terms: (3+1)x² + (2−4)x + (−1+5) = 4x² − 2x + 4.', 3),
    mc('What is a binomial?', ['A polynomial with one term', 'A polynomial with exactly two terms', 'A polynomial with three terms', 'A polynomial of degree 2'], 'A polynomial with exactly two terms', 'Mono=1 term, bi=2 terms (binomial), tri=3 terms (trinomial).', 4),
    mc('Multiply: (x + 3)(x + 2)', ['x² + 6', 'x² + 5x + 6', 'x² + 6x + 6', '2x² + 5x + 6'], 'x² + 5x + 6', 'FOIL: x·x + x·2 + 3·x + 3·2 = x² + 2x + 3x + 6 = x² + 5x + 6.', 5),
  ],
  'factoring': [
    mc('What does "factoring a polynomial" mean?', ['Multiplying two polynomials together', 'Expressing a polynomial as a product of simpler expressions', 'Solving a polynomial equation', 'Simplifying by combining like terms'], 'Expressing a polynomial as a product of simpler expressions', 'Factoring is the reverse of multiplying — you decompose the polynomial into factors.', 1),
    mc('Factor: 6x² + 9x', ['3x(2x + 3)', '6x(x + 9)', '3(2x² + 3x)', 'x(6x + 9)'], '3x(2x + 3)', 'GCF of 6x² and 9x is 3x. Factor out: 3x(2x + 3).', 2),
    mc('Factor: x² − 9', ['(x − 9)(x + 1)', '(x − 3)²', '(x − 3)(x + 3)', '(x + 9)(x − 1)'], '(x − 3)(x + 3)', 'This is difference of squares: a² − b² = (a−b)(a+b). Here a=x, b=3.', 3),
    mc('Factor: x² + 5x + 6', ['(x + 2)(x + 3)', '(x + 6)(x + 1)', '(x + 5)(x + 1)', '(x − 2)(x − 3)'], '(x + 2)(x + 3)', 'Find two numbers that multiply to 6 and add to 5: 2 × 3 = 6, 2 + 3 = 5.', 4),
    mc('What is the first step when factoring any polynomial?', ['Factor by grouping', 'Check for difference of squares', 'Look for a greatest common factor', 'Use the quadratic formula'], 'Look for a greatest common factor', 'Always try to factor out the GCF first — it simplifies everything that follows.', 5),
  ],
  'quadratic-equations': [
    mc('What is the standard form of a quadratic equation?', ['y = mx + b', 'ax² + bx + c = 0', 'x = (−b ± √(b²−4ac)) / 2a', 'a² + b² = c²'], 'ax² + bx + c = 0', 'A quadratic equation in standard form is ax² + bx + c = 0, where a ≠ 0.', 1),
    mc('The quadratic formula gives x = ?', ['x = −b/2a', 'x = (−b ± √(b²−4ac)) / 2a', 'x = (b ± √(b²+4ac)) / 2a', 'x = √(b²−4ac) / a'], 'x = (−b ± √(b²−4ac)) / 2a', 'The quadratic formula solves any quadratic equation. Memorize it or know how to derive it.', 2),
    mc('Solve: x² − 5x + 6 = 0', ['x = 1 or x = 6', 'x = 2 or x = 3', 'x = −2 or x = −3', 'x = 5 or x = 1'], 'x = 2 or x = 3', 'Factor: (x−2)(x−3) = 0. So x = 2 or x = 3.', 3),
    mc('What is the discriminant in the quadratic formula?', ['−b/2a', 'b² − 4ac', '√(b²−4ac)', '−b'], 'b² − 4ac', 'The discriminant is b²−4ac. If > 0: two real solutions; = 0: one; < 0: no real solutions.', 4),
    mc('How many real solutions does x² + 4 = 0 have?', ['One', 'Two', 'None', 'Infinitely many'], 'None', 'x² = −4 has no real solution — you can\'t square a real number and get a negative.', 5),
  ],
  'points-lines-planes': [
    mc('What is a point in geometry?', ['A tiny circle with a specific size', 'An exact location with no dimensions', 'A line segment of length zero', 'An angle of measure zero'], 'An exact location with no dimensions', 'A point has no size — it marks a location. It\'s represented by a dot and named with a capital letter.', 1),
    mc('What is a line?', ['A segment with two endpoints', 'A flat surface extending in all directions', 'An infinite straight path extending in both directions', 'Two rays meeting at an endpoint'], 'An infinite straight path extending in both directions', 'A line extends infinitely in both directions. A line segment has two endpoints; a ray has one.', 2),
    mc('Two distinct lines in a plane can:', ['Only be parallel', 'Only intersect at one point', 'Either be parallel or intersect at exactly one point', 'Intersect at two points'], 'Either be parallel or intersect at exactly one point', 'In a plane, two distinct lines are either parallel (never meet) or intersect at exactly one point.', 3),
    mc('What is a plane?', ['A line with infinite points', 'A flat surface extending infinitely in two dimensions', 'A three-dimensional shape', 'A curved surface'], 'A flat surface extending infinitely in two dimensions', 'A plane is a flat, two-dimensional surface with no thickness extending infinitely in all directions.', 4),
    mc('How many points are needed to define a unique line?', ['One', 'Two', 'Three', 'Four'], 'Two', 'Two distinct points determine exactly one line. One point is not enough; three may or may not be collinear.', 5),
  ],
  'angles': [
    mc('Two angles are supplementary if:', ['They sum to 90°', 'They sum to 180°', 'They are equal', 'They sum to 360°'], 'They sum to 180°', 'Supplementary angles add up to 180°. Complementary angles add up to 90°.', 1),
    mc('Vertical angles are:', ['Always supplementary', 'Always equal', 'Adjacent angles', 'Always right angles'], 'Always equal', 'Vertical angles are formed by two intersecting lines and are across from each other — always equal.', 2),
    mc('An angle measuring 135° is classified as:', ['Acute', 'Right', 'Obtuse', 'Straight'], 'Obtuse', 'Obtuse angles are between 90° and 180°. 135° is in that range.', 3),
    mc('If two angles are complementary and one is 34°, what is the other?', ['56°', '46°', '146°', '66°'], '56°', 'Complementary means they sum to 90°. 90° − 34° = 56°.', 4),
    mc('Angles on a straight line (linear pair) sum to:', ['90°', '180°', '270°', '360°'], '180°', 'A linear pair forms a straight angle — the two angles together make a straight line, summing to 180°.', 5),
  ],
  'parallel-lines': [
    mc('When parallel lines are cut by a transversal, alternate interior angles are:', ['Supplementary', 'Complementary', 'Equal', 'Unrelated'], 'Equal', 'Alternate interior angles are on opposite sides of the transversal between the parallel lines — they are always equal.', 1),
    mc('Co-interior angles (same-side interior angles) formed by a transversal cutting parallel lines are:', ['Equal', 'Supplementary (sum to 180°)', 'Complementary (sum to 90°)', 'Always obtuse'], 'Supplementary (sum to 180°)', 'Same-side interior (co-interior) angles are supplementary — they sum to 180°.', 2),
    mc('Corresponding angles formed when parallel lines are cut by a transversal are:', ['Supplementary', 'Complementary', 'Equal', 'Adjacent'], 'Equal', 'Corresponding angles are in the same position at each intersection — they are equal when lines are parallel.', 3),
    mc('If a transversal creates a 65° angle with one parallel line, what is the alternate exterior angle?', ['115°', '25°', '65°', '90°'], '65°', 'Alternate exterior angles are equal when lines are parallel. So the angle is also 65°.', 4),
    mc('Which condition is NOT sufficient to prove two lines are parallel?', ['Corresponding angles are equal', 'Alternate interior angles are equal', 'Co-interior angles sum to 180°', 'The lines are the same length'], 'The lines are the same length', 'Line length has nothing to do with whether lines are parallel. Only angle relationships with a transversal prove it.', 5),
  ],
  'triangle-properties': [
    mc('What is the triangle inequality theorem?', ['The sum of angles in a triangle is 180°', 'The sum of any two sides must be greater than the third side', 'The longest side is opposite the largest angle', 'Congruent sides imply congruent angles'], 'The sum of any two sides must be greater than the third side', 'For a valid triangle, each side must be shorter than the sum of the other two sides.', 1),
    mc('Two triangles are congruent if:', ['All three angles are equal', 'All three sides and all three angles are equal', 'Two sides are equal', 'They have the same area'], 'All three sides and all three angles are equal', 'Congruent triangles are identical in shape AND size — all corresponding sides and angles match.', 2),
    mc('Which congruence shortcut requires three sides to be equal?', ['ASA', 'AAS', 'SAS', 'SSS'], 'SSS', 'SSS (Side-Side-Side) means all three sides of one triangle equal all three sides of the other.', 3),
    mc('In an isosceles triangle, which angles are equal?', ['All three', 'The angles opposite the unequal sides', 'The base angles (angles opposite the equal sides)', 'None are necessarily equal'], 'The base angles (angles opposite the equal sides)', 'An isosceles triangle has two equal sides. The angles opposite those equal sides (the base angles) are equal.', 4),
    mc('The longest side of a triangle is opposite:', ['The smallest angle', 'The largest angle', 'The right angle', 'Any angle — there\'s no relationship'], 'The largest angle', 'In any triangle, the largest side is opposite the largest angle, and the smallest side is opposite the smallest angle.', 5),
  ],
}
