# React Basics – A Beginner-Friendly Deep Dive

This README is a structured summary of everything we explored so far about **JavaScript**, **DOM**, **JSDOM**, **React**, and **ReactDOM**. It walks step‑by‑step from plain HTML → JavaScript → Node (JSDOM) → React → Virtual DOM → ReactDOM.

---

# 🟩 1. Creating a Simple Heading in HTML

The most basic way to create an element:

```html
<h1>Hello World</h1>
```

This is static HTML rendered directly by the browser.

---

# 🟦 2. Creating the Same Heading Using JavaScript (in Browser)

In the browser, you can create DOM elements dynamically:

```js
const heading = document.createElement("h1");
heading.innerText = "Hello World from JS";
document.body.appendChild(heading);
```

Here:

* `document.createElement()` creates a real DOM node.
* `innerText` updates the text.
* `appendChild` inserts it into the page.

---

# 🟫 3. Creating the Same Element in Node.js Using JSDOM

Node.js has **no DOM**. So code like `document.createElement()` does **not** work.

But we can simulate a browser DOM using **JSDOM**:

```js
const { JSDOM } = require("jsdom");
const dom = new JSDOM();
const document = dom.window.document;

const heading = document.createElement("h1");
heading.innerHTML = "Hello from JSDOM";
console.log(heading.outerHTML);
```

This prints:

```
<h1>Hello from JSDOM</h1>
```

**JSDOM ≠ real browser DOM**, but it simulates one so we can test DOM logic in Node.

---

# 🟥 4. Adding React via CDN (Browser)

To use React *without bundlers*, include React UMD scripts:

```html
<script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
```

## ❓ What is `crossorigin`?

It tells the browser how to handle CORS headers.
React's CDN requires this to properly load source maps and development warnings.

## Development vs Production

* **Development CDN:** includes warnings, helpful errors, slow but developer‑friendly.
* **Production CDN:** minified, optimized, smaller file size.

Production links end with:

```
…/react.production.min.js
…/react-dom.production.min.js
```

---

# 🔵 5. Exploring the CDN Source Code

Visiting the CDN link shows React’s actual bundled JavaScript code.
This teaches you:

* React is just **JavaScript under the hood**.
* It exposes a global: `window.React`.
* ReactDOM exposes: `window.ReactDOM`.

Browsers load these scripts in the order written.

---

# 🟣 6. Understanding React.createElement

```js
const heading = React.createElement("h1", {}, "Hello world from React!");
```

This does **NOT** create a DOM element.
It creates a **Virtual DOM object**:

```js
{
  type: "h1",
  props: {
    children: "Hello world from react!"
  }
}
```

This is just a **plain JavaScript object**.
React does not touch the browser yet.

---

# 🔶 7. Understanding ReactDOM.createRoot and root.render

ReactDOM is responsible for **creating real DOM elements**.

```js
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
```

### What happens here?

1. **ReactDOM reads the virtual DOM object**.
2. It compares the virtual DOM with the existing real DOM.
3. It updates only what changed (efficient DOM diffing).
4. It mounts actual elements into the browser.

React = UI description
ReactDOM = UI rendering

---

# 🟧 8. Nested Elements Using React.createElement

Example:

```js
const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I'm h1 tag"),
    React.createElement("h2", {}, "I'm h2 tag")
  ])
);
```

This renders to:

```html
<div id="parent">
  <div id="child">
    <h1>I'm h1 tag</h1>
    <h2>I'm h2 tag</h2>
  </div>
</div>
```

React accepts arrays of children.

---

# 🟪 9. Attributes

Attributes in HTML:

```html
<h1 id="title" class="main">Hello</h1>
```

Attributes are **extra information** attached to elements.
React passes HTML attributes as **props**:

```js
React.createElement("h1", { id: "title" }, "Hello")
```

In JSX, these become:

```jsx
<h1 id="title">Hello</h1>
```

---

# 🟥 10. Virtual DOM vs Real DOM

| Concept            | Meaning                                     |
| ------------------ | ------------------------------------------- |
| **Virtual DOM**    | Lightweight JS object tree created by React |
| **Real DOM**       | Actual browser-rendered HTML elements       |
| **render()**       | Converts virtual DOM → real DOM             |
| **Diffing**        | React compares old vs new virtual DOM       |
| **Reconciliation** | React updates only changed parts            |

React is faster because it avoids expensive direct DOM manipulation.

---

# 🟩 11. Example of Parent With Multiple Children

```js
const again = React.createElement(
  "div",
  { id: "Parent" },
  [
    React.createElement(
      "div",
      { id: "child" },
      [
        React.createElement("h1", {}, "I am h1 of div1"),
        React.createElement("h2", {}, "I am h2 of div1")
      ]
    ),
    React.createElement(
      "div",
      { id: "Child" },
      [
        React.createElement("h1", {}, "I am h1 of div2"),
        React.createElement("h2", {}, "I am h2 of div2")
      ]
    )
  ]
);
```

This outputs:

```html
<div id="Parent">
  <div id="child">
    <h1>I am h1 of div1</h1>
    <h2>I am h2 of div1</h2>
  </div>
  <div id="Child">
    <h1>I am h1 of div2</h1>
    <h2>I am h2 of div2</h2>
  </div>
</div>
```

---

# 🎯 Final Summary

React does **not** manipulate the DOM directly.
Instead:

* React creates a **virtual DOM**.
* ReactDOM converts it to **real DOM**.
* The browser displays the real DOM.

Everything is JavaScript — but React manages UI more efficiently:

* batching updates
* diffing changes
* updating only what changed
* making code declarative instead of imperative

This README captures the full journey from simple HTML → DOM → JSDOM → React → ReactDOM → Virtual DOM.

---

If you'd like, I can expand this README with diagrams, JSX examples, or a section explaining Babel and how JSX transforms into `React.createElement`. Let me know!
