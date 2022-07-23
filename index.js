//creating an aray of objects

let students = [
    {
     name: "maxxxx",
     here: true
    },
    {
     name: "pam",
     here: true//are they here 
    }
 ]
 // returns an array of strings with students names from the array above
//using an arrow function is the same as the function method
//const getStudentsNames = (studentsArray)=> {}

 function getStudentsNames(studentsArray) {
     let studentName = []
     for (let i=0;i<studentsArray.length;i++) {
         studentName.push(studentsArray[i].name)
     }
     return studentName;
 }
 
 //print out what the variable getStudentsName returns````
 console.log(getStudentsNames(students))


 //when it's a variable use let for variables that change
 //use const for things that dont change

 //a++ = add 1
//** are for exponents
//+=
