let number=55;
let strinnum=String(number);
console.log(typeof strinnum);
//change the number to string

let date=new Date();
let dat=date.toString();
console.log(dat);
console.log(date.getHours())
console.log(date.toDateString())
console.log(date.toLocaleTimeString())
let myarr=[1,2,3,3,4,4,5];
console.log(myarr);
myarr.unshift(8);
myarr.shift()
console.log(myarr)
console.log(myarr.includes(1));
console.log("B",myarr);
console.log(myarr.slice(1,3));
console.log("A",myarr);
console.log("C",myarr.splice(1,3));



