## Functions: Input, Output, and Notation

A function is a rule that assigns exactly one output to each input. This is one of the most fundamental concepts in all of mathematics and the sciences. Every formula you use — distance = rate × time, area = length × width, tax = rate × income — is a function. Understanding what functions are, how they behave, and how to use function notation is essential for all mathematics beyond algebra.

---

## What Makes Something a Function?

A function takes an input, applies a rule, and produces exactly one output. The key constraint: each input must correspond to **exactly one** output.

**Function:** Every student ID maps to exactly one student name.
**Not a function:** One student ID maps to two different people (impossible in a well-run system).

**Mathematical example:**
- y = x²: For any input x, there's exactly one output y. x = 3 → y = 9. ✓ Function.
- x = y²: The input x = 9 could give y = 3 or y = -3. Two outputs for one input. ✗ Not a function.

---

## Domain and Range

The **domain** is the set of all valid inputs — all x-values the function accepts.
The **range** is the set of all possible outputs — all y-values the function can produce.

**Example:** f(x) = √x
- Domain: x ≥ 0. You can't take the square root of a negative number (in real numbers). All non-negative numbers.
- Range: f(x) ≥ 0. Square roots are always non-negative.

**Example:** f(x) = 1/x
- Domain: x ≠ 0. Division by zero is undefined.
- Range: all real numbers except 0.

**Example:** f(x) = 2x + 5 (a linear function)
- Domain: all real numbers (any x works)
- Range: all real numbers (the output can be anything)

---

## Function Notation

Instead of writing y = 2x + 3, we often write **f(x) = 2x + 3**.

Read as: "f of x equals 2x plus 3."

The f is the **name** of the function. The (x) indicates what the input is. Other letters are also used: g(x), h(x), P(t), C(n), etc.

**Evaluating function notation:** f(x) is a machine. Put a number in, get a number out.

- f(x) = 2x + 3
- f(4) = 2(4) + 3 = 8 + 3 = **11**
- f(-1) = 2(-1) + 3 = -2 + 3 = **1**
- f(0) = 2(0) + 3 = **3**

**The notation f(4) does NOT mean f times 4.** It means "evaluate function f at input 4."

**Evaluating with expressions:**
- f(x + 1) = 2(x + 1) + 3 = 2x + 2 + 3 = 2x + 5
- f(a) = 2a + 3

---

## The Vertical Line Test

On a graph, you can determine if a curve represents a function using the **Vertical Line Test**: if any vertical line intersects the graph at more than one point, it's NOT a function.

- A line (not vertical): passes the test → function ✓
- A circle: a vertical line through the middle hits two points → not a function ✗
- A parabola opening up or down: each vertical line hits exactly once → function ✓
- A sideways parabola (opening left or right): fails the test → not a function ✗

---

## Linear Functions

A **linear function** has the form f(x) = mx + b. Its graph is a straight line.
- m is the slope (rate of change)
- b is the y-intercept (value when x = 0)

Every unit increase in x produces an increase of m in the output. This constant rate of change is what makes it "linear."

**Real-world example:** A taxi charges a $3.00 base fare plus $2.50 per mile.
- C(m) = 2.50m + 3
- C(0) = $3 (the base fare before any miles)
- C(10) = 2.50(10) + 3 = **$28**

---

## Piecewise Functions

A piecewise function uses different rules for different parts of the domain.

**Example:** A parking garage charges $2 per hour for the first 3 hours, then $1 per hour after that.
```
C(h) = 2h          if h ≤ 3
C(h) = 6 + (h-3)   if h > 3
```
- C(2) = 2(2) = **$4**
- C(5) = 6 + (5 - 3) = 6 + 2 = **$8**

---

## Function Tables and Patterns

Functions are often presented as tables. From a table, you can:
1. Verify it's a function (each input appears once with one output)
2. Identify the pattern (the rule)
3. Extend the table

| x | f(x) |
| :--- | :--- |
| 0 | 1 |
| 1 | 4 |
| 2 | 7 |
| 3 | 10 |

Pattern: each f(x) increases by 3 as x increases by 1. Starting value is 1.
Rule: f(x) = **3x + 1**. Check: f(2) = 3(2) + 1 = 7. ✓

---

## Composition of Functions

Applying one function to the output of another is called **composition**, written f(g(x)) or (f ∘ g)(x) — "f of g of x."

**Example:** f(x) = 2x + 1 and g(x) = x²

f(g(x)) = f(x²) = 2(x²) + 1 = **2x² + 1**

g(f(x)) = g(2x + 1) = (2x + 1)² = 4x² + 4x + 1

Note: f(g(x)) ≠ g(f(x)) — order matters in composition.

**Practical example:** Sales tax is applied to the discounted price. If g(p) = 0.80p (20% discount) and f(p) = 1.06p (6% tax), then the final price is f(g(p)) = f(0.80p) = 1.06(0.80p) = **0.848p**. The customer pays 84.8% of the original price.

---

## Practice

1. Is y = |x| a function? What is its domain and range?
2. For f(x) = x² - 3x + 2, find f(0), f(3), and f(-2).
3. A cell phone plan costs $30/month plus $0.10 per text. Write a function C(t) for total monthly cost. Find the cost for 150 texts.
4. Using f(x) = 3x - 4 and g(x) = 2x + 1, find f(g(2)) and g(f(2)).
5. From the table: x: 0, 1, 2, 3; y: 5, 8, 11, 14. Write the function.

**Answers:**
1. Yes. For each input x, there's exactly one |x|. Domain: all reals. Range: y ≥ 0.
2. f(0) = 0 - 0 + 2 = **2**; f(3) = 9 - 9 + 2 = **2**; f(-2) = 4 + 6 + 2 = **12**
3. C(t) = 0.10t + 30; C(150) = 15 + 30 = **$45**
4. g(2) = 5; f(g(2)) = f(5) = 3(5) - 4 = **11**; f(2) = 2; g(f(2)) = g(2) = 2(2) + 1 = **5**
5. **f(x) = 3x + 5**
