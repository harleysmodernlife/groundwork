## The Derivative: Rate of Change

The derivative is the first and most important idea in calculus. It measures how fast something is changing at any given instant. Not the average rate of change over an interval — the instantaneous rate, at a single moment. This is the mathematics that lets engineers calculate stress on a bridge at a specific load, lets physicists find the exact velocity of a particle at a specific time, and lets economists find the marginal cost of producing one more unit. The derivative is the mathematical tool that makes the word "instantaneous" computable.

---

## The Problem: Average vs. Instantaneous Rate of Change

**Average rate of change** over an interval [a, b]:

```
average rate = (f(b) - f(a)) / (b - a)
```

This is the slope of the **secant line** connecting (a, f(a)) and (b, f(b)). It's a useful approximation, but it's not the exact rate at any single point.

**Example:** A car's position (in miles) at time t (in hours) is given by s(t) = t².
- Position at t = 1: s(1) = 1 mile
- Position at t = 3: s(3) = 9 miles
- Average speed from t = 1 to t = 3: (9 - 1)/(3 - 1) = 8/2 = **4 miles per hour**

But the car is speeding up the whole time. At t = 1, it's going slower than 4 mph. At t = 3, it's going faster. What's the exact speed at, say, t = 2?

---

## The Limit Definition of the Derivative

To find the instantaneous rate of change at x = a, we zoom in on smaller and smaller intervals:

Take a tiny interval [a, a + h]. The average rate over that interval is:
(f(a + h) - f(a)) / h

As h gets smaller (approaches 0), this average rate approaches the instantaneous rate. The limit is the derivative:

```
f'(a) = lim [f(a + h) - f(a)] / h
        h → 0
```

This is called the **definition of the derivative** (or the "limit definition"). It always works, but computing it by hand requires evaluating the limit algebraically.

The derivative at every point gives a new function:

```
f'(x) = lim [f(x + h) - f(x)] / h
         h → 0
```

---

## Computing Derivatives from the Definition

**Example:** Find f'(x) for f(x) = x².

Step 1: Write f(x + h) - f(x):
- f(x + h) = (x + h)² = x² + 2xh + h²
- f(x + h) - f(x) = x² + 2xh + h² - x² = 2xh + h²

Step 2: Divide by h:
- (2xh + h²)/h = 2x + h

Step 3: Take the limit as h → 0:
- lim (2x + h) = **2x**

So the derivative of f(x) = x² is f'(x) = 2x.

This means: at any point x, the rate of change of x² equals 2x. At x = 3, the rate of change is 6. At x = -1, it's -2. At x = 0, it's 0 (the function's minimum — it momentarily stops decreasing and starts increasing).

**Example:** Find f'(x) for f(x) = 3x + 5.

- f(x + h) = 3(x + h) + 5 = 3x + 3h + 5
- f(x + h) - f(x) = 3h
- (3h)/h = 3
- lim 3 = **3**

The derivative of a linear function is its slope. Makes sense — a straight line changes at a constant rate.

---

## Derivative Notation

Several notations exist:

- **f'(x)** — "f prime of x" — Lagrange notation
- **dy/dx** — "dee y dee x" — Leibniz notation (think of it as rise/run)
- **y'** — "y prime"
- **df/dx** — same as dy/dx
- **Df(x)** — operator notation

Leibniz notation dy/dx emphasizes that the derivative is a ratio of infinitesimally small changes. It's especially useful in applications and when working with integrals.

---

## What the Derivative Tells You

**The derivative is the slope of the tangent line** to the graph at a point.

A tangent line just touches the curve at one point, with the same slope as the curve at that instant. Finding the tangent line at x = a requires:
1. The point: (a, f(a))
2. The slope: f'(a)
3. The line: y - f(a) = f'(a)(x - a)

**Example:** Find the tangent line to f(x) = x² at x = 3.
- f(3) = 9 → point is (3, 9)
- f'(x) = 2x → f'(3) = 6 → slope is 6
- Line: y - 9 = 6(x - 3) → y = 6x - 18 + 9 → **y = 6x - 9**

---

## The Derivative and the Shape of a Graph

The sign of the derivative tells you whether the function is increasing or decreasing:

- **f'(x) > 0**: function is increasing at x (going up)
- **f'(x) < 0**: function is decreasing at x (going down)
- **f'(x) = 0**: function has a horizontal tangent (potentially a peak, valley, or inflection)

**Example:** f(x) = x². We found f'(x) = 2x.
- For x < 0: f'(x) = 2x < 0 → function is decreasing ✓ (it goes down toward x = 0)
- For x > 0: f'(x) = 2x > 0 → function is increasing ✓ (it goes up from x = 0)
- At x = 0: f'(0) = 0 → horizontal tangent → this is the minimum of the parabola ✓

---

## Differentiability

A function is **differentiable** at x = a if f'(a) exists. This requires the limit to exist — which requires the function to be continuous and "smooth" there.

A function is not differentiable where:
- It has a corner or sharp point (the slope changes abruptly — no single tangent)
- It has a cusp (the tangent approaches vertical)
- It's discontinuous

**Example:** f(x) = |x| has a corner at x = 0. The left derivative is -1, the right derivative is +1. They don't agree, so |x| is **not differentiable at x = 0**.

**Note:** Differentiability implies continuity, but continuity does not imply differentiability. A function can be continuous (no jumps, no holes) but still fail to be differentiable (has a corner).

---

## Real-World Interpretation

When f(t) represents a quantity over time:

- f'(t) is the **rate of change** of that quantity
- If f(t) = position, then f'(t) = **velocity**
- If f(t) = velocity, then f'(t) = **acceleration**
- If f(t) = temperature, then f'(t) = **rate of heating or cooling**
- If f(t) = revenue, then f'(t) = **marginal revenue** (revenue from one more unit)

The derivative converts an accumulation (position, revenue, temperature) into a rate (speed, marginal gain, rate of change) at any instant.

---

## Practice

1. Use the limit definition to find f'(x) for f(x) = 5x.
2. Use the limit definition to find f'(x) for f(x) = x² + 3.
3. Find the equation of the tangent line to f(x) = x² at x = -2.
4. If f'(x) = x - 3, for what values of x is f increasing? Decreasing?
5. Explain in plain words why the derivative at the top of a hill (the maximum of a curve) equals zero.

**Answers:**
1. f(x+h) - f(x) = 5(x+h) - 5x = 5h. Divide by h: 5. Limit = **5**. (Derivative of 5x is 5 — the slope.)
2. f(x+h) = (x+h)² + 3 = x² + 2xh + h² + 3. Difference: 2xh + h². Divide by h: 2x + h. Limit = **2x**. (The +3 vanishes — constants have zero rate of change.)
3. f(-2) = 4 → point (-2, 4). f'(x) = 2x → f'(-2) = -4. Line: y - 4 = -4(x + 2) → **y = -4x - 4**
4. f'(x) > 0 when x - 3 > 0 → x > 3: **increasing**. f'(x) < 0 when x < 3: **decreasing**.
5. At the top of a hill, the function stops going up and starts going down. The instantaneous rate of change at that exact peak is neither positive (going up) nor negative (going down) — it's zero. Geometrically, the tangent line at the peak is perfectly horizontal, so its slope is zero.
