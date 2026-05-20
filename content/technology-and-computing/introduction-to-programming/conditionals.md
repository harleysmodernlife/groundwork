## Conditionals

A program that does the same thing every time, regardless of circumstances, isn't very useful. Conditionals let a program make decisions — do this if a condition is true, otherwise do something else. They're the mechanism that gives programs adaptability.

---

## The if Statement

The simplest conditional: if a condition is true, execute a block of code.

```python
age = 20

if age >= 18:
    print("You are an adult.")
```

The condition (`age >= 18`) evaluates to True or False. If True, the indented block runs. If False, it's skipped.

**Indentation:** In Python, indentation (typically 4 spaces) defines the block. Other languages use curly braces `{}`:

```javascript
if (age >= 18) {
    console.log("You are an adult.");
}
```

The concept is identical — only the syntax differs.

---

## if / else

Two branches — one for True, one for False:

```python
age = 15

if age >= 18:
    print("You can vote.")
else:
    print("You cannot vote yet.")
```

Exactly one branch runs. If the condition is True, the first block runs. If False, the `else` block runs.

---

## if / elif / else

Multiple conditions checked in sequence:

```python
score = 75

if score >= 90:
    grade = "A"
elif score >= 80:
    grade = "B"
elif score >= 70:
    grade = "C"
elif score >= 60:
    grade = "D"
else:
    grade = "F"

print(f"Grade: {grade}")
```

The conditions are checked in order, top to bottom. The first one that's True runs, and the rest are skipped. If none match, the `else` block runs (if present).

**Important:** Order matters. If you put `score >= 70` before `score >= 80`, a score of 85 would match the first condition and get "C" — wrong. Always order from most specific to least specific.

---

## Nested Conditionals

Conditionals can contain other conditionals:

```python
age = 25
has_ticket = True

if age >= 18:
    if has_ticket:
        print("Welcome in.")
    else:
        print("You need a ticket.")
else:
    print("You must be 18 or older.")
```

Nesting works, but deep nesting gets hard to read quickly. Often you can flatten with `and`:

```python
if age >= 18 and has_ticket:
    print("Welcome in.")
elif age < 18:
    print("You must be 18 or older.")
else:
    print("You need a ticket.")
```

---

## Truthiness

In most languages, conditions don't have to be explicit True/False — many values are treated as "truthy" or "falsy":

**Falsy values (treated as False):**
- `False`
- `0` (zero)
- `""` (empty string)
- `[]` (empty list)
- `None`

**Truthy values (everything else):**
- `True`
- Any non-zero number
- Any non-empty string
- Any non-empty list

```python
name = ""

if name:            # empty string is falsy
    print(f"Hello, {name}")
else:
    print("No name provided")
```

This lets you write concise checks: `if user:` instead of `if user != None and user != ""`

---

## Comparison Chaining

Python lets you chain comparisons naturally:

```python
age = 25

if 18 <= age < 65:    # equivalent to: age >= 18 and age < 65
    print("Working age")
```

Most other languages require `and`:
```javascript
if (age >= 18 && age < 65) { ... }
```

---

## The Ternary / Conditional Expression

A shorthand for simple if/else that produces a value:

```python
# Full if/else:
if age >= 18:
    status = "adult"
else:
    status = "minor"

# Ternary expression (one line):
status = "adult" if age >= 18 else "minor"
```

JavaScript:
```javascript
const status = age >= 18 ? "adult" : "minor";
```

Use this when the logic is simple and the result is readable. Don't compress complex logic into a single line just to save lines.

---

## Switch / Match Statements

For matching a single value against multiple specific cases, many languages have a switch or match statement:

```python
# Python 3.10+ match statement
day = "Monday"

match day:
    case "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday":
        print("Weekday")
    case "Saturday" | "Sunday":
        print("Weekend")
    case _:
        print("Unknown day")
```

JavaScript:
```javascript
switch (day) {
    case "Monday":
    case "Tuesday":
        console.log("Early week");
        break;
    case "Saturday":
    case "Sunday":
        console.log("Weekend");
        break;
    default:
        console.log("Other day");
}
```

Note the `break` in JavaScript — without it, execution "falls through" to the next case. This is a common JavaScript gotcha.

---

## Common Mistakes

**Using `=` instead of `==`:**
```python
if x = 5:    # Assignment, not comparison — syntax error in Python
if x == 5:   # Correct comparison
```

**Off-by-one errors in range checks:**
```python
# "at least 18" — which is right?
if age > 18:     # Wrong: requires 19+
if age >= 18:    # Correct: 18 is included
```

**Unreachable conditions due to wrong order:**
```python
if score >= 60:    # This catches everything ≥ 60
    grade = "D"
elif score >= 90:  # This is unreachable — 90+ already caught above
    grade = "A"
```

**Forgetting that floating-point comparison can fail:**
```python
0.1 + 0.2 == 0.3    # False — floating-point imprecision
abs((0.1 + 0.2) - 0.3) < 0.0001    # Better: check within a small tolerance
```
