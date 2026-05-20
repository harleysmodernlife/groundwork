## Functions

Functions are reusable blocks of code you define once and call by name whenever you need them. They're the most important tool for managing complexity in programs — breaking a large problem into smaller, named, understandable pieces.

---

## Defining and Calling a Function

```python
def greet(name):
    message = f"Hello, {name}!"
    print(message)

greet("Alice")    # Hello, Alice!
greet("Bob")      # Hello, Bob!
```

**`def`** declares a function. The name (`greet`) is how you call it later. The parentheses contain the **parameters** — the inputs the function expects. The indented block is the function body — the code that runs when the function is called.

Calling the function with different arguments produces different results without duplicating code.

---

## Parameters and Arguments

**Parameters** are the variable names in the function definition.
**Arguments** are the actual values passed when calling the function.

```python
def add(a, b):       # a and b are parameters
    return a + b

result = add(3, 5)   # 3 and 5 are arguments
print(result)        # 8
```

The arguments are assigned to the parameters in order: `a = 3`, `b = 5`.

**Multiple parameters:**
```python
def describe_person(name, age, city):
    print(f"{name} is {age} years old, lives in {city}.")

describe_person("Alice", 30, "Chicago")
```

**Default parameter values:**
```python
def greet(name, greeting="Hello"):
    print(f"{greeting}, {name}!")

greet("Alice")              # Hello, Alice!
greet("Alice", "Hi")        # Hi, Alice!
greet("Alice", "Good day")  # Good day, Alice!
```

Parameters with defaults are optional when calling the function.

**Keyword arguments:**
```python
describe_person(age=30, city="Chicago", name="Alice")
# Order doesn't matter when using keyword arguments
```

---

## Return Values

A function can compute a result and send it back with `return`.

```python
def square(n):
    return n * n

result = square(5)    # result is 25
print(square(4) + 1)  # 17
```

Without `return`, a function returns `None`.

```python
def add(a, b):
    result = a + b
    # No return — function returns None

x = add(3, 5)
print(x)    # None — easy mistake to make
```

**Returning multiple values:**
```python
def min_max(numbers):
    return min(numbers), max(numbers)

low, high = min_max([4, 1, 9, 2, 7])
print(low, high)    # 1 9
```

---

## Scope

Variables defined inside a function are **local** — they only exist within that function and disappear when the function ends.

```python
def calculate():
    x = 10      # local variable
    return x

calculate()
print(x)    # Error: x is not defined here
```

Variables defined outside all functions are **global** — accessible everywhere.

```python
name = "Alice"    # global

def greet():
    print(f"Hello, {name}")    # can read global

greet()    # Hello, Alice
```

Modifying a global variable from inside a function requires explicitly declaring it global (in Python). Generally, avoid modifying globals — it makes code harder to understand and debug. Instead, pass values in as parameters and return results.

---

## Why Functions Matter

**Avoid repetition:** Write the logic once, call it many times. If the logic needs to change, change it in one place.

```python
# Without function — repeated logic
tax1 = price1 * 0.08
tax2 = price2 * 0.08
tax3 = price3 * 0.08

# With function — single definition
def calculate_tax(price):
    return price * 0.08

tax1 = calculate_tax(price1)
tax2 = calculate_tax(price2)
tax3 = calculate_tax(price3)
```

**Organize code:** A program broken into named functions is much easier to read than one long stream of instructions.

```python
def load_data(filename):
    ...

def process_records(records):
    ...

def generate_report(processed_data):
    ...

def main():
    data = load_data("records.csv")
    processed = process_records(data)
    generate_report(processed)
```

**Test independently:** You can test each function separately, making bugs easier to isolate.

---

## Pure Functions

A **pure function** always returns the same output for the same input and has no side effects (doesn't modify external state, print, write files, etc.).

```python
def add(a, b):
    return a + b    # always returns a + b, nothing else
```

Pure functions are easy to test and reason about. They don't depend on or affect anything outside themselves.

**Impure function** (has side effects):
```python
log = []

def add_and_log(a, b):
    result = a + b
    log.append(result)    # modifies external state
    return result
```

Not all functions can be pure — I/O and state changes are necessary. But keeping functions pure when possible makes code more reliable.

---

## Functions Calling Functions

Functions can call other functions. This is how you build complex behavior from simple pieces.

```python
def square(n):
    return n * n

def sum_of_squares(a, b):
    return square(a) + square(b)

print(sum_of_squares(3, 4))    # 25
```

---

## Recursion

A function can call itself. This is called recursion. Classic example: factorial.

```python
def factorial(n):
    if n == 0:
        return 1
    return n * factorial(n - 1)

factorial(5)    # 5 * 4 * 3 * 2 * 1 = 120
```

Every recursive function needs a base case (the condition that stops it — `n == 0` here) or it calls itself forever and crashes. Recursion is useful for tree-shaped problems; for simple repetition, a loop is usually clearer.

---

## Naming Functions

Function names should describe what the function does — typically a verb or verb phrase:

- `calculate_tax`, `get_user`, `validate_email`, `send_notification`
- Not: `func1`, `doStuff`, `x`

Clear names make code readable without needing comments to explain what each function does.
