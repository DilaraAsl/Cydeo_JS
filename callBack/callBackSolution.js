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
    
}

waitingForSomeServerToAct(functionThatNeedsBackEndData);// it is kind of injecting the function that needs to access the data ??
