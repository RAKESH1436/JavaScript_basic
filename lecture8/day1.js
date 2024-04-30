// // const student={
// //     fullname:"sanjay gupta",
// //     marks:97,
// //     printMarks :function(){
// //         console.log("marks",this.marks);
// //     },

// // };



function asyncfunc(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data1")
            resolve("success 1")
        },4000)
    })
}
function asyncfunc2(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data 2")
            resolve("success 2")
        },2000)
    })
}
function asyncfunc3(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data errr")
           // resolve("success 2")
           reject("err");
        },2000)
    })
}
console.log("fetching data1......errr......");
let p3=asyncfunc3();
p3.then((rej)=>{
    console.log(rej);
})


// console.log("fetching data1............");
// let p1=asyncfunc();
// p1.then((res)=>{
//     console.log(res);
// })
// console.log("fetching data2............");
// let p2=asyncfunc2();
// p2.then((res)=>{
//     console.log(res);
//     let p2=asyncfunc();
//     p2.then((res)=>{})
// })

console.log("fetching data2............");
asyncfunc2().then((res)=>{
    console.log(res);
    asyncfunc().then((res)=>{})
})
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

// const getPromise = () => {
//   return new Promise((resolve, reject) => {
//     console.log("i am promise");
//     resolve("sucees");
//     // reject("some error");
//   });
// };

// let promise = getPromise();
// promise.then((res) => {
//   console.log("promise fulfilled", res);
// });

// promise.catch((err) => {
//   console.log("this is error", err);
// });

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
