"use strict";

// Note: Arrow functions were introduced in ES6 and onwards.

// ---- Arrow function ----

const hello = (name) => {
  const greeting = "Greetings";
  console.log(`${greeting} to all of you from ${name}`);
};

hello("sayma mulla");

// ---- Implicit return function ----

const myName=(name)=>name;
console.log(myName("sam "));

// Implicit return is used when we eliminate the brackets and 'return' keyword from the arrow function,
// and the function assumes that it has only a single line of code.

// Returning an object in implicit return
const myObject=()=>({name:"sayma mulla rajjak"});
console.log(myObject());