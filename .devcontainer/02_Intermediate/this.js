const user={
    username:"Abhishek",
    password:"123xyz",

    login:function () {
        console.log(`${this.username}, welcome to website`);
        // console.log(this);
    }
}
// user.login()
// user.username="Abhi"
// user.login()

// console.log(this);

//------ARROW FUNCTION------//
// const add = (num1, num2) =>{
//     return num1+num2
// }
// console.log(add(2, 5));

//+++++++++WAYS TO WRITE ARROW FUNCTION+++++++++//
// const add =(num1, num2) => num1+num2
// console.log(add(2, 5));

const add =(num1, num2) => (num1+num2)
console.log(add(2, 5));

//NOTE: if we use paranthesis then we have to return a value whereas without using {} there is no need of return statement