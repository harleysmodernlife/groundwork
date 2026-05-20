## Reading and Writing Files

Most programs need to persist data beyond a single run — save results, read configuration, process records. Files are the most fundamental way to do this. This lesson covers the practical patterns you'll use constantly.

---

## The Basic Pattern

```python
# Reading
with open("data.txt", "r") as file:
    content = file.read()

# Writing
with open("output.txt", "w") as file:
    file.write("Hello, file!\n")
```

The `with` statement handles opening and closing automatically. Always use `with` — if you forget to call `file.close()`, you risk losing data or keeping the file locked.

---

## File Modes

The second argument to `open()` is the mode:

| Mode | Meaning |
|---|---|
| `"r"` | Read (default). File must exist. |
| `"w"` | Write. Creates file if it doesn't exist. **Overwrites** if it does. |
| `"a"` | Append. Adds to end. Creates if it doesn't exist. |
| `"x"` | Create. Fails if file already exists. |
| `"b"` | Binary mode (combine with others: `"rb"`, `"wb"`) |
| `"+"` | Read and write (combine with others: `"r+"`) |

For text files, you usually use `"r"`, `"w"`, or `"a"`. Binary mode (`"b"`) is for images, PDFs, and other non-text files.

---

## Reading Strategies

**Read the entire file at once:**
```python
with open("data.txt", "r") as file:
    content = file.read()
    # content is one big string
```

Good for small files. Bad for large files — loads everything into memory.

**Read line by line:**
```python
with open("data.txt", "r") as file:
    for line in file:
        line = line.strip()    # removes trailing \n and spaces
        print(line)
```

Memory-efficient for large files — reads one line at a time.

**Read all lines into a list:**
```python
with open("data.txt", "r") as file:
    lines = file.readlines()
    # lines is a list of strings, each ending with \n

# Or without the \n:
lines = [line.strip() for line in lines]
```

---

## Writing

**Write a string:**
```python
with open("output.txt", "w") as file:
    file.write("First line\n")
    file.write("Second line\n")
```

`write()` doesn't add a newline automatically — include `\n` where you want line breaks.

**Write multiple lines at once:**
```python
lines = ["apple\n", "banana\n", "cherry\n"]
with open("output.txt", "w") as file:
    file.writelines(lines)
```

**Append to an existing file:**
```python
with open("log.txt", "a") as file:
    file.write("New log entry\n")
```

---

## Working with CSV Files

CSV (Comma-Separated Values) is the most common format for tabular data. Python's `csv` module handles the complexities (quoting, fields with commas, etc.).

**Reading CSV:**
```python
import csv

with open("employees.csv", "r") as file:
    reader = csv.DictReader(file)    # uses first row as column names
    for row in reader:
        print(row["name"], row["salary"])
```

`DictReader` gives each row as a dictionary keyed by column name. More readable than numeric indices.

**Writing CSV:**
```python
import csv

employees = [
    {"name": "Alice", "role": "Engineer", "salary": 95000},
    {"name": "Bob", "role": "Designer", "salary": 85000},
]

with open("employees.csv", "w", newline="") as file:
    fieldnames = ["name", "role", "salary"]
    writer = csv.DictWriter(file, fieldnames=fieldnames)

    writer.writeheader()
    for emp in employees:
        writer.writerow(emp)
```

The `newline=""` argument on Windows prevents extra blank lines.

---

## Working with JSON Files

JSON is the standard format for API data and configuration files.

**Reading JSON:**
```python
import json

with open("config.json", "r") as file:
    config = json.load(file)    # parses JSON into Python dict/list

print(config["database"]["host"])
```

**Writing JSON:**
```python
import json

data = {
    "name": "My App",
    "version": "1.0",
    "settings": {
        "debug": False,
        "max_connections": 10
    }
}

with open("config.json", "w") as file:
    json.dump(data, file, indent=2)    # indent=2 for human-readable formatting
```

---

## File Paths

**Current directory:** A filename alone (`"data.txt"`) refers to a file in the current working directory — wherever your script is running from.

**Absolute paths:** Full path from the root. Works regardless of where you run from:
```python
with open("/home/alice/data/records.txt", "r") as file:
    ...
```

**Relative paths:** Relative to the current directory:
```python
with open("../data/records.txt", "r") as file:    # one directory up
    ...
```

**Best practice — use `pathlib`:**
```python
from pathlib import Path

data_dir = Path(__file__).parent / "data"    # directory relative to script file
records_file = data_dir / "records.txt"

with open(records_file, "r") as file:
    ...
```

`pathlib` handles path separators correctly across operating systems (Windows uses `\`, Unix uses `/`).

---

## Handling Errors

Files might not exist, might be locked, or might have permission restrictions. Handle these gracefully:

```python
try:
    with open("data.txt", "r") as file:
        content = file.read()
except FileNotFoundError:
    print("File not found.")
except PermissionError:
    print("Cannot read file — permission denied.")
```

**Checking if a file exists before opening:**
```python
from pathlib import Path

if Path("data.txt").exists():
    with open("data.txt", "r") as file:
        content = file.read()
```

---

## Common Mistakes

**Forgetting to close the file:**
```python
file = open("data.txt", "r")
content = file.read()
# Missing: file.close()
# Use 'with' to avoid this entirely
```

**Writing without a newline:**
```python
file.write("line one")
file.write("line two")
# Produces: line oneline two
# Fix: add \n at end of each line
```

**Overwriting when you meant to append:**
```python
open("log.txt", "w")    # destroys existing content
open("log.txt", "a")    # appends to existing content
```

**Reading a binary file as text:**
```python
# For images, PDFs, etc. — use binary mode
with open("image.jpg", "rb") as file:
    data = file.read()
```
