let myDate=new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// let specificDate=new Date(2027, 11, 1)
// console.log(specificDate.toDateString());

let specificDate=new Date("2023-01-18")
// console.log(specificDate.toLocaleString());

let myTimeStamp=Date.now();
// console.log(myTimeStamp);
// console.log(specificDate.getTime());
// console.log(Math.floor(Date.now()/1000));
console.log(myDate.getDate());
console.log(myDate.getFullYear());