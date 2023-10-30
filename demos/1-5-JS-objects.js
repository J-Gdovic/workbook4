// "use strict"

// let employeeID ="1";
// let name = "Ezra";
// let jobTitle = " Theater Teacher";
// let payRate = 38.46;

// function doSomethingWithEmployee(employeeID, name, jobTitle, payRate){

// }

let object = {}
let array = []

let ezraEmployee = {
    employeeID : "1",
    firstName : "Ezra",
    jobTitle : "Theater Teacher",
    payRate : 38.46,
};
let info = `The employee name is ${ezraEmployee.firstName}. 
Their job title is ${ezraEmployee.jobTitle}. 
They make $${ezraEmployee.payRate} per hour.`;

console.log(info);

// function printEmployee(employee){
//     // console.log(employee)
// };
// printEmployee(ezraEmployee);

function giveRaise(ezraEmployeeparams) {
    ezraEmployee.payRate = ezraEmployee.payRate * 1.2;
    return ezraEmployee;
}

let updatedEmployee = giveRaise(ezraEmployee);
console.log(updatedEmployee)