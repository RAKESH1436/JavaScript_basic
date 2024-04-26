// function saymycode() {
//   console.log("sanjay");
// }

// saymycode();

// function add(num1,num2){
// console.log(num1+num2);
// }

// function add(num1, num2) {
//   //let result = num1 + num2;
//   return num1+num2;
// }
// let result = add(4, 7);
// console.log(result);

// function loginUserMessage(username="sanjay") {
//   if (!username) {
//     console.log("pls enter the usename ");
//     return;
//   } else {
//     return `${username} just logged in`;
//   }
// }
// let s = loginUserMessage();
//  console.log(s);

//  function calAdd(...num1){
//     return num1;

//  }
//  let sa=calAdd(234,54343,75454);
//  console.log(sa);
//  let saa=calAdd(6567);
//  console.log(saa);

//  const user={
//     name:"sanjay",
//     price:199
//  }
// console.log(user.name);
// console.log(user.price);

// function hanbleobje(anyobj){
//     console.log(`username is ${anyobj.name} and price ${anyobj.price}`)
// }
// hanbleobje({
//     name:"sanju",
//     price:"3454"
// });

// const myNewArr=[200,400,800,380];

// function returnSecValue(getArray){
//     return getArray[2];
// }

// console.log(returnSecValue(myNewArr));

if (true) {
  const usename = "rakesh";
  if (usename === "rakesh") {
    const website = " is very good boy !!";
    console.log(usename + website);
  }
 // console.log(website);
}

//console.log(usename);
console.log(add(5));


function add(num){
    return num +1;

}
console.log(this.addtwo(5));

const addtwo = function (num){
    return num +2
}