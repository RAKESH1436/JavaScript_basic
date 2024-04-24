
// const mysum=Symbol("key1");
const list={
    name:"sanjay",
    "fullname":"hitesh chodudhry",
    //[mysum]:"mykey1",
    roll:34,
    email:"sanjaygupta@gmail.com"
}
// console.log(list["email"])
// console.log(list.email);
// console.log(list["fullname"]);
// console.log(list[mysum])

// list.email="sanjay@chatgpr.com"
// Object.freeze(list);
// list.email="rakesh@microsoft.com";
// console.log(list);
list.greeting=function(params) {
    console.log(`hello sanjay , ${this.name}`)
    
}
console.log(list.greeting());
