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

const notes = require('./notes.js');

console.log('Server is Running!');


