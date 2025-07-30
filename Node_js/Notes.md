# NodeJS :- 
  Node.js is a JavaScript runtime environment that allows you to run JavaScript code outside the browser, like on a server.
  It is built on Google Chrome’s V8 engine, and it helps in building fast and scalable server-side applications.

# V8 engine:
  The V8 engine** is a JavaScript engine developed by Google, used inside the Google Chrome browser.
  It converts (compiles) JavaScript code into machine code so that computers can understand and run it very fast.

# NPM (Node Package Manager)
  NPM stands for Node Package Manager.
  It is the default package manager for Node.js that helps you to:
  Install packages (libraries/tools) made by others
  Manage dependencies in your project
  Run useful scripts for building, testing, etc.

    npm init -- creatre package.json file 
    npm i express -- for install express from npm 
    npm i nodemon -- automatically restarting the node application
    npm i lodash  -- 
                    Lodash is a popular JavaScript utility library that provides helper functions for common programming tasks like: Working with arrays, objects, strings, and numbers

# Postman
  Postman is a tool used to test APIs.
  It lets you send HTTP requests (like GET, POST, PUT, DELETE) to your server and see the response — without writing any frontend code.

  # What is Server
  A server is a computer or system that provides data, services, or resources to other computers (called clients) over a network.
  It listens to requests from clients and responds with the requested information, like websites or files.

  # JSON
          JSON (JavaScript Object Notation) is a lightweight data format used to store and exchange data between a server and a client.

        👉 It is easy to read and write, and looks like a simple collection of key-value pairs, like this:
        {
          "name": "Gourav",
          "age": 21,
          "isStudent": true
        }

#  What is an API?
        An API (Application Programming Interface) lets two software programs talk to each other.
        It allows you to send or get data from another system or server.
        APIs are used in apps like weather, login with Google, etc.
        Example: A website uses an API to show live weather from a weather service.

# What is an API Endpoint?
  An endpoint is a specific URL where an API listens for requests.
  It tells the system what data or action you want.
  Each endpoint does a specific task like getting user info or posting data.
  Example: https://api.weather.com/current?city=Delhi is an endpoint to get Delhi’s weather.

# What is Express.js?
    Express.js is a lightweight and fast web framework for Node.js.
    It helps you build web servers and APIs easily using JavaScript.
    You can handle routes, requests, and responses with very little code.
    It’s widely used to create backend for web and mobile apps.

          const express = require('express');
          const app = express();

          app.get('/', (req, res) => {
            res.send('Hello, World!');
          });
          app.listen(3000);
      This code creates a server that runs on http://localhost:3000 and shows "Hello, World!" when you visit it.

//-------------------------------------------------------------------------------------------
# Methods to share data --  HTTP Methods in Node.js (Express.js)

| Method   | Purpose (Kaam)        | Route Example                  | Use Case                           |
| -------- | --------------------- | ------------------------------ | ---------------------------------- |
| `GET`    | Data **fetch** karna  | `app.get('/api/users')`        | Server se users ki list lena       |
| `POST`   | Naya data **bhejna**  | `app.post('/api/users')`       | Naya user create karna             |
| `PATCH`  | Data **update** karna | `app.patch('/api/users/:id')`  | Ek user ka name/email update karna |
| `DELETE` | Data **delete** karna | `app.delete('/api/users/:id')` | Ek specific user ko delete karna   |


              // 1. GET
              app.get("/api/users", (req, res) => {
                res.json(["user1", "user2"]);
              });

              app.post(...) → Jab frontend POST request bhejta hai /api/users pe (naya user create karne ke liye), to ye route call hota hai.

              req.body → Client ne jo data bheja (e.g. name), vo yahan milta hai.

              const { name } = req.body; → name ko body se extract kar rahe hain.

              res.send("User created") → Server ek success message bhej raha hai.

              // 2. POST
              app.post("/api/users", (req, res) => {
                const { name } = req.body;
                res.send("User created");
              });

              // 3. PATCH
              app.patch("/api/users/:id", (req, res) => {
                const id = req.params.id;
                res.send(`User ${id} updated`);
              });

              // 4. DELETE
              app.delete("/api/users/:id", (req, res) => {
                const id = req.params.id;
                res.send(`User ${id} deleted`);
              });

//----------------------------------------------------------------------------------------
