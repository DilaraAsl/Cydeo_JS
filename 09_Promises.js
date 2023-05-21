//  new Promise(function(resolve,reject))
// state of the web page can be true or false
let stateOfTheWebPage= function (state){
return new Promise(function(resolve,reject){
    if(state){
        // if state is true the resolve function will execute
        resolve('Page is loaded');
    }
    else{
        reject('Page is not allowed yet');
    }
})
}
// console.log(stateOfTheWebPage(true).then(function(result){console.log(result)}));
console.log(stateOfTheWebPage(true).then((result)=>{console.log(result)}));
// undhandledPromiseRejection --the rejection should be handled 
// console.log(stateOfTheWebPage(false).then((result)=>{console.log(result)}));

// rejection is handled by chatch function -> errorMsg is a function/ lambda expression 

console.log(stateOfTheWebPage(false).catch((errorMesg)=>{console.log(errorMesg)}));
//  function key word can be omitted
// new Promise(function(resolve,reject){
//  resolve
// })
new Promise((resolve,reject)=>{
    setTimeout(
        ()=>{
            resolve(1)},3000);
        }).then((result)=>
        {
            console.log(result); //1
            return result*2;
        }
        ).then((result2)=>{
            console.log(result2) //2
            return result2*2;
        }).then((result3)=>{
            console.log(result3) //4
            return result3*2; // the value increased to 8
        })
       