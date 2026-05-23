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

export const mathExercises7: Record<string, ExerciseDef[]> = {
  'exponential-and-log': [
    mc('What does the function f(x) = 2ˣ represent?', ['A linear function doubling each step', 'An exponential function that doubles for each unit increase in x', 'A polynomial of degree 2', 'A logarithmic decay'], 'An exponential function that doubles for each unit increase in x', 'f(x) = 2ˣ is exponential growth — each step right multiplies the output by 2.', 1),
    mc('What is log₂(8)?', ['4', '3', '2', '6'], '3', 'log₂(8) asks: 2 to what power equals 8? 2³ = 8, so log₂(8) = 3.', 2),
    mc('What is the inverse function of f(x) = eˣ?', ['f⁻¹(x) = xᵉ', 'f⁻¹(x) = ln(x)', 'f⁻¹(x) = log₁₀(x)', 'f⁻¹(x) = 1/eˣ'], 'f⁻¹(x) = ln(x)', 'The natural logarithm ln(x) is the inverse of eˣ. They undo each other: ln(eˣ) = x.', 3),
    mc('Which property says log(AB) = log A + log B?', ['Power rule', 'Quotient rule', 'Product rule', 'Change of base'], 'Product rule', 'The product rule for logarithms: log(AB) = log A + log B.', 4),
    mc('A population doubles every 5 years. This models:', ['Linear growth', 'Quadratic growth', 'Exponential growth', 'Logarithmic growth'], 'Exponential growth', 'Repeated multiplication (doubling) defines exponential growth. The growth accelerates over time.', 5),
  ],
  'radical-functions': [
    mc('What is √49?', ['6', '7', '8', '24.5'], '7', '√49 = 7 because 7² = 49.', 1),
    mc('Simplify: √72', ['6√2', '8√2', '6√3', '36√2'], '6√2', '72 = 36 × 2. √72 = √36 × √2 = 6√2.', 2),
    mc('What is the domain of f(x) = √(x − 3)?', ['x > 3', 'x ≥ 3', 'All real numbers', 'x ≤ 3'], 'x ≥ 3', 'The expression under the square root must be ≥ 0. x − 3 ≥ 0 → x ≥ 3.', 3),
    mc('Simplify: ∛(8x³)', ['2x', '4x', '2x²', '8x'], '2x', '∛8 = 2 and ∛(x³) = x. So ∛(8x³) = 2x.', 4),
    mc('A complex number arises when you take the square root of:', ['A positive number', 'Zero', 'A negative number', 'A fraction'], 'A negative number', '√(−1) = i, the imaginary unit. Square roots of negative numbers produce complex numbers.', 5),
  ],
  'right-triangle-trig': [
    mc('In SOH-CAH-TOA, what does SOH represent?', ['Side Over Hypotenuse', 'Sine = Opposite / Hypotenuse', 'Sum of Hypotenuse', 'Sine times Opposite equals Hypotenuse'], 'Sine = Opposite / Hypotenuse', 'SOH: Sine = Opposite/Hypotenuse. CAH: Cosine = Adjacent/Hypotenuse. TOA: Tangent = Opposite/Adjacent.', 1),
    mc('In a right triangle with hypotenuse 10 and opposite side 6, what is sin(θ)?', ['0.8', '0.6', '0.75', '6/10 = 3/5'], '6/10 = 3/5', 'sin(θ) = opposite/hypotenuse = 6/10 = 3/5 = 0.6.', 2),
    mc('What is cos(60°)?', ['√3/2', '1/2', '√2/2', '1'], '1/2', 'cos(60°) = 1/2. Key values: cos(30°)=√3/2, cos(45°)=√2/2, cos(60°)=1/2.', 3),
    mc('Using trigonometry, if an angle is 30° and the adjacent side is 8, what is the hypotenuse?', ['4', '16/√3', '8/cos(30°)', 'Both 8/cos(30°) and 16/√3'], 'Both 8/cos(30°) and 16/√3', 'cos(30°) = adjacent/hypotenuse = 8/h. h = 8/cos(30°) = 8/(√3/2) = 16/√3.', 4),
    mc('What is tan(45°)?', ['0', '√2', '1/2', '1'], '1', 'tan(45°) = sin(45°)/cos(45°) = (√2/2)/(√2/2) = 1.', 5),
  ],
  'unit-circle': [
    mc('On the unit circle, what is the radius?', ['π', '2π', '2', '1'], '1', 'The unit circle is defined as a circle with radius 1 centered at the origin.', 1),
    mc('What are the coordinates at 90° (π/2) on the unit circle?', ['(0, 1)', '(1, 0)', '(0, −1)', '(−1, 0)'], '(0, 1)', 'At 90°, x = cos(90°) = 0, y = sin(90°) = 1. Coordinates: (0, 1).', 2),
    mc('On the unit circle, the x-coordinate of a point at angle θ equals:', ['sin(θ)', 'tan(θ)', 'cos(θ)', '1/cos(θ)'], 'cos(θ)', 'For any angle θ on the unit circle, coordinates are (cos θ, sin θ). X-coordinate = cos θ.', 3),
    mc('What is sin(180°)?', ['1', '−1', '0', '√2/2'], '0', 'At 180°, the point on the unit circle is (−1, 0). Y-coordinate = sin(180°) = 0.', 4),
    mc('Converting 270° to radians gives:', ['2π', '3π/2', 'π/2', '3π'], '3π/2', '270° × (π/180°) = 270π/180 = 3π/2.', 5),
  ],
  'trig-functions-and-graphs': [
    mc('What is the period of y = sin(x)?', ['π', '2π', 'π/2', '4π'], '2π', 'The sine function completes one full cycle every 2π radians (360°).', 1),
    mc('What is the amplitude of y = 3sin(x)?', ['1', '3π', '3', '6'], '3', 'Amplitude is the height from center to peak — for y = A sin(x), amplitude = |A| = 3.', 2),
    mc('Which transformation shifts y = sin(x) upward by 2?', ['y = sin(x + 2)', 'y = sin(x) − 2', 'y = 2sin(x)', 'y = sin(x) + 2'], 'y = sin(x) + 2', 'Adding a constant outside shifts the graph vertically. +2 moves it up 2 units.', 3),
    mc('What is the range of y = cos(x)?', ['[0, 1]', '[−1, 1]', '[−π, π]', 'All real numbers'], '[−1, 1]', 'Cosine oscillates between −1 and 1. Range = [−1, 1].', 4),
    mc('The function y = tan(x) has vertical asymptotes at:', ['x = 0, π, 2π...', 'x = π/4, 3π/4...', 'x = π/2, 3π/2...', 'x = π, 2π...'], 'x = π/2, 3π/2...', 'tan(x) = sin(x)/cos(x) is undefined where cos(x) = 0, which is at π/2, 3π/2, and so on.', 5),
  ],
  'trig-identities': [
    mc('What is the Pythagorean identity?', ['sin(x) + cos(x) = 1', 'sin²(x) + cos²(x) = 1', 'sin(x) × cos(x) = 1', 'sin²(x) − cos²(x) = 1'], 'sin²(x) + cos²(x) = 1', 'The fundamental Pythagorean identity follows from the unit circle: sin²θ + cos²θ = 1 for all θ.', 1),
    mc('Which is equivalent to tan(x)?', ['cos(x)/sin(x)', 'sin(x)/cos(x)', '1/sin(x)', '1/cos(x)'], 'sin(x)/cos(x)', 'tan(x) = sin(x)/cos(x). Cotangent is the reciprocal: cot(x) = cos(x)/sin(x).', 2),
    mc('What is the double-angle formula for sin(2x)?', ['2sin(x)', '2sin(x)cos(x)', 'sin²(x) + cos²(x)', 'cos²(x) − sin²(x)'], '2sin(x)cos(x)', 'sin(2x) = 2sin(x)cos(x). This is the double-angle identity for sine.', 3),
    mc('What does the identity cos(2x) = cos²(x) − sin²(x) equal when rewritten using sin²+cos²=1?', ['cos(2x) = 1 − 2sin²(x) or 2cos²(x) − 1', 'cos(2x) = 2sin(x)cos(x)', 'cos(2x) = 1 + sin²(x)', 'cos(2x) = cos²(x) only'], 'cos(2x) = 1 − 2sin²(x) or 2cos²(x) − 1', 'Substitute cos²x = 1−sin²x to get cos(2x) = 1−2sin²x, or sin²x = 1−cos²x to get 2cos²x−1.', 4),
    mc('What is the reciprocal of sin(x)?', ['cos(x)', 'tan(x)', 'csc(x)', 'sec(x)'], 'csc(x)', 'csc(x) = 1/sin(x) (cosecant). sec(x) = 1/cos(x). cot(x) = 1/tan(x).', 5),
  ],
  'sequences': [
    mc('What is the 5th term of the arithmetic sequence 3, 7, 11, 15, ...?', ['17', '19', '21', '23'], '19', 'Common difference = 4. 5th term = 3 + 4(5−1) = 3 + 16 = 19.', 1),
    mc('In an arithmetic sequence, what is the common difference?', ['The first term', 'The constant amount added between consecutive terms', 'The ratio between consecutive terms', 'The sum of all terms'], 'The constant amount added between consecutive terms', 'Arithmetic sequences grow by adding a fixed amount (the common difference) each time.', 2),
    mc('What is the 4th term of the geometric sequence 2, 6, 18, ...?', ['24', '36', '54', '48'], '54', 'Common ratio = 3. 4th term = 2 × 3^(4−1) = 2 × 27 = 54.', 3),
    mc('What makes a sequence geometric?', ['Each term increases by a fixed amount', 'Each term is multiplied by a fixed ratio', 'The terms alternate in sign', 'Each term is the sum of the two before it'], 'Each term is multiplied by a fixed ratio', 'Geometric sequences have a constant ratio r between consecutive terms: each term = previous × r.', 4),
    mc('What is the general formula for the nth term of arithmetic sequence with first term a₁ and common difference d?', ['aₙ = a₁ × dⁿ', 'aₙ = a₁ + (n+1)d', 'aₙ = a₁ + (n−1)d', 'aₙ = a₁ × rⁿ⁻¹'], 'aₙ = a₁ + (n−1)d', 'The nth term of an arithmetic sequence: aₙ = a₁ + (n−1)d.', 5),
  ],
}
