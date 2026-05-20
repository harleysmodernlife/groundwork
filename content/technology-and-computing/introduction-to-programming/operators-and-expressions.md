## Operators and Expressions

Operators are the symbols that perform operations on values. An expression is any combination of values, variables, and operators that the computer evaluates to produce a result. This is how programs calculate, compare, and make decisions.

---

## Arithmetic Operators

The basic math operators work as expected:

```python
10 + 3    # 13 — addition
10 - 3    # 7  — subtraction
10 * 3    # 30 — multiplication
10 / 3    # 3.3333... — division (usually produces a float)
10 // 3   # 3  — integer division (floor, drops the decimal)
10 % 3    # 1  — modulo (remainder after division)
10 ** 3   # 1000 — exponentiation (10 to the power of 3)
```

**Modulo** is particularly useful for things like:
- Checking if a number is even: `number % 2 == 0`
- Cycling through a range: `index % total` wraps back to 0 when it reaches `total`

**Order of operations** follows standard math rules (PEMDAS): parentheses first, then exponentiation, then multiplication/division, then addition/subtraction. Use parentheses when in doubt.

```python
2 + 3 * 4     # 14 (multiplication first)
(2 + 3) * 4   # 20 (parentheses first)
```

---

## Comparison Operators

Comparison operators compare two values and produce a boolean (True or False).

```python
5 == 5     # True  — equal to
5 != 3     # True  — not equal to
5 > 3      # True  — greater than
5 < 3      # False — less than
5 >= 5     # True  — greater than or equal to
5 <= 4     # False — less than or equal to
```

**Common mistake:** `=` is assignment (putting a value into a variable). `==` is comparison (checking if two values are equal). Confusing them is one of the most frequent beginner errors.

```python
x = 5        # Assignment: x now holds 5
x == 5       # Comparison: is x equal to 5? Produces True
```

---

## Logical Operators

Logical operators combine boolean values.

**and** — both must be True:
```python
age >= 18 and has_ticket    # True only if both are True
```

**or** — at least one must be True:
```python
is_admin or is_owner    # True if either is True
```

**not** — reverses a boolean:
```python
not is_logged_in    # True if is_logged_in is False
```

These are how you build compound conditions:

```python
# Eligible for discount if over 65 OR under 12
eligible = age > 65 or age < 12

# Can access if logged in AND has permission
can_access = is_logged_in and has_permission
```

**Short-circuit evaluation:** In most languages, `and` and `or` stop evaluating as soon as the result is determined. If the left side of `and` is False, the right side is never checked — the result is already False. This matters when the right side has a side effect or might cause an error.

---

## String Operators

Strings support some operators too:

```python
"Hello, " + "Alice"    # "Hello, Alice" — concatenation
"ha" * 3               # "hahaha" — repetition
"Alice" == "Alice"     # True — comparison
"Alice" != "Bob"       # True
"B" > "A"              # True — string comparison is alphabetical
```

**Membership:**
```python
"ell" in "Hello"    # True — is the substring present?
"xyz" in "Hello"    # False
```

---

## Assignment Operators

Beyond basic assignment (`=`), shorthand operators combine assignment with arithmetic:

```python
score = 10
score += 5    # same as: score = score + 5  → 15
score -= 3    # same as: score = score - 3  → 12
score *= 2    # same as: score = score * 2  → 24
score /= 4    # same as: score = score / 4  → 6.0
score //= 2   # same as: score = score // 2 → 3
score %= 2    # same as: score = score % 2  → 1
```

These are just shorthand — they don't do anything different, just shorter to write.

---

## Expressions vs. Statements

An **expression** produces a value:
```python
2 + 3               # expression: evaluates to 5
age >= 18           # expression: evaluates to True or False
"Hello, " + name    # expression: evaluates to a string
```

A **statement** performs an action:
```python
x = 5               # assignment statement
print("Hello")      # function call statement
```

Many statements contain expressions:
```python
total = price * quantity    # the right side is an expression; the whole thing is a statement
```

---

## Operator Precedence

When multiple operators appear in one expression, precedence rules determine the order of evaluation:

1. Parentheses `()`
2. Exponentiation `**`
3. Unary operators (`-x`, `not x`)
4. `*`, `/`, `//`, `%`
5. `+`, `-`
6. Comparison operators (`==`, `!=`, `<`, `>`, `<=`, `>=`)
7. `not`
8. `and`
9. `or`

When in doubt, use parentheses to make the intended order explicit. Readable code is more important than saving keystrokes.

```python
# Unclear without parentheses
result = a or b and c    # and has higher precedence than or

# Clear with parentheses
result = a or (b and c)  # same result, but obvious
```

---

## Common Mistakes

**Using `=` instead of `==` in a comparison:**
```python
if x = 5:    # Error (or silent bug in some languages)
if x == 5:   # Correct
```

**Comparing the wrong types:**
```python
"5" == 5     # False in most languages — different types
int("5") == 5    # True — convert first
```

**Forgetting that division of integers may produce a float:**
```python
total = 10 / 2    # In Python 3, this is 5.0, not 5
total = 10 // 2   # This gives 5 (integer)
```
