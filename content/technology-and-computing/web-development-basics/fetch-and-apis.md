## Fetch and APIs

Most modern web applications communicate with servers in the background — loading new data without reloading the page, submitting data without a full form submission, getting real-time updates. The `fetch` API is how JavaScript makes these HTTP requests. APIs are what your requests talk to.

---

## What an API Is

API (Application Programming Interface) — in the web context, it means a server that accepts HTTP requests and returns data, typically as JSON.

When you load your Twitter timeline, your browser makes an API call: `GET https://api.twitter.com/...`. The server responds with JSON containing tweet data. Your JavaScript code processes that JSON and builds the HTML you see.

An API is just an HTTP server with defined endpoints (URLs) that each do something specific:
- `GET /api/users` — get a list of users
- `GET /api/users/42` — get user with ID 42
- `POST /api/users` — create a new user
- `PUT /api/users/42` — update user 42
- `DELETE /api/users/42` — delete user 42

---

## The fetch API

`fetch()` makes an HTTP request from JavaScript. It's asynchronous — it doesn't block the page while waiting for a response.

```javascript
fetch("https://api.example.com/data")
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error("Request failed:", error);
    });
```

`fetch` returns a **Promise** — an object representing a future value. `.then()` runs when the value is available; `.catch()` runs if something went wrong.

Two `.then()` calls because the response comes in two stages:
1. The response headers arrive (you get the response object)
2. You call `response.json()` to read the body (another async operation — another Promise)

---

## Async/Await

A cleaner syntax for working with Promises. Same behavior, more readable:

```javascript
async function loadData() {
    try {
        const response = await fetch("https://api.example.com/data");
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error("Request failed:", error);
    }
}

loadData();
```

`async` marks a function as asynchronous. Inside it, `await` pauses execution until the Promise resolves. `try/catch` handles errors.

This looks like synchronous code but doesn't block the browser — other code continues running while the fetch waits.

---

## Making Different Types of Requests

**GET (default — fetching data):**
```javascript
const response = await fetch("/api/users");
const users = await response.json();
```

**POST (sending data):**
```javascript
const response = await fetch("/api/users", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        name: "Alice",
        email: "alice@example.com"
    })
});

const newUser = await response.json();
```

**PUT (updating):**
```javascript
const response = await fetch("/api/users/42", {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name: "Alice Updated" })
});
```

**DELETE:**
```javascript
const response = await fetch("/api/users/42", {
    method: "DELETE"
});
```

---

## Checking for Errors

`fetch()` only rejects (throws an error) for network failures — not for HTTP error responses. A 404 or 500 status code resolves normally. Check the status yourself:

```javascript
const response = await fetch("/api/data");

if (!response.ok) {
    // response.ok is true for 2xx status codes
    throw new Error(`HTTP error: ${response.status}`);
}

const data = await response.json();
```

---

## Working with JSON

JSON (JavaScript Object Notation) is the universal format for API data.

**Parse JSON response:**
```javascript
const data = await response.json();
// data is now a JavaScript object or array
```

**Send JSON:**
```javascript
body: JSON.stringify({ name: "Alice" })
// Converts JS object to JSON string
```

**`JSON.parse()` and `JSON.stringify()`:**
```javascript
const jsonString = '{"name": "Alice", "age": 30}';
const obj = JSON.parse(jsonString);    // string → object
const str = JSON.stringify(obj);       // object → string
```

---

## A Practical Example

Load users from a public API and display them:

```html
<div id="users"></div>
```

```javascript
async function displayUsers() {
    const container = document.getElementById("users");
    container.textContent = "Loading...";

    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");

        if (!response.ok) {
            throw new Error(`Failed to load: ${response.status}`);
        }

        const users = await response.json();

        container.innerHTML = "";    // clear loading text

        users.forEach(user => {
            const div = document.createElement("div");
            div.innerHTML = `
                <h3>${user.name}</h3>
                <p>${user.email}</p>
                <p>${user.address.city}</p>
            `;
            container.appendChild(div);
        });

    } catch (error) {
        container.textContent = `Error: ${error.message}`;
    }
}

displayUsers();
```

`jsonplaceholder.typicode.com` is a free public API for testing — you can use it to practice.

---

## Sending Form Data

```javascript
const form = document.querySelector("#user-form");

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    const data = Object.fromEntries(formData);    // convert to plain object

    try {
        const response = await fetch("/api/users", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        });

        if (!response.ok) throw new Error("Submission failed");

        const result = await response.json();
        console.log("Created:", result);

    } catch (error) {
        console.error(error);
    }
});
```

---

## CORS

Cross-Origin Resource Sharing — a security mechanism that restricts which domains can make requests to a server.

If your JavaScript at `mysite.com` tries to `fetch` from `othersite.com`, and `othersite.com` doesn't explicitly allow it in its response headers, the browser blocks the request.

You'll see: "CORS policy: No 'Access-Control-Allow-Origin' header."

Solutions:
- The API you're calling needs to include CORS headers (contact the API provider, or configure your own server)
- Proxy requests through your own server (your server calls the third-party API, then returns the result to your frontend)
- Use a server-side language to make the request (CORS only applies to browser-initiated requests)
