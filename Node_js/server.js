//  function add(a,b){
//   return a+b;
//  }

//  var result =add(5,10);
//  console.log(result);

// var addidation = function(a,b){
//   return a+b;
// }

// console.log(addidation(20,30));

// var addation2digit = (a,b) => {
//   return a+b;
// }
// console.log(addation2digit(100,200));
 

// (function(a,b){
//  console.log("Anonymous function result: " + (a + b));
 
// })(10,20);

// (function callback()
// {
//   console.log("This is a callback function");
// })();

//-------------------------------------------------------------------

// const { log } = require('console');
// var fs = require('fs');
// var os = require('os');

// var user = os.userInfo();
// console.log(user.username);

// console.log(os);


// fs.appendFile('greeting.txt', `Hello ${user.username}!\n`, () => {
//   console.log('File created successfully!');
// });

// console.log(fs);


//-----------------------------------------------------------------

// const notes = require('./notes.js');

// console.log('Server is Running!');

// var age = notes.age;
// console.log(`Age from notes.js: ${age}`);

// var sum = notes.addNumber(5, 10);
// console.log(`Sum from notes.js: ${sum}`);


//-------------------------------------------------------------

// var _ = require('lodash');
// console.log('Server is Running!');

// var data = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,1,2,3,4,5,6,7,8,9,10];

// var filter = _.uniq(data);
// console.log(`Unique values: ${filter}`);// [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]

// console.log(_.isString('Hello World'));//true
// console.log(_.isString(12345)); //false

//-------------------------------------------------

// let jsonString = '{"name":"Gourav","age":21,"isStudent":true}';

// let obj = JSON.parse(jsonString); // Convert JSON string to JS object

// console.log(obj.name);     // Output: Gourav
// console.log(obj.age);      // Output: 21
// console.log(obj.isStudent); // Output: true


// let student = {
//   name: "Gourav",
//   age: 21,
//   isStudent: true
// };

// let jsonString = JSON.stringify(student);  // Convert object to JSON string

// console.log(jsonString);
// // Output: {"name":"Gourav","age":21,"isStudent":true}

//-----------------------------------------------------

const express = require('express');

const app = express()

app.get('/', (req, res) => {
  res.send('Hello, How can i help you?')
})

app.get('/about', (req, res) => {
  res.send('This is about page')
})

app.get('/contact', (req, res) => {
  res.send('This is contact page')
})  
app.listen(3000,()=>{
  console.log('Server is running on port 3000')
})

//---------------------------------------------------------------