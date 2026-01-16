# 📘 Personal JavaScript Handbook

> **Author:** Siddhu Ganesh Musa
> **Goal:** Learn JavaScript for **Frontend, Backend, and Testing** (Beginner → Intermediate)

---

## 1️⃣ What is JavaScript?

JavaScript (JS) makes modern web development possible.

* 🌐 Frontend → React, DOM, Browser APIs
* ⚙️ Backend → Node.js, Express
* 🧪 Testing → Jest, Playwright, Cypress

```js
console.log("JavaScript is everywhere!");
```

---

## 2️⃣ Variables in JavaScript

JavaScript has **3 types of variables**:

| Keyword | Scope          | Use Case      |
| ------- | -------------- | ------------- |
| `var`   | Function scope | Old (avoid)   |
| `let`   | Block scope    | Re-assignable |
| `const` | Block scope    | Fixed value   |

```js
let age = 23;
const name = "Siddu Ganesh Musa";
```

---

## 3️⃣ Data Types

### ✅ Primitive Data Types

* Number
* String
* Boolean
* Undefined
* Null
* BigInt
* Symbol

```js
let score = 99;          // Number
let city = "Bangalore"; // String
let isActive = true;    // Boolean
let x;                  // Undefined
let y = null;           // Null
```

### ✅ Non‑Primitive Data Types

#### Object

```js
const user = {
  name: "Siddu",
  role: "Developer",
  experience: 0
};
```

---

## 4️⃣ Operators

```js
// Arithmetic
console.log(10 + 5);

// Comparison
console.log(5 === "5"); // false

// Logical
console.log(true && false);
```

---

## 5️⃣ Functions

Functions are reusable blocks of code.

```js
function greet(name) {
  return `Hello ${name}`;
}

console.log(greet("Siddu"));
```

### Arrow Functions (ES6)

```js
const greet = (name) => `Hello ${name}`;
```

---

## 6️⃣ Control Flow

### if‑else

```js
let age = 18;

if (age >= 18) {
  console.log("Eligible to vote");
} else {
  console.log("Not eligible");
}
```

### Loops

```js
for (let i = 1; i <= 5; i++) {
  console.log(i);
}
```

---

## 7️⃣ Arrays & Methods

```js
const skills = ["HTML", "CSS", "JS"];

skills.push("React");
skills.forEach(skill => console.log(skill));
```

---

## 8️⃣ Objects Deep Dive

```js
const user = {
  name: "Siddu",
  greet() {
    console.log(`Hi, I am ${this.name}`);
  }
};

user.greet();
```

---

## 9️⃣ DOM Manipulation (Frontend)

> Requires basic HTML knowledge

### Selecting Elements

```js
const title = document.getElementById("title");
const btn = document.querySelector("button");
```

### Changing Content

```js
title.textContent = "Hello JavaScript";
```

### Styling

```js
title.style.color = "blue";
```

### Events

```js
btn.addEventListener("click", () => {
  alert("Button clicked");
});
```

---

## 🔟 Synchronous vs Asynchronous

### Synchronous

```js
console.log("A");
console.log("B");
```

### Asynchronous

```js
setTimeout(() => {
  console.log("Async Task");
}, 2000);
```

---

## 1️⃣1️⃣ Hoisting

```js
console.log(x); // undefined
var x = 10;
```

> `let` and `const` are **not hoisted the same way**.

---

## 1️⃣2️⃣ Callbacks

```js
const hello = (callback) => {
  console.log("Hello");
  callback();
};

const goodbye = () => console.log("Goodbye");

hello(goodbye);
```

### Callback Hell ❌

```js
setTimeout(() => {
  setTimeout(() => {
    setTimeout(() => {
      console.log("Too deep!");
    }, 1000);
  }, 1000);
}, 1000);
```

---

## 1️⃣3️⃣ Promises

```js
const task = new Promise((resolve, reject) => {
  let success = true;

  if (success) resolve("Done");
  else reject("Failed");
});

task
  .then(result => console.log(result))
  .catch(error => console.log(error));
```

---

## 1️⃣4️⃣ Async / Await ⭐

```js
const fetchData = () => {
  return new Promise(resolve => {
    setTimeout(() => resolve("Data loaded"), 2000);
  });
};

const loadData = async () => {
  const data = await fetchData();
  console.log(data);
};

loadData();
```

---

## 1️⃣5️⃣ Error Handling

```js
try {
  throw new Error("Something went wrong");
} catch (err) {
  console.log(err.message);
}
```

---

## 1️⃣6️⃣ JavaScript for Backend (Node.js)

```js
const http = require("http");

http.createServer((req, res) => {
  res.write("Hello from Node");
  res.end();
}).listen(3000);
```

---

## 1️⃣7️⃣ JavaScript for Testing

### Simple Test Logic

```js
function sum(a, b) {
  return a + b;
}

console.assert(sum(2, 3) === 5, "Test failed");
```

---

## 1️⃣8️⃣ Best Practices

✅ Use `const` by default
✅ Write readable code
✅ Use meaningful variable names
✅ Avoid callback hell
✅ Handle errors properly

---

## 🚀 Learning Path

1. JavaScript Basics
2. DOM + Browser APIs
3. Async JavaScript
4. React Basics
5. Node + Express
6. Testing

---

### ✨ Final Advice

> **Readable code = Maintainable code**

Keep practicing every day 💪
