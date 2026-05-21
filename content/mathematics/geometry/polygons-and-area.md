## Polygons and Area

A polygon is a closed figure with straight sides. Triangles are the simplest polygon (3 sides), but the family extends to quadrilaterals (4), pentagons (5), hexagons (6), and so on. Understanding polygon properties — angle sums, side relationships, and area formulas — is essential for architecture, design, and any work involving physical shapes.

---

## Polygon Vocabulary

**Vertex:** A corner of a polygon where two sides meet.
**Side:** A line segment forming the boundary.
**Diagonal:** A segment connecting two non-adjacent vertices.
**Regular polygon:** All sides are equal AND all angles are equal.
**Convex polygon:** All interior angles are less than 180°. No part of the polygon "caves in."
**Concave polygon:** At least one interior angle exceeds 180°. The polygon has a "dent."

---

## Interior Angle Sums

**Triangle:** 180°

**Quadrilateral:** 360° (it can always be split into two triangles)

**General formula:** For a polygon with n sides:
```
Sum of interior angles = (n - 2) × 180°
```

| Polygon | Sides | Interior Angle Sum |
| :--- | :--- | :--- |
| Triangle | 3 | 180° |
| Quadrilateral | 4 | 360° |
| Pentagon | 5 | 540° |
| Hexagon | 6 | 720° |
| Octagon | 8 | 1,080° |
| Decagon | 10 | 1,440° |

**Each interior angle of a regular polygon:**
```
Measure = (n - 2) × 180° / n
```

Example: Each interior angle of a regular hexagon = (6-2) × 180° / 6 = 720°/6 = **120°**.

**Exterior angles:** For any convex polygon, the sum of exterior angles (one per vertex) is always **360°**. Always.

---

## Quadrilaterals: The Family

A quadrilateral is any four-sided polygon. The family has specialized members with increasingly strict requirements.

### Trapezoid (Trapezium)
One pair of parallel sides (the bases). The non-parallel sides are called **legs**.
- Isosceles trapezoid: the two legs are equal.

### Parallelogram
Two pairs of parallel sides. Properties:
- Opposite sides are equal and parallel.
- Opposite angles are equal.
- Consecutive angles are supplementary (sum to 180°).
- Diagonals bisect each other (cut each other in half).

### Rectangle
A parallelogram with four right angles.
- All parallelogram properties apply.
- Additionally: diagonals are equal in length.

### Rhombus
A parallelogram with all four sides equal.
- All parallelogram properties apply.
- Additionally: diagonals are perpendicular (meet at 90°).
- Diagonals bisect the vertex angles.

### Square
A rectangle AND a rhombus. All four sides equal and all four angles are 90°.
- Has all the properties of both rectangle and rhombus.
- Diagonals are equal, perpendicular, and bisect each other.

---

## Area Formulas

### Triangle
```
A = (1/2) × base × height
```
Height must be perpendicular to the base.

### Parallelogram (including Rectangle and Rhombus)
```
A = base × height
```
Height is the perpendicular distance between the parallel sides.

For a rectangle: A = length × width (since all angles are 90°, height = width).

For a rhombus using diagonals (d₁ and d₂):
```
A = (1/2) × d₁ × d₂
```

### Trapezoid
```
A = (1/2) × (b₁ + b₂) × height
```
b₁ and b₂ are the two parallel bases. Height is the perpendicular distance between them.

### Regular Polygon
```
A = (1/2) × perimeter × apothem
```
The **apothem** is the perpendicular distance from the center to the midpoint of a side.

### Irregular Polygons
Split into triangles (or rectangles and triangles) and find the total area by adding all pieces.

---

## Perimeter Formulas

**Any polygon:** Add all side lengths.

**Rectangle:** P = 2l + 2w or P = 2(l + w)
**Rhombus/Square:** P = 4s
**Regular n-gon:** P = n × s (where s = side length)

---

## Real-World Problem Solving

**Example:** A trapezoidal garden has parallel sides of 14 m and 22 m, with a height of 8 m. How much fencing is needed if one of the parallel sides borders a house?
- First find all sides. The legs can be found if you know the trapezoid's geometry, but if not given, assume the problem gives non-parallel sides.
- If the question asks for area: A = (1/2)(14 + 22)(8) = (1/2)(36)(8) = **144 m²**
- Fencing needed (excluding house side): perimeter minus the 22 m house side = perimeter - 22 (you'd need the leg lengths to complete this)

**Example:** A regular hexagon has side length 10 cm. Find the interior angle sum, each interior angle, and the perimeter.
- Sum: (6 - 2) × 180° = **720°**
- Each angle: 720°/6 = **120°**
- Perimeter: 6 × 10 = **60 cm**

**Example:** A room has the shape of a rectangle (12 ft × 8 ft) with a semicircle attached to one end. Find the total area.
- Rectangle: 12 × 8 = 96 ft²
- Semicircle (diameter = 8, radius = 4): (1/2)π(4²) = 8π ≈ 25.1 ft²
- Total: 96 + 25.1 ≈ **121.1 ft²**

---

## Practice

1. Find the sum of interior angles of a 9-sided polygon.
2. Each interior angle of a regular polygon is 150°. How many sides does it have?
3. A parallelogram has base 14 cm and height 9 cm. Find the area.
4. A trapezoid has parallel sides of 7 in and 11 in with a height of 6 in. Find the area.
5. A rhombus has diagonals of 10 ft and 16 ft. Find its area.
6. What is the exterior angle of a regular octagon?

**Answers:**
1. (9 - 2) × 180° = 7 × 180° = **1,260°**
2. Each angle = (n-2)(180)/n = 150 → 180n - 360 = 150n → 30n = 360 → n = **12 sides**
3. A = 14 × 9 = **126 cm²**
4. A = (1/2)(7 + 11)(6) = (1/2)(18)(6) = **54 in²**
5. A = (1/2)(10)(16) = **80 ft²**
6. Sum of exterior angles = 360°. Each = 360°/8 = **45°**
