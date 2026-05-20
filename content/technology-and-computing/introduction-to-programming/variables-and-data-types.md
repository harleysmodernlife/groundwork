## Variables and Data Types

A program needs to store and work with information. Variables are how programs hold information while they run. Data types determine what kind of information a variable holds and what you can do with it.

---

## Variables

A variable is a named container for a value. You give it a name, assign a value, and can read or change that value later.

```python
name = "Alice"
age = 30
price = 9.99
is_logged_in = True
```

The name is how you refer to the value later in your code. The value can change — that's why it's called a variable.

```python
score = 0
score = score + 10   # now score is 10
score = score + 5    # now score is 15
```

**Variable naming:**
- Names are case-sensitive: `score` and `Score` are different variables
- Names can contain letters, numbers, and underscores — no spaces
- By convention, most languages use either `snake_case` (words separated by underscores) or `camelCase` (each word capitalized after the first)
- Names should describe what the variable holds: `user_age` is better than `x`

---

## Data Types

The data type of a value determines what it is and what operations make sense for it.

### Integer (int)
Whole numbers — no decimal point.

```python
count = 42
temperature = -5
year = 2024
```

You can add, subtract, multiply, divide integers. Division of two integers may produce a decimal (depending on the language).

### Float (floating-point)
Numbers with decimal points. Stored in a format that can represent very large and very small numbers, but with limited precision.

```python
price = 19.99
pi = 3.14159
```

The floating-point precision problem: `0.1 + 0.2` in most languages gives `0.30000000000000004`. This is a fundamental limitation of how computers represent decimal numbers in binary. For financial calculations, use libraries designed for decimal precision.

### String
Text — any sequence of characters, enclosed in quotes.

```python
first_name = "Alice"
message = 'Hello, world!'
empty = ""
```

Strings can contain letters, numbers, punctuation, spaces — anything. The quotes are delimiters, not part of the value.

**String operations:**
```python
greeting = "Hello, " + first_name    # concatenation: "Hello, Alice"
length = len(first_name)             # length: 5
upper = first_name.upper()           # "ALICE"
```

### Boolean
A true/false value. Named after mathematician George Boole.

```python
is_active = True
has_permission = False
```

Booleans come from comparisons:
```python
age = 20
is_adult = age >= 18    # True
is_teenager = age < 18  # False
```

---

## Type Matters

The type of a variable determines what operations are valid. Adding two numbers is different from adding two strings:

```python
2 + 3        # 5 (arithmetic addition)
"2" + "3"    # "23" (string concatenation — joining text)
```

Adding a number and a string is usually an error:
```python
"Total: " + 100    # Error in most languages
"Total: " + str(100)    # "Total: 100" — convert first
```

This is type mismatch — one of the most common beginner errors. When you get unexpected results or errors around arithmetic or comparisons, check whether your values are the type you think they are.

---

## Dynamic vs. Static Typing

**Dynamically typed languages (Python, JavaScript, Ruby):** The variable's type is determined by whatever value you put in it. The same variable can hold different types at different times. Types are checked when the code runs.

```python
x = 5       # x is an integer
x = "hello" # now x is a string — perfectly valid
```

**Statically typed languages (Java, C, Rust, TypeScript):** You declare the type when you create the variable. The compiler checks types before the code runs and rejects type mismatches.

```java
int age = 30;
age = "thirty";  // Error: can't put a string in an int variable
```

Static typing catches a class of bugs before code runs. Dynamic typing gives more flexibility. Both approaches are used in production; the "better" one depends on context and preference.

---

## Constants

A constant is like a variable, but its value doesn't change after being set. Languages mark constants differently:

```python
# Python convention: all caps signals "don't change this"
MAX_RETRIES = 3
PI = 3.14159
```

```javascript
// JavaScript: const keyword prevents reassignment
const MAX_RETRIES = 3;
```

Use constants for values that should never change during the program's execution. This makes code easier to read and prevents accidental modification.

---

## Null and None

Most languages have a special value representing "nothing" or "no value":

- Python: `None`
- JavaScript: `null` and `undefined`
- Java/C: `null`

```python
user = None    # user hasn't been set yet
```

Trying to use a null/None value as if it were a real value is a common source of errors ("null pointer exception," "cannot read properties of null"). Always check whether a value might be null before using it.

---

## The Practical Rules

- Name your variables clearly — code is read more often than it's written
- Pay attention to types — many bugs come from unexpected type mismatches
- Use constants for values that shouldn't change
- Check for null when a value might not be present
- When something produces the wrong output, print out the value and type of your variables to see what's actually in them
