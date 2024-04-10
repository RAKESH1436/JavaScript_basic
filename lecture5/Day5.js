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

function countVowel(str) {
  let count = 0;
  for (const char of str) {
    console.log(char);
    if (
      char === "a" ||
      char === "e" ||
      char === "i" ||
      char === "o" ||
      char === "u"
    ) {
      count++;
    }

  }
console.log(count);


}
console.log(countVowel("abc"))
