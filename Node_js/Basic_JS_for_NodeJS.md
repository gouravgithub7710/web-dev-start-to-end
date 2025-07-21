
# Basic JavaScript Concepts Used in Node.js

## 1. Variables (`var`, `let`, `const`)
Used to store values.
- `var` is old and function-scoped.
- `let` is block-scoped.
- `const` is for constant values which can't be reassigned.

## 2. Functions
Functions are reusable blocks of code. You write once and call whenever needed. Node.js uses them to organize logic cleanly.

                  function greet(name) {
                    return "Hello, " + name;
                  }
                  console.log(greet("Node")); // Hello, Node


## 3. Arrow Functions (`=>`)
A shorter way to write functions. Commonly used in callbacks and routes in Node.js.
          const add = (a, b) => a + b;
          console.log(add(2, 3)); // 5


## 4. Objects & JSON
    🔸 Object: JavaScript ka data structure hota hai, directly code me use hota hai.
    const obj = { name: "Gourav", age: 21 }; // JavaScript object

    🔸 JSON: Data ko text/string format me store aur transfer karne ke liye hota hai.
    const json = '{"name": "Gourav", "age": 21}'; // JSON string
    
  Objects store data in key-value pairs. JSON (JavaScript Object Notation) is the standard format for data in APIs.
              const user = {
                name: "Gourav",
                age: 21
              };
              // Convert to JSON
              const jsonData = JSON.stringify(user);
              console.log(jsonData); // {"name":"Gourav","age":21}
🟢 JSON object ko JavaScript object me convert karne ke liye: 
      JSON.parse(json)
🟢 JavaScript object ko JSON me convert karne ke liye: 
      JSON.stringify(obj)

## 5. Arrays and Array Methods
Arrays hold multiple values. Important methods:
- `push()`, `pop()`, `map()`, `filter()`, `forEach()`, `find()` — all used in manipulating data.

      const nums = [1, 2, 3, 4];
      // map - create a new array with each value * 2
      const doubled = nums.map(n => n * 2);
      console.log(doubled); // [2, 4, 6, 8]


## 6. Callbacks
A function passed into another function to be called later. Often used for async tasks like reading files.
                  function greet(name, callback) {
                    callback("Hello " + name);
                  }
                  greet("Node", (msg) => {
                    console.log(msg); // Hello Node
                  });


## 7. Promises & Async/Await
Handle asynchronous operations. Promises provide a cleaner way to manage async logic. `async/await` makes the code more readable.

-Promise ek object hai jo future me result (success ya error) dene ka vaada      karta hai.
            let promise = new Promise((resolve, reject) => {
              // async task
              resolve("Done!");  // or reject("Error!")
            });
            promise.then((res) => console.log(res));

-Async/Await promises ko handle karne ka simple and clean way hai.
                  async function getData() {
                    const data = await fetchData();
                    console.log(data);
                  }
                  getData();

## 8. Modules (`require`, `exports`)
        Used to split code across files. `require()` imports a module, `module.exports` exports it.
                      function add(a, b) {
                        return a + b;
                      }
                      module.exports = add;
                      const add = require('./math');
                      console.log(add(2, 3)); // 5
                    

## 9. Events
Node.js uses an event-driven architecture. Actions like "request received" or "file read" trigger events that you can respond to.

    Node.js ek event-driven architecture follow karta hai — matlab jab koi kaam hota hai (jaise request aayi, file read hui, button click hua), toh hum us "event" ke response me kuch action kar sakte hai.

    Iske liye Node.js me ek class hoti hai: EventEmitter
    Hum on() method se event ko listen karte hai, aur emit() method se event trigger karte hai.

            const EventEmitter = require('events'); // 1. Import EventEmitter
            const emitter = new EventEmitter();     // 2. Create instance
            // 3. Event listener (greet naam ka event sun rahe hai)
            emitter.on('greet', () => {
              console.log('Hello! This is a greeting from an event.');
            });
            // 4. Trigger (emit) the event
            emitter.emit('greet'); // Output: Hello! This is a greeting from an event.


## 10. Error Handling (`try-catch`)
Catches and handles errors in the code. Prevents your app from crashing on unexpected errors.
