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

export const mathExercises1: Record<string, ExerciseDef[]> = {
  'whole-numbers': [
    mc('What is the place value of the digit 7 in the number 3,742?', ['Ones', 'Tens', 'Hundreds', 'Thousands'], 'Hundreds', 'In 3,742: 3 is thousands, 7 is hundreds, 4 is tens, 2 is ones. The 7 is in the hundreds place.', 1),
    mc('Which number is largest?', ['4,209', '4,290', '4,029', '4,920'], '4,920', 'Compare digit by digit from left. All have 4 thousands. Then 9 > 2, so 4,920 is largest.', 2),
    mc('What is 5,000 + 300 + 40 + 6 in standard form?', ['5,346', '5,436', '5,364', '53,046'], '5,346', 'Expanded form adds each place value: 5,000 + 300 + 40 + 6 = 5,346.', 3),
    mc('How many tens are in 530?', ['5', '53', '530', '50'], '53', '530 ÷ 10 = 53. There are 53 tens in 530.', 4),
    mc('What is one million written in standard form?', ['10,000', '100,000', '1,000,000', '10,000,000'], '1,000,000', 'One million has 6 zeros: 1,000,000.', 5),
  ],
  'addition-and-subtraction': [
    mc('What is 347 + 289?', ['626', '636', '526', '646'], '636', '347 + 289: 7+9=16, write 6 carry 1; 4+8+1=13, write 3 carry 1; 3+2+1=6. Answer: 636.', 1),
    mc('What is 1,000 − 437?', ['573', '563', '663', '463'], '563', '1,000 − 437 = 563. Check: 437 + 563 = 1,000.', 2),
    mc('A store had 2,450 items and sold 867. How many remain?', ['1,583', '1,683', '1,483', '1,593'], '1,583', '2,450 − 867 = 1,583. Check: 1,583 + 867 = 2,450.', 3),
    mc('What property does a + b = b + a demonstrate?', ['Associative property', 'Commutative property', 'Distributive property', 'Identity property'], 'Commutative property', 'The commutative property says the order of addition doesn\'t matter: a + b = b + a.', 4),
    mc('What is the missing number: 58 + ___ = 100?', ['52', '42', '38', '48'], '42', '100 − 58 = 42. Check: 58 + 42 = 100.', 5),
  ],
  'multiplication-and-division': [
    mc('What is 24 × 15?', ['340', '360', '350', '370'], '360', '24 × 15 = 24 × 10 + 24 × 5 = 240 + 120 = 360.', 1),
    mc('What is 756 ÷ 9?', ['84', '94', '74', '86'], '84', '9 × 84 = 756. Check: 9 × 80 = 720, 9 × 4 = 36, 720 + 36 = 756.', 2),
    mc('Which property allows us to write 3 × (4 + 5) = 3×4 + 3×5?', ['Commutative property', 'Associative property', 'Distributive property', 'Identity property'], 'Distributive property', 'The distributive property: a × (b + c) = a×b + a×c.', 3),
    mc('If 6 friends split $84 equally, how much does each get?', ['$14', '$12', '$16', '$18'], '$14', '84 ÷ 6 = 14. Each friend gets $14.', 4),
    mc('What is the product of 125 and 8?', ['900', '1,000', '1,100', '800'], '1,000', '125 × 8 = 1,000. (125 × 4 = 500, × 2 more = 1,000)', 5),
  ],
  'order-of-operations': [
    mc('What is 3 + 4 × 2?', ['14', '11', '10', '8'], '11', 'Multiply first: 4 × 2 = 8, then add: 3 + 8 = 11. Multiplication before addition.', 1),
    mc('What does PEMDAS stand for?', ['Plus, Equals, Minus, Divide, Add, Subtract', 'Parentheses, Exponents, Multiply, Divide, Add, Subtract', 'Product, Exponent, Multiplication, Division, Addition, Subtraction', 'Parentheses, Equations, Multiply, Divide, Add, Sum'], 'Parentheses, Exponents, Multiply, Divide, Add, Subtract', 'PEMDAS is the order of operations: Parentheses → Exponents → Multiply/Divide (left to right) → Add/Subtract (left to right).', 2),
    mc('What is (2 + 3)² − 4?', ['21', '25', '1', '29'], '21', '(2+3)=5, then 5²=25, then 25−4=21. Parentheses first, then exponent, then subtract.', 3),
    mc('What is 20 ÷ 4 + 3 × 2?', ['11', '13', '7', '10'], '11', '20÷4=5 and 3×2=6 (multiply/divide first, left to right), then 5+6=11.', 4),
    mc('What is 15 − 3 × (2 + 1)?', ['36', '6', '30', '12'], '6', 'Parentheses first: 2+1=3. Then multiply: 3×3=9. Then subtract: 15−9=6.', 5),
  ],
  'fractions': [
    mc('What does the denominator of a fraction tell you?', ['How many parts are selected', 'How many equal parts the whole is divided into', 'The size of the fraction', 'How many wholes there are'], 'How many equal parts the whole is divided into', 'In 3/8, the denominator 8 means the whole is cut into 8 equal pieces. The numerator 3 tells how many you have.', 1),
    mc('What is 1/2 + 1/4?', ['2/6', '1/3', '3/4', '2/4'], '3/4', 'Find common denominator: 1/2 = 2/4. Then 2/4 + 1/4 = 3/4.', 2),
    mc('Which fraction is equivalent to 2/3?', ['3/4', '4/6', '4/9', '6/4'], '4/6', 'Multiply numerator and denominator by 2: 2×2=4, 3×2=6. So 4/6 = 2/3.', 3),
    mc('What is 3/4 × 2/5?', ['5/9', '6/20', '6/9', '3/10'], '6/20', 'Multiply numerators: 3×2=6. Multiply denominators: 4×5=20. Answer: 6/20 (simplifies to 3/10).', 4),
    mc('What is 5/6 − 1/3?', ['4/3', '1/2', '4/6', '2/6'], '1/2', '1/3 = 2/6. Then 5/6 − 2/6 = 3/6 = 1/2.', 5),
  ],
  'decimals': [
    mc('What is 3.7 + 2.45?', ['6.12', '5.115', '6.15', '5.52'], '6.15', 'Align decimal points: 3.70 + 2.45 = 6.15.', 1),
    mc('What is the digit in the hundredths place in 4.839?', ['4', '8', '3', '9'], '3', 'In 4.839: 4 is ones, 8 is tenths, 3 is hundredths, 9 is thousandths.', 2),
    mc('What is 2.5 × 0.4?', ['10', '1.0', '0.1', '2.0'], '1.0', '2.5 × 0.4 = 1.0. (Think: 25 × 4 = 100, then adjust 2 decimal places → 1.00)', 3),
    mc('Convert 0.75 to a fraction.', ['75/10', '3/4', '7/5', '1/4'], '3/4', '0.75 = 75/100 = 3/4 (divide both by 25).', 4),
    mc('What is 6.3 ÷ 0.7?', ['0.9', '9', '0.09', '63'], '9', 'Multiply both by 10: 63 ÷ 7 = 9.', 5),
  ],
  'percentages': [
    mc('What is 25% of 200?', ['25', '50', '75', '100'], '50', '25% = 0.25. 0.25 × 200 = 50.', 1),
    mc('A shirt costs $40. It\'s on sale for 30% off. What\'s the sale price?', ['$10', '$28', '$30', '$12'], '$28', '30% of $40 = $12. $40 − $12 = $28.', 2),
    mc('What percentage is 18 out of 72?', ['18%', '25%', '20%', '15%'], '25%', '18/72 = 0.25 = 25%.', 3),
    mc('Which is greater: 15% of 200 or 20% of 150?', ['15% of 200', 'They are equal', '20% of 150', 'Neither — they\'re both zero'], 'They are equal', '15% of 200 = 30. 20% of 150 = 30. They are equal.', 4),
    mc('If a price increases from $50 to $60, what is the percent increase?', ['10%', '20%', '15%', '25%'], '20%', 'Increase = $10. Percent = 10/50 = 0.20 = 20%.', 5),
  ],
}
