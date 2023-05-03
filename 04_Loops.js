// loops same as Java : for , while , do while
for(let i=0; i<5; i++){ // let local scope
    console.log(i);
}

// console.log(i); will get Reference error because of variable scope
// old type of declaring variables ES6 :side topic
for(var j=0; j<5; j++){ //global function scope
    console.log(j);
}
console.log(j); // prints 5 var j does not stay inside the scope of for loop 

let n1=0;
while (n1<3) {
    console.log(n1);
    n1++;
    
}
let n2=0;
do{
    console.log(n2);
    n2++;
}while(n2<3);