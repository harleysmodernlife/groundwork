## Applications: Area, Volume, and Averages

Calculus was invented to solve problems in physics and geometry that no earlier mathematics could handle. This lesson shows the definite integral applied to three major applications: finding the area between curves, finding volumes of three-dimensional solids, and computing averages of continuous functions. These techniques appear in engineering, economics, biology, physics, and anywhere else you need to measure accumulated quantities precisely.

---

## Area Between Two Curves

If f(x) ≥ g(x) on [a, b], the area between the curves is:

```
A = ∫ₐᵇ [f(x) - g(x)] dx
```

You're integrating the vertical gap between the upper and lower curve.

**Example:** Find the area between y = x² and y = x on [0, 1].
- On [0, 1]: x ≥ x² (since x - x² = x(1 - x) ≥ 0 for 0 ≤ x ≤ 1).
- A = ∫₀¹ (x - x²) dx = [x²/2 - x³/3]₀¹ = (1/2 - 1/3) - 0 = **1/6**

**Example:** Find the area enclosed by y = x² and y = 2x.
Step 1: Find intersections. x² = 2x → x² - 2x = 0 → x(x - 2) = 0 → x = 0, x = 2.
Step 2: Determine which is on top. At x = 1: y = 1 vs. y = 2. So 2x > x² on (0, 2).
Step 3: Integrate.
A = ∫₀² (2x - x²) dx = [x² - x³/3]₀² = (4 - 8/3) - 0 = 12/3 - 8/3 = **4/3**

---

## When Curves Switch Positions

Sometimes one curve is on top for part of the interval and the other for the rest. Find all intersection points and split the integral.

**Example:** Area between y = sin x and y = cos x from x = 0 to x = π.
- They intersect at x = π/4 (since sin(π/4) = cos(π/4)).
- On [0, π/4]: cos x ≥ sin x.
- On [π/4, π]: sin x ≥ cos x.

A = ∫₀^(π/4) (cos x - sin x) dx + ∫_(π/4)^π (sin x - cos x) dx
= [sin x + cos x]₀^(π/4) + [-cos x - sin x]_(π/4)^π
= (√2 - 1) + (1 + √2) = **2√2 ≈ 2.83**

---

## Volumes of Revolution: Disk Method

Rotating a curve around the x-axis generates a solid of revolution. Cross-sections perpendicular to the x-axis are disks (circles).

Area of each disk: A = πr² where r = f(x).
Volume = sum of infinitely many disk slices:

```
V = π ∫ₐᵇ [f(x)]² dx
```

**Example:** Find the volume when y = √x on [0, 4] is rotated about the x-axis.
- V = π ∫₀⁴ (√x)² dx = π ∫₀⁴ x dx = π [x²/2]₀⁴ = π(8) = **8π ≈ 25.1 cubic units**

**Example:** Find the volume when y = sin x on [0, π] is rotated about the x-axis.
- V = π ∫₀^π sin²x dx
- Use identity: sin²x = (1 - cos 2x)/2
- = π ∫₀^π (1 - cos 2x)/2 dx = (π/2)[x - sin(2x)/2]₀^π = (π/2)(π - 0) = **π²/2 ≈ 4.93**

---

## Washer Method

When rotating the region between two curves (not the x-axis), cross-sections are washers (donuts).

```
V = π ∫ₐᵇ ([f(x)]² - [g(x)]²) dx
```

where f(x) is the outer radius and g(x) is the inner radius.

**Example:** Find the volume when the region between y = √x and y = x² is rotated about the x-axis (intersection at x = 0 and x = 1, with √x above x²).
- V = π ∫₀¹ [(√x)² - (x²)²] dx = π ∫₀¹ (x - x⁴) dx
- = π [x²/2 - x⁵/5]₀¹ = π(1/2 - 1/5) = π(3/10) = **3π/10 ≈ 0.942**

---

## Shell Method

An alternative volume technique: imagine thin cylindrical shells instead of disks. Sum the volumes of concentric shells:

```
V = 2π ∫ₐᵇ x · f(x) dx
```

(Valid when rotating about the y-axis, with vertical strips.)

**Example:** Volume when y = x² on [0, 2] is rotated about the y-axis using the shell method.
- V = 2π ∫₀² x · x² dx = 2π ∫₀² x³ dx = 2π [x⁴/4]₀² = 2π(4) = **8π**

---

## Arc Length

The length of a curve y = f(x) from a to b:

```
L = ∫ₐᵇ √(1 + [f'(x)]²) dx
```

**Example:** Find the length of y = (2/3)x^(3/2) from x = 0 to x = 3.
- f'(x) = x^(1/2) = √x
- L = ∫₀³ √(1 + x) dx
- Let u = 1 + x: ∫₁⁴ √u du = [2u^(3/2)/3]₁⁴ = 2(8)/3 - 2(1)/3 = 16/3 - 2/3 = **14/3**

---

## Accumulation in Applied Contexts

**Distance from velocity:** If v(t) is velocity, then ∫ₐᵇ v(t) dt is the displacement (net signed), and ∫ₐᵇ |v(t)| dt is the total distance traveled.

**Example:** A particle has velocity v(t) = t² - 4t + 3. Find the total distance from t = 0 to t = 3.
- v(t) = (t - 1)(t - 3): positive on [0,1], negative on [1,3].
- Total distance = ∫₀¹ (t² - 4t + 3) dt + |∫₁³ (t² - 4t + 3) dt|
- ∫₀¹ = [t³/3 - 2t² + 3t]₀¹ = 1/3 - 2 + 3 = 4/3
- ∫₁³ = [t³/3 - 2t² + 3t]₁³ = (9 - 18 + 9) - (1/3 - 2 + 3) = 0 - 4/3 = -4/3
- Total = 4/3 + 4/3 = **8/3**

**Consumer surplus:** In economics, if D(q) is the demand function and p* is the market price, consumer surplus = ∫₀^q* [D(q) - p*] dq.

---

## Practice

1. Find the area enclosed by y = x² + 1 and y = 3.
2. Find the area between y = x³ and y = x on [0, 1].
3. Find the volume when y = 2x on [0, 3] is rotated about the x-axis.
4. A particle's velocity is v(t) = 6t - t² for t ≥ 0. Find the total distance traveled from t = 0 to t = 8.
5. Find the average value of f(x) = 4 - x² on [0, 2].

**Answers:**
1. Intersect: x² + 1 = 3 → x = ±√2. Area = ∫_{-√2}^{√2} (3 - x² - 1) dx = ∫_{-√2}^{√2} (2 - x²) dx = 2[2x - x³/3]₀^{√2} = 2(2√2 - 2√2/3) = 2(4√2/3) = **8√2/3**
2. x³ vs. x: x ≥ x³ on [0,1]. ∫₀¹ (x - x³) dx = [x²/2 - x⁴/4]₀¹ = 1/2 - 1/4 = **1/4**
3. V = π ∫₀³ (2x)² dx = π ∫₀³ 4x² dx = 4π[x³/3]₀³ = 4π(9) = **36π ≈ 113.1**
4. v(t) = t(6 - t): zero at t = 0 and t = 6. Positive [0,6], negative [6,8]. Distance = ∫₀⁶ (6t - t²)dt + |∫₆⁸ (6t - t²)dt|. First: [3t² - t³/3]₀⁶ = 108 - 72 = 36. Second: [3t² - t³/3]₆⁸ = (192 - 512/3) - (108 - 72) = 64/3 - 36 = -44/3. Total = 36 + 44/3 = **152/3 ≈ 50.67**
5. f_avg = (1/2)∫₀² (4 - x²) dx = (1/2)[4x - x³/3]₀² = (1/2)(8 - 8/3) = (1/2)(16/3) = **8/3 ≈ 2.67**
