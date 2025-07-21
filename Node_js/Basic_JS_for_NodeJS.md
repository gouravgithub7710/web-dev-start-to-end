
# Basic JavaScript Concepts Used in Node.js

## 1. Variables (`var`, `let`, `const`)
Used to store values.
- `var` is old and function-scoped.
- `let` is block-scoped.
- `const` is for constant values which can't be reassigned.

## 2. Functions
Functions are reusable blocks of code. You write once and call whenever needed. Node.js uses them to organize logic cleanly.

## 3. Arrow Functions (`=>`)
A shorter way to write functions. Commonly used in callbacks and routes in Node.js.

## 4. Objects & JSON
Objects store data in key-value pairs. JSON (JavaScript Object Notation) is the standard format for data in APIs.

## 5. Arrays and Array Methods
Arrays hold multiple values. Important methods:
- `push()`, `pop()`, `map()`, `filter()`, `forEach()`, `find()` — all used in manipulating data.

## 6. Callbacks
A function passed into another function to be called later. Often used for async tasks like reading files.

## 7. Promises & Async/Await
Handle asynchronous operations. Promises provide a cleaner way to manage async logic. `async/await` makes the code more readable.

## 8. Modules (`require`, `exports`)
Used to split code across files. `require()` imports a module, `module.exports` exports it.

## 9. Events
Node.js uses an event-driven architecture. Actions like "request received" or "file read" trigger events that you can respond to.

## 10. Error Handling (`try-catch`)
Catches and handles errors in the code. Prevents your app from crashing on unexpected errors.
