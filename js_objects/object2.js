//const tinderUser = new Object();//singleton
const tinderUser = {}//Non-singleton
tinderUser.id = "123abx";
tinderUser.name = "Sammy";
tinderUser.isLoggedIn = false;
//console.log(tinderUser);

const user = {
  email: "some@gmail.com",
  fullname: {
    userfullname:{
      firstname: "harshit",//nested objects
      lastname: "tyagi"
    }
  }
}
//console.log(user.fullname.userfullname.lastname)

const obj1 = {1: "a" , 2: "b"};
const obj2 = {3: "a" , 6: "b"};
const obj5 =  {4:"a" , 5: "b"};

const obj3 = {obj1,obj2};//does not merge two objects add them seprately
const obj4 = Object.assign({},obj1,obj2,obj5);//merge two objects combine and always use {} because it helps in kepping first element ex obj 1 same 

//console.log(obj3);
console.log(obj4);
console.log(obj1);

const obj6 = {...obj1,...obj2};//best way to merge two objects also called spread method 

console.log(obj6);
