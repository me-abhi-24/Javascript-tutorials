function add(num1, num2) {
    console.log(num1+num2);
}
// add(3, 5)
function add1(num1,num2){
    let result=num1+num2
    return result
}

// console.log("Result =", add1(3, 5));

function login(username="Abhi"){//abhi is the default value
    return `${username} just logged in`
}

// console.log(login("Abhishek"));
// console.log(login());//this give undefined

function calculatePrice(...num1){
    let sum=0;
    for (let index = 0; index < num1.length; index++) {
        sum =sum+ num1[index];
        
    }
    return sum
}
console.log(calculatePrice(20, 50, 40, 50));