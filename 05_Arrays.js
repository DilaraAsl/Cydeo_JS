/** no Collection in JS. In JS we only have Arrays and Map 
 * Array in JavaScript are Not fixed size 
 * [] creates an array
 * {} creates an object
*/
let scores=new Array(); // creates an empty array in JS
let numbers=new Array(10); // creates an array with size 10
let emptyArray=[]; // creates an empty array
let myNumbers=new Array(1,2,3,5,8,13);

console.log(scores);
console.log(numbers);
console.log(myNumbers);
let colors=['red','white','green'];
console.log(colors);
// print the second element in colors array
console.log(colors[1]);

// add element to an array
colors.push("blue"); // push places the element at the end of the array 
console.log(colors);
colors.unshift("pink"); // adds element to the front of the array
console.log(colors);


console.log(colors.pop());// last element will pop out 
console.log(colors);// the element popped out will be removed from the array

//  the size of the array
console.log(colors.length);
for (let i = 0; i < colors.length; i++) {
   console.log(colors[i]);
    
}

// loop with value of Array
// for of
for (let value of colors) {
    console.log(value);
}
// forEach 
colors.forEach(element => {
    console.log(element)
    
});