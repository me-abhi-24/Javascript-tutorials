const first_name="Abhishek"

const last_name="Kumar"

console.log(`My name is ${first_name} ${last_name}`); //this is string interpolation(new mordern way to declare strinh)

//other method to declare string
const name=new String("Abhishek-Kumar")
console.log(name)
//the diffrence in declaring string by using other method is 
console.log(name[3]);
console.log(name.__proto__); //this give method of string
console.log(name.toUpperCase()); //but actual value of name is not change

console.log(name.split('-'));
