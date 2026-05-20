## DOM Manipulation

The DOM (Document Object Model) is the browser's representation of a web page as a tree of objects. JavaScript uses the DOM to read HTML content, change it, create new elements, and remove existing ones — all without reloading the page.

---

## What the DOM Is

When a browser loads an HTML page, it parses the HTML and creates a tree of objects in memory — the DOM. Each HTML element becomes a node in the tree.

```html
<body>
    <header>
        <h1>My Page</h1>
    </header>
    <main>
        <p id="intro">Welcome</p>
    </main>
</body>
```

This creates a tree where `<body>` has children `<header>` and `<main>`, `<header>` has a child `<h1>`, and so on.

JavaScript accesses this tree through the `document` object, which represents the entire page.

---

## Selecting Elements

Before you can change an element, you need to find it.

```javascript
// By ID
const intro = document.getElementById("intro");

// By CSS selector (returns first match)
const button = document.querySelector(".submit-button");
const heading = document.querySelector("h1");

// By CSS selector (returns all matches, as NodeList)
const allParagraphs = document.querySelectorAll("p");
const navLinks = document.querySelectorAll("nav a");
```

`querySelector` and `querySelectorAll` use the same syntax as CSS selectors — any valid CSS selector works.

---

## Reading and Changing Content

```javascript
const para = document.querySelector("#intro");

// Read content
console.log(para.textContent);    // plain text
console.log(para.innerHTML);      // HTML including any tags inside

// Change content
para.textContent = "Hello!";
para.innerHTML = "Hello <strong>world</strong>!";
```

Use `textContent` when you're setting plain text — it's safe and won't interpret HTML. Use `innerHTML` carefully — only with trusted content, never with user-provided strings (security risk: XSS).

---

## Changing Styles and Classes

**Inline styles:**
```javascript
const box = document.querySelector(".box");
box.style.backgroundColor = "blue";
box.style.fontSize = "20px";     // CSS property names in camelCase in JS
box.style.display = "none";      // hide element
```

**CSS classes (better approach):**
```javascript
// Add a class
box.classList.add("highlighted");

// Remove a class
box.classList.remove("highlighted");

// Toggle — add if not present, remove if present
box.classList.toggle("active");

// Check if class exists
box.classList.contains("active");    // true or false
```

Changing classes is better than setting inline styles directly — it keeps your styling in CSS where it belongs, and lets you switch between multiple style states cleanly.

---

## Changing Attributes

```javascript
const link = document.querySelector("a");

link.getAttribute("href");           // get attribute value
link.setAttribute("href", "/new");   // set attribute value
link.removeAttribute("disabled");    // remove attribute
link.hasAttribute("disabled");       // check if attribute exists
```

For common attributes, there are direct properties:
```javascript
link.href = "/new";
input.value = "new value";
img.src = "new-image.jpg";
img.alt = "Description";
```

---

## Creating and Inserting Elements

```javascript
// Create a new element
const newItem = document.createElement("li");
newItem.textContent = "New list item";
newItem.classList.add("item");

// Find the parent to insert into
const list = document.querySelector("ul");

// Insert at the end
list.appendChild(newItem);

// Insert before another element
const firstItem = list.querySelector("li");
list.insertBefore(newItem, firstItem);

// More flexible insertion
list.append(newItem);           // at end (can take strings too)
list.prepend(newItem);          // at beginning
firstItem.before(newItem);      // before firstItem
firstItem.after(newItem);       // after firstItem
```

---

## Removing Elements

```javascript
const element = document.querySelector(".old-item");

// Remove it
element.remove();

// Or: remove a child from its parent
element.parentNode.removeChild(element);
```

---

## Reading and Setting Form Values

```javascript
const input = document.querySelector("#username");
const select = document.querySelector("#country");
const checkbox = document.querySelector("#agree");

// Get values
const username = input.value;
const country = select.value;
const isChecked = checkbox.checked;

// Set values
input.value = "prefilled text";
select.value = "us";         // selects the option with value="us"
checkbox.checked = true;
```

---

## Traversing the DOM

Navigate the tree relative to an element:

```javascript
const item = document.querySelector(".item");

item.parentElement;           // parent element
item.children;                // direct child elements (HTMLCollection)
item.firstElementChild;       // first child element
item.lastElementChild;        // last child element
item.nextElementSibling;      // next sibling element
item.previousElementSibling;  // previous sibling element
```

---

## Practical Example: Building a List Dynamically

```html
<ul id="fruit-list"></ul>
```

```javascript
const fruits = ["Apple", "Banana", "Cherry", "Date"];
const list = document.getElementById("fruit-list");

fruits.forEach(fruit => {
    const item = document.createElement("li");
    item.textContent = fruit;
    list.appendChild(item);
});
```

This is the pattern for dynamically generated content — instead of hard-coding HTML, you build it from data.

---

## innerHTML vs. createElement

**innerHTML** — fast to write but dangerous with user input:
```javascript
// NEVER do this with user-provided data:
list.innerHTML = `<li>${userInput}</li>`;
// If userInput is: <script>steal_cookies()</script>
// You've just executed malicious code — this is XSS
```

**createElement** — more verbose but safe:
```javascript
const item = document.createElement("li");
item.textContent = userInput;    // textContent treats everything as text, not HTML
list.appendChild(item);
```

Rule: when inserting user-provided content into the DOM, always use `textContent` or `createTextNode`, never `innerHTML`.
