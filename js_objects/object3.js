const user = [
  {
    id:1,
    email: "h@gmail.com"
  },
  {
    id:1,
    email: "h@gmail.com"
  },
  {
    id:1,
    email: "h@gmail.com"
  }
]

console.log(user[1].email);

const tinderUser = {}//Non-singleton
tinderUser.id = "123abx";
tinderUser.name = "Sammy";
tinderUser.isLoggedIn = false;
console.log(tinderUser);
// give us an array as output ->
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));


console.log(tinderUser.hasOwnProperty('name'));//check if an object consist a given key ' name ' oe not and gives true or false