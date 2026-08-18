const myObject = {
  js : 'javascript',
  cpp : 'C++',
  rb: 'ruby',
  swift: "swift by apple"
}

for(const key in myObject){ // for in is used for object
 // console.log(key);
  //console.log(myObject[key]);
  //console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming = ["js","rb","py","java","cpp"]
for(const key in programming){ // for of is used for array
 // console.log(programming[key]);
}
/*
const map = new Map();
map.set('IN',"India");
map.set('USA',"United states of America");
map.set('Fr',"France");
map.set('IN',"India");

for (const key in map) {
  console.log(key);
}
  */

