function addTwoNumbers (number1,number2){
  console.log(number1 + number2);
}

addTwoNumbers(3,4);

function Multiply(number1,number2){
  return number1 * number2;
}

const result2 = Multiply(2,3);

console.log("Result : ", result2);


function loginUserMessage(username = "sam"){
  if(!username){
    return "Enter the username";
  }
  return `${username} just logged in`;
}
console.log(loginUserMessage("harshit"));
console.log(loginUserMessage());



