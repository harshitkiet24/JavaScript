const arr1 = [1,2,3,4,5];
const arr2 = [6,7,8,9,10];

//arr1.push(arr2);
//console.log(arr1);

const arr3 = arr1.concat(arr2);
//console.log(arr3);

const arr4 = [...arr1,...arr2,...arr3];
//console.log(arr4);

const arr5 = [1,2,3,[4,5],7,[8,9,[10,11]]];
const arr6 = arr5.flat(Infinity);
//console.log(arr5);
//console.log(arr6);

console.log(Array.isArray("Harshit"))
console.log(Array.from("Harshit"))
console.log(Array.from({ name : "Harshit"} )) // IMPORTANT


let x = 10;
let y = 20;
let z = 30;

console.log(Array.of(x,y,z));