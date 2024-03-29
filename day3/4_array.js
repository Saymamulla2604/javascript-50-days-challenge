"use strict";

// ----- Making an array from a string ----

const str = "Sayma Mulla";
const convertedArray = Array.from(str);
console.log(convertedArray); // ["A", "h", "m", "a", "d", " ", "F", "a", "r", "a", "z"];

// Making an array from an object
const obj = {
  name: "Sayma Mulla",
  id: 2103023,
  city: "Chiplun",
};

// In the case of objects, specify whether to create an array of keys or values
// Converting the object to an array of values
const valuesArray = Object.values(obj);
console.log(valuesArray); // ["Ahmad Faraz", 12345, "Peshawar"]

// Converting the object to an array of keys
const keysArray = Object.keys(obj);
console.log(keysArray); // ["name", "id", "city"]