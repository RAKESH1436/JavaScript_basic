//const tinderUser=new Object()
// const tinderUser={};
// tinderUser.id="hsahs23";
// tinderUser.name="sanjay";
// tinderUser.isloggin=false;
// console.log(tinderUser)

// const regularUser={
//     fullanme:{
//         userfullName:{
//             firstname:"hitesh",
//             lastname:"gupta",
//         }
//     }
// }
// console.log(regularUser.fullanme.userfullName.firstname);

const obj1={1:"a",2:"b"}
const obj2={2:"a",3:"b"}
const obj3={4:"a",5:"b"}


//const obj4={obj1,obj2,obj3}
const obj5=Object.assign({},obj1,obj2,obj3)
console.log(obj5)
const users=[
    {
        id:626,
        email:"h@gmail.com"
    },
    {
        id:626,
        email:"h@gmail.com"
    },
    {
        id:626,
        email:"h@gmail.com"
    }
]
console.log(users[1].id);