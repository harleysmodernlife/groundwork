## Similar Triangles and Proportionality

Two figures are **similar** if they have the same shape but not necessarily the same size. For triangles, this means corresponding angles are equal and corresponding sides are proportional. Similar triangles are one of the most powerful tools in geometry — they allow you to calculate heights of buildings, distances across rivers, and dimensions of objects you cannot directly measure.

---

## What Makes Triangles Similar?

**Definition:** △ABC ~ △DEF (read "is similar to") means:
- ∠A = ∠D, ∠B = ∠E, ∠C = ∠F (all corresponding angles are equal)
- AB/DE = BC/EF = AC/DF (all corresponding sides are proportional)

The common ratio AB/DE = BC/EF = AC/DF is called the **scale factor**.

**Order matters in naming:** △ABC ~ △DEF means A corresponds to D, B corresponds to E, C corresponds to F. The correspondence must match equal angles.

---

## Proving Triangle Similarity

Unlike congruence (which requires SSS, SAS, etc.), similar triangles can be proven with fewer pieces.

### AA (Angle-Angle)

If two angles of one triangle equal two angles of another, the triangles are similar.

**Why only two angles?** Because all three angles must sum to 180°, if two are fixed, the third is determined. So AA guarantees all three angles match.

**Example:** △ABC has ∠A = 50° and ∠B = 70°. △DEF has ∠D = 50° and ∠E = 70°. By AA, △ABC ~ △DEF.

### SSS Similarity

If all three pairs of corresponding sides are proportional, the triangles are similar.

**Example:** Triangle sides 3, 4, 5 and 6, 8, 10. Ratios: 3/6 = 4/8 = 5/10 = 1/2. Equal ratios → similar.

### SAS Similarity

If two pairs of corresponding sides are proportional AND the included angles are equal, the triangles are similar.

---

## The Scale Factor and Proportions

If △ABC ~ △DEF with scale factor k, then:
- Every side of △DEF is k times the corresponding side of △ABC.
- Perimeter of △DEF = k × Perimeter of △ABC.
- Area of △DEF = k² × Area of △ABC. (Area scales as the square of the linear scale factor.)

**Example:** Two similar triangles have corresponding sides 8 and 12. Scale factor = 12/8 = 3/2.
- If the smaller triangle has area 24 cm², the larger has area 24 × (3/2)² = 24 × 9/4 = **54 cm²**.

---

## Finding Unknown Lengths

Once you establish similarity, set up proportions to find missing sides.

**Example:** △ABC ~ △DEF. AB = 6, BC = 9, AC = 12. DE = 10. Find EF and DF.

Scale factor: DE/AB = 10/6 = 5/3.

EF/BC = 5/3 → EF = 9 × 5/3 = **15**
DF/AC = 5/3 → DF = 12 × 5/3 = **20**

**Always verify the correspondence before setting up ratios.** Mixing up which side corresponds to which gives wrong answers.

---

## The Triangle Proportionality Theorem

If a line is drawn parallel to one side of a triangle, it divides the other two sides proportionally.

If DE ∥ BC in △ABC (where D is on AB and E is on AC):
```
AD/DB = AE/EC
```

**Example:** In △ABC, DE ∥ BC. AD = 4, DB = 6, AE = 5. Find EC.
- 4/6 = 5/EC → 4 × EC = 30 → EC = **7.5**

**Converse:** If a line divides two sides of a triangle proportionally, it is parallel to the third side.

---

## Midsegment Theorem

The **midsegment** of a triangle connects the midpoints of two sides. It has two properties:
1. It is parallel to the third side.
2. Its length is exactly half the length of the third side.

**Example:** In △ABC, M is the midpoint of AB and N is the midpoint of AC. Then MN ∥ BC and MN = (1/2)BC.

If BC = 14, then MN = **7**. If MN = 9, then BC = **18**.

---

## Indirect Measurement

Similar triangles are the classical tool for measuring heights and distances that cannot be measured directly.

**Example — Shadow method:** A 6-foot person casts a 4-foot shadow. At the same time, a tree casts a 22-foot shadow. How tall is the tree?

The sun's rays create parallel angles, making the person-shadow triangle similar to the tree-shadow triangle.

```
Person height / Person shadow = Tree height / Tree shadow
6/4 = h/22
4h = 132
h = 33 feet
```

**Example — Mirror method:** A mirror is placed on the ground 15 feet from a wall. A person stands 3 feet from the mirror and can see the top of the wall in the mirror. The person's eye height is 5.5 feet. How tall is the wall?

The angles of incidence and reflection are equal, creating similar triangles.
```
5.5/3 = h/15
3h = 82.5
h = 27.5 feet
```

---

## Similar Figures Beyond Triangles

Similarity extends to all geometric shapes. Two polygons are similar if:
1. All corresponding angles are equal.
2. All corresponding sides are proportional.

For circles, all circles are similar to each other (the scale factor is just the ratio of radii).

---

## Practice

1. △ABC has angles 45°, 60°, 75°. △XYZ has angles 60°, 75°, 45°. Are they similar?
2. △PQR ~ △STU. PQ = 9, QR = 12, PR = 15. ST = 6. Find TU and SU.
3. In △ABC, DE ∥ BC. AD = 8, DB = 12, AE = 10. Find EC.
4. A flagpole casts a 20-foot shadow. A 5.5-foot person standing nearby casts a 4-foot shadow. How tall is the flagpole?
5. Two similar triangles have areas of 25 cm² and 100 cm². What is the ratio of their perimeters?

**Answers:**
1. Same three angles (45°, 60°, 75°), just listed in different order. **Yes, similar by AA.**
2. Scale factor: ST/PQ = 6/9 = 2/3. TU = 12 × 2/3 = **8**; SU = 15 × 2/3 = **10**.
3. 8/12 = 10/EC → 8 × EC = 120 → EC = **15**.
4. 5.5/4 = h/20 → 4h = 110 → h = **27.5 feet**.
5. Area ratio = 25:100 = 1:4. Linear scale factor = √(1/4) = 1/2. Perimeter ratio = **1:2**.
