// loops same as Java : for , while , do while
for(let i=0; i<5; i++){ // let local scope
    console.log(i);
}

// console.log(i); will get Reference error because of variable scope
// old type of declaring variables ES6
for(var j=0; j<5; j++){ //global function scope
    console.log(j);
}
console.log(j); // prints 5 var j does not stay inside the scope of for loop 