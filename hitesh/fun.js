function saymycode() {
  console.log("sanjay");
}

saymycode();

// function add(num1,num2){
// console.log(num1+num2);
// }

function add(num1, num2) {
  //let result = num1 + num2;
  return num1+num2;
}
let result = add(4, 7);
console.log(result);

function loginUserMessage(username){
    return `${username} just logged in`


}
loginUserMessage()