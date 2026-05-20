## Dictionaries

Lists store values in order, accessed by position (index 0, 1, 2...). Dictionaries store values by name — you define a key for each value and look things up by that key instead of by position. They're one of the most useful data structures in programming.

---

## Creating a Dictionary

```python
person = {
    "name": "Alice",
    "age": 30,
    "city": "Chicago"
}
```

A dictionary is a collection of **key-value pairs**. Each key maps to a value. Keys are usually strings (in Python, keys can be any immutable type — strings, numbers, tuples).

---

## Accessing Values

```python
print(person["name"])    # "Alice"
print(person["age"])     # 30
```

Unlike lists, there's no "position" — you look up by key. If the key doesn't exist, you get a `KeyError`:

```python
print(person["email"])    # KeyError: 'email'
```

**Safe access with `.get()`:**
```python
email = person.get("email")           # Returns None if key doesn't exist
email = person.get("email", "N/A")    # Returns "N/A" if key doesn't exist
```

Use `.get()` when a key might not be present. This avoids crashing your program.

---

## Adding, Updating, and Removing

```python
# Add new key-value pair
person["email"] = "alice@example.com"

# Update existing value
person["age"] = 31

# Remove a key
del person["city"]

# Remove and return a value
removed = person.pop("email")
```

---

## Checking Keys

```python
"name" in person        # True
"email" in person       # False (if not added)
"email" not in person   # True
```

---

## Iterating Over a Dictionary

```python
person = {"name": "Alice", "age": 30, "city": "Chicago"}

# Iterate over keys (default)
for key in person:
    print(key)

# Iterate over values
for value in person.values():
    print(value)

# Iterate over key-value pairs
for key, value in person.items():
    print(f"{key}: {value}")
```

`.keys()`, `.values()`, and `.items()` are the three ways to iterate, each giving you different access.

---

## Dictionary as a Record

Dictionaries are ideal for representing structured records — one entity with multiple named attributes:

```python
product = {
    "id": 1042,
    "name": "Standing Desk",
    "price": 349.99,
    "in_stock": True,
    "tags": ["furniture", "office"]
}
```

This is the natural way to represent a person, product, user, or any other structured entity. In JSON (used by most APIs), data is represented this way.

---

## Lists of Dictionaries

Often you'll have a collection of records — a list of dictionaries:

```python
users = [
    {"name": "Alice", "age": 30, "city": "Chicago"},
    {"name": "Bob", "age": 25, "city": "Denver"},
    {"name": "Charlie", "age": 35, "city": "Austin"}
]

for user in users:
    print(f"{user['name']} lives in {user['city']}")

# Finding a specific user
for user in users:
    if user["name"] == "Bob":
        print(user["age"])    # 25
        break
```

---

## Nested Dictionaries

Dictionary values can be other dictionaries:

```python
company = {
    "name": "Acme Corp",
    "address": {
        "street": "123 Main St",
        "city": "Portland",
        "state": "OR"
    },
    "employees": 42
}

print(company["address"]["city"])    # "Portland"
```

This is common when working with API responses and configuration data.

---

## Dictionary Comprehensions

Like list comprehensions, but for dictionaries:

```python
names = ["alice", "bob", "charlie"]
name_lengths = {name: len(name) for name in names}
# {"alice": 5, "bob": 3, "charlie": 7}

# Filtering
long_names = {name: length for name, length in name_lengths.items() if length > 4}
# {"alice": 5, "charlie": 7}
```

---

## When to Use a Dictionary vs. a List

Use a **list** when:
- The order of items matters
- You'll access items by position or iterate through all of them
- Items are similar (a list of numbers, a list of names)

Use a **dictionary** when:
- You need to look things up by name rather than position
- Each item has multiple named attributes
- You want fast lookup (dictionaries are much faster than searching through a list)

---

## How Dictionaries Work Internally

Under the hood, dictionaries use a hash table. When you store a key, the dictionary computes a hash (a numeric representation) of the key and uses it to determine where to store the value. Lookups are extremely fast — O(1) constant time — regardless of how many items the dictionary contains. A dictionary with 1 million items is just as fast to look up as one with 10 items.

This is why dictionaries are valuable: looking for a name in a list of 1 million names requires checking each one. Looking up a key in a dictionary of 1 million entries is instant.

---

## Other Languages

**JavaScript:** Called "objects" for simple key-value stores, or `Map` for more complex use cases.
```javascript
const person = { name: "Alice", age: 30 };
person.name;           // "Alice"
person["name"];        // "Alice"
person.email = "...";  // add new key
```

**Java:** `HashMap<String, String>` or `HashMap<String, Integer>` — typed.

**Most languages** have some equivalent structure: Ruby calls them hashes, Lua calls them tables, Go calls them maps.
