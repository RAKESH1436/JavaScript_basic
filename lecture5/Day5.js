//console.log("sanjay");
// function name() {
//   console.log("sanjay");
//   console.log("sanju");
// }

// let a = name();
// function any(a) {}
// any(a);
// function Mynane(msg, n) {
//   console.log(msg * n);
// }
// Mynane("hii i m  sanjay", 100);

// function add(x, y) {
//   console.log(x + y);
// }
// add(4, 7);
// function sum(x,y){
//   s=x+y;
//   return s;
// }
// console.log(sum(6,7))
//arrowfunation
// function sum(a, b) {
//   return a + b;
// }

// const arrowSum = (a, b) => {
//   console.log(a + b);
// };
// function multi(a, b) {
//   return a * b;
// }

//  const arrowfunation=(str)=>{
//     let count = 0;
//     for (const char of str) {
//       console.log(char);
//       if (
//         char === "a" ||
//         char === "e" ||
//         char === "i" ||
//         char === "o" ||
//         char === "u"
//       ) {
//         count++;
//       }

//     }
//   return count;

//   }

// let arr=[1,2,3,4,5];
// arr.forEach(function printVal(val,idx,arr){
//   console.log(val,idx,arr)
// })
// let arr1=["sanjay","rakesh","love","hgfsahgs"];
// arr1.forEach(function printVal(val,idx,arr){
//   console.log(val.toUpperCase(),idx,arr)
// })

// let num =[2,3,4,4,5]
// num.forEach((num)=>{
//   console.log(num*num)
// })

// let numa=(num)=>{
//   console.log(num*num);
// };
// num.forEach(numa)

// let nums = [67, 76, 78, 78];
// let newArr = nums.map((val) => {
//   return val;
// });
// console.log(newArr);

// let arr = [3, 6, 8, 9, 6, 5, 9];
// let evenArr = arr.filter((val) => {
//   return val % 2 === 0;
// });
// console.log(evenArr);

// const output=arr.reduce((prev, curr) => {
//   return prev > curr ? prev : curr;
// });

// console.log(output);

// let marks=[97,64,32,67,89,91,93,98,96,58,78,99,86];
// let topper=marks.filter((val)=>{
//   return val >90;

// })
// topper.forEach((topper ,idx)=>{
//   console.log(topper,idx)

// })
let n = prompt("enter a number:");
let arrt = [];
for (let i = 1; i <= n; i++) {
  arrt[i - 1] = i;
}
console.log(arrt);

let sum = arrt.reduce((res, curr) => {
  return res + curr;
});
console.log(sum);

let factorial = arrt.reduce((res, curr) => {
  return res * curr;
});
console.log("factorial=", factorial);
