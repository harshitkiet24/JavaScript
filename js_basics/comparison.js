console.log("2" > 1);
console.log("02" > 1);
//commparison work diffrently as compare < > >= <= to equality check == as they convert null intoo (0) then evalute the expression
console.log(null > 0);
console.log(null == 0);
console.log(NaN == 0);
//we should avoid these types of conversions
console.log(undefined == 0);
console.log(undefined <  0);
console.log(undefined > 0);