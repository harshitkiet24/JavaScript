const mySym = Symbol("key1"); //symbol intialize syntax

const juser = {
  name: "harshit",
  age: 18,
  [mySym]: "mykey1", //use of symbol in object
  location: "Delhi",
  email: "tyagiharshit758@gmail.com",
  "full name": "Harshit Tyagi",
  hello: function () {
    // A function stored inside an object is called a method.
    console.log("harshit"); // function as a key - value
  },
};

//console.log(typeof(juser.name));
//console.log(juser.email);
//console.log(juser["email"])//same as above
//console.log(juser.mySym);//undefined
//console.log(juser[mySym]);//correct syntax

juser.age = 10; // to change the value of an object

//console.log(juser["age"]);

//console.log(juser.hello);
//Object.freeze(juser);//it locks all the keys of an object
juser.age = 5;
//console.log(juser["age"]);

juser.hello = function () {
  console.log("harshit Tyagi");
};
juser.hello2 = function () {
  console.log(`Hello , ${this.name}`);
};

console.log(juser.hello2());
console.log(juser.hello2);
