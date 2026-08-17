//for loop

for (let index = 0; index <= 10; index++) {
  const element = index;
  //console.log(element); //print 0 to 10
}

for (let i = 0; i <= 10 ;i++) {
  //console.log(`Outer loop value ${i}`);
  for (let j = 0; j <= 10; j++) {
    //console.log(`Inner loop value ${j} and outer loop loop ${i}`);
    //console.log(i + '*' + j + " = " + i*j);
  }
}

let myarray = ["harsh","rahul","ojas"];

for (let index = 0; index < myarray.length; index++) {
  const element = myarray[index];
  //console.log(element);
}

// break and continue

for (let index = 0; index < 10; index++) {
  const element = index;
  if(element == 5){
    //console.log('Detected 5');
    continue;
    //break;
  }
  console.log(`Value of i is ${index}`);
}