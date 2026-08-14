const score  = 100
console.log(score);

const balance = new Number(100);
console.log(balance);

console.log(balance.toString().length);
console.log(typeof(balance.toString()))

console.log(balance.toFixed(1));

const otherNumber = 123.8564;

console.log(otherNumber.toPrecision(3));
const hundreds = 1000000023;
console.log(hundreds.toLocaleString('en-IN'));//1,00,00,00,023

//Maths

console.log(Math.random());//0 to 1
console.log((Math.random()*10)+1);//1 to 11
console.log(Math.floor((Math.random()*10)+1));//1 to 11 only integer

const min = 10;
const max = 20;
// important concept used to generate number between min and max
console.log(Math.floor(Math.random()*(max-min+1))+min);