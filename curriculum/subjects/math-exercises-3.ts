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

export const mathExercises3: Record<string, ExerciseDef[]> = {
  'solving-one-step-equations': [
    mc('Solve: x + 7 = 15', ['x = 22', 'x = 8', 'x = 7', 'x = 6'], 'x = 8', 'Subtract 7 from both sides: x = 15 − 7 = 8.', 1),
    mc('Solve: n − 4 = 11', ['n = 7', 'n = 15', 'n = 44', 'n = 8'], 'n = 15', 'Add 4 to both sides: n = 11 + 4 = 15.', 2),
    mc('Solve: 3y = 18', ['y = 21', 'y = 15', 'y = 6', 'y = 54'], 'y = 6', 'Divide both sides by 3: y = 18 ÷ 3 = 6.', 3),
    mc('Solve: m/5 = 4', ['m = 9', 'm = 1', 'm = 20', 'm = 0.8'], 'm = 20', 'Multiply both sides by 5: m = 4 × 5 = 20.', 4),
    mc('What operation do you use to undo addition in an equation?', ['Multiplication', 'Addition', 'Division', 'Subtraction'], 'Subtraction', 'To isolate a variable, use inverse operations. The inverse of addition is subtraction.', 5),
  ],
  'solving-two-step-equations': [
    mc('Solve: 2x + 3 = 11', ['x = 7', 'x = 4', 'x = 5', 'x = 8'], 'x = 4', 'Step 1: subtract 3 → 2x = 8. Step 2: divide by 2 → x = 4.', 1),
    mc('Solve: 4n − 5 = 19', ['n = 6', 'n = 3.5', 'n = 14', 'n = 7'], 'n = 6', 'Add 5: 4n = 24. Divide by 4: n = 6.', 2),
    mc('Solve: m/3 + 2 = 7', ['m = 3', 'm = 27', 'm = 15', 'x = 9'], 'm = 15', 'Subtract 2: m/3 = 5. Multiply by 3: m = 15.', 3),
    mc('Solve: 5 − 2y = 1', ['y = 3', 'y = 2', 'y = −2', 'y = −3'], 'y = 2', 'Subtract 5: −2y = −4. Divide by −2: y = 2.', 4),
    mc('Which is the correct first step to solve 3x − 7 = 14?', ['Divide both sides by 3', 'Add 7 to both sides', 'Subtract 14 from both sides', 'Multiply both sides by 3'], 'Add 7 to both sides', 'Work in reverse order of operations. The last thing done was subtracting 7, so undo it first by adding 7.', 5),
  ],
  'inequalities': [
    mc('Which symbol means "less than or equal to"?', ['<', '>', '≤', '≥'], '≤', 'The symbol ≤ means "less than or equal to." The line under < means "or equal."', 1),
    mc('Solve: x + 3 > 7', ['x > 4', 'x > 10', 'x < 4', 'x > 3'], 'x > 4', 'Subtract 3 from both sides: x > 7 − 3, so x > 4.', 2),
    mc('When you multiply or divide an inequality by a negative number, you must:', ['Keep the inequality symbol the same', 'Reverse the inequality symbol', 'Set the expression equal to zero', 'Square both sides'], 'Reverse the inequality symbol', 'Multiplying or dividing by a negative flips the relationship. −2x < 6 becomes x > −3.', 3),
    mc('Solve: 3n ≤ 12', ['n ≤ 9', 'n ≥ 4', 'n ≤ 4', 'n ≤ 36'], 'n ≤ 4', 'Divide both sides by 3: n ≤ 12/3 = 4.', 4),
    mc('On a number line, which represents x > 3?', ['A closed dot at 3, arrow going left', 'An open dot at 3, arrow going right', 'A closed dot at 3, arrow going right', 'An open dot at 3, arrow going left'], 'An open dot at 3, arrow going right', 'An open dot means 3 is NOT included (strict inequality). Arrow right means all values greater than 3.', 5),
  ],
  'perimeter-and-area': [
    mc('What is the perimeter of a rectangle with length 8 and width 5?', ['40', '26', '13', '20'], '26', 'Perimeter = 2(l + w) = 2(8 + 5) = 2 × 13 = 26.', 1),
    mc('What is the area of a triangle with base 10 and height 6?', ['60', '30', '16', '32'], '30', 'Area of triangle = (1/2) × base × height = (1/2) × 10 × 6 = 30.', 2),
    mc('A square has perimeter 36. What is the area?', ['9', '81', '144', '36'], '81', 'Side = 36/4 = 9. Area = 9² = 81.', 3),
    mc('What is the area of a parallelogram with base 7 and height 4?', ['22', '28', '11', '14'], '28', 'Area of parallelogram = base × height = 7 × 4 = 28.', 4),
    mc('Which formula gives the area of a rectangle?', ['2(l + w)', 'l + w', 'l × w', '4s'], 'l × w', 'Area of a rectangle = length × width. (Perimeter = 2(l+w))', 5),
  ],
  'angles-and-triangles': [
    mc('What do the angles of any triangle sum to?', ['90°', '180°', '270°', '360°'], '180°', 'The three interior angles of any triangle always sum to exactly 180°.', 1),
    mc('A triangle has angles of 50° and 70°. What is the third angle?', ['120°', '60°', '80°', '100°'], '60°', '180° − 50° − 70° = 60°.', 2),
    mc('What type of triangle has all three sides equal?', ['Scalene', 'Isosceles', 'Equilateral', 'Right'], 'Equilateral', 'An equilateral triangle has all three sides and all three angles equal (each 60°).', 3),
    mc('An angle measuring exactly 90° is called:', ['Acute', 'Obtuse', 'Right', 'Straight'], 'Right', 'A 90° angle is a right angle. Acute is less than 90°; obtuse is between 90° and 180°.', 4),
    mc('What is the sum of the exterior angles of any triangle?', ['180°', '270°', '360°', '90°'], '360°', 'The exterior angles of any convex polygon (including triangles) always sum to 360°.', 5),
  ],
  'pythagorean-theorem': [
    mc('State the Pythagorean theorem for a right triangle with legs a, b and hypotenuse c.', ['a + b = c', 'a² + b = c²', 'a² + b² = c²', 'a × b = c²'], 'a² + b² = c²', 'In a right triangle, the square of the hypotenuse equals the sum of the squares of the other two sides.', 1),
    mc('A right triangle has legs of 3 and 4. What is the hypotenuse?', ['5', '7', '√7', '25'], '5', '3² + 4² = 9 + 16 = 25. √25 = 5.', 2),
    mc('Is a triangle with sides 5, 12, and 13 a right triangle?', ['Yes', 'No', 'Only if we know which angle is right', 'Cannot determine'], 'Yes', '5² + 12² = 25 + 144 = 169 = 13². Yes, it satisfies a² + b² = c².', 3),
    mc('A right triangle has a hypotenuse of 10 and one leg of 6. What is the other leg?', ['4', '8', '16', '√164'], '8', '6² + b² = 10². 36 + b² = 100. b² = 64. b = 8.', 4),
    mc('The hypotenuse of a right triangle is always:', ['The shortest side', 'The side opposite the right angle', 'Any of the three sides', 'The side adjacent to the right angle'], 'The side opposite the right angle', 'The hypotenuse is always the longest side, directly across from the 90° angle.', 5),
  ],
  'linear-equations': [
    mc('What is the solution to 4x − 3 = 2x + 7?', ['x = 2', 'x = 5', 'x = 4', 'x = 1'], 'x = 5', 'Subtract 2x: 2x − 3 = 7. Add 3: 2x = 10. Divide: x = 5.', 1),
    mc('What does it mean to "solve a linear equation"?', ['Simplify the equation', 'Find all values of x that make the equation true', 'Rearrange terms alphabetically', 'Factor the equation'], 'Find all values of x that make the equation true', 'Solving means finding the value(s) of the variable that satisfy the equation.', 2),
    mc('Solve: 5(x − 2) = 15', ['x = 5', 'x = 7', 'x = 1', 'x = 3'], 'x = 5', 'Distribute: 5x − 10 = 15. Add 10: 5x = 25. Divide: x = 5.', 3),
    mc('How many solutions does a linear equation in one variable have?', ['None', 'Always exactly one', 'Exactly one (usually), but possibly zero or infinitely many', 'Always infinitely many'], 'Exactly one (usually), but possibly zero or infinitely many', 'Most linear equations have one solution, but contradictions (no solution) and identities (infinite solutions) are also possible.', 4),
    mc('Solve: 3x + 5 = 3x − 2', ['x = 0', 'x = 1', 'x = 7/6', 'No solution'], 'No solution', '3x on both sides cancels: 5 = −2, which is never true. No value of x works.', 5),
  ],
}
