// {}  create objects in js 
// [] creates an array
let person={
    firstName : "Joe",
    lastName : "Doe"
}; 
console.log(typeof person);
console.log(person);
console.log(person.firstName);

let address={
    street: "774 Something Ave.",
    'building no':5555,
    state: "TX",
    zip: '99001'
}
console.log(address);
console.log(address['building no']); // another way to reach data
console.log(address.street);
// add new property to object
person.age=30; // adds a new property to the person object
console.log(person);
//delete property 
delete person.age;
console.log(person);

//check property in address object - returns true or false
console.log('street' in address);
console.log('age' in person);

// you can place arrays inside objects
let course={
    name: 'JS',
    url: 'Cydeo.com',
    subjects: ['Objects','Arrays','Functions']
}
