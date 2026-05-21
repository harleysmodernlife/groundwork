## Applications: Optimization and Related Rates

The derivative is not just a mathematical object — it's a decision-making tool. When you want to maximize profit, minimize cost, find the exact moment a ball reaches its peak, or figure out how fast water is draining from a tank, you use derivatives. This lesson covers the two major applications of derivatives: optimization (finding the best value) and related rates (finding how one rate of change connects to another).

---

## Critical Points and Extrema

A **critical point** is a point where f'(x) = 0 or f'(x) doesn't exist. At critical points, the function might have a local maximum, a local minimum, or neither.

**Why?** If f'(x) > 0, the function is going up. If f'(x) < 0, it's going down. At a peak (local max), the function transitions from going up to going down — so f'(x) must be zero at the peak. Same logic applies to valleys.

---

## The First Derivative Test

To classify a critical point at x = c:
1. Find f'(x) and solve f'(x) = 0 for x.
2. Test the sign of f'(x) on either side of c.

- If f' changes from **positive to negative** at c → **local maximum**
- If f' changes from **negative to positive** at c → **local minimum**
- If f' doesn't change sign → **neither** (an inflection point)

**Example:** Find and classify critical points of f(x) = x³ - 3x² - 9x + 5.
- f'(x) = 3x² - 6x - 9 = 3(x² - 2x - 3) = 3(x - 3)(x + 1)
- Critical points: x = 3, x = -1

Test sign of f'(x):
- x < -1 (try x = -2): f'(-2) = 3(5)(-3) > 0 → positive
- -1 < x < 3 (try x = 0): f'(0) = 3(-3)(1) < 0 → negative
- x > 3 (try x = 4): f'(4) = 3(1)(5) > 0 → positive

Results:
- At x = -1: f' goes + to - → **local maximum**. f(-1) = -1 - 3 + 9 + 5 = **10**
- At x = 3: f' goes - to + → **local minimum**. f(3) = 27 - 27 - 27 + 5 = **-22**

---

## The Second Derivative Test

An alternative way to classify critical points, useful when it's easy to compute f''(x):

- If f'(c) = 0 and f''(c) > 0 → **local minimum** (concave up, like a bowl)
- If f'(c) = 0 and f''(c) < 0 → **local maximum** (concave down, like a cap)
- If f''(c) = 0 → inconclusive (use first derivative test)

**Example:** f(x) = x⁴ - 4x².
- f'(x) = 4x³ - 8x = 4x(x² - 2) = 0 at x = 0, x = √2, x = -√2
- f''(x) = 12x² - 8
- f''(0) = -8 < 0 → **local max** at x = 0, f(0) = 0
- f''(√2) = 12(2) - 8 = 16 > 0 → **local min** at x = √2, f(√2) = 4 - 8 = -4
- f''(-√2) = 16 > 0 → **local min** at x = -√2, f(-√2) = -4

---

## Optimization: Applied Problems

**Setup:**
1. Define variables and what you want to maximize/minimize.
2. Write the **objective function** (what you're optimizing) and any **constraint**.
3. Use the constraint to reduce to one variable.
4. Differentiate, find critical points, verify with first or second derivative test.

**Example:** A farmer has 200 feet of fence and wants to enclose a rectangular garden against a barn (the barn is one side, so no fence needed there). What dimensions maximize the area?

- Variables: width w (two sides), length l (one side parallel to barn)
- Constraint: 2w + l = 200 → l = 200 - 2w
- Objective: A = w · l = w(200 - 2w) = 200w - 2w²
- A'(w) = 200 - 4w = 0 → w = 50
- l = 200 - 100 = 100
- A''(w) = -4 < 0 → confirmed maximum
- Optimal dimensions: **50 ft × 100 ft**, Area = **5,000 sq ft**

**Example:** Find two positive numbers whose sum is 20 and whose product is as large as possible.
- Let the numbers be x and 20 - x.
- Product: P = x(20 - x) = 20x - x²
- P'(x) = 20 - 2x = 0 → x = 10
- Both numbers are **10 and 10**. Maximum product = 100.
- (Equal numbers always maximize the product for a fixed sum.)

**Example:** A box with a square base and no top must hold 32 cubic feet. What dimensions minimize the total surface area?
- Variables: base side s, height h
- Constraint: s²h = 32 → h = 32/s²
- Surface area: A = s² + 4sh = s² + 4s(32/s²) = s² + 128/s
- A'(s) = 2s - 128/s² = 0 → 2s = 128/s² → 2s³ = 128 → s³ = 64 → s = 4
- h = 32/16 = 2
- Optimal dimensions: **4 × 4 base, height 2** (minimum SA = 16 + 32 = 48 sq ft)

---

## Related Rates

In related rates problems, two quantities are both changing over time, and they're related by an equation. If you know how fast one is changing, you can find how fast the other is changing.

**Setup:**
1. Draw a diagram and label variables.
2. Write an equation relating the variables.
3. Differentiate both sides with respect to time (t), using the chain rule.
4. Substitute the given values and solve.

**Example:** A spherical balloon is being inflated at 10 cubic inches per minute. How fast is the radius increasing when the radius is 5 inches?
- Volume of sphere: V = (4/3)πr³
- Differentiate both sides with respect to t: dV/dt = 4πr² · dr/dt
- Substitute: 10 = 4π(25) · dr/dt
- dr/dt = 10/(100π) = **1/(10π) inches per minute** ≈ 0.032 in/min

**Example:** A 10-foot ladder leans against a wall. The bottom is sliding away from the wall at 2 ft/s. How fast is the top sliding down when the bottom is 6 feet from the wall?
- Pythagorean: x² + y² = 100, where x = distance from wall, y = height on wall
- Differentiate: 2x(dx/dt) + 2y(dy/dt) = 0
- When x = 6: y = √(100 - 36) = 8
- Substitute: 2(6)(2) + 2(8)(dy/dt) = 0 → 24 + 16(dy/dt) = 0
- dy/dt = -24/16 = **-3/2 ft/s** (negative means going down)

**Example:** Two cars leave an intersection at the same time. One drives east at 30 mph, the other north at 40 mph. How fast is the distance between them increasing after 2 hours?
- After 2 hours: east car is 60 mi east, north car is 80 mi north.
- Distance: z² = x² + y², where x = 60, y = 80, z = 100
- Differentiate: 2z(dz/dt) = 2x(dx/dt) + 2y(dy/dt)
- 2(100)(dz/dt) = 2(60)(30) + 2(80)(40) = 3,600 + 6,400 = 10,000
- dz/dt = 10,000/200 = **50 mph**

---

## Practice

1. Find all local maxima and minima of f(x) = x³ - 6x + 2.
2. A rancher has 100 meters of fence to build two adjacent rectangular pens sharing one wall. Find the dimensions that maximize the total enclosed area.
3. A particle's position is s(t) = t³ - 12t + 5 meters. When is it at rest? Is it a max or min of position?
4. Water is draining from a conical tank (radius 3 m, height 5 m) at 2 m³/min. How fast is the water level dropping when the water is 3 m deep? (V = πr²h/3; use similar triangles: r/h = 3/5, so r = 3h/5)

**Answers:**
1. f'(x) = 3x² - 6 = 0 → x = ±√2. f''(x) = 6x. f''(-√2) = -6√2 < 0 → **local max at x = -√2**, f(-√2) = -2√2 + 6√2 + 2 = 4√2 + 2. f''(√2) > 0 → **local min at x = √2**, f(√2) = 2 - 4√2.
2. Variables: width w (3 segments), length l (2 segments). Fence: 3w + 2l = 100 → l = (100-3w)/2. Area: A = wl = w(100-3w)/2. A' = (100-6w)/2 = 0 → w = 50/3, l = 25. **Dimensions: 50/3 m × 25 m**, total area ≈ 416.7 m².
3. s'(t) = 3t² - 12 = 0 → t² = 4 → **t = 2 s** (taking positive time). s''(t) = 6t. s''(2) = 12 > 0 → **local minimum** of position (particle turns around going back).
4. V = π(3h/5)²h/3 = 9πh³/75 = 3πh³/25. dV/dt = (9πh²/25)(dh/dt). Substitute: -2 = (9π(9)/25)(dh/dt). dh/dt = -2×25/(81π) = **-50/(81π) ≈ -0.196 m/min**
