## Linear Inequalities and Their Graphs

A linear inequality is like a linear equation, but instead of an equals sign it uses <, >, ≤, or ≥. The solution to a linear inequality in two variables is not a single point — it's a region of the coordinate plane: all the (x, y) pairs that make the inequality true. Understanding this moves you from "finding a point" to "finding a zone," which is how optimization problems, feasibility constraints, and resource limits are modeled mathematically.

---

## Review: Inequalities in One Variable

Solve and graph: 2x - 3 > 7
- Add 3: 2x > 10
- Divide by 2: x > 5
- Graph: open circle at 5, arrow pointing right.

The solution is the set of all numbers greater than 5. This is a region on the number line.

**Critical rule:** When multiplying or dividing by a negative number, flip the inequality symbol.
- -4x ≥ 12 → x ≤ -3 (divided by -4, flipped ≥ to ≤)

---

## Inequalities in Two Variables

A linear inequality in two variables (like 2x + y < 6) has a solution that is a region on the coordinate plane.

**Why a region?** For the equation 2x + y = 6, only the points on the line satisfy it. For the inequality 2x + y < 6, entire half-planes of points work — all points where the sum is less than 6.

---

## Graphing a Linear Inequality: The Procedure

**Step 1: Graph the boundary line.** Replace the inequality with an equals sign and graph that line.
- Use a **solid line** for ≤ or ≥ (the boundary is included in the solution).
- Use a **dashed line** for < or > (the boundary is NOT included).

**Step 2: Pick a test point** not on the line. The origin (0, 0) is usually easiest — if it's not on the boundary line.

**Step 3: Substitute the test point** into the original inequality.
- If the inequality is true: shade the side that contains the test point.
- If the inequality is false: shade the opposite side.

---

**Example 1:** Graph y < 2x - 1

Step 1: Graph y = 2x - 1 as a dashed line (strict <).
- Y-intercept: (0, -1). Slope: 2. Points: (0, -1), (1, 1), (2, 3).

Step 2: Test (0, 0): Is 0 < 2(0) - 1? Is 0 < -1? **No.**

Step 3: Shade the opposite side (below and to the right of the line).

**Example 2:** Graph 3x + 2y ≥ 6

Step 1: Graph 3x + 2y = 6 as a solid line (inclusive ≥).
- X-intercept: set y = 0 → 3x = 6 → (2, 0).
- Y-intercept: set x = 0 → 2y = 6 → (0, 3).

Step 2: Test (0, 0): Is 3(0) + 2(0) ≥ 6? Is 0 ≥ 6? **No.**

Step 3: Shade the opposite side (above and to the right of the line).

---

## Systems of Inequalities

A system of inequalities consists of two or more inequalities graphed on the same plane. The solution is the region where ALL shaded areas overlap.

**Example:** Graph the solution to the system:
- y ≤ x + 3
- y > -2x + 1

Graph y = x + 3 as a solid line. Test (0, 0): 0 ≤ 3? Yes → shade below the line.
Graph y = -2x + 1 as a dashed line. Test (0, 0): 0 > 1? No → shade above the line.

The solution is the region below the solid line AND above the dashed line — the overlap of both shaded areas.

---

## Real-World Applications

**Linear programming:** Systems of inequalities are the foundation of linear programming, which optimizes production, shipping, budgets, and resource allocation in business and engineering.

**Budget constraints:** If you have at most $200 to spend on materials costing $5 per board (b) and $8 per bracket (r):
- 5b + 8r ≤ 200
- Also: b ≥ 0 and r ≥ 0 (can't buy negative quantities)

The shaded region shows all feasible combinations of boards and brackets within budget.

**Staffing:** A store needs at least 4 total workers (full-time and part-time):
- f + p ≥ 4
- But can't have more than 6 full-time: f ≤ 6
- And full-time is at least 1: f ≥ 1

The feasible region shows valid staffing combinations.

---

## Writing Inequalities from Graphs

Given a shaded region and a boundary line:
1. Find the equation of the boundary line (slope-intercept form or standard form).
2. Check the test point in the shaded region to determine whether the inequality is < or >.
3. Determine whether the boundary is solid (≤ or ≥) or dashed (< or >).

---

## Special Cases

**Vertical boundary:** x < 4 means shade to the left of the vertical line x = 4.
**Horizontal boundary:** y ≥ -2 means shade above (and including) the horizontal line y = -2.

---

## Practice

1. Solve and graph on a number line: -3x + 6 > 0.
2. Graph on the coordinate plane: y ≥ -x + 2.
3. Is the point (3, 4) a solution to 2x - y > 1?
4. Graph the system and identify the overlapping solution region:
   - y < x + 4
   - y ≥ -x - 1
5. A caterer can make at most 50 total sandwiches and cookies. Sandwiches take 5 minutes each and cookies take 2 minutes each, and the total prep time must be under 200 minutes. Write a system of inequalities.

**Answers:**
1. -3x > -6 → x < 2 (divide by -3, flip). Open circle at 2, arrow left.
2. Graph y = -x + 2 as solid line (≥). Test (0,0): 0 ≥ 2? No. Shade above the line.
3. 2(3) - 4 > 1 → 6 - 4 = 2 > 1. **Yes.** (3, 4) is in the solution region.
4. (Graph both; shade below dashed line y = x + 4 and above solid line y = -x - 1. The overlap is a region that contains, for example, the point (0, 1): 1 < 4 ✓ and 1 ≥ -1 ✓.)
5. Let s = sandwiches, c = cookies:
   - s + c ≤ 50
   - 5s + 2c < 200
   - s ≥ 0, c ≥ 0
