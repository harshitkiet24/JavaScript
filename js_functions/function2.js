function CalculateCartPrice(...num1){
  return num1;
}

console.log (CalculateCartPrice(200,400,500));

const user = {
  username: "hitesh",
  price: 199
}

function handleObject(anyobject){
  console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

handleObject(user);

const mynewArray = [200,400,500,600];

function returnSecondValue(getarray){
  return getarray[1];
}

console.log(returnSecondValue(mynewArray));
console.log(returnSecondValue([200,300,400,500]));