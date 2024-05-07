const myNum = [1, 2, 3];
// myNum.reduce(function (acc, currtvalu) {
//   console.log(`acc:${acc} and Currval:${currtvalu}`);
//   return acc + currtvalu;
// },2);

// const num = myNum.reduce((acc, cuvalue) => acc + cuvalue, 0)
// console.log(num);

const shoppingCart = [
{
  itemname: "js course",
  price: 100,
},
{
    itemname: "java",
    price: 120,
},
{
    itemname: "python",
    price: 200,
},
]

const pricelist=shoppingCart.reduce((acc,item)=>acc+item.price,0)
console.log(pricelist);
