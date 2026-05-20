## Events

Events are how the browser tells JavaScript that something happened — a user clicked, typed, moved the mouse, submitted a form, or the page finished loading. Event handling is how you make a page respond to users.

---

## Adding Event Listeners

The main way to respond to events:

```javascript
const button = document.querySelector("#submit-btn");

button.addEventListener("click", function() {
    console.log("Button clicked!");
});
```

Or with an arrow function:
```javascript
button.addEventListener("click", () => {
    console.log("Button clicked!");
});
```

Or with a named function (easier to remove later):
```javascript
function handleClick() {
    console.log("Button clicked!");
}

button.addEventListener("click", handleClick);
button.removeEventListener("click", handleClick);  // remove when done
```

**`addEventListener(eventType, handler)`:** Attach a function to run whenever the specified event occurs on the element. You can attach multiple handlers to the same event.

---

## The Event Object

When an event fires, the browser passes an event object to your handler. It contains information about what happened.

```javascript
button.addEventListener("click", (event) => {
    console.log(event.type);        // "click"
    console.log(event.target);      // the element that was clicked
    console.log(event.currentTarget); // the element the listener is on
    event.preventDefault();         // prevent default browser behavior
    event.stopPropagation();        // stop event from bubbling up
});
```

**`event.target`** — the element that triggered the event (might be a child element).
**`event.currentTarget`** — the element the listener is attached to.

---

## Common Event Types

**Mouse events:**
```javascript
element.addEventListener("click", handler);
element.addEventListener("dblclick", handler);
element.addEventListener("mousedown", handler);
element.addEventListener("mouseup", handler);
element.addEventListener("mouseover", handler);    // mouse enters element
element.addEventListener("mouseout", handler);     // mouse leaves element
element.addEventListener("mousemove", handler);
element.addEventListener("contextmenu", handler);  // right-click
```

**Keyboard events:**
```javascript
document.addEventListener("keydown", (e) => {
    console.log(e.key);     // "a", "Enter", "Escape", "ArrowLeft", etc.
    console.log(e.code);    // "KeyA", "Enter", "Escape" — physical key
    console.log(e.ctrlKey); // true if Ctrl was held
    console.log(e.shiftKey);
    console.log(e.altKey);

    if (e.key === "Escape") {
        closeModal();
    }
});

document.addEventListener("keyup", handler);
input.addEventListener("keydown", handler);    // can target specific inputs
```

**Form events:**
```javascript
form.addEventListener("submit", (e) => {
    e.preventDefault();    // stop the page from reloading
    const data = new FormData(form);
    // handle form submission in JavaScript
});

input.addEventListener("input", (e) => {
    console.log(e.target.value);    // fires on every character change
});

input.addEventListener("change", handler);   // fires when value changes and element loses focus
input.addEventListener("focus", handler);    // gains focus
input.addEventListener("blur", handler);     // loses focus
```

**Document/Window events:**
```javascript
document.addEventListener("DOMContentLoaded", () => {
    // HTML is parsed; safe to access DOM elements
});

window.addEventListener("load", () => {
    // Page and all resources (images, CSS) are fully loaded
});

window.addEventListener("resize", () => {
    console.log(window.innerWidth, window.innerHeight);
});

window.addEventListener("scroll", () => {
    console.log(window.scrollY);    // pixels scrolled from top
});
```

---

## Event Bubbling

When an event occurs on an element, it "bubbles up" through its parent elements. A click on a `<button>` inside a `<div>` triggers click event handlers on the button, then the div, then its parent, all the way to `document`.

```html
<div id="outer">
    <div id="inner">
        <button id="btn">Click me</button>
    </div>
</div>
```

```javascript
document.getElementById("btn").addEventListener("click", () => console.log("button"));
document.getElementById("inner").addEventListener("click", () => console.log("inner div"));
document.getElementById("outer").addEventListener("click", () => console.log("outer div"));

// Clicking the button logs: "button", then "inner div", then "outer div"
```

**`event.stopPropagation()`** stops the bubble:
```javascript
btn.addEventListener("click", (e) => {
    e.stopPropagation();    // event won't bubble up to parent elements
    console.log("button only");
});
```

---

## Event Delegation

Instead of attaching listeners to each item in a list, attach one listener to the parent and let events bubble up.

```html
<ul id="task-list">
    <li data-id="1">Task 1 <button class="delete">Delete</button></li>
    <li data-id="2">Task 2 <button class="delete">Delete</button></li>
</ul>
```

```javascript
const list = document.getElementById("task-list");

list.addEventListener("click", (e) => {
    if (e.target.classList.contains("delete")) {
        const item = e.target.closest("li");
        const id = item.dataset.id;
        item.remove();
        console.log(`Deleted task ${id}`);
    }
});
```

Event delegation is more efficient (one listener instead of many) and works for dynamically added elements — elements added after the listener is set up will still work because the listener is on the parent.

---

## preventDefault

Many elements have default browser behaviors. `preventDefault()` stops them:

```javascript
// Stop form from submitting the traditional way
form.addEventListener("submit", (e) => {
    e.preventDefault();
    // Handle with JavaScript instead
});

// Stop link from navigating
link.addEventListener("click", (e) => {
    e.preventDefault();
    // Do something else on click
});

// Stop right-click menu
container.addEventListener("contextmenu", (e) => {
    e.preventDefault();
    showCustomMenu(e.clientX, e.clientY);
});
```

---

## Practical Example: A To-Do List

```javascript
const form = document.querySelector("#add-form");
const input = document.querySelector("#task-input");
const list = document.querySelector("#task-list");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const text = input.value.trim();
    if (!text) return;

    const item = document.createElement("li");
    item.textContent = text;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener("click", () => item.remove());

    item.appendChild(deleteBtn);
    list.appendChild(item);
    input.value = "";    // clear the input
    input.focus();       // refocus for next entry
});
```

This is the pattern for interactive web UIs: listen for events, read the current state, update the DOM.
