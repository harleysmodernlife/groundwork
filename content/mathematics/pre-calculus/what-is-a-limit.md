## What Is a Limit?

The limit is the central idea of calculus. Everything that makes calculus powerful — derivatives, integrals, the connection between area and rates of change — rests on understanding what limits are and how they work. Limits let us answer questions that seem impossible: what value does a function approach as you zoom in? What happens at the edge of a function's behavior? This lesson introduces limits intuitively, before the formulas arrive.

---

## The Core Idea: Approaching Without Arriving

A limit asks: as x gets close to some value, what value does f(x) get close to?

Notice this question is about approach, not arrival. We ask what happens near x = c, not necessarily at x = c. The function might not even be defined at that point — and yet the limit can still exist.

**Formal language:**

"The limit of f(x) as x approaches c equals L" means:
as x gets arbitrarily close to c (from either side), f(x) gets arbitrarily close to L.

**Written:** lim f(x) = L
           x → c

---

## A Concrete Example: A Removable Hole

Consider the function:

```
f(x) = (x² - 4) / (x - 2)
```

At x = 2, the denominator is 0, so the function is **undefined** at x = 2.

But let's see what happens nearby. Factor the numerator:
(x² - 4) = (x - 2)(x + 2)

So f(x) = (x - 2)(x + 2)/(x - 2) = x + 2, **as long as x ≠ 2**.

For any x close to 2 (but not equal to 2), f(x) = x + 2, which approaches 4.

So: lim (x² - 4)/(x - 2) = **4**
    x → 2

The function has a hole at x = 2, but the limit still exists and equals 4. The limit cares about approach, not the value at the point itself.

---

## Approaching from Tables

You can estimate limits numerically by computing function values for x getting closer and closer to the target.

**Example:** Estimate lim (x² - 4)/(x - 2) as x → 2.

From the left (x < 2):
| x | f(x) |
| 1.9 | 3.9 |
| 1.99 | 3.99 |
| 1.999 | 3.999 |

From the right (x > 2):
| x | f(x) |
| 2.1 | 4.1 |
| 2.01 | 4.01 |
| 2.001 | 4.001 |

Both sides approach 4. So the limit is 4.

---

## One-Sided Limits

Sometimes a function approaches different values from the left and from the right. We handle this with one-sided limits.

**Left-hand limit:** lim f(x) — approaching from x < c
                    x → c⁻

**Right-hand limit:** lim f(x) — approaching from x > c
                     x → c⁺

**The two-sided limit exists if and only if both one-sided limits exist and are equal:**

```
lim f(x) = L    if and only if    lim f(x) = lim f(x) = L
x → c                             x → c⁻    x → c⁺
```

**Example:** Consider the absolute value function f(x) = |x|/x (the sign function).
- For x > 0: |x|/x = x/x = 1. So the right-hand limit as x → 0⁺ is 1.
- For x < 0: |x|/x = -x/x = -1. So the left-hand limit as x → 0⁻ is -1.
- Since 1 ≠ -1, the two-sided limit does not exist at x = 0.

---

## When Limits Don't Exist

Three common situations where a limit fails to exist:

**1. One-sided limits don't agree** (shown above).

**2. The function oscillates wildly:** lim sin(1/x) as x → 0. As x gets tiny, 1/x spins faster and faster, and sin(1/x) oscillates between -1 and 1 without settling on any value.

**3. The function goes to infinity:** lim 1/x² as x → 0. As x gets small, 1/x² blows up to infinity. We write lim = ∞, but infinity is not a number — the limit does not equal anything finite.

---

## Limits at Infinity

We can also ask: what does f(x) approach as x → ∞ (gets arbitrarily large)?

**Example:** lim (3x + 1)/(x - 2) as x → ∞

Intuition: for very large x, the "+1" and "-2" become irrelevant. The ratio behaves like 3x/x = 3.

More precisely, divide numerator and denominator by x:
(3 + 1/x) / (1 - 2/x)

As x → ∞, 1/x → 0, so this → (3 + 0)/(1 - 0) = **3**

Limits at infinity describe **horizontal asymptotes**: lines that the function approaches but never reaches.

---

## Graphical Understanding

On a graph:
- A two-sided limit existing at x = c means the graph is "heading toward" a single height from both sides.
- A removable discontinuity (hole) at x = c still has a limit — the graph approaches the same y-value from both sides, but there's just a dot missing.
- A jump discontinuity at x = c means the one-sided limits exist but aren't equal — the graph jumps.
- A vertical asymptote at x = c means the function goes to ±∞ — no limit.

---

## Why This Matters

Limits solve a fundamental problem in mathematics: we can't divide by zero, and we can't compute an instantaneous rate of change directly (that would require dividing by a zero time interval). But we can take limits.

The derivative — the instantaneous rate of change — is defined as:

```
f'(x) = lim [f(x + h) - f(x)] / h
        h → 0
```

This is a limit as h approaches 0. We can't plug in h = 0 (division by zero), but we can ask what the expression approaches as h gets arbitrarily close to 0. That limit is the derivative.

Every single idea in calculus is built on this foundation.

---

## Practice

1. Use a table to estimate lim (x² - 9)/(x - 3) as x → 3.
2. Find lim f(x) as x → 2 if f(x) = 5x - 1 for x ≠ 2 and f(2) = 0. (Hint: the limit uses nearby values, not the exact point.)
3. A function has lim f(x) = 7 as x → 4⁻ and lim f(x) = 9 as x → 4⁺. Does the two-sided limit exist?
4. What is lim (x² + 1)/x² as x → ∞?
5. Explain in plain words: what does it mean for a limit to exist at a point where a function is undefined?

**Answers:**
1. Factor: (x² - 9)/(x - 3) = (x+3)(x-3)/(x-3) = x + 3 for x ≠ 3. As x → 3, x + 3 → **6**.
2. The limit uses values near x = 2, where f(x) = 5x - 1. As x → 2, 5x - 1 → 9. The limit is **9**, even though f(2) = 0. The function's actual value there doesn't affect the limit.
3. Since 7 ≠ 9, the two-sided limit **does not exist**.
4. (x² + 1)/x² = 1 + 1/x². As x → ∞, 1/x² → 0. Limit = **1**.
5. The limit asks what value the function gets close to as x approaches the point — not what value it actually has there. Even if the function has a hole (is undefined) at a point, if the function consistently approaches the same height from both sides, the limit exists and equals that height.
