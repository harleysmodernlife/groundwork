## Triangle Properties and Congruence

Triangles are the most fundamental polygon. Every more complex polygon can be divided into triangles, making triangular reasoning the foundation of all of structural geometry. Triangle properties — angle sums, side relationships, and congruence — allow engineers to design stable structures and surveyors to measure inaccessible distances.

---

## Triangle Basics

A triangle has three sides and three angles. It is named by its three vertices: △ABC.

**The Triangle Angle Sum Theorem:** The interior angles of any triangle always add to exactly 180°. This is provable from the parallel lines postulate and holds for every triangle that exists.

**The Triangle Inequality Theorem:** Any two sides of a triangle must sum to more than the third side. For sides a, b, c:
- a + b > c
- a + c > b
- b + c > a

If any condition fails, the triangle cannot be constructed.

---

## Classifying Triangles

### By Angles

**Acute triangle:** All three angles are acute (less than 90°).

**Right triangle:** One angle is exactly 90°. The side opposite the right angle is the hypotenuse (longest side). The other two sides are legs. The Pythagorean theorem applies.

**Obtuse triangle:** One angle exceeds 90°. A triangle can have at most one obtuse angle.

**Equiangular triangle:** All three angles are 60°. This is always equilateral.

### By Sides

**Equilateral:** All three sides equal in length. This forces all three angles to be 60°.

**Isosceles:** At least two sides are equal. The two equal sides are the **legs**; the third is the **base**. The angles opposite the equal sides (the **base angles**) are equal.

**Scalene:** All three sides are different lengths. All three angles are different.

---

## Properties of Isosceles Triangles

**Isosceles Triangle Theorem:** If two sides of a triangle are congruent, then the angles opposite those sides are congruent.

**Converse:** If two angles of a triangle are congruent, then the sides opposite those angles are congruent.

**Example:** An isosceles triangle has base angles of 55° each. Find the vertex angle.
- Vertex angle = 180° - 55° - 55° = **70°**

**Example:** In △ABC, AB = AC. ∠B = (3x + 5)° and ∠C = (5x - 11)°. Find x and both angles.
- Since AB = AC, angles opposite them are equal: ∠B = ∠C
- 3x + 5 = 5x - 11 → 16 = 2x → x = 8
- ∠B = ∠C = 3(8) + 5 = **29°**

---

## Exterior Angles

An **exterior angle** of a triangle is formed by extending one side of the triangle beyond the vertex.

**Exterior Angle Theorem:** An exterior angle of a triangle equals the sum of the two non-adjacent interior angles (the "remote interior angles").

This makes intuitive sense: the exterior angle supplements the interior angle at that vertex, and the three interior angles sum to 180°.

**Example:** A triangle has interior angles 40°, 65°, and 75°. The exterior angle at the 75° vertex is:
- 180° - 75° = 105°. Using the theorem: 40° + 65° = **105°**. ✓

**Example:** An exterior angle is 110°. One of the remote interior angles is 65°. Find the other remote interior angle.
- 65° + x = 110° → x = **45°**

---

## Triangle Congruence

Two triangles are **congruent** if they have the same size and shape — all corresponding sides are equal and all corresponding angles are equal. Six elements define a triangle (three sides + three angles), but you don't need all six to prove congruence. The following sets are sufficient:

### SSS (Side-Side-Side)
If all three sides of one triangle are equal to all three sides of another, the triangles are congruent.

### SAS (Side-Angle-Side)
If two sides and the **included angle** (the angle between those two sides) of one triangle equal the corresponding parts of another, the triangles are congruent.

### ASA (Angle-Side-Angle)
If two angles and the **included side** (the side between those two angles) are equal, the triangles are congruent.

### AAS (Angle-Angle-Side)
If two angles and a non-included side are equal, the triangles are congruent. (Once two angles are fixed, the third is determined; then fixing any side determines the whole triangle.)

### HL (Hypotenuse-Leg) — Right Triangles Only
For right triangles, if the hypotenuse and one leg are equal, the triangles are congruent.

### What Doesn't Work
- **AAA (Angle-Angle-Angle):** Three equal angles only guarantees similar triangles (same shape, different size), not congruent ones.
- **SSA:** Two sides and a non-included angle can produce two different triangles (ambiguous case) — not a valid congruence criterion.

---

## CPCTC

Once you prove two triangles congruent, **CPCTC** (Corresponding Parts of Congruent Triangles are Congruent) lets you conclude that any specific corresponding part must also be equal.

**Example:** You prove △ABC ≅ △DEF by SAS. Then by CPCTC, ∠C = ∠F, BC = EF, and so on — even the parts you didn't use to prove congruence.

---

## Medians, Altitudes, and Perpendicular Bisectors

**Median:** A segment from a vertex to the midpoint of the opposite side. Every triangle has three medians; they all meet at the **centroid** (center of gravity). The centroid is located 2/3 of the way from each vertex along its median.

**Altitude:** A segment from a vertex perpendicular to the opposite side (or the line containing it). All three altitudes meet at the **orthocenter**.

**Perpendicular bisector:** A line that bisects a side at 90°. The three perpendicular bisectors meet at the **circumcenter** — the center of the circle that passes through all three vertices.

**Angle bisector:** The three angle bisectors meet at the **incenter** — the center of the inscribed circle.

---

## Practice

1. Can a triangle have sides 4, 7, and 12? Explain.
2. A triangle has angles in ratio 1:3:5. Find all three angles.
3. An isosceles triangle has a vertex angle of 34°. Find the base angles.
4. An exterior angle of a triangle is 125°. One remote interior angle is 70°. Find the third interior angle and all angles of the triangle.
5. Name the congruence postulate or theorem that would prove congruence: △ABC where AB = DE, ∠B = ∠E, BC = EF, and △DEF.

**Answers:**
1. 4 + 7 = 11, which is NOT > 12. **No — violates the triangle inequality.**
2. x + 3x + 5x = 180 → 9x = 180 → x = 20. Angles: **20°, 60°, 100°**.
3. Base angles = (180° - 34°)/2 = **73° each**.
4. Remote interior angles: 70° and 125° - 70° = 55°. Third interior angle (at the exterior vertex) = 180° - 125° = 55°. All angles: **70°, 55°, 55°**. (Isosceles!)
5. **SAS** — two sides and the included angle.
