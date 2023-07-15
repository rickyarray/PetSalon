//object literal
var student1 = {
    name: "Ricky",
    grade: [4.0, 3.8, 3.7],
    address: {
        state: "CA",
        country: "USA"
    }
}

var student2 = {
    name: "Patience",
    grade: [4.0, 3.5, 4.0],
    address: {
        state: "CA",
        country: "USA"
    }
}

console.log(student1.name);
console.log(student2);

var students = [student1, student2];//1,000

//THE SOLUTION
for(let i=0;i<students.length;i++){
    document.write(`<p> ${students[i].name} </p>`);
}
//create another object

// var user1 = {
//     salary: "150K"
//     name: "Ricky",
//     age: 34,
//     gender: "M",
//     country:"USA",
// }


// var user2 = {
//     name: "Kennedy",
//     age: 3,
//     gender: "F",
//     country:"USA",
//     salary: 0
// }

// console.log(user1);
// console.log(user2);




//Literal Object Constructor
// const userDetails = {name:"Adrian", address:"main st", company:"ITT"}


//Object Constructor
// const userDetails = new User("adrian","main","ITT"); //'new' keyword followed by calling element


//This explains that 'this' is defining a function for Pet specifically 
//... they are related (obstructor & function)...it describes a parameter of an object
// function Pet(n,a,g,b,s){
//     this.name = n;
//     this.age = a;
//     this.gender = g;
//     this.breed = b;
//     this.service = s;
// }

//let or const used to call function ... example
// let Scooby = new Pet("scooby","3","M","labrador"); //this adds obj via obj construct