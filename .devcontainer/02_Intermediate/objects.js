//object literals
const mySymb=Symbol("Abhi")
const User={
    name: "Abhishek",
    [mySymb]: "Abhi",
    age: 20,
    "Add": "Gzp",
    email: "abc@gmail.com",
}


// console.log(User.name);
// console.log(User["name"]);//modern and good way to access the attribute
// console.log(User['Add']);
// console.log(User[mySymb]);

User.email="abhi24@gmail.com"
// console.log(User["email"]);

// Object.freeze(User)
// console.log(User);

User.greeting=function () {
    console.log(`This is object ${this.name}`);
    greet: "Welcome"
}
// console.log(User.greeting());


//object singleton

const instagram=new Object()

instagram.id="viper@123",
instagram.name="abhi",
instagram.isLoggedIn=false

// console.log(instagram);

let employee={
    id: 1234,
    name: {
        firstname: "Abhishek",
        lastname: "kumar"
    }
}
// console.log(employee);
// console.log(employee.name);
// console.log(employee.name?.firstname);//?check wheather name exist or not

const obj1={name:"Abhi", Branch:"Cse"}
const obj2={Add:"Gzp", number:638766497}

// console.log({obj1, obj2});

// const obj3={obj1, obj2};
const combine=Object.assign({}, obj1,obj2)//best way to combine two object which specify that obj1,2 is assign to {}
// console.log(obj3);
// console.log(combine);
const spread={...obj1,...obj2}
// console.log(spread);

// console.log(Object.keys(User));
// console.log(Object.values(User));

const course={
    c_name:"JavaScript",
    price:99,
    c_id:8965466
}
const {price: p}=course//way to destructure objects
// console.log(price);
console.log(p);