//The values which are assumed to be true or false are called truthy or falsy values respectively

// let username="abc@io";
// if (username) {
//     console.log("Got the email");
// }

let username="";
if (username) {
    console.log("Got the email");
}
//here if string is empty it is a falsy value 

let arr=[]
if (arr) {
    console.log("This is array");
}
//here array is empty but it is truthy value

//Truthy values
//[], "0", " ", True

//Falsy values
// 0, -0, "", False, undefined, null, NaN