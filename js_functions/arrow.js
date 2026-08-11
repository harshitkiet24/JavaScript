const user = {
  username : "harshit",
  price: 999,

  welcomeMessage : function(){
    console.log(`${this.username} , welcome to website`);
    console.log(this); //print the user object
  }
}

//user.welcomeMessage();
//user.username = "sam";
//user.welcomeMessage();

//console.log(this);//empty object

function chai(){
  let username = "harshit";
  //console.log(this.username); // undefined 
  //console.log(this); // gives global object in output
}

chai(); // 'this' function does not work in functions

const chini = () => {
  let username = "harshit";// even arrow function does not have this fuction 
  //console.log(this);
}
chini();


const addTwo = (num1,num2) => {
  return num1 + num2;
}

console.log(addTwo(5,4));

const addThree = (num1,num2,num3) => num1 + num2 + num3 ;

console.log(addThree(5,2,3));