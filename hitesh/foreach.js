const codeing=["js","ruby","java","python"]
// codeing.forEach(function(item){
//     console.log(item);

// })

function printMe(item,index,arr){
    console.log(item,index,arr);
}
codeing.forEach(printMe);


let Mycoding=[
    {
        name:"sanjay",
        roll:"5656775"
    },
    {
        name:"rakesj",
        roll:"687687"
    },
    {
        name:"gupta",
        roll:"78878989"
    }
]

// function print(itess){
//     console.log(itess.name)
//     console.log(itess.roll)


// }
// Mycoding.forEach(print)

Mycoding.forEach((itess)=>{
    console.log(itess.roll);

})