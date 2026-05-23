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

export const mathExercises8: Record<string, ExerciseDef[]> = {
  'series-and-summation': [
    mc('What is the sum of the first 5 terms of 1 + 3 + 5 + 7 + 9?', ['20', '25', '15', '30'], '25', 'Sum = 1+3+5+7+9 = 25. Or use: Sₙ = n/2(a₁+aₙ) = 5/2(1+9) = 5/2 × 10 = 25.', 1),
    mc('What is the formula for the sum of the first n terms of an arithmetic series?', ['Sₙ = a₁rⁿ/(r−1)', 'Sₙ = n(a₁ + aₙ)/2', 'Sₙ = a₁(1 − rⁿ)/(1−r)', 'Sₙ = n × a₁'], 'Sₙ = n(a₁ + aₙ)/2', 'The arithmetic series sum formula: Sₙ = n(a₁ + aₙ)/2 (n terms, first and last term).', 2),
    mc('What is the sum of 2 + 6 + 18 + 54 (geometric, r=3, n=4)?', ['80', '160', '78', '240'], '80', 'Sₙ = a₁(rⁿ − 1)/(r−1) = 2(3⁴−1)/(3−1) = 2(81−1)/2 = 80.', 3),
    mc('What is sigma notation Σ?', ['Multiply all terms', 'A symbol meaning "sum of" a series of terms', 'The slope of a sequence', 'The average of a series'], 'A symbol meaning "sum of" a series of terms', 'Σ (sigma) means summation. Σᵢ₌₁ⁿ aᵢ means "add all terms from i=1 to n."', 4),
    mc('An infinite geometric series converges when:', ['The common ratio r > 1', 'The first term is negative', 'The common ratio |r| < 1', 'The series has more than 10 terms'], 'The common ratio |r| < 1', 'When |r| < 1, terms shrink toward zero and the infinite sum = a₁/(1−r). If |r| ≥ 1, the series diverges.', 5),
  ],
  'combinatorics': [
    mc('What does n! (n factorial) mean?', ['n times itself', 'n multiplied by all positive integers less than n', '1/n', 'n to the nth power'], 'n multiplied by all positive integers less than n', 'n! = n × (n−1) × (n−2) × ... × 2 × 1. For example, 4! = 4×3×2×1 = 24.', 1),
    mc('How many ways can 3 books be arranged on a shelf from a set of 5?', ['10', '15', '60', '120'], '60', 'This is a permutation: P(5,3) = 5!/(5−3)! = 5×4×3 = 60.', 2),
    mc('What is the key difference between a permutation and a combination?', ['Permutations use larger numbers', 'Permutations care about order; combinations do not', 'Combinations are always larger than permutations', 'Combinations require all items to be used'], 'Permutations care about order; combinations do not', 'Order matters in permutations (AB ≠ BA). In combinations, order doesn\'t matter (AB = BA).', 3),
    mc('How many ways can you choose 2 items from 5 (order doesn\'t matter)?', ['20', '10', '15', '5'], '10', 'C(5,2) = 5!/(2! × 3!) = 120/(2×6) = 10.', 4),
    mc('What is 0!?', ['0', '1', 'Undefined', '∞'], '1', 'By definition, 0! = 1. This makes combinatorics formulas work correctly.', 5),
  ],
  'what-is-a-limit': [
    mc('What does lim(x→2) f(x) = 5 mean?', ['f(2) = 5', 'As x gets close to 2, f(x) gets close to 5', 'f(x) = 5 everywhere', 'The function stops at x = 2'], 'As x gets close to 2, f(x) gets close to 5', 'A limit describes what value f(x) approaches as x approaches a given value — it doesn\'t require f(a) to be defined.', 1),
    mc('The limit exists at x = a if:', ['f(a) is defined', 'The left-hand and right-hand limits exist and are equal', 'The function is continuous at a', 'The function equals 0 at a'], 'The left-hand and right-hand limits exist and are equal', 'For a limit to exist, the function must approach the same value from both sides (left limit = right limit).', 2),
    mc('What is lim(x→3) (x² − 9)/(x − 3)?', ['0', 'Undefined', '6', '3'], '6', 'Factor: (x−3)(x+3)/(x−3) = x+3. As x→3, this → 6. The cancellation is valid when x ≠ 3.', 3),
    mc('What does a limit "at infinity" describe?', ['The function goes on forever', 'The value f(x) approaches as x grows without bound', 'The function reaches infinity', 'A vertical asymptote'], 'The value f(x) approaches as x grows without bound', 'lim(x→∞) f(x) = L means f(x) gets closer to L as x gets very large.', 4),
    mc('lim(x→0) sin(x)/x = ?', ['0', '∞', '1', 'Undefined'], '1', 'This is a fundamental limit in calculus. As x→0, sin(x)/x → 1. (Proof uses squeeze theorem.)', 5),
  ],
  'evaluating-limits': [
    mc('What is the easiest way to evaluate lim(x→4) (x² + 3)?', ['Factor the expression', 'Direct substitution: plug in x = 4', 'Use L\'Hôpital\'s rule', 'Rationalize the expression'], 'Direct substitution: plug in x = 4', 'If the function is continuous at the point, just substitute the value: 4² + 3 = 19.', 1),
    mc('When does direct substitution fail?', ['When x is negative', 'When substitution gives 0/0 (indeterminate form)', 'When the function is quadratic', 'When x is very large'], 'When substitution gives 0/0 (indeterminate form)', '0/0 is indeterminate — it requires algebraic manipulation (factoring, rationalizing) or L\'Hôpital\'s rule.', 2),
    mc('How do you evaluate lim(x→2) (x² − 4)/(x − 2)?', ['The limit doesn\'t exist', 'Substitute x=2 directly to get 0/0', 'Factor to (x+2)(x−2)/(x−2), cancel, get x+2 → 4', 'Use a calculator'], 'Factor to (x+2)(x−2)/(x−2), cancel, get x+2 → 4', 'Cancel the common factor: (x+2)(x−2)/(x−2) = x+2. As x→2, x+2 → 4.', 3),
    mc('What is lim(x→∞) 1/x?', ['1', '∞', '0', 'Undefined'], '0', 'As x grows infinitely large, 1/x shrinks toward 0. This is a fundamental limit.', 4),
    mc('What is lim(x→0⁺) ln(x)?', ['0', '1', '−∞', '∞'], '−∞', 'As x approaches 0 from the right, ln(x) → −∞. (ln(1) = 0, and it decreases steeply as x → 0⁺)', 5),
  ],
  'continuity': [
    mc('A function is continuous at x = a if:', ['It has a value at a', 'f(a) exists, lim exists, and they equal each other', 'The limit from the left exists', 'The function is differentiable at a'], 'f(a) exists, lim exists, and they equal each other', 'Three conditions: f(a) is defined, lim(x→a) f(x) exists, and lim(x→a) f(x) = f(a).', 1),
    mc('A removable discontinuity looks like:', ['A vertical asymptote', 'A jump in the function', 'A single missing point (hole) in an otherwise continuous graph', 'An oscillating function'], 'A single missing point (hole) in an otherwise continuous graph', 'Removable discontinuities are "holes" — fill them in and the function becomes continuous.', 2),
    mc('What type of discontinuity is a vertical asymptote?', ['Removable', 'Jump', 'Infinite', 'Oscillating'], 'Infinite', 'A vertical asymptote (where the function goes to ±∞) is an infinite discontinuity.', 3),
    mc('The Intermediate Value Theorem says that if f is continuous on [a,b], then:', ['f is differentiable on (a,b)', 'f takes every value between f(a) and f(b)', 'f has a maximum at some point in [a,b]', 'f is zero at some point in [a,b]'], 'f takes every value between f(a) and f(b)', 'IVT: a continuous function must hit every y-value between f(a) and f(b) — it can\'t skip.', 4),
    mc('At a jump discontinuity, the left and right limits:', ['Are both undefined', 'Exist but are not equal', 'Are equal but f is not defined', 'Both equal zero'], 'Exist but are not equal', 'A jump discontinuity is where the function jumps abruptly — both one-sided limits exist but differ.', 5),
  ],
  'the-derivative': [
    mc('What does the derivative of a function measure?', ['The area under the function', 'The average value of the function', 'The instantaneous rate of change at a point', 'The maximum value of the function'], 'The instantaneous rate of change at a point', 'The derivative f\'(x) gives the rate of change of f at each point — the slope of the tangent line.', 1),
    mc('The derivative is formally defined as:', ['f\'(x) = f(x+h) × h', 'f\'(x) = lim(h→0) [f(x+h) − f(x)] / h', 'f\'(x) = [f(b) − f(a)] / (b−a)', 'f\'(x) = ∫f(x)dx'], 'f\'(x) = lim(h→0) [f(x+h) − f(x)] / h', 'The limit definition of the derivative: the limit of the difference quotient as h approaches 0.', 2),
    mc('Geometrically, the derivative at x = a is:', ['The area of the region under the curve', 'The slope of the tangent line to the curve at x = a', 'The length of the curve at x = a', 'The y-intercept of the function'], 'The slope of the tangent line to the curve at x = a', 'f\'(a) is the slope of the line tangent to the graph of f at the point (a, f(a)).', 3),
    mc('If f(x) = x², what is f\'(x)?', ['x', '2x²', '2x', 'x²/2'], '2x', 'Power rule: f(x) = xⁿ → f\'(x) = nxⁿ⁻¹. So f(x) = x² → f\'(x) = 2x.', 4),
    mc('If the derivative at a point is zero, the tangent line at that point is:', ['Vertical', 'Undefined', 'Horizontal', 'Parallel to y-axis'], 'Horizontal', 'Zero slope means a horizontal tangent — this often indicates a local maximum or minimum.', 5),
  ],
  'differentiation-rules': [
    mc('What is the derivative of f(x) = 5x³?', ['15x²', '5x²', '15x', '5x⁴/4'], '15x²', 'Power rule: d/dx[xⁿ] = nxⁿ⁻¹. d/dx[5x³] = 5·3x² = 15x².', 1),
    mc('What is the derivative of a constant, like f(x) = 7?', ['7', '1', '0', '7x'], '0', 'Constants don\'t change — their derivative is 0. d/dx[c] = 0.', 2),
    mc('What is d/dx[sin(x)]?', ['−cos(x)', 'cos(x)', 'sin(x)', '−sin(x)'], 'cos(x)', 'The derivative of sin(x) is cos(x). The derivative of cos(x) is −sin(x).', 3),
    mc('What is d/dx[eˣ]?', ['xeˣ⁻¹', 'eˣ', 'eˣ/x', 'e'], 'eˣ', 'The exponential function eˣ is its own derivative — one of the most remarkable facts in math.', 4),
    mc('The sum rule states: d/dx[f(x) + g(x)] = ?', ['f\'(x) × g\'(x)', 'f\'(x) + g\'(x)', 'f(x)g\'(x) + g(x)f\'(x)', 'd/dx[f(x)] × g(x)'], 'f\'(x) + g\'(x)', 'You can differentiate term by term: derivative of sum = sum of derivatives.', 5),
  ],
}
