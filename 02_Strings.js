let str1='Java';
let str2="Script";
let str3="awesome"

let result;
result="the result variable is "+str1+str2+' '+str3;
console.log(result);
//  difference from Java: backticks for variable insertion
result=`The result variable is: ${str1}${str2} is ${str3}`
//  backtack allows you to insert variables into a string
console.log(result);

