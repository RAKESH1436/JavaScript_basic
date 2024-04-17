// let btn1 = document.querySelector("#btn1");

// btn1.onclick = (e) => {
//   console.log(e);
//   //   console.log(e.type);
//   //   console.log(e.target);
//   //   console.log(e.clientX, e.clientY);

//   // let a=25;
//   // a++;
//   // console.log(a);
// };
// btn1.addEventListener("click", () => {
//   console.log("buttom was clicked");
// });
// btn1.addEventListener("click", () => {
//   console.log("2buttom was clicked");
// });
// const handler4 = () => {
//   console.log("new handler");
// };
// btn1.addEventListener("click", handler4);

// let div = document.querySelector("div");
// div.onmouseover = (e) => {
//   console.log(e);

  //   console.log("you are indide div");
  //   console.log(e.target);
  //   console.log(e.clientX, e.clientY);
//};

let modebtn = document.querySelector("#mode");
let current="light";
modebtn.addEventListener("click", () => {
  if(current==="light"){
    current="dark";

  }else{
    current="light"

  }
  console.log(current);
});
