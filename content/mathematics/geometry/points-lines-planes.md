## Points, Lines, and Planes

Geometry begins with three undefined terms — point, line, and plane — that form the foundation of all geometric reasoning. They are called "undefined" not because they are mysterious, but because they are so fundamental that defining them in terms of simpler concepts is impossible. Instead, we describe them and work with their properties.

---

## The Three Undefined Terms

### Point

A **point** is a location in space. It has no size, no length, no width, no depth — just position. Points are named with capital letters: A, B, P, Q.

On paper we draw a point as a small dot, but that dot has physical size while the mathematical point does not. The dot is a representation, not the thing itself.

### Line

A **line** is a straight, one-dimensional figure that extends forever in both directions. It has infinite length but no width. A line is defined by any two points on it.

Notation: A line through points A and B is written as line AB (with a double arrow above to indicate infinite extension). Lines can also be named with lowercase letters: line l.

A line contains infinitely many points. Any two distinct points determine exactly one line.

### Plane

A **plane** is a flat, two-dimensional surface that extends infinitely in all directions. A plane has length and width but no thickness. Three non-collinear points determine exactly one plane.

Planes are named with single capital letters: Plane M, or by three non-collinear points: Plane ABC.

---

## Key Terms Built from These

**Collinear:** Points that lie on the same line are collinear. Three or more points can be collinear or non-collinear.

**Coplanar:** Points that lie in the same plane are coplanar.

**Line segment:** The portion of a line between two endpoints, including the endpoints. Segment AB (written with a bar above AB) has a finite, measurable length.

**Ray:** A portion of a line with one endpoint that extends forever in one direction. Ray AB starts at A, passes through B, and continues beyond. Notation: AB with a right-pointing arrow above.

**Midpoint:** The point on a segment exactly halfway between the two endpoints. If M is the midpoint of AB, then AM = MB.

---

## Relationships Between Points, Lines, and Planes

### Two Points
Any two distinct points determine exactly one line. The line passes through both.

### Three Points
- If they're collinear: they all lie on one line.
- If they're non-collinear: they determine exactly one plane.

### Two Lines
In a plane, two distinct lines either:
- **Intersect** at exactly one point
- **Are parallel** (never meet; same direction, different positions)

In three-dimensional space, lines can also be **skew** — non-parallel, non-intersecting lines in different planes. (Like the left lane of a highway and a perpendicular road on an overpass — they don't touch and aren't parallel.)

### Line and Plane
A line and a plane can:
- **Intersect** at exactly one point (the line passes through the plane)
- **Be parallel** (the line never touches the plane)
- **Be contained in the plane** (the line lies entirely within it)

### Two Planes
Two distinct planes either:
- **Intersect** in exactly one line
- **Are parallel** (never meet)

---

## Measuring Segments

Segment length is a number. If A is at position 2 on a number line and B is at position 7, then AB = |7 - 2| = 5.

**Segment Addition Postulate:** If point B is between points A and C on a segment, then AB + BC = AC. This lets you find a missing segment length.

**Example:** On segment AC, B is between A and C. AB = 8 and AC = 15. Find BC.
- BC = AC - AB = 15 - 8 = **7**

**Example:** A is at coordinate -3 and C is at coordinate 9. B is the midpoint. What coordinate is B?
- Midpoint = (-3 + 9)/2 = 6/2 = **3**

---

## The Distance Formula

In the coordinate plane, the distance between two points (x₁, y₁) and (x₂, y₂) is:

```
d = √((x₂ - x₁)² + (y₂ - y₁)²)
```

This is the Pythagorean theorem applied to coordinate geometry.

**Example:** Distance from (-2, 1) to (4, 9):
- d = √((4-(-2))² + (9-1)²) = √(36 + 64) = √100 = **10**

---

## Postulates vs. Theorems

Geometry is a logical system built on a few accepted starting assumptions and derived truths.

**Postulates** (axioms): Statements accepted as true without proof. They are the starting rules.
- "Two points determine a line" is a postulate.

**Theorems:** Statements that can be proven using postulates, definitions, and previously proven theorems.
- "If two lines intersect, they form four angles that are pairwise equal" is a theorem.

This deductive structure — starting from agreed-upon axioms and proving everything else — is what makes geometry a model of logical reasoning.

---

## Practice

1. A segment has endpoints at (0, 0) and (6, 8). Find its length.
2. B is the midpoint of AC. If AB = 4x + 1 and BC = 7x - 11, find x and the length of AC.
3. Three points: A(0, 0), B(4, 0), C(0, 3). Are they collinear?
4. How many lines pass through two distinct points?
5. Two flat walls of a room meet. What geometric object is their intersection?

**Answers:**
1. d = √(36 + 64) = √100 = **10**
2. AB = BC (midpoint), so 4x + 1 = 7x - 11 → 3x = 12 → x = 4. AB = 17, BC = 17, AC = **34**.
3. Check: if collinear, they'd all lie on one line. A and B are on the x-axis (y = 0). C is at (0, 3), which is NOT on the x-axis. **Not collinear.**
4. **Exactly one.**
5. A **line** (the corner edge where the two planes meet).
