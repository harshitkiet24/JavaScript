let a = 20;
var c = 30;

if (true) {
 let a = 50;
 var c = 70;

  //console.log(a);
  //console.log(c);
}

//console.log(a);
//console.log(c);
/*

function one(){
  const username = "harshit";

  function two(){
    const website = "youtube";
    console.log(username);
  }

 // console.log(website);

  two();
}  

one();
*/
if (true){
  const username = "harshit";
  if(username === "harshit"){
    const website = " youtube";
    console.log(username + website);
  }
  //console.log(website);
}

//console.log(username);
console.log(addone(5));

function addone(num){
  return num + 1;
}

//console.log(addTwo(4));
const addTwo = function(num){
  return num + 2;
}

console.log(addTwo(5));