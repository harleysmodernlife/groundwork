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

export const mathExercises4: Record<string, ExerciseDef[]> = {
  'slope-and-lines': [
    mc('What does slope measure?', ['The x-intercept of a line', 'The steepness and direction of a line', 'The length of a line segment', 'The y-intercept of a line'], 'The steepness and direction of a line', 'Slope = rise/run = (change in y)/(change in x). Positive slope goes up left to right; negative goes down.', 1),
    mc('What is the slope of a line passing through (2, 3) and (6, 11)?', ['1/2', '2', '8', '4'], '2', 'Slope = (11−3)/(6−2) = 8/4 = 2.', 2),
    mc('What is the slope of a horizontal line?', ['1', 'Undefined', '0', '−1'], '0', 'A horizontal line has no rise — slope = 0/run = 0.', 3),
    mc('In y = mx + b, what does b represent?', ['The slope', 'The x-intercept', 'The y-intercept', 'The rate of change'], 'The y-intercept', 'In slope-intercept form y = mx + b, m is the slope and b is the y-intercept (where the line crosses the y-axis).', 4),
    mc('What is the slope of a vertical line?', ['0', '1', '−1', 'Undefined'], 'Undefined', 'A vertical line has no run — slope = rise/0, which is undefined.', 5),
  ],
  'functions': [
    mc('What defines a function?', ['Every output has exactly one input', 'Every input has exactly one output', 'All inputs and outputs are positive', 'A function must be linear'], 'Every input has exactly one output', 'A function maps each input to exactly one output. The vertical line test checks this on a graph.', 1),
    mc('For f(x) = 3x − 2, what is f(4)?', ['10', '14', '6', '12'], '10', 'f(4) = 3(4) − 2 = 12 − 2 = 10.', 2),
    mc('What is the domain of a function?', ['All possible output values', 'All possible input values', 'The slope of the function', 'The set of all solutions'], 'All possible input values', 'The domain is all valid inputs (x-values). The range is all possible outputs (y-values).', 3),
    mc('Which of the following is NOT a function?', ['{(1,2),(3,4),(5,6)}', '{(1,2),(2,3),(3,4)}', '{(1,2),(1,3),(2,4)}', '{(2,5),(3,5),(4,5)}'], '{(1,2),(1,3),(2,4)}', 'The input x=1 maps to both y=2 and y=3 — one input, two outputs. That violates the function rule.', 4),
    mc('What does function notation f(x) mean?', ['f multiplied by x', 'The function f evaluated at input x', 'f divided by x', 'A fraction with numerator f'], 'The function f evaluated at input x', 'f(x) is read "f of x" — the output of function f when the input is x.', 5),
  ],
  'graphing-linear-functions': [
    mc('What two pieces of information do you need to graph a linear function?', ['Two x-intercepts', 'A slope and any point on the line (or two points)', 'The y-intercept only', 'Three points'], 'A slope and any point on the line (or two points)', 'Two points determine a line. Or you can use slope and a starting point (like the y-intercept).', 1),
    mc('The graph of y = 2x + 1 crosses the y-axis at:', ['(0, 2)', '(0, 1)', '(1, 0)', '(2, 0)'], '(0, 1)', 'The y-intercept is b = 1 in y = mx + b. The line crosses y-axis at (0, 1).', 2),
    mc('What is the x-intercept of y = 3x − 6?', ['(0, 6)', '(2, 0)', '(6, 0)', '(0, 2)'], '(2, 0)', 'Set y = 0: 0 = 3x − 6 → 3x = 6 → x = 2. X-intercept is (2, 0).', 3),
    mc('Two lines are parallel if:', ['They have the same y-intercept', 'They have the same slope', 'They intersect at the origin', 'They have slopes that multiply to −1'], 'They have the same slope', 'Parallel lines never intersect — they have identical slopes but different y-intercepts.', 4),
    mc('Two lines are perpendicular if:', ['They have the same slope', 'Their slopes are negative reciprocals (m₁ × m₂ = −1)', 'Their y-intercepts are equal', 'They cross the x-axis at the same point'], 'Their slopes are negative reciprocals (m₁ × m₂ = −1)', 'Perpendicular lines meet at a right angle. If one has slope 2, the other has slope −1/2.', 5),
  ],
  'systems-of-equations': [
    mc('What is a system of equations?', ['One equation with multiple variables', 'Two or more equations with the same variables', 'An equation with no solution', 'A set of equations with different variables'], 'Two or more equations with the same variables', 'A system is a set of equations that share variables — you find the values satisfying all equations simultaneously.', 1),
    mc('What does the solution to a system of two linear equations represent graphically?', ['The slope of both lines', 'The y-intercept of the lines', 'The point where the lines intersect', 'The area between the lines'], 'The point where the lines intersect', 'The solution (x, y) is the point that satisfies both equations — graphically, where the two lines meet.', 2),
    mc('If two lines are parallel, their system has:', ['One solution', 'Two solutions', 'Infinitely many solutions', 'No solution'], 'No solution', 'Parallel lines never intersect — no point satisfies both equations simultaneously.', 3),
    mc('If two equations represent the same line, the system has:', ['No solution', 'Exactly one solution', 'Infinitely many solutions', 'Two solutions'], 'Infinitely many solutions', 'Every point on the line satisfies both equations — infinitely many solutions.', 4),
    mc('Solve by inspection: x + y = 5, x − y = 1', ['x=3, y=2', 'x=2, y=3', 'x=4, y=1', 'x=1, y=4'], 'x=3, y=2', 'Add the equations: 2x = 6 → x = 3. Then 3 + y = 5 → y = 2.', 5),
  ],
  'solving-systems': [
    mc('Which method works by setting one variable in terms of another?', ['Elimination', 'Graphing', 'Substitution', 'Factoring'], 'Substitution', 'Substitution: solve one equation for a variable, then substitute into the other equation.', 1),
    mc('Solve by substitution: y = 2x, x + y = 9', ['x=3, y=6', 'x=4, y=5', 'x=6, y=3', 'x=2, y=7'], 'x=3, y=6', 'Substitute y = 2x into x + y = 9: x + 2x = 9 → 3x = 9 → x = 3, y = 6.', 2),
    mc('In the elimination method, what is the goal?', ['Multiply both equations by the same number', 'Add or subtract equations to eliminate one variable', 'Graph both equations and find the intersection', 'Factor each equation separately'], 'Add or subtract equations to eliminate one variable', 'Elimination adds or subtracts equations so one variable cancels, leaving one equation with one variable.', 3),
    mc('Eliminate y: 2x + y = 7 and x − y = 2', ['x=3', 'x=5', 'x=2', 'x=9'], 'x=3', 'Add the equations: (2x + x) + (y − y) = 7 + 2 → 3x = 9 → x = 3.', 4),
    mc('After finding x = 3 in the system x + y = 7 and 2x − y = 5, what is y?', ['y = 4', 'y = 1', 'y = 3', 'y = 2'], 'y = 4', 'Substitute x = 3 into x + y = 7: 3 + y = 7 → y = 4.', 5),
  ],
  'linear-inequalities': [
    mc('When graphing y > 2x − 1, the boundary line is:', ['Solid, because > includes equality', 'Dashed, because > does not include equality', 'A vertical line', 'Not drawn'], 'Dashed, because > does not include equality', 'Strict inequalities (< or >) use a dashed boundary. ≤ and ≥ use a solid boundary.', 1),
    mc('For y ≤ x + 3, which region do you shade?', ['Above the line', 'Below the line', 'To the right of the line', 'To the left of the line'], 'Below the line', 'y ≤ x + 3 means y is less than or equal to the line value — shade below (or on) the line.', 2),
    mc('How do you test which side of the boundary to shade?', ['Always shade the right side', 'Pick a test point not on the line and check if it satisfies the inequality', 'Shade the side where the slope is positive', 'Shade above the line for > inequalities always'], 'Pick a test point not on the line and check if it satisfies the inequality', 'If the test point satisfies the inequality, shade that side. (0,0) is an easy test point if not on the line.', 3),
    mc('Solve: 2x − 4 < 6', ['x < 5', 'x > 5', 'x < 1', 'x > 1'], 'x < 5', 'Add 4: 2x < 10. Divide by 2: x < 5.', 4),
    mc('Which solution represents a compound inequality 2 ≤ x < 7?', ['All x values less than 2', 'All x values from 2 up to but not including 7', 'All x values from 2 to 7 including 7', 'All x values greater than 7'], 'All x values from 2 up to but not including 7', 'x ≥ 2 (closed, includes 2) AND x < 7 (open, excludes 7). So 2 ≤ x < 7.', 5),
  ],
  'exponents': [
    mc('What does 4³ equal?', ['12', '64', '16', '43'], '64', '4³ = 4 × 4 × 4 = 16 × 4 = 64.', 1),
    mc('What is x⁰ for any nonzero x?', ['0', 'x', 'Undefined', '1'], '1', 'Any nonzero number raised to the power of 0 equals 1. This is a fundamental rule of exponents.', 2),
    mc('Simplify: x³ × x⁴', ['x⁷', 'x¹²', '2x⁷', 'x^(3/4)'], 'x⁷', 'When multiplying same base, add exponents: x³ × x⁴ = x^(3+4) = x⁷.', 3),
    mc('What is 2⁻³?', ['−8', '−6', '1/8', '8'], '1/8', 'A negative exponent means reciprocal: 2⁻³ = 1/2³ = 1/8.', 4),
    mc('Simplify: (x²)³', ['x⁵', 'x⁶', 'x⁸', 'x^(2/3)'], 'x⁶', 'Power of a power: multiply exponents. (x²)³ = x^(2×3) = x⁶.', 5),
  ],
}
