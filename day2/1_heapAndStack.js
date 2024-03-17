"use strict";
//primitive datatyoes are stored on stack
let oldplace="islampur";
let newlocation=oldplace;
newlocation="UAE";
console.log("old location:",oldplace);
console.log("new location:",newlocation);
//non primitive datatypes are stored in heap
 let userone={
    email:"abc@gmail.com",
    location:"India"
};

let usertwo=userone;
usertwo.location="chiplun";//this will update userone as well
console.log("user one:",userone);
console.log("user two:",usertwo);