"use strict";
//1.initialization of string directly
const myName="sayma mulla";
const repoCount=9;
console.log(`my name id ${myName} and my repo count is ${repoCount}`);

//2.initialization of string using javascipt object

const myEmail=new String("abc@gmail.com");
console.log(myEmail);
console.log(myEmail[0]);
console.log(myEmail[1]);

//methods of the string 
console.log(myEmail.length);
console.log(myEmail.toUpperCase());// Does not change the original value
console.log(myEmail.charAt(4)); // a: charAt method gives us the char at a specific index
console.log(myEmail.indexOf("a")); // 4: indexOf gives us the index of a char

const string1=myEmail.substring(0,4);
console.log(string1);

const string2=myEmail.slice(-8,18);
console.log(string2);

const String3 = myEmail.trim(); // Trim removes the space from both the start and end of the string
console.log(String3);

const url = "www.linkedin%20org";
console.log(url.replace("%20", ".")); // Replaces the string with another string
console.log(url.includes(20)); // Checks whether "20" exists in the URL or not
const String4 = "Sayma-Mulla-Webdeveloper";
console.log(String4.split("-")); // Makes the array from the string based on '-'