// const a = 100;
// for (let index = 0; index <= a; index++) {
//   const element = index;
// }
// let sum = 0;
// for (let index = 0; index <= 6; index++) {
//   sum = sum + index;
// }
// console.log("sum", sum);
// console.log("loop has ended");

// let i = 1;
// while (i <= 10) {
//   console.log("sanjay");
//   i++;
// }
// let e=3;

// do {
//   console.log("sanjay ");
//   e++;
// } while (e<=2);

// let str="sanjay";
// let size =0;
// for(let i of str){
//   console.log("i",i);
//   size++;
// }
// console.log(size)

let student ={
  name:"sanjay",
  age:20,
  cgpa:7.5,
  isPass:true

};
for(let key in student){
  console.log("key =",key,student[key]);
}

let s=100;
for(let i=0;i<=s;i++){
  if(i%2==0){
    console.log(i);

  }

}
