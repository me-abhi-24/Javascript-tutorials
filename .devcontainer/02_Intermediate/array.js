let arr=[1, 2, 3, 4, 5]
console.log(arr[3]);
arr.push(6)
// console.log(arr);
// console.log(arr.pop());

// console.log(arr.slice(1,3));
// console.log(arr);

arr.splice(1,3)
// console.log(arr);
// so the difference bertween slice and splice is that splice change the original array but slice doesn't change and splice include the last index given as an argument

const marvel_heros=["Ironman", "Thor", "Spiderman"]
const dc_heros=["Superman", "Batman", "Aquaman"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros);

const allHeros=marvel_heros.concat(dc_heros)
// console.log(allHeros);

// modern operator 
const allHeros1=[...marvel_heros, ...dc_heros]
// console.log(allHeros1);

const arr1=[1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
console.log(arr1);
const result=arr1.flat(Infinity)
console.log(result);

//how to make array
console.log(Array.from("Abhishek"));

let scr_1=100
let scr_2=200
let scr_3=300

console.log(Array.of(scr_1, scr_2, scr_3));