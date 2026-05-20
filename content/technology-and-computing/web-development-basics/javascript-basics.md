## JavaScript Basics

HTML is structure. CSS is appearance. JavaScript is behavior — the code that makes things happen when users interact with a page. Clicking a button, submitting a form, loading new content without refreshing — that's JavaScript.

---

## What JavaScript Is

JavaScript is a programming language that runs in the browser. Every major browser includes a JavaScript engine that executes JS code. It's also used server-side (Node.js) and in many other contexts, but it was built for — and is most commonly used for — the web.

JavaScript can:
- Read and modify the HTML and CSS on a page (the DOM)
- Respond to user actions (clicks, keyboard input, form submissions)
- Make network requests to servers (fetch data without reloading the page)
- Store data in the browser (localStorage, cookies)
- Run animations and complex visual interactions

---

## Adding JavaScript to HTML

```html
<!-- At the end of body: -->
<script src="app.js"></script>

<!-- Or inline (for small snippets): -->
<script>
    console.log("Hello from JavaScript");
</script>

<!-- In head with defer (loads async, runs after HTML is parsed): -->
<head>
    <script src="app.js" defer></script>
</head>
```

Put script tags at the end of `<body>` or use `defer` — this ensures the HTML is fully loaded before the script runs. Otherwise, your script might try to find HTML elements before they exist.

---

## Variables

```javascript
let name = "Alice";        // can be reassigned
const age = 30;            // cannot be reassigned
var old = "old way";       // avoid — use let/const instead
```

Use `const` by default. Use `let` when you need to reassign. `var` is the old way and has confusing scoping behavior — don't use it in new code.

---

## Data Types

JavaScript has the same basic types as other languages:

```javascript
let num = 42;                // Number (integers and floats are both "number")
let price = 9.99;            // Number
let name = "Alice";          // String
let isLoggedIn = true;       // Boolean
let nothing = null;          // Null (explicitly no value)
let notSet;                  // undefined (declared but not assigned)
let user = { name: "Alice", age: 30 };  // Object
let items = [1, 2, 3];      // Array
```

---

## Functions

```javascript
// Function declaration
function greet(name) {
    return `Hello, ${name}!`;
}

// Arrow function (modern syntax — common in current JavaScript)
const greet = (name) => {
    return `Hello, ${name}!`;
};

// Arrow function (short form when returning a single expression)
const greet = (name) => `Hello, ${name}!`;

// Calling a function
console.log(greet("Alice"));    // Hello, Alice!
```

**Template literals** (backtick strings with `${}`):
```javascript
const name = "Alice";
const age = 30;
console.log(`${name} is ${age} years old.`);
```

Cleaner than string concatenation with `+`.

---

## Objects and Arrays

Objects and arrays work similarly to Python dictionaries and lists:

```javascript
const person = {
    name: "Alice",
    age: 30,
    city: "Chicago"
};

console.log(person.name);       // "Alice"
console.log(person["age"]);     // 30
person.email = "alice@...";     // add property

const fruits = ["apple", "banana", "cherry"];
console.log(fruits[0]);         // "apple"
fruits.push("date");            // add to end
console.log(fruits.length);     // 4
```

---

## Control Flow

```javascript
// Conditionals
if (age >= 18) {
    console.log("Adult");
} else if (age >= 13) {
    console.log("Teenager");
} else {
    console.log("Child");
}

// For loop
for (let i = 0; i < 5; i++) {
    console.log(i);
}

// For...of loop (iterating over an array)
for (const fruit of fruits) {
    console.log(fruit);
}

// While loop
let count = 0;
while (count < 5) {
    count++;
}
```

---

## Array Methods

JavaScript arrays have powerful built-in methods:

```javascript
const numbers = [1, 2, 3, 4, 5];

// forEach — iterate (no return value)
numbers.forEach(n => console.log(n));

// map — transform each item, returns new array
const doubled = numbers.map(n => n * 2);     // [2, 4, 6, 8, 10]

// filter — keep only items that pass a test
const evens = numbers.filter(n => n % 2 === 0);  // [2, 4]

// find — first item that passes
const firstEven = numbers.find(n => n % 2 === 0); // 2

// reduce — fold array to single value
const total = numbers.reduce((sum, n) => sum + n, 0);  // 15

// includes — membership check
numbers.includes(3);    // true

// some — at least one item passes
numbers.some(n => n > 4);   // true

// every — all items pass
numbers.every(n => n > 0);  // true
```

These functional methods replace many loops with more expressive, readable code.

---

## Scope and const

```javascript
const x = 10;

function example() {
    const x = 20;   // different x — local to this function
    console.log(x); // 20
}

example();
console.log(x);     // 10 — outer x unchanged
```

`let` and `const` are block-scoped — they exist only within the `{}` block where they're declared. This is more predictable than `var`.

---

## The Console

`console.log()` prints to the browser's developer console — not to the visible page. Use it to inspect values while debugging.

Open the console: F12 → Console tab (or right-click → Inspect → Console).

```javascript
console.log("Value:", someVariable);
console.error("Something went wrong");
console.table(arrayOfObjects);    // displays data as a table
```

---

## Errors

JavaScript errors appear in the browser console with a message and line number. Read them — they tell you exactly what went wrong.

Common errors:
- `ReferenceError: x is not defined` — used a variable you never declared
- `TypeError: Cannot read properties of null` — tried to use a property on null
- `SyntaxError` — invalid JavaScript syntax

Open the console, reproduce the error, and read the message before trying to fix it.
