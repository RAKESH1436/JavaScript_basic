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
let body=document.querySelector("body")
modebtn.addEventListener("click", () => {
  if(current==="light"){
    current="dark";
    document.querySelector("body").style.backgroundColor="black";
    body.classList.add("dark");
    body.classList.remove("light");

  }else{
    current="light"
    document.querySelector("body").style.backgroundColor="white";
    body.classList.add("light");
    body.classList.remove("dark");




  }
  console.log(current);
});
