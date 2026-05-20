## Loops

Loops let you repeat instructions without writing them out multiple times. Instead of writing `print(1)`, `print(2)`, `print(3)` ... `print(100)`, you write the instruction once and tell the computer to repeat it.

---

## The for Loop

A `for` loop repeats a block of code a specific number of times, or once for each item in a collection.

**Iterating over a range of numbers:**
```python
for i in range(5):
    print(i)
# Prints: 0, 1, 2, 3, 4
```

`range(5)` produces 0, 1, 2, 3, 4 — five numbers starting from 0. The variable `i` takes each value in turn.

`range(start, stop)` — starts at `start`, goes up to but not including `stop`:
```python
for i in range(1, 6):
    print(i)
# Prints: 1, 2, 3, 4, 5
```

`range(start, stop, step)` — control the step size:
```python
for i in range(0, 10, 2):
    print(i)
# Prints: 0, 2, 4, 6, 8

for i in range(10, 0, -1):
    print(i)
# Prints: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
```

**Iterating over a list:**
```python
fruits = ["apple", "banana", "cherry"]

for fruit in fruits:
    print(fruit)
# Prints: apple, banana, cherry
```

The loop variable (`fruit`) takes each item's value in sequence.

**Iterating over a string:**
```python
for character in "Hello":
    print(character)
# Prints: H, e, l, l, o
```

---

## The while Loop

A `while` loop repeats as long as a condition is True.

```python
count = 0

while count < 5:
    print(count)
    count += 1
# Prints: 0, 1, 2, 3, 4
```

On each iteration, the condition is checked. If still True, the loop body runs. If False, the loop stops.

**Infinite loops:** If the condition never becomes False, the loop runs forever. This is usually a bug.

```python
# Bug: count never changes, loop runs forever
while count < 5:
    print(count)
    # Forgot count += 1
```

Use `while` when you don't know in advance how many iterations you need — when you're waiting for something to happen or repeating until a condition is met.

```python
# Keep asking until valid input
user_input = ""
while user_input not in ["yes", "no"]:
    user_input = input("Please enter 'yes' or 'no': ")
```

---

## break and continue

**break:** Exit the loop immediately, regardless of the condition.

```python
for i in range(10):
    if i == 5:
        break
    print(i)
# Prints: 0, 1, 2, 3, 4
# Stops when i reaches 5
```

**continue:** Skip the rest of the current iteration and go to the next one.

```python
for i in range(10):
    if i % 2 == 0:
        continue    # skip even numbers
    print(i)
# Prints: 1, 3, 5, 7, 9
```

Both are useful, but use them sparingly. Heavy use of `break` and `continue` can make loop logic hard to follow.

---

## Common Loop Patterns

**Accumulating a total:**
```python
numbers = [4, 7, 2, 9, 1]
total = 0

for num in numbers:
    total += num

print(f"Total: {total}")    # Total: 23
```

**Finding an item:**
```python
names = ["Alice", "Bob", "Charlie", "Diana"]
target = "Charlie"

for name in names:
    if name == target:
        print(f"Found {target}")
        break
```

**Building a new list from an existing one:**
```python
numbers = [1, 2, 3, 4, 5]
squares = []

for num in numbers:
    squares.append(num ** 2)

print(squares)    # [1, 4, 9, 16, 25]
```

**List comprehensions** (Python shorthand for the above):
```python
squares = [num ** 2 for num in numbers]
# Same result, more concise
```

---

## Nested Loops

A loop inside a loop. The inner loop runs completely for each iteration of the outer loop.

```python
for row in range(3):
    for col in range(3):
        print(f"({row}, {col})", end=" ")
    print()    # newline after each row

# Output:
# (0, 0) (0, 1) (0, 2)
# (1, 0) (1, 1) (1, 2)
# (2, 0) (2, 1) (2, 2)
```

Nested loops are often used with two-dimensional data (grids, tables, matrices). They get expensive quickly — 3 iterations × 3 iterations = 9 total. 100 × 100 = 10,000. 1,000 × 1,000 = 1 million. Watch out for nested loops over large data.

---

## Iterating with Index

When you need both the item and its position:

```python
fruits = ["apple", "banana", "cherry"]

for index, fruit in enumerate(fruits):
    print(f"{index}: {fruit}")
# 0: apple
# 1: banana
# 2: cherry
```

`enumerate()` pairs each item with its index. Better than manually tracking a counter.

---

## Common Mistakes

**Off-by-one with range:**
```python
# To loop 10 times (indices 0-9):
for i in range(10):    # correct
for i in range(1, 10): # wrong — only 9 iterations
```

**Modifying a list while iterating over it:** Causes unpredictable behavior — skip items or miss items.
```python
# Wrong:
for item in my_list:
    if condition:
        my_list.remove(item)    # modifying while iterating

# Better: iterate over a copy, or build a new list
my_list = [item for item in my_list if not condition]
```

**Forgetting to advance in a while loop:**
```python
while count < 10:
    print(count)
    # Missing: count += 1
    # This loops forever
```
