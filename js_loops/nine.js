 const myNums = [1,2,3]

 const myTotal = myNums.reduce(function(acc,currval){
  console.log(`acc: ${acc} and currval: ${currval}`);
  return acc + currval;
 },0)

 console.log(myTotal);
 //same as above
 const total = myNums.reduce((acc,curr) => acc+curr, 0)

 console.log(myTotal);

 const shoppingCart = [
  {
    itemName: "js course",
    price: 929
  },
  {
    itemName: "py course",
    price: 599
}
,
  {
    itemName: "cpp course",
    price: 499

   } ,
  {
    itemName: "ds course",
    price: 899

  }
 ]

 const price = shoppingCart.reduce((acc , curr) => acc + curr.price,0);

 console.log(price);