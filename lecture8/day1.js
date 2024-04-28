const student={
    fullname:"sanjay gupta",
    marks:97,
    printMarks :function(){
        console.log("marks",this.marks);
    },

};


const employe={
    calTax(){
        console.log("tax rate is 100");
    },
    calTax2(){
        console.log("tax rate is 100");

        
    }
};
const karanArjun={
    salary:687,

}

karanArjun.__proto__=employe;