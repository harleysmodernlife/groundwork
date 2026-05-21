## The Pythagorean Theorem

The Pythagorean theorem is one of the most famous and useful results in all of mathematics. It describes a precise relationship between the three sides of any right triangle — a relationship that has been used to build structures, navigate ships, and survey land for over two thousand years. If you know any two sides of a right triangle, you can always find the third.

---

## The Theorem

In a right triangle:
- The two shorter sides are called **legs** (commonly labeled a and b)
- The longest side, opposite the right angle, is called the **hypotenuse** (labeled c)

**The theorem states:**

```
a² + b² = c²
```

The sum of the squares of the two legs equals the square of the hypotenuse.

---

## Visualizing It

A 3-4-5 right triangle is the simplest illustration:
- Leg a = 3: a² = 9
- Leg b = 4: b² = 16
- Hypotenuse c = 5: c² = 25
- Check: 9 + 16 = 25. ✓

This works because geometrically, the area of a square built on the hypotenuse equals the combined areas of squares built on the two legs. You can literally cut and rearrange the pieces.

---

## Finding the Hypotenuse

If you know both legs and want the hypotenuse:

```
c = √(a² + b²)
```

**Example:** A right triangle has legs of 5 feet and 12 feet. Find the hypotenuse.
- c² = 5² + 12² = 25 + 144 = 169
- c = √169 = **13 feet**

**Example:** Legs are 7 and 9. Find the hypotenuse.
- c² = 7² + 9² = 49 + 81 = 130
- c = √130 ≈ **11.4**

When the answer isn't a perfect square, use a calculator or leave the answer as √130.

---

## Finding a Missing Leg

If you know one leg and the hypotenuse, rearrange the formula:

```
a² = c² - b²   →   a = √(c² - b²)
```

**Example:** A right triangle has a hypotenuse of 17 and one leg of 8. Find the other leg.
- a² = 17² - 8² = 289 - 64 = 225
- a = √225 = **15**

**Example:** Hypotenuse is 10, one leg is 6. Find the other leg.
- a² = 10² - 6² = 100 - 36 = 64
- a = √64 = **8**

---

## Pythagorean Triples

Certain sets of three whole numbers satisfy a² + b² = c² exactly. These are **Pythagorean triples** and they're worth recognizing because they come up frequently in real problems.

**Common triples:**
- 3, 4, 5
- 5, 12, 13
- 8, 15, 17
- 7, 24, 25

Any multiple of a triple is also a triple:
- 3-4-5 → 6-8-10, 9-12-15, 15-20-25
- 5-12-13 → 10-24-26

Recognizing a triple saves calculation time.

---

## Verifying a Right Triangle

Given three side lengths, use the theorem in reverse: if a² + b² = c² (where c is the longest side), it's a right triangle. If not, it isn't.

**Example:** Are sides 9, 12, 15 a right triangle?
- Longest side: 15 (this would be c)
- 9² + 12² = 81 + 144 = 225
- 15² = 225
- 225 = 225. ✓ **Yes, right triangle.** (It's a 3-4-5 triple scaled by 3.)

**Example:** Are sides 4, 6, 9 a right triangle?
- 4² + 6² = 16 + 36 = 52
- 9² = 81
- 52 ≠ 81. **Not a right triangle.**

---

## Real-World Applications

**Construction — checking for square corners:** A carpenter uses the 3-4-5 rule. From a corner, measure 3 feet along one wall and 4 feet along the other. If the diagonal between those two points is exactly 5 feet, the corner is a perfect right angle. Scale up for larger buildings: 6-8-10 or 9-12-15 feet.

**Finding diagonal distances:** A TV is 40 inches wide and 30 inches tall. What's the screen size (diagonal)?
- d² = 40² + 30² = 1,600 + 900 = 2,500
- d = **50 inches** (a 3-4-5 triple scaled by 10)

**Ladder safety:** A 20-foot ladder leans against a wall. Safety guidelines say the base should be placed 7 feet from the wall. How high does the ladder reach?
- h² = 20² - 7² = 400 - 49 = 351
- h = √351 ≈ **18.7 feet**

**Navigation:** You walk 8 miles east and 6 miles north. How far from your starting point?
- d² = 8² + 6² = 64 + 36 = 100
- d = **10 miles** (another 3-4-5 triple, scaled by 2)

---

## The Converse (and Its Limits)

The **converse** of the Pythagorean theorem: if a² + b² = c² for three lengths, then the triangle IS a right triangle.

However, the theorem applies ONLY to right triangles. You cannot use a² + b² = c² on any triangle — only the specific one where c is the hypotenuse (the side opposite the right angle).

For non-right triangles, there are other tools (the Law of Cosines, covered in Trigonometry).

---

## Practice

1. Find the hypotenuse of a right triangle with legs 9 and 12.
2. A right triangle has hypotenuse 25 and one leg 7. Find the other leg.
3. Do sides 11, 60, 61 form a right triangle?
4. A 15-foot ladder leans against a wall with the base 9 feet from the wall. How high on the wall does it reach?
5. A rectangular field is 48 meters by 55 meters. How long is the diagonal path from one corner to the opposite corner?

**Answers:**
1. c² = 81 + 144 = 225 → c = **15**
2. a² = 625 - 49 = 576 → a = **24**
3. 11² + 60² = 121 + 3,600 = 3,721 = 61². **Yes.**
4. h² = 15² - 9² = 225 - 81 = 144 → h = **12 feet**
5. d² = 48² + 55² = 2,304 + 3,025 = 5,329 → d = √5,329 = **73 meters**
