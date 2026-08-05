//BASICS PART 1
const myArr = [1,2,3,4];
const myArr2 = new Array(1,2,3,4);

//console.log(myArr);
//console.log(myArr2);

//console.log(myArr[1]);
//console.log(myArr2[2]);

//Array methods PART 2

myArr.push(6);
//console.log(myArr)
myArr.pop();
//console.log(myArr);

//myArr.unshift(9);
//console.log(myArr);
myArr.shift();
//console.log(myArr);

//console.log(myArr.includes(9));
//console.log(myArr.indexOf(3));

const newArr = myArr.join();
//console.log(myArr);
//console.log(newArr);

//slice and splice PART 
console.log("A",myArr);
const myn1 = myArr.slice(1,3);
console.log(myn1);
console.log("B",myArr);
const myn2 = myArr.splice(1,3);
console.log(myn2);
console.log("C",myArr);


