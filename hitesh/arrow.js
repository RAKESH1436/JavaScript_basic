const user = {
  username: "sanjay",
  price: 787,
  welcomeMessage: function () {
    console.log(`${this.username}, welcome to website`);
  },
  
};
user.welcomeMessage();
user.username="rakesh";
user.welcomeMessage();