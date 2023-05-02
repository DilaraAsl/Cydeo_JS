// Order of operators same as Java
console.log(4+4*(-1)-8/2);
// assignment operators
let x=5;
x+=5;
console.log(x);
// comparison : similar to Java 
let one=1;
let one_more=1;
let one_string='1';
let two_string='2';
console.log(one==one_more);
console.log(one==one_string); // == value equality
console.log(one_string===two_string); // === data type and value equality

// logical operators same like Java only limited to && ||

console.log((5<2)&&(2<5));

let num1=100;
let num2=10;
if(num1>num2){
    console.log('number 1 is bigger');
}
else{
    console.log('number 2 is bigger');
}
