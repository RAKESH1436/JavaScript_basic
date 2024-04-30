// // const student={
// //     fullname:"sanjay gupta",
// //     marks:97,
// //     printMarks :function(){
// //         console.log("marks",this.marks);
// //     },

// // };

// // const employe={
// //     calTax(){
// //         console.log("tax rate is 100");
// //     },
// //     calTax2(){
// //         console.log("tax rate is 100");

// //     }
// // };
// // const karanArjun={
// //     salary:687,
// //     calTax2(){
// //         console.log("tax rate is 5675");

// //     },

// // };

// // karanArjun.__proto__=employe;

// class ToyotaCar{

//     constructor(brand,milage){
//         console.log("welcome new objects");
//         this.brand=brand;
//         this.milage=milage;
//     }
//     start(){
//         console.log("start");
//     }
//     stop(){
//         console.log("stop");

//     }

// }

// let fortuner = new ToyotaCar("car",89);
// console.log(fortuner);

// class Parent {
//     hello(){
//         console.log("enter the parentclass")
//     }
// }

// class Child extends parent{

// }
// Child obj=new Child();

// console.log("one");
// console.log("two");
// setTimeout(()=>{
//     console.log("hello");
// },4000)
// console.log("three");
// console.log("four");

// function getData(dataid, getNextData) {
//   setTimeout(() => {
//     console.log("data", dataid);
//     if (getNextData) {
//       getNextData();
//     }
//   }, 2000);
// }

// getData(1, () => {
//   console.log("wating.....");
//   getData(2, () => {
//     console.log("wating.....");
//     getData(3, () => {
//       console.log("wating.....");
//       getData(4);

//     });
//   });
// });

// let promise = new Promise((resolve, reject) => {
//   console.log("i am promise");
//   resolve("sucees");
//   reject("some error");
// });

const getPromise=()=>{
   return new Promise((resolve, reject) => {
        console.log("i am promise");
        resolve("sucees");
       // reject("some error");
      });
};


let promise =getPromise();
promise.then((res)=>{
    console.log("promise fulfilled",res)

});

promise.catch((err)=>{
    console.log("this is error",err)
});


// function getData(dataid, getNextData) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("data", dataid);
//       resolve("success");
//      //reject("error");
//       if (getNextData) {
//         getNextData();
//       }
//     }, 2000);
//   });
// }
