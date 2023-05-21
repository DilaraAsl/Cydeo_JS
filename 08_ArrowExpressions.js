let x= function(a){
    return 5*a;
}

//ES6
// define a function just like lambda in Java
let y=a=>5*a;
console.log(y(5));

//  map function that comes with arrow expression
let arr=[5,10,20];
let newArr=arr.map(x=>x*2);
console.log(newArr);

//varArgs in Java
let mid=[3,4];
let arr2=[1,2,...mid,5,6];// inserts mid 3,4 inside arr2

function howManyElements(...theArgs) { // pass values as an array just like java varArgs
    console.log(theArgs.length);
    
}
howManyElements();
howManyElements(5);
howManyElements(1,2,3,4,5);
// don't know how many numbers that you will multiply by
function multiply(multiplyBy,...theArgs){
    return theArgs.map(element=>multiplyBy*element);
}
// multiply all the numbers by 5 [ 5, 10, 15, 20, 25 ]
console.log(multiply(5,1,2,3,4,5));

let str= 'CYDEO';
// turns str into a char array [ 'C', 'Y', 'D', 'E', 'O' ]
let chars= [...str];
console.log(chars);