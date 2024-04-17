let btn1 = document.querySelector("#btn1");

btn1.onclick = (e) => {
  console.log(e);
  //   console.log(e.type);
  //   console.log(e.target);
  //   console.log(e.clientX, e.clientY);

  // let a=25;
  // a++;
  // console.log(a);
};
btn1.addEventListener("click", () => {
  console.log("buttom was clicked");
});

let div = document.querySelector("div");
div.onmouseover = (e) => {
  //   console.log("you are indide div");
  //   console.log(e.type);
  //   console.log(e.target);
  //   console.log(e.clientX, e.clientY);
};
