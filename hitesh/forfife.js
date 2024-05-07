// const code=["java","js","python","butthom"]
// const item=code.forEach((obj)=>{
//    // console.log(obj)
//     return code;

// })
// console.log(item);

// const num=[3,4,5,6,8];
// const newnum=num.filter((nums)=>nums<4);
// console.log(newnum);

// const my=num.filter((nums)=>{
//     return nums>1;

// });
// console.log(my)

const number = [2, 4, 6, 7, 6, 8, 0];
// const num2=[];
// number.forEach((num) => {
//   if (num > 4) {
//     num2.push(num);
//   }
// });
// console.log(num2);
// const list = [];
// const number1 = number.map((num) => num + 10);
// console.log(number1);
// const list = [];
// const number1 = number.map((num) => {return num + 10});
// console.log(number1);
//chainig
const lsit = number
  .map((num) => num * 10)
  .map((num) => num + 1)
  .filter((num) => num >= 50);
  
console.log(lsit);
lsit.forEach((list2)=>console.log(list2))