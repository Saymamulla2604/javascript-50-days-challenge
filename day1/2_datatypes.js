"use strict";
//Primitive data types ,known ans call by value datatype
//number,bigInt,string,boolean,null,undefined,symbol(used for uniqueness)
const myId=Symbol("123");
const yourId=Symbol("123");
console.log(myId==yourId)//false