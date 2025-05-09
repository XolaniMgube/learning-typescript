// Enums is a type that is a list of constants...
// We use "const" to declaire one value, but we use Enums to declaire multiple related constants.
// We also use PascalCase, measing first letter of variable name should be Caps.

// E.G #1
// by default, Small = 0, Medium =1....etc
enum Size { Small, Medim, Large};
console.log("LOG #1", Size);
console.log("LOG #2", Size.Small);

// E.G #2
// if you give first enum a value, then the next enum variables will increment from there
enum Ages {Mpilo = 12, Njabulo, Momo};
console.log("LOG #3", Ages);

// E.G #3
// otherwise, if your enum have string values, then you assign all of them values
enum EmployeeNames {employeeOne = "Xolani", employeeTwo = "Shalom", employeeThree = "Had to"}
console.log("LOG #4", EmployeeNames);

// E.G #4
// put const infront of enum to optimise the js file that will be compiled
const enum Buildings {Hub, Nexus}
let myBuldingNumber: Buildings = Buildings.Hub;
console.log(myBuldingNumber)