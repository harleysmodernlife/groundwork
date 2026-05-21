## Systems of Equations

A system of equations is a set of two or more equations with the same variables. Solving the system means finding the values of the variables that make all equations true simultaneously. Systems appear whenever two conditions must be satisfied at the same time: a budget and a requirement, supply and demand, two different distance-rate-time scenarios meeting at a point.

---

## What Is a Solution?

A solution to a system of two equations in two variables (x and y) is an ordered pair (x, y) that satisfies both equations.

**Example:** Does (2, 3) satisfy the system?
- Equation 1: x + y = 5 → 2 + 3 = 5. ✓
- Equation 2: 2x - y = 1 → 2(2) - 3 = 1. ✓
- Yes, (2, 3) is the solution.

---

## Three Possible Outcomes

When you solve a system of two linear equations, one of three things is true:

**1. Exactly one solution (the lines intersect at one point)**
The most common case. The lines have different slopes and cross at exactly one point. The solution is that intersection point.

**2. No solution (the lines are parallel)**
The lines have the same slope but different y-intercepts. They never meet. No (x, y) satisfies both equations.

**3. Infinitely many solutions (the lines are the same)**
Both equations describe the same line. Every point on the line satisfies both equations.

---

## The Graphical Method

Graph both equations on the same coordinate plane. The solution (if it exists) is the point where the lines intersect.

**Example:** Solve the system by graphing.
- y = x + 1
- y = -x + 5

Graph y = x + 1: y-intercept (0, 1), slope 1 → rises to (1, 2), (2, 3), etc.
Graph y = -x + 5: y-intercept (0, 5), slope -1 → falls to (1, 4), (2, 3), (3, 2), etc.

The lines meet at (2, 3). Solution: **(2, 3)**

Check: y = 2 + 1 = 3. ✓ And y = -2 + 5 = 3. ✓

**Limitations of graphing:** It can only give exact answers when the solution happens to land on an exact grid point. For non-integer solutions, graphing gives only an approximation. That's why algebraic methods (substitution and elimination) are more reliable.

---

## Identifying the Outcome from Equations

Before solving, compare slopes and intercepts:

- Same slope, different intercept → parallel → **no solution**
  - Example: y = 2x + 3 and y = 2x - 1 (both have slope 2, different intercepts)
- Same slope, same intercept → same line → **infinite solutions**
  - Example: y = 3x + 4 and 2y = 6x + 8 (multiply first by 2: same equation)
- Different slopes → **exactly one solution**

---

## Setting Up Systems from Word Problems

This is where systems become powerful — translating two real constraints into two equations.

**Define two variables** for the two unknowns, then write one equation for each condition.

**Example:** You buy apples and oranges. Apples cost $0.50 each and oranges cost $0.75 each. You buy 10 pieces of fruit and spend $6.25. How many of each did you buy?

- Let a = number of apples, o = number of oranges
- Total pieces: a + o = 10
- Total cost: 0.50a + 0.75o = 6.25

This is a system. Solve it (using substitution or elimination) to find a = 5, o = 5.

**Example:** A boat travels 30 miles upstream (against the current) and 30 miles downstream. Upstream takes 3 hours; downstream takes 2 hours. Find the boat's speed in still water and the current's speed.

- Let b = boat speed, c = current speed
- Upstream: (b - c) × 3 = 30 → b - c = 10
- Downstream: (b + c) × 2 = 30 → b + c = 15

System:
- b - c = 10
- b + c = 15

Adding: 2b = 25 → b = 12.5 mph (still water), c = 2.5 mph (current)

---

## Systems with More Than Two Variables

In higher-level math, systems extend to three variables with three equations (or more). The same principles apply — you need as many independent equations as you have unknowns. These are covered in Linear Algebra and are the mathematical foundation of computer graphics, data science, and engineering.

---

## Practice

1. Determine by inspection (don't solve): does y = 4x - 2 and y = 4x + 7 have a solution?
2. Determine by inspection: does 3y = 6x + 9 and y = 2x + 3 have a solution?
3. Verify that (3, 1) is a solution to: 2x + 3y = 9 and x - y = 2.
4. Graph to solve: y = -x + 4 and y = 2x - 2.
5. Set up (but don't yet solve) a system: Two job offers. Job A pays a $15,000 signing bonus plus $55,000 per year. Job B pays no bonus but $68,000 per year. After how many years do they pay equally, and what is that total?

**Answers:**
1. Both have slope 4, different intercepts. **No solution (parallel lines).**
2. Rewrite first equation: y = 2x + 3. Same as second equation. **Infinite solutions (same line).**
3. Eq 1: 2(3) + 3(1) = 6 + 3 = 9 ✓; Eq 2: 3 - 1 = 2 ✓. **Yes, (3, 1) is a solution.**
4. At x = 2: y = -2 + 4 = 2; y = 2(2) - 2 = 2. **Solution: (2, 2).**
5. Let t = years, E = total earnings. A: E = 55,000t + 15,000; B: E = 68,000t. Set equal: 55,000t + 15,000 = 68,000t → 15,000 = 13,000t → t ≈ **1.15 years**. At that point: E = 68,000(1.15) = **$78,462**.
