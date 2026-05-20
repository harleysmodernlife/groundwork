## Lists and Arrays

Programs frequently need to work with collections of items — a list of names, a series of measurements, a set of results. Lists (also called arrays in many languages) store multiple values in a single variable, in order.

---

## Creating a List

```python
fruits = ["apple", "banana", "cherry"]
numbers = [4, 7, 2, 9, 1]
mixed = [1, "hello", True, 3.14]    # can mix types
empty = []                           # empty list
```

A list is ordered — items have positions. It's mutable — you can add, remove, or change items after creation.

---

## Accessing Items

Items are accessed by **index** — their position in the list. Indexes start at 0.

```python
fruits = ["apple", "banana", "cherry"]

print(fruits[0])    # "apple"
print(fruits[1])    # "banana"
print(fruits[2])    # "cherry"
```

**Negative indexes count from the end:**
```python
print(fruits[-1])   # "cherry" — last item
print(fruits[-2])   # "banana" — second to last
```

**Slicing** — getting a portion of a list:
```python
numbers = [0, 1, 2, 3, 4, 5]

print(numbers[1:4])    # [1, 2, 3] — index 1 up to (not including) 4
print(numbers[:3])     # [0, 1, 2] — from start up to index 3
print(numbers[3:])     # [3, 4, 5] — from index 3 to end
print(numbers[::2])    # [0, 2, 4] — every other item
print(numbers[::-1])   # [5, 4, 3, 2, 1, 0] — reversed
```

**Index out of range:** Accessing an index that doesn't exist raises an error. Always check the length or use safe access patterns.

---

## Common List Operations

**Length:**
```python
print(len(fruits))    # 3
```

**Adding items:**
```python
fruits.append("date")          # add to end: ["apple", "banana", "cherry", "date"]
fruits.insert(1, "avocado")    # insert at position 1
```

**Removing items:**
```python
fruits.remove("banana")    # removes first occurrence of "banana"
last = fruits.pop()        # removes and returns last item
first = fruits.pop(0)      # removes and returns item at index 0
del fruits[1]              # deletes item at index 1
```

**Modifying items:**
```python
fruits[0] = "apricot"    # replace item at index 0
```

**Checking membership:**
```python
"apple" in fruits     # True if "apple" is in the list
"mango" not in fruits # True if "mango" is not in the list
```

**Sorting:**
```python
numbers = [3, 1, 4, 1, 5, 9]
numbers.sort()           # sorts in place: [1, 1, 3, 4, 5, 9]
sorted_copy = sorted(numbers)  # returns new sorted list, doesn't modify original
numbers.sort(reverse=True)     # descending: [9, 5, 4, 3, 1, 1]
```

**Joining (for strings):**
```python
words = ["Hello", "world"]
sentence = " ".join(words)    # "Hello world"

csv_line = ",".join(["a", "b", "c"])    # "a,b,c"
```

---

## Iterating Over Lists

```python
fruits = ["apple", "banana", "cherry"]

for fruit in fruits:
    print(fruit)

# With index:
for i, fruit in enumerate(fruits):
    print(f"{i}: {fruit}")
```

---

## List Comprehensions

A concise way to create a list from another list:

```python
numbers = [1, 2, 3, 4, 5]

# Squares
squares = [n ** 2 for n in numbers]
# [1, 4, 9, 16, 25]

# Filtered
evens = [n for n in numbers if n % 2 == 0]
# [2, 4]

# Transform and filter
even_squares = [n ** 2 for n in numbers if n % 2 == 0]
# [4, 16]
```

List comprehensions replace a loop-and-append pattern with a single expression. Use them when the logic is simple and the result is readable.

---

## Nested Lists

A list can contain other lists — useful for representing tables or grids.

```python
grid = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

print(grid[0])       # [1, 2, 3]
print(grid[1][2])    # 6 (row 1, column 2)
```

---

## Arrays in Other Languages

**JavaScript:** Arrays work similarly to Python lists.
```javascript
const fruits = ["apple", "banana", "cherry"];
fruits.push("date");         // append
fruits.pop();                // remove last
fruits.length;               // length
fruits[0];                   // access by index
fruits.includes("apple");    // membership check
```

**Typed arrays in statically-typed languages:** In Java, C, and others, arrays typically hold one type only and have a fixed size:
```java
int[] numbers = new int[5];    // array of exactly 5 integers
String[] names = {"Alice", "Bob", "Charlie"};
```

For resizable collections, Java uses `ArrayList`; C++ uses `vector`. The concept is the same, the API differs.

---

## Common Mistakes

**Off-by-one when accessing:** The last item in a list of length 5 is at index 4, not 5.
```python
items = [10, 20, 30, 40, 50]
print(items[5])    # IndexError: list index out of range
print(items[4])    # 50 — correct
```

**Forgetting that indexes start at 0:**
```python
fruits = ["apple", "banana", "cherry"]
# "banana" is at index 1, not 2
print(fruits[1])    # "banana"
```

**Modifying a list while iterating over it:**
```python
# Don't do this:
for item in my_list:
    if should_remove(item):
        my_list.remove(item)    # skips items

# Do this instead:
my_list = [item for item in my_list if not should_remove(item)]
```

**Copying a list incorrectly:**
```python
a = [1, 2, 3]
b = a        # b points to the SAME list — modifying b modifies a
c = a[:]     # c is a new copy — modifying c doesn't affect a
d = list(a)  # also a copy
```
