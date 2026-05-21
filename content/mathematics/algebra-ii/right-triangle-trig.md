## Right Triangle Trigonometry: SOH-CAH-TOA

Trigonometry is the study of relationships between angles and side lengths in triangles. Right triangle trigonometry uses the Pythagorean theorem and three fundamental ratios to connect angles to sides. These ratios — sine, cosine, and tangent — are among the most widely used functions in all of mathematics, engineering, physics, and navigation.

---

## The Setup: A Right Triangle

In any right triangle, label the sides relative to one of the non-right angles (call it θ):

- **Hypotenuse:** The side opposite the right angle. Always the longest side.
- **Opposite:** The side directly across from angle θ.
- **Adjacent:** The side next to angle θ (but not the hypotenuse).

As θ changes, the lengths of the opposite and adjacent sides change relative to the hypotenuse, but the ratios stay the same for any right triangle with the same angle.

---

## The Three Primary Ratios

**SOH-CAH-TOA** is the memory device:

```
sin(θ) = Opposite / Hypotenuse        (SOH)
cos(θ) = Adjacent / Hypotenuse        (CAH)
tan(θ) = Opposite / Adjacent          (TOA)
```

These ratios are defined for any angle θ and any right triangle containing that angle. They depend only on the angle, not the size of the triangle — this is what makes them powerful for scaling.

**Example:** In a right triangle with legs 3 and 4, hypotenuse 5, and angle θ opposite the side of length 3:
- sin(θ) = 3/5 = 0.6
- cos(θ) = 4/5 = 0.8
- tan(θ) = 3/4 = 0.75

**Example:** In a right triangle where the hypotenuse is 10 and an angle θ = 30°:
- Opposite = 10 × sin(30°) = 10 × 0.5 = **5**
- Adjacent = 10 × cos(30°) = 10 × (√3/2) ≈ 10 × 0.866 ≈ **8.66**

---

## The Three Reciprocal Ratios

Three additional ratios are the reciprocals of the primary three:

```
csc(θ) = 1/sin(θ) = Hypotenuse / Opposite   (cosecant)
sec(θ) = 1/cos(θ) = Hypotenuse / Adjacent   (secant)
cot(θ) = 1/tan(θ) = Adjacent / Opposite     (cotangent)
```

---

## Special Angles: Exact Values

Three angles appear constantly and their trig values should be memorized:

| Angle | sin | cos | tan |
| :--- | :--- | :--- | :--- |
| 30° | 1/2 | √3/2 | 1/√3 = √3/3 |
| 45° | √2/2 | √2/2 | 1 |
| 60° | √3/2 | 1/2 | √3 |

**The 30-60-90 triangle:** sides in ratio 1 : √3 : 2.
**The 45-45-90 triangle:** sides in ratio 1 : 1 : √2 (isosceles right triangle).

---

## Finding Angles: Inverse Trig Functions

If you know a ratio and want the angle, use the **inverse functions:**

- sin⁻¹(x) gives the angle whose sine is x. Also written arcsin(x).
- cos⁻¹(x) gives the angle whose cosine is x. Also written arccos(x).
- tan⁻¹(x) gives the angle whose tangent is x. Also written arctan(x).

**Example:** A right triangle has opposite side 7 and hypotenuse 11. Find the angle.
- sin(θ) = 7/11 → θ = sin⁻¹(7/11) ≈ sin⁻¹(0.636) ≈ **39.5°**

**Example:** Legs are 5 and 8. Find the angle between the hypotenuse and the longer leg.
- tan(θ) = 5/8 (opposite = 5, adjacent = 8)
- θ = tan⁻¹(0.625) ≈ **32°**

---

## Solving Right Triangles

"Solving" a triangle means finding all missing sides and angles. For a right triangle:
- One angle is always 90°.
- The other two angles sum to 90°.
- If you know one side and one angle (or two sides), you can find everything else.

**Example:** A right triangle has hypotenuse 15 and one angle of 40°. Find the other sides and angle.

- Opposite = 15 × sin(40°) ≈ 15 × 0.643 ≈ **9.64**
- Adjacent = 15 × cos(40°) ≈ 15 × 0.766 ≈ **11.49**
- Third angle = 90° - 40° = **50°**

**Example:** Legs are 9 and 12. Find all angles and the hypotenuse.

- Hypotenuse = √(81 + 144) = √225 = 15
- θ₁ = tan⁻¹(9/12) = tan⁻¹(0.75) ≈ 36.87° ≈ **36.9°**
- θ₂ = 90° - 36.9° = **53.1°**

---

## Applications

**Angle of elevation:** The angle measured upward from horizontal to a line of sight.
**Angle of depression:** The angle measured downward from horizontal to a line of sight.

**Example:** You are 80 feet from the base of a building. The angle of elevation to the top is 52°. How tall is the building?

- tan(52°) = height/80
- height = 80 × tan(52°) ≈ 80 × 1.28 ≈ **102.4 feet**

**Example:** From the top of a 60-foot cliff, the angle of depression to a boat is 30°. How far is the boat from the base of the cliff?

- The angle of depression equals the angle at the boat's level (alternate interior angles with the horizontal).
- tan(30°) = 60/distance
- distance = 60/tan(30°) = 60/(1/√3) = 60√3 ≈ **103.9 feet**

**Example — Navigation:** A ship travels 20 miles east and 15 miles north. What angle does its path make with the north direction?

- tan(θ) = 20/15 → θ = tan⁻¹(4/3) ≈ **53.1° from north**

---

## Practice

1. In a right triangle with hypotenuse 13 and one leg 5, find the trig ratios for the angle opposite the leg of length 5.
2. A ladder 12 feet long leans against a wall at a 65° angle with the ground. How high does it reach?
3. A roof rises 6 feet over a horizontal run of 10 feet. Find the angle of inclination.
4. From a lighthouse 50 meters tall, a ship is spotted at an angle of depression of 18°. How far away is the ship?
5. Find all sides and angles of a right triangle with one leg 8 and opposite angle 35°.

**Answers:**
1. Other leg = 12; sin(θ) = 5/13 ≈ 0.385; cos(θ) = 12/13 ≈ 0.923; tan(θ) = 5/12 ≈ 0.417.
2. Height = 12 × sin(65°) ≈ 12 × 0.906 ≈ **10.87 feet**
3. θ = tan⁻¹(6/10) = tan⁻¹(0.6) ≈ **31°**
4. tan(18°) = 50/distance → distance = 50/tan(18°) ≈ 50/0.3249 ≈ **153.9 meters**
5. The 8 is opposite the 35° angle. Hypotenuse = 8/sin(35°) ≈ 8/0.574 ≈ 13.93. Adjacent = 8/tan(35°) ≈ 8/0.700 ≈ 11.43. Third angle = 55°.
