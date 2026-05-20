## Debugging

Every programmer, at every level, writes code that doesn't work. Debugging is the process of finding out why. It's not a sign of failure — it's a normal part of programming. Getting good at debugging is one of the most valuable skills you can develop.

---

## The Mindset

Debugging is detective work. You have a symptom (wrong output, crash, nothing happening). You need to find the cause. The process is:

1. Reproduce the problem reliably
2. Form a hypothesis about what's wrong
3. Test the hypothesis
4. Fix the problem
5. Verify the fix didn't break anything else

Don't change code randomly hoping something works. Make one change at a time, understand what you're changing and why, and check whether it fixed the problem.

---

## Reading Error Messages

When a program crashes, it produces an error message and a traceback. Read them — they tell you exactly what went wrong and where.

```
Traceback (most recent call last):
  File "script.py", line 15, in <module>
    result = process(data)
  File "script.py", line 8, in process
    return data["name"].upper()
KeyError: 'name'
```

This tells you:
- The error type: `KeyError`
- The value that caused it: `'name'`
- Exactly where it happened: line 8 in the `process` function
- How it got there: called from line 15

Most beginners get an error message and immediately feel lost. Train yourself to stop and read the whole message before doing anything else. The answer is usually in there.

**Common Python errors:**

- `NameError: name 'x' is not defined` — you used a variable you never defined (typo? wrong scope?)
- `TypeError: unsupported operand type(s)` — wrong types for an operation (string + integer, etc.)
- `IndexError: list index out of range` — accessed a list position that doesn't exist
- `KeyError: 'key'` — accessed a dictionary key that doesn't exist
- `AttributeError: 'str' object has no attribute 'x'` — called a method on the wrong type
- `SyntaxError` — invalid Python syntax (missing colon, unclosed bracket, etc.)

---

## Print Debugging

The simplest and most universally useful technique: add `print()` statements to see what's actually happening.

```python
def calculate_discount(price, discount_pct):
    print(f"DEBUG: price={price}, discount_pct={discount_pct}")
    discount = price * discount_pct
    print(f"DEBUG: discount={discount}")
    result = price - discount
    print(f"DEBUG: result={result}")
    return result
```

This shows you the actual values your function is working with. Often the problem becomes immediately obvious — a value is `None` when you expected a number, or a string when you expected an integer.

Remove debug prints before finishing (or mark them clearly so you remember to remove them).

---

## Check Your Assumptions

Most bugs come from a false assumption. You believe a variable contains a certain value — it doesn't. You believe a function returns a certain type — it doesn't. You believe a condition is True — it isn't.

Before assuming your logic is wrong, verify your data:

```python
print(type(x), x)    # What is x actually?
print(len(my_list))  # Is the list the length you expect?
print(user.get("age"))   # Does this key exist?
```

Ask: "What do I assume is true here, and how can I verify it?"

---

## Isolate the Problem

If you're not sure where the bug is, narrow it down.

- **Comment out code** — temporarily remove sections to see if the error goes away
- **Simplify inputs** — does the bug happen with a simpler case?
- **Add prints before the crash** — how far does execution get before the error?

```python
print("About to call process_data")
result = process_data(records)
print("process_data completed")    # If this doesn't print, the crash is inside process_data
```

Binary search your code — if you have 100 lines and don't know where the bug is, check at line 50. If the bug is before line 50, check at line 25. Keep halving until you find it.

---

## Common Bugs and What Causes Them

**Wrong output (no crash):**
- Check the logic step by step
- Print intermediate values
- Walk through the code manually with a specific example

**Off-by-one errors:**
- Boundary conditions: first item, last item, length vs. last index
- Loop ranges: `range(n)` goes 0 to n-1, not 1 to n
- Check with simple examples: a list of 1 item, a list of 0 items

**Variable modified unexpectedly:**
- Look for where else the variable is used
- Check if you're accidentally modifying a list when you meant to copy it
- Look for global variables being modified from inside functions

**Function returns None:**
- Does the function have a `return` statement?
- Is there a code path where return is never reached?

**Comparison always True or always False:**
- Are you using `=` (assignment) instead of `==` (comparison)?
- Are you comparing values of different types?

---

## The Debugger

Most programming environments include a debugger — a tool that lets you pause execution and inspect state.

**Breakpoints:** Tell the debugger to pause when it reaches a specific line. You can then step through code one line at a time, inspect variable values, and see exactly what's happening.

**Python's built-in debugger:**
```python
import pdb
pdb.set_trace()    # Execution pauses here

# Or in Python 3.7+:
breakpoint()       # Simpler way to drop into the debugger
```

Debugger commands:
- `n` — execute next line
- `s` — step into a function call
- `p variable` — print a variable's value
- `c` — continue until next breakpoint
- `q` — quit debugger

VS Code, PyCharm, and other IDEs have visual debuggers where you click to set breakpoints and use GUI buttons instead of commands. These are often easier to use than the command-line debugger.

---

## When You're Stuck

**Take a break.** Your brain keeps working. Fresh eyes often see the problem immediately.

**Explain the problem out loud.** Describe what the code should do and what it's actually doing. This is called rubber duck debugging — sometimes just articulating the problem reveals the solution.

**Search the error message.** Copy the error message (or the essential part of it) and search for it. Odds are someone has had the exact same problem and the solution is documented.

**Read the documentation.** Check whether the function you're calling works the way you think it does. Check the return type, what arguments it expects, what it does when something is wrong.

**Simplify to a minimal example.** Create the smallest possible program that reproduces the bug. Often the act of simplifying reveals the problem. If not, the simple example is much easier to get help with.
