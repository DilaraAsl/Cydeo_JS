// no access modifier, no method overloading
// non return type
function add(a,b) { 
    console.log("Total is : "+(a+b));
    
}
// return type 
add(10,20);
function multiply(a,b) {
    return (a*b);
}
console.log(multiply(10,20));

// no method overloading
add(10,20,30);// js will ignore anything after the second parameter -js does not give error 

// functions can be defined as data types
/**
 * 
 * @param {*} a 
 * @param {*} b 
 * @returns 
 * The functions are reffered as first class citizens in JS
 * 1. you can pass functions as arguments to other functions
 * 2. you can return a function from a function 
 * 3. you can store a funciton into a variable 
 * you can pass functions like an object
 */
let divide=function (a,b) {
    return a/b;
    
}
console.log(divide(15,3));

let anyFunction=divide;
console.log(anyFunction(20,4));

// pass a function as an argument to other functions
function sum(a,b) {
    return a+b;
}
// advantage we can pass any function that we need -function is not limited, it is reusable - instead of sum we can use multiply, divide etc..
function average(a,b,fn){
    return fn(a,b)/2;
}
console.log(average(5,9,sum));