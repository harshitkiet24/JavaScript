const arr1 = [1,2,3,4,5];
const arr2 = [6,7,8,9,10];

//arr1.push(arr2);
//console.log(arr1);//output : [ 1, 2, 3, 4, 5, [ 6, 7, 8, 9, 10 ] ]

const arr3 = arr1.concat(arr2);//concat method
//console.log(arr3);//output: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const arr4 = [0,...arr1,2,...arr2,3,...arr3];//spread operator
//console.log(arr4);//output: [ 0, 1, 2, 3, 4, 5, 2, 6, 7, 8, 9, 10, 3, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const arr5 = [1,2,3,[4,5],7,[8,9,[10,11]]];
const arr6 = arr5.flat(1);
const arr7 = arr5.flat(Infinity); //output: [ 1, 2, 3, 4, 5, 7, 8, 9, 10, 11] flat operator is used flatten a nested array and it takes depth as arguement here infinty means flatten all levels
//console.log(arr5);
//console.log(arr6); // output : [ 1, 2, 3, 4, 5, 7, 8, 9, [ 10, 11 ] ]
//console.log(arr7);

//console.log(Array.isArray("Harshit"))
//console.log(Array.from("Harshit")) // otput : ['H', 'a', 'r', 's', 'h', 'i', 't']
//console.log(Array.from({ name : "Harshit"} ))//object is not iterable and doesn't have a length property that Array.from() can use. // IMPORTANT


let x = 10;
let y = 20;
let z = 30;

console.log(Array.of(x,y,z)); // [ 10, 20, 30 ]