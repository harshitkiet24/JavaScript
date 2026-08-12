const temp = 41;

if(temp < 50){
  //console.log("temperature is less than 50");
}
else{
  //console.log("temperature is greater than 50");
}

// <,>,<=,>=,==,!=,===,!==

const score = 200;
if(score > 100){
  const power = "fly";
  //console.log(`User power : ${power}`);
}

//console.log(power); give error


const balance = 1000;

if(balance < 500){
  //console.log("less than 500");
}
else if(balance < 750){
  //console.log("less than 750");
}
else if(balance < 1000){
  //console.log("less than 1000");
}
else{
  //console.log("greater than 1000");
}

const userLoggedIn = true;
const debitcard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail  = true;

if(userLoggedIn && debitcard && 2==2){
  console.log("Allow to buy course");
}

if(loggedInFromEmail || loggedInFromGoogle){
  console.log("User logged in");
}