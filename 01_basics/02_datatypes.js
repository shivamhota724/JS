// "use strict"; // treat all JS code as newer version

// //alert(3+3)// doesn't apply in nodejs, applies in browser

// console.log("dubudubu")
// console.log(45+62)
// let name = "shivam" // string
// let age = 21 // number range till 2 to pwer 53
// // bigint => for numbers bigger than that
// // boolean => true/false
// // null => standalone value(no value)
// // symbol => for uniqueness

// // object
// console.log(typeof "shivam")
// console.log(typeof age);
// console.log(typeof null); // object
// console.log(typeof undefined); //undefined

// // data types 
// // primitive : string, numbers, boolean, null, undefined, symbol, BigInt

// const score = 100
// const scoreValue = 100.3

// const isLoggedIn = false
// const outsideTemp = null
// const id = Symbol('123')     
// const anotherId = Symbol('123')      // symbol

// console.log(id)
// console.log(anotherId);
// console.log(id === anotherId);

// const bignumber = 6456537457n
// console.log(typeof bignumber);      // bigint

// // reference(non-primitive); array, objects, functions

const players = ["sachin","dhoni","kohli"]
let object = {
    name: "shivam",
    age: 21,
}

const myFunction = function(){
    console.log("output");
    
}
console.log(typeof myFunction );        // function
console.log(typeof players);            // object
console.log(typeof object);             // object





