/**
 * In Java get the data from the db and use it in the code
 * synchronious action:
 * -connect to db
 * -get data
 * -wait until data is recieved
 * -execute the code
 * in JavaScript
 * asynchronious code: 
 * -while trying to connect to the db the rest of the functions do not wait -async code
 * 
 */
// this function is imitating a data retrieval from a source
function waitingForSomeServerToAct() {
    let dataNeeded;
    setTimeout(() => {
        console.log("backend information has just been recieved");
        dataNeeded="Cydeo";
        console.log(dataNeeded);
    }, 5000);
    return dataNeeded;
}
function functionThatNeedsBackEndData(info) {
    console.log("I need to use BackEnd data"+info);
    
}
let data=waitingForSomeServerToAct(); //calls server connection, getting the data and storing it to a variable 
functionThatNeedsBackEndData(data); // even though the function calls the waitingForSomeServerToAct() function it does not wait its response 
//and executes the code out put is undefined 5sec later the data recieved printed on the screen 
// I need to use BackEnd dataundefined
// backend information has just been recieved
// Cydeo