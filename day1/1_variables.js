"use strict";//Treat javascript as latest version  in browser

//three ways to declare variables
//const:the value cannot be changed else error will be thrwon 
const id=2103023;
//let: used to avoid ambiguity like function scoping
let file="web development";
var city="chiplun";
console.log("Id:",id,"\nfield:",file,"\ncity:",city);
//prints data in table format
console.table([id,file,city]);