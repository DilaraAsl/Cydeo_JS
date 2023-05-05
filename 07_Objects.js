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
console.log(course);
// loop using keys of the object
for(let key in course){
    console.log(key+" : "+course[key]);
}
// value which was array turned into String

/**
 * Fixture folder in Cypress. Inside fixtures json files stored. 
 */
//  let's create an object with function

let myCar={
    make: 'Dacia',
    color: 'orange',
    year: 2022,
    engine : {
        cylinders: 3,
        size: 1.0
    },
    extras : ['AC','Cruise Control', 'Sound System'],
    drive : function () {
        console.log("Running on LPG");
    }
}

myCar.drive();
console.log(myCar.extras[1]);