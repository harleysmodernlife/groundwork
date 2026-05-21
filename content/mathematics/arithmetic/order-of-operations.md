## Order of Operations (PEMDAS)

When a mathematical expression contains more than one operation, there must be an agreed-upon sequence for evaluating it — otherwise, two people could calculate the same expression and get different answers. The order of operations is that agreement. It is a convention, not a law of nature, but it is universal in mathematics and every programming language.

The acronym **PEMDAS** gives the sequence:

1. **P** — Parentheses (and all grouping symbols)
2. **E** — Exponents
3. **M/D** — Multiplication and Division (left to right)
4. **A/S** — Addition and Subtraction (left to right)

A common memory device: **Please Excuse My Dear Aunt Sally**.

---

## Why Order Matters

Consider: 2 + 3 × 4

If you go left to right: (2 + 3) × 4 = 5 × 4 = 20.
If you multiply first: 2 + (3 × 4) = 2 + 12 = 14.

The correct answer is **14** — multiplication before addition. Order of operations is what makes the expression unambiguous.

---

## Step 1: Parentheses (Grouping Symbols)

Parentheses tell you: "do this first, regardless of what operation is inside."

Other grouping symbols work the same way: brackets `[ ]`, braces `{ }`, and the fraction bar (everything above the bar is one group, everything below is another).

**Example:** (7 - 3) × 5
- Inside the parentheses first: 7 - 3 = 4
- Then multiply: 4 × 5 = **20**

**Nested parentheses** — work from the innermost outward:
- 2 × (3 + (8 - 5))
- Innermost: 8 - 5 = 3
- Next: 3 + 3 = 6
- Then: 2 × 6 = **12**

---

## Step 2: Exponents

An exponent tells you how many times to multiply a number by itself.
- 3² = 3 × 3 = 9
- 2⁵ = 2 × 2 × 2 × 2 × 2 = 32

Exponents are evaluated after parentheses but before multiplication, division, addition, and subtraction.

**Example:** 5 + 2³
- Exponent first: 2³ = 8
- Then addition: 5 + 8 = **13**

---

## Step 3: Multiplication and Division (Left to Right)

Multiplication and division have equal priority. When both appear in an expression, work left to right — do whichever comes first.

**Example:** 20 ÷ 4 × 3
- Left to right: 20 ÷ 4 = 5, then 5 × 3 = **15**
- Do NOT multiply first: 4 × 3 = 12, then 20 ÷ 12 = 1.67 (wrong)

---

## Step 4: Addition and Subtraction (Left to Right)

Same rule — equal priority, work left to right.

**Example:** 10 - 3 + 2
- Left to right: 10 - 3 = 7, then 7 + 2 = **9**
- Do NOT add first: 3 + 2 = 5, then 10 - 5 = 5 (wrong)

---

## Putting It All Together

**Example:** 3 + 4² ÷ (6 - 2) × 2

Step 1 (Parentheses): 6 - 2 = 4
Expression becomes: 3 + 4² ÷ 4 × 2

Step 2 (Exponents): 4² = 16
Expression becomes: 3 + 16 ÷ 4 × 2

Step 3 (Multiplication/Division, left to right):
- 16 ÷ 4 = 4
- 4 × 2 = 8
Expression becomes: 3 + 8

Step 4 (Addition): 3 + 8 = **11**

---

## The Fraction Bar as a Grouping Symbol

In a fraction, the bar groups the numerator together and the denominator together. Evaluate each side completely before dividing.

```
(8 + 4)
-------  =  12 ÷ 3  =  4
(5 - 2)
```

This is why fractions written in text sometimes need parentheses: (8 + 4) / (5 - 2) = 4, whereas 8 + 4 / 5 - 2 would be evaluated very differently.

---

## Common Mistakes

**Mistake 1:** Ignoring left-to-right rule for same-priority operations.
- 12 ÷ 3 × 2 ≠ 12 ÷ 6 = 2 (wrong)
- 12 ÷ 3 × 2 = 4 × 2 = **8** (correct)

**Mistake 2:** Forgetting to distribute or apply operations inside parentheses fully before moving on.
- 2 × (3 + 4)² ≠ 2 × 3 + 4² (the exponent applies to the entire parenthetical result)
- Correct: (3 + 4) = 7; 7² = 49; 2 × 49 = **98**

**Mistake 3:** Treating the minus sign in subtraction as belonging to the next number rather than the operation.
- 10 - 3 × 2: Multiply first: 3 × 2 = 6. Then 10 - 6 = **4**, not 7 × 2 = 14.

---

## Why This Matters Beyond School

Every calculator, spreadsheet, and programming language uses order of operations. When you write a formula in Excel or a condition in code, the computer evaluates it according to these same rules. Misplacing a multiplication or forgetting parentheses produces wrong answers silently — the formula runs, it just gives you incorrect results.

Learning to write expressions unambiguously — using parentheses generously when in doubt — is a skill used in finance, engineering, data analysis, and software development every single day.

---

## Practice

Evaluate each expression:

1. 6 + 2 × 5
2. (6 + 2) × 5
3. 18 ÷ 3 + 7 × 2
4. 5² - (3 + 4) × 2
5. 100 ÷ (4 + 1) × 2 - 3²

**Answers:**
1. 6 + 10 = **16**
2. 8 × 5 = **40**
3. 6 + 14 = **20**
4. 25 - 14 = **11**
5. 100 ÷ 5 × 2 - 9 = 20 × 2 - 9 = 40 - 9 = **31**
