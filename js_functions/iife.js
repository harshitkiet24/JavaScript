// Immediately Invoked Function Expressions (IIFE)
//encapsulating code and maintaining a clean global scope.
//they can enhance code organization, protect variables, and prevent naming collisions.

(function chai(){
  //named IIFE
  console.log('DB CONNECTED');
})();

(() => {
  console.log('DB CONNECTED TWO');
})();


((name) => {
  console.log(`DB CONNECTED TWO ${name}`);
})('harshit');














