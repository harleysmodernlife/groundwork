## Solving Systems by Substitution and Elimination

Graphing gives you a picture of a system of equations, but it can't reliably find non-integer solutions. Substitution and elimination are algebraic methods that give exact answers regardless of how messy the solution is. These are the primary tools for solving any 2×2 system.

---

## Method 1: Substitution

Substitution works by solving one equation for one variable, then substituting that expression into the other equation. This reduces a two-variable system to a single-variable equation.

**When to use it:** When one equation already has a variable isolated (or is easy to isolate).

**Procedure:**
1. Solve one equation for one variable.
2. Substitute that expression into the other equation.
3. Solve for the remaining variable.
4. Back-substitute to find the other variable.
5. Check in both original equations.

---

**Example 1 (clean isolation):**

```
y = 3x - 1    [Equation 1 — y already isolated]
2x + y = 9    [Equation 2]
```

Step 1: y = 3x - 1 (already done)

Step 2: Substitute 3x - 1 for y in Equation 2:
- 2x + (3x - 1) = 9
- 5x - 1 = 9

Step 3: Solve for x:
- 5x = 10 → x = 2

Step 4: Back-substitute into y = 3x - 1:
- y = 3(2) - 1 = 5

Solution: **(2, 5)**

Check Eq 1: 5 = 3(2) - 1 = 5. ✓
Check Eq 2: 2(2) + 5 = 9. ✓

---

**Example 2 (solve first):**

```
x + 2y = 8
3x - y = 1
```

Step 1: Solve the first equation for x:
- x = 8 - 2y

Step 2: Substitute into the second equation:
- 3(8 - 2y) - y = 1
- 24 - 6y - y = 1
- 24 - 7y = 1
- -7y = -23
- y = 23/7

Step 3: Back-substitute:
- x = 8 - 2(23/7) = 8 - 46/7 = 56/7 - 46/7 = 10/7

Solution: **(10/7, 23/7)** ≈ (1.43, 3.29)

This demonstrates why algebraic methods are necessary — graphing would never give you these exact values.

---

## Method 2: Elimination (Addition Method)

Elimination works by adding or subtracting the two equations so that one variable cancels out, leaving a single-variable equation.

**When to use it:** When neither variable is already isolated, especially when coefficients are large or fractional.

**Procedure:**
1. Arrange both equations in standard form (Ax + By = C).
2. Multiply one or both equations by constants so that the coefficients of one variable are opposites.
3. Add the equations to eliminate that variable.
4. Solve for the remaining variable.
5. Back-substitute to find the other variable.
6. Check.

---

**Example 1 (immediate elimination):**

```
3x + y = 11
-3x + 4y = 4
```

The x-coefficients are already opposites (+3 and -3). Add the equations:
- (3x + y) + (-3x + 4y) = 11 + 4
- 5y = 15
- y = 3

Back-substitute into 3x + y = 11:
- 3x + 3 = 11 → 3x = 8 → x = 8/3

Solution: **(8/3, 3)**

---

**Example 2 (multiply to create opposites):**

```
2x + 3y = 12    [Equation 1]
4x - y = 8      [Equation 2]
```

To eliminate y: multiply Equation 2 by 3, making the y coefficient +3 and -3... wait, let's instead multiply Equation 2 by 3 to get -3y, then add with +3y:
- 3 × (4x - y) = 3 × 8 → 12x - 3y = 24

Now add Equation 1 and the new equation:
- (2x + 3y) + (12x - 3y) = 12 + 24
- 14x = 36
- x = 36/14 = 18/7

Let's use different numbers for clarity.

**Cleaner Example 2:**

```
2x + 3y = 7    [Equation 1]
x - y = 1      [Equation 2]
```

Multiply Equation 2 by 3 to match the y coefficient:
- 3(x - y) = 3(1) → 3x - 3y = 3

Add to Equation 1:
- (2x + 3y) + (3x - 3y) = 7 + 3
- 5x = 10
- x = 2

Back-substitute into x - y = 1:
- 2 - y = 1 → y = 1

Solution: **(2, 1)**

---

**Example 3 (multiply both equations):**

```
3x + 4y = 10   [Equation 1]
5x + 6y = 14   [Equation 2]
```

To eliminate y: need LCM of 4 and 6 = 12. Multiply Eq 1 by 3, Eq 2 by -2:
- 3 × Eq 1: 9x + 12y = 30
- -2 × Eq 2: -10x - 12y = -28

Add:
- (9x - 10x) + (12y - 12y) = 30 - 28
- -x = 2 → x = -2

Back-substitute into 3(-2) + 4y = 10:
- -6 + 4y = 10 → 4y = 16 → y = 4

Solution: **(-2, 4)**

---

## Choosing a Method

| Situation | Best Method |
| :--- | :--- |
| One variable already isolated (y = ...) | Substitution |
| Coefficients are small whole numbers | Either — elimination often faster |
| Coefficients are large or fractional | Elimination |
| One coefficient is 1 or -1 | Substitution (easy isolation) |

In practice, most people develop a preference for one method and default to it.

---

## Handling Special Cases

**No solution:** When you eliminate a variable and get a false statement like 0 = 7.

**Example:** x + y = 3 and x + y = 7. Subtract: 0 = -4. **No solution.**

**Infinite solutions:** When you eliminate a variable and get 0 = 0.

**Example:** 2x + y = 5 and 4x + 2y = 10. Multiply first by 2: 4x + 2y = 10. Subtract: 0 = 0. **Infinite solutions.**

---

## Practice

Use substitution for 1-2, elimination for 3-5:

1. y = 2x - 3 and 3x + y = 12
2. x = 4 - y and 2x - 3y = -6
3. 5x + 2y = 16 and -5x + y = 2
4. 3x + 4y = 25 and 2x - 3y = 6
5. Two numbers sum to 90. One is 4 times the other. Find both numbers.

**Answers:**
1. 3x + (2x - 3) = 12 → 5x = 15 → x = 3; y = 3. **(3, 3)**
2. 2(4 - y) - 3y = -6 → 8 - 5y = -6 → y = 2.8; x = 1.2. **(1.2, 2.8)**
3. Add: 3y = 18 → y = 6; 5x + 12 = 16 → x = 4/5. **(0.8, 6)**
4. Multiply row 1 by 3 and row 2 by 4: 9x + 12y = 75 and 8x - 12y = 24. Add: 17x = 99 → x ≈ 5.82; y ≈ 1.9. Exact: x = 99/17, y = 32/17.
5. a + b = 90; a = 4b. 4b + b = 90 → 5b = 90 → b = **18**; a = **72**.
