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

myArr.unshift(9);
//console.log(myArr);//push 9 at myArr[0] and shift every element to next index; 
myArr.shift();
//console.log(myArr);//remove the element at myArr[0] and shift every element to its previous index;

//console.log(myArr.includes(9));//check if 9 is present in myArr or not
//console.log(myArr.indexOf(3));//give the index at which 3 is present

const newArr = myArr.join();//create a new string and transfer all elements of myArr to newArr ex 1,2,3,4
//console.log(myArr);//[1,2,3,4]
//console.log(newArr);//1,2,3,4

//slice and splice PART 
//console.log("A",myArr);// A [1,2,3,4] print 'A' before myArr
const myn1 = myArr.slice(1,3); //take all elemnents from array other than from index 1 to 2 ans store them in myn1
console.log(myn1);//[2,3]
console.log("B",myArr);//B [1,2,3,4]
const myn2 = myArr.splice(1,3);//remove all elemnts from array other than from index 1 to 3 ans store them in myn2
console.log(myn2);//[2,3,4]
console.log("C",myArr);//C[1]
