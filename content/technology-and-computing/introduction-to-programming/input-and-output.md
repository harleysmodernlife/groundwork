## Input and Output

A program that can't communicate with the outside world isn't useful. Input is how a program receives data; output is how it sends results back. Every program — from a simple script to a web application — has some form of input and output.

---

## Output: Displaying Information

The most basic form of output is printing text to the screen (the terminal or console).

**Python:**
```python
print("Hello, world!")
print(42)
print("The answer is:", 42)
```

**JavaScript (in a browser):**
```javascript
console.log("Hello, world!");
```

`print` and `console.log` display values during development and debugging. In production software, user-facing output is typically rendered in a UI — a web page, app interface, or report — not a raw terminal.

**Formatting output:**

Combining text and variable values:
```python
name = "Alice"
age = 30

# Concatenation (joining strings)
print("Hello, " + name)

# f-strings (Python) — cleaner for embedding variables
print(f"Hello, {name}. You are {age} years old.")
```

The f-string approach (using `f"..."` with `{variable}` inside) is easier to read than concatenation once you have multiple variables.

---

## Input: Receiving Data

**From the user (interactive):**

Python:
```python
name = input("What is your name? ")
print(f"Hello, {name}!")
```

`input()` pauses the program, displays a prompt, waits for the user to type something and press Enter, and returns whatever they typed as a string.

**Important:** `input()` always returns a string. If you need a number, convert it:
```python
age_text = input("How old are you? ")
age = int(age_text)    # Convert string to integer

# Or in one step:
age = int(input("How old are you? "))
```

If the user types something that can't be converted (they type "thirty" when you expect a number), the conversion fails with an error. Robust programs handle this — more on that in error handling lessons.

---

## Standard Streams

Every program, by default, has three communication channels:

**stdin (standard input):** Where input comes from. By default, the keyboard. Can be redirected to come from a file.

**stdout (standard output):** Where normal output goes. By default, the terminal. Can be redirected to a file.

**stderr (standard error):** Where error messages go. Separate from stdout so errors don't mix with output.

On the command line, you can redirect these:
```bash
python script.py < input.txt          # feed input.txt to stdin
python script.py > output.txt         # save stdout to output.txt
python script.py > output.txt 2>&1    # save both stdout and stderr
```

This is how Unix tools are chained together — one program's output becomes another program's input.

---

## File Input and Output

Most real programs read from and write to files. The basic pattern:

**Reading a file:**
```python
file = open("data.txt", "r")    # open for reading
content = file.read()           # read the entire file as a string
file.close()                    # always close when done
```

Better: the `with` statement automatically closes the file:
```python
with open("data.txt", "r") as file:
    content = file.read()
# file is automatically closed here
```

**Reading line by line:**
```python
with open("data.txt", "r") as file:
    for line in file:
        print(line.strip())    # strip() removes trailing newline
```

**Writing a file:**
```python
with open("output.txt", "w") as file:    # "w" creates or overwrites
    file.write("Hello, file!\n")
    file.write("Second line\n")
```

Mode options:
- `"r"` — read (file must exist)
- `"w"` — write (creates new or overwrites existing)
- `"a"` — append (adds to end of existing file)
- `"x"` — create (fails if file already exists)

---

## Working with Structured Data

Files often contain structured data in formats like CSV or JSON.

**CSV (Comma-Separated Values):** Simple tabular data.
```
name,age,city
Alice,30,Chicago
Bob,25,Denver
```

Python has a built-in `csv` module:
```python
import csv

with open("people.csv", "r") as file:
    reader = csv.DictReader(file)
    for row in reader:
        print(row["name"], row["age"])
```

**JSON (JavaScript Object Notation):** Key-value structured data, widely used for APIs and configuration.
```json
{"name": "Alice", "age": 30, "city": "Chicago"}
```

Python's `json` module:
```python
import json

# Read JSON from a file
with open("data.json", "r") as file:
    data = json.load(file)

# Write JSON to a file
with open("output.json", "w") as file:
    json.dump(data, file, indent=2)
```

---

## Network Input and Output

Web applications receive input through HTTP requests (form submissions, API calls) and produce output as HTTP responses (HTML pages, JSON data). The same input/output concept applies — the channel is just a network connection instead of a keyboard or file.

Most web frameworks abstract this: instead of reading raw HTTP bytes, you access `request.form["username"]` or `request.json["email"]`.

---

## The Key Principles

- Always close files when you're done — or use `with` to do it automatically
- Input from users is always a string — convert to the type you need
- Validate input before using it — don't assume the user typed what you expected
- Error messages belong on stderr, not stdout
- When debugging, `print()` is your best friend — print variable values to see what's actually there
