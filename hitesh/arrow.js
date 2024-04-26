const user = {
  username: "sanjay",
  price: 787,
  welcomeMessage: function () {
    console.log(`${this.username}, welcome to website`);
    console.log(this);
  },
  
};
// user.welcomeMessage();
// user.username="rakesh";
// user.welcomeMessage();
console.log(this);

function chai(){
    let username="don";
    console.log(this.username);
}
chai();