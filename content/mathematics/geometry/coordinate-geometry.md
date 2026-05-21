## Coordinate Geometry

Coordinate geometry (also called analytic geometry) merges algebra and geometry by placing geometric figures on the coordinate plane. Instead of working with abstract shapes alone, you can assign coordinates to every point and use algebraic equations to describe lines, circles, and other figures. This connection between algebra and geometry is one of the most powerful in mathematics — it's how GPS systems calculate positions, how computer graphics render shapes, and how engineers model structures.

---

## Foundational Formulas

Everything in coordinate geometry flows from these four core formulas:

### Distance Formula

The distance between points (x₁, y₁) and (x₂, y₂):

```
d = √((x₂ - x₁)² + (y₂ - y₁)²)
```

This is the Pythagorean theorem applied to horizontal and vertical legs.

**Example:** Distance from A(1, 3) to B(5, 7):
- d = √((5-1)² + (7-3)²) = √(16 + 16) = √32 = 4√2 ≈ **5.66**

### Midpoint Formula

The midpoint M of segment from (x₁, y₁) to (x₂, y₂):

```
M = ((x₁ + x₂)/2, (y₁ + y₂)/2)
```

**Example:** Midpoint of (-3, 4) and (7, -2):
- M = ((-3+7)/2, (4-2)/2) = (4/2, 2/2) = **(2, 1)**

### Slope Formula

```
m = (y₂ - y₁) / (x₂ - x₁)
```

### Slope Relationships

- Parallel lines: equal slopes
- Perpendicular lines: slopes are negative reciprocals (m₁ × m₂ = -1)
- Horizontal line: slope = 0
- Vertical line: slope = undefined

---

## Proving Geometric Properties with Coordinates

Coordinate geometry lets you prove geometric theorems by calculation rather than pure reasoning.

### Proving a Quadrilateral Is a Parallelogram

A quadrilateral is a parallelogram if opposite sides are parallel (equal slopes) AND equal in length.

**Example:** Show that A(1, 1), B(5, 2), C(6, 5), D(2, 4) form a parallelogram.

Slope AB = (2-1)/(5-1) = 1/4
Slope DC = (4-5)/(2-6) = -1/-4 = 1/4 ✓ (AB ∥ DC)

Slope BC = (5-2)/(6-5) = 3/1 = 3
Slope AD = (4-1)/(2-1) = 3/1 = 3 ✓ (BC ∥ AD)

Length AB = √((5-1)² + (2-1)²) = √(16+1) = √17
Length DC = √((2-6)² + (4-5)²) = √(16+1) = √17 ✓

Both conditions met. **ABCD is a parallelogram.**

### Proving a Right Angle

Show two segments are perpendicular by showing their slopes are negative reciprocals.

**Example:** Is △ABC a right triangle? A(0, 0), B(4, 2), C(1, 5).

Slope AB = 2/4 = 1/2
Slope BC = (5-2)/(1-4) = 3/(-3) = -1

Product: (1/2)(-1) = -1/2 ≠ -1. Not perpendicular at B.

Slope AC = 5/1 = 5
Slope BC = -1 (calculated above)

Product: (5)(-1) = -5 ≠ -1. Not perpendicular at C.

Slope AB = 1/2; Slope AC = 5. Product = 5/2 ≠ -1.

None of the angles are right angles. **Not a right triangle.**

---

## The Equation of a Circle

A circle with center (h, k) and radius r is described by:

```
(x - h)² + (y - k)² = r²
```

This is derived from the distance formula: all points (x, y) that are exactly r units from (h, k).

**Example:** Write the equation of a circle with center (3, -2) and radius 5.
- (x - 3)² + (y + 2)² = 25

**Example:** Find the center and radius of (x + 1)² + (y - 4)² = 49.
- Center: (-1, 4). Radius: √49 = **7**.

**Example:** Write the equation of a circle with center at the origin and passing through (3, 4).
- r = √(3² + 4²) = 5
- Equation: x² + y² = 25

---

## Partitioning a Segment

Given two endpoints, find the point that divides the segment in a given ratio.

If point P divides segment from A(x₁, y₁) to B(x₂, y₂) in ratio m:n:

```
P = (x₁ + m/(m+n) × (x₂ - x₁), y₁ + m/(m+n) × (y₂ - y₁))
```

**Example:** Point P divides segment from A(2, 1) to B(8, 7) in ratio 2:1 from A.
- Fraction from A: 2/(2+1) = 2/3
- P = (2 + (2/3)(8-2), 1 + (2/3)(7-1)) = (2 + 4, 1 + 4) = **(6, 5)**

Check: AP = √(16+16) = 4√2. PB = √(4+4) = 2√2. Ratio 4√2 : 2√2 = 2:1. ✓

---

## Coordinate Proofs: General Strategies

When writing a coordinate proof:

1. **Place the figure conveniently.** Put one vertex at the origin and align sides along the axes when possible. This keeps coordinates simple.

2. **Use variables for unknowns.** For a general rectangle with width a and height b: vertices at (0, 0), (a, 0), (a, b), (0, b).

3. **Compute what you need.** Slopes for parallelism/perpendicularity, distances for equal sides, midpoints for bisection.

4. **State your conclusion clearly.**

**Example — Prove the diagonals of a rectangle are equal in length.**
Vertices: (0, 0), (a, 0), (a, b), (0, b).
Diagonal from (0,0) to (a, b): length = √(a² + b²).
Diagonal from (a, 0) to (0, b): length = √(a² + b²).
Both diagonals are equal. ✓

---

## Practice

1. Find the distance between (-5, 1) and (3, -5).
2. Find the midpoint of (4, -3) and (-2, 7).
3. A circle has equation (x - 2)² + (y + 3)² = 16. State the center and radius.
4. Write the equation of a circle with center (-1, 4) and radius 3.
5. Show that the triangle with vertices (0, 0), (4, 0), (2, 2) is isosceles.
6. Point P divides segment from A(-3, 1) to B(7, 6) in ratio 2:3. Find P.

**Answers:**
1. d = √((3-(-5))² + (-5-1)²) = √(64+36) = √100 = **10**
2. ((4+(-2))/2, (-3+7)/2) = (1, 2) → **(1, 2)**
3. Center: **(2, -3)**; Radius: **4**
4. **(x + 1)² + (y - 4)² = 9**
5. AB = 4; BC = √((4-2)²+(0-2)²) = √8; AC = √(4+4) = √8. BC = AC, so **isosceles** (two equal sides).
6. Fraction = 2/5; P = (-3 + (2/5)(10), 1 + (2/5)(5)) = (-3+4, 1+2) = **(1, 3)**
