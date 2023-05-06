function waitingForSomeServerToAct(myCallBack) { //myCallBack is a function
    let dataNeeded;
    setTimeout(() => {
        console.log("backend information has just been recieved");
        dataNeeded="Cydeo";
        myCallBack(dataNeeded)
    }, 5000);
    return dataNeeded;
}
function functionThatNeedsBackEndData(info) {
    console.log("I need to use BackEnd data"+info);
    alert("This is a js alert");
    
}
// node.js does not have alert function - alert only works on the browser

waitingForSomeServerToAct(functionThatNeedsBackEndData);// it is kind of injecting the function that needs to access the data ??
/**
 * The first solution was the callback function
 * ES6-- promises to handle the async nature of js
 * 2017-- async funtions and await keyword
 * Interview Questions:
 * what is a callback hell?
 * what is async code and what is sync code? 
 */

// js get user input with prompt
let username=prompt("Enter your name");
console.log(username); // prints in the console