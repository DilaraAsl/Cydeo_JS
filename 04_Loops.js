// loops same as Java : for , while , do while
for(let i=0; i<5; i++){
    console.log(i);
}

// console.log(i); will get Reference error because of variable scope

for(var j=0; j<5; j++){
    console.log(j);
}
console.log(j); // prints 5 var j does not stay inside the scope of for loop 