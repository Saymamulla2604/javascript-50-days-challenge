"use strict";
//--merging array methods....
//1.concat method
const array1=["sayma","mulla","abdul","rajjak"];
const array2=["Abdul","rajjak","mulla"];
const array3=array1.concat(array2);
console.log(array3);

//2.spread operator
const spreadArray=[...array1,...array2];//spreading array1 over array2
console.log(spreadArray);

//example of nested array
const  nestedArray=[1, 2, 3, [4, 5, 6], 6, 7, 8, 9, [21, 12, [13, 14, 15]]];

// Using the flat method to create a single array from a nested array (passing Infinity for unlimited depth)
const flatArray = nestedArray.flat(Infinity);
console.log(flatArray); // [  1,  2,  3, 4,  5,  6, 6,  7,  8, 9, 10, 12,13, 14, 15]