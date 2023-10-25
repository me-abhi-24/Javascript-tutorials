const arr=[1, 2, 3, 4, 5]
//-------forof loop return the value---------//
for (const i of arr) {
    // console.log(i);
}
//forin loop return keys of object
for (const key in arr) {
    // console.log(key);
}

arr.forEach(element => {
    console.log(element);
});

let name="Abhishek"
for (const c of name) {
    // console.log(c);
}

const map=new Map()

map.set('CS', "Computer Science")
map.set('ME', "Mechanical Engineering")
map.set('IT', "Information Technologies")
map.set('DS', "Data Science")
// console.log(map);
for (const [key, value] of map) {
    // console.log(key, '->', value);
}
//------maps are not iterable------//
// for (const key in map) {
//     console.log(key);
// }

const obj={
    'game1':"NFS",
    'game2':"GTA",
    'game3':"WWE",
    'game4':"IGI",
}
for (const key in obj) {
    // console.log(`${key} -> ${obj[key]}`);
}