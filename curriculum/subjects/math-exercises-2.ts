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

export const mathExercises2: Record<string, ExerciseDef[]> = {
  'ratios-and-proportions': [
    mc('What does a ratio compare?', ['Two sums', 'Two quantities relative to each other', 'A part to 100', 'A number to its square'], 'Two quantities relative to each other', 'A ratio expresses how two quantities relate — e.g., 3:5 means 3 of one thing for every 5 of another.', 1),
    mc('If the ratio of cats to dogs is 2:5 and there are 10 cats, how many dogs are there?', ['4', '20', '25', '15'], '25', '2:5 = 10:x. Cross-multiply: 2x = 50, x = 25.', 2),
    mc('What is a proportion?', ['A fraction simplified to lowest terms', 'A statement that two ratios are equal', 'The percentage of one value compared to another', 'A multiplication of two fractions'], 'A statement that two ratios are equal', 'A proportion says two ratios are equal: a/b = c/d.', 3),
    mc('A car travels 180 miles in 3 hours. At the same rate, how far in 5 hours?', ['250 miles', '270 miles', '300 miles', '360 miles'], '300 miles', '180/3 = 60 mph. 60 × 5 = 300 miles.', 4),
    mc('In a class of 30 students, the ratio of girls to boys is 2:3. How many girls?', ['10', '15', '12', '18'], '12', 'Total parts = 2+3 = 5. Girls = 2/5 × 30 = 12.', 5),
  ],
  'factors-and-multiples': [
    mc('What is a factor of a number?', ['A number that the given number is a multiple of', 'A number that divides evenly into the given number', 'A number larger than the given number', 'The square root of a number'], 'A number that divides evenly into the given number', 'Factors of 12 are 1, 2, 3, 4, 6, 12 — each divides 12 with no remainder.', 1),
    mc('What is the greatest common factor (GCF) of 24 and 36?', ['4', '6', '12', '8'], '12', 'Factors of 24: 1,2,3,4,6,8,12,24. Factors of 36: 1,2,3,4,6,9,12,18,36. Greatest common: 12.', 2),
    mc('What is the least common multiple (LCM) of 4 and 6?', ['2', '8', '12', '24'], '12', 'Multiples of 4: 4,8,12... Multiples of 6: 6,12... Least common: 12.', 3),
    mc('Which of the following is a prime number?', ['9', '15', '21', '17'], '17', 'A prime number has exactly two factors: 1 and itself. 17 is only divisible by 1 and 17.', 4),
    mc('What is the prime factorization of 36?', ['2² × 9', '2 × 18', '2² × 3²', '4 × 9'], '2² × 3²', '36 = 4 × 9 = 2² × 3². This is the prime factorization.', 5),
  ],
  'estimation': [
    mc('Why is estimation a useful skill?', ['It gives exact answers faster', 'It lets you quickly check whether an answer is reasonable', 'It is more accurate than calculation', 'It replaces the need for math'], 'It lets you quickly check whether an answer is reasonable', 'Estimation catches errors — if your calculated answer is wildly different from your estimate, something went wrong.', 1),
    mc('What is 492 rounded to the nearest hundred?', ['400', '490', '500', '450'], '500', '492 is closer to 500 than 400. When the tens digit is 5 or more, round up.', 2),
    mc('Estimate 38 × 21 by rounding to the nearest ten.', ['700', '800', '900', '750'], '800', 'Round 38 → 40 and 21 → 20. 40 × 20 = 800.', 3),
    mc('A store bill is $43.89. You have $50. Roughly how much change will you get?', ['About $5', 'About $6', 'About $7', 'About $4'], 'About $6', '$43.89 ≈ $44. $50 − $44 = $6.', 4),
    mc('What is 1,987 rounded to the nearest thousand?', ['1,000', '2,000', '1,900', '2,100'], '2,000', '1,987 — the hundreds digit is 9, which is ≥ 5, so round up to 2,000.', 5),
  ],
  'negative-numbers': [
    mc('What is −5 + 3?', ['−8', '8', '−2', '2'], '−2', 'Starting at −5 and moving 3 in the positive direction: −5 + 3 = −2.', 1),
    mc('What is the absolute value of −7?', ['−7', '7', '0', '1/7'], '7', 'Absolute value is the distance from zero — always non-negative. |−7| = 7.', 2),
    mc('What is −3 × −4?', ['−12', '12', '−7', '7'], '12', 'Negative × negative = positive. −3 × −4 = 12.', 3),
    mc('Which is greater: −2 or −8?', ['−8', 'They are equal', '−2', 'Neither — negatives can\'t be compared'], '−2', 'On a number line, −2 is to the right of −8. −2 > −8.', 4),
    mc('What is 4 − 9?', ['5', '−5', '13', '−13'], '−5', '4 − 9 = −5. You owe more than you have.', 5),
  ],
  'what-is-a-variable': [
    mc('In math, what is a variable?', ['A number that never changes', 'A symbol (like x) representing an unknown or changing quantity', 'An operation like addition or subtraction', 'A type of equation'], 'A symbol (like x) representing an unknown or changing quantity', 'Variables are letters (x, y, n) that stand in for values we don\'t know yet or that can change.', 1),
    mc('If x = 5, what is 3x + 2?', ['10', '17', '15', '7'], '17', '3x + 2 = 3(5) + 2 = 15 + 2 = 17.', 2),
    mc('Which expression means "four more than a number n"?', ['4n', 'n − 4', 'n + 4', '4 ÷ n'], 'n + 4', '"Four more than n" means we add 4 to n: n + 4.', 3),
    mc('What is the value of y in y ÷ 3 = 7?', ['4', '10', '21', '3'], '21', 'y ÷ 3 = 7. Multiply both sides by 3: y = 21.', 4),
    mc('Which is a variable expression?', ['5 + 3', '4 × 2', '2n − 1', '7'], '2n − 1', 'A variable expression contains at least one variable. 2n − 1 contains the variable n.', 5),
  ],
  'writing-expressions': [
    mc('How would you write "7 less than twice a number x" as an expression?', ['7 − 2x', '2x + 7', '2x − 7', '7 + 2x'], '2x − 7', '"Twice x" is 2x. "7 less than" means subtract 7: 2x − 7.', 1),
    mc('Evaluate 4a − 3b when a = 2 and b = 1.', ['5', '11', '2', '8'], '5', '4(2) − 3(1) = 8 − 3 = 5.', 2),
    mc('Which expression represents "the product of 5 and the sum of x and 3"?', ['5x + 3', '5 + x + 3', '5(x + 3)', '5x − 3'], '5(x + 3)', '"Sum of x and 3" = (x+3). "Product of 5 and that sum" = 5(x+3).', 3),
    mc('What is the value of 6 + m² when m = 4?', ['100', '22', '28', '16'], '22', 'm² = 4² = 16. Then 6 + 16 = 22.', 4),
    mc('Simplify: 3x + 5x', ['8x²', '8x', '15x', '8'], '8x', 'Like terms: 3x + 5x = (3+5)x = 8x.', 5),
  ],
  'the-coordinate-plane': [
    mc('What are the coordinates of the origin on a coordinate plane?', ['(1, 1)', '(0, 1)', '(0, 0)', '(1, 0)'], '(0, 0)', 'The origin is where the x-axis and y-axis intersect — at the point (0, 0).', 1),
    mc('Which axis runs horizontally?', ['y-axis', 'z-axis', 'x-axis', 'Both axes are horizontal'], 'x-axis', 'The x-axis is horizontal (left-right). The y-axis is vertical (up-down).', 2),
    mc('A point is at (3, −2). What quadrant is it in?', ['Quadrant I', 'Quadrant II', 'Quadrant III', 'Quadrant IV'], 'Quadrant IV', 'Quadrant IV has positive x and negative y. (3, −2) has x=3 (positive) and y=−2 (negative).', 3),
    mc('To plot (−4, 5), you move:', ['Left 4, down 5', 'Right 4, up 5', 'Left 4, up 5', 'Right 4, down 5'], 'Left 4, up 5', 'Start at origin. x = −4 means left 4. y = 5 means up 5.', 4),
    mc('What is the distance from (0, 0) to (3, 4)?', ['7', '5', '1', '12'], '5', 'Distance = √(3² + 4²) = √(9+16) = √25 = 5. This is a classic 3-4-5 right triangle.', 5),
  ],
}
