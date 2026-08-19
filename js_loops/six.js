const coding = ["js","ruby","java","python","cpp"];

const values = coding.forEach((item) => {
  //console.log(item);
  return item
})

//console.log(values); //undefined

const myNums = [1,2,3,4,5,6,7,8,9,10];

const newNums = myNums.filter((num) => num > 4)
//console.log(newNums);

const arr = [4,3,2,1,6];

const  newArr = arr.filter((num) => {
  return num > 1 // filter function is used to return which we cant do in for each loop
})

//console.log(newArr);

// to return from forEach 

const newNum = [];

myNums.forEach ((num) => {
  if(num > 4){
    newNum.push(num);
  }
})
console.log(newNums);


