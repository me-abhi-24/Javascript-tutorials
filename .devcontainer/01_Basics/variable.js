const accountId = 101
let accountEmail = "abc@gmail.com"
var accountPass = "kumar@123"
let accountName;

// accountId=2
accountEmail = "xyz@gmail.com"
accountPass = "abhi24"
// console.log(accountId);
console.table([accountId, accountName, accountEmail, accountPass])

//primitive - number, string, boolean, nul, undefine
//Non-primitive - arrays, objects, function

// Stack used by primitive datatype
// heap used by Non-primitive datatype
let name="Abhishek"
let petname=name
petname="Abhi"

console.log(name);
console.log(petname);

let user={
    email:"user@gmail.com",
    pass:"abcxxh"
}

let user1=user;

user1.email="abhishek24@gmail.com"

console.log(user);
console.log(user1);