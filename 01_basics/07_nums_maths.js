
console.log(
Math.floor(Math.random() * 10) ,    // generates a random integer between 0 and 9     
Math.ceil(4.2)                 ,    // rounds 4.2 up to the nearest integer
Math.floor(4.7)                ,// rounds 4.7 down to the nearest integer
Math.round(4.5)                ,// rounds 4.5 to the nearest integer (4 or 5)
Math.max(1, 5, 3)              ,// returns the largest of the given numbers
Math.min(1, 5, 3)              ,// returns the smallest of the given numbers
Math.pow(2, 3)                 ,// calculates 2 raised to the power of 3 (2^3)
Math.sqrt(16)                  ,// calculates the square root of 16
Math.abs(-5)                   ,// returns the absolute value of -5
Math.PI                        ,// returns the value of π (pi)
Math.E                         ,// returns the value of e (Euler's number)

Math.random()                  ,// generates a random number between 0 (inclusive) and 1 (exclusive)
Math.random() * 100)            // generates a random number between 0 and 100

const min = 10;
const max = 20;
console.log(Math.floor(Math.random() * (max - min) + min ));  // generates a random number between min and max
