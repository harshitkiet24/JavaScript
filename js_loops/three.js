// for of

const arr = [1,2,3,4,5];

for(const num of arr){
  //console.log(num);
}

const greetings = "Hello World";

for(const greet of greetings){
  if(greet == " "){
    continue;
  }
 // console.log(`Each char is ${greet}`);
}

//Maps

const map = new Map(); // unique key - value pairs 

map.set('IN',"India");
map.set('USA',"United states of America");
map.set('Fr',"France");
map.set('IN',"India");

//console.log(map);

for(const [key,value] of map){
  //console.log(key);
  //console.log(value);
}

const myObject = {
  'game1' : 'NFS',
  'game2' : 'spiderman'
}

for(const [key,value] of myObject){
  console.log(key);//TypeError: myObject is not iterable so it will not work 
  console.log(value);// work for map not for object
}