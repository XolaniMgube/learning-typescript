"use strict";
var Size;
(function (Size) {
    Size[Size["Small"] = 0] = "Small";
    Size[Size["Medim"] = 1] = "Medim";
    Size[Size["Large"] = 2] = "Large";
})(Size || (Size = {}));
;
console.log("LOG #1", Size);
console.log("LOG #2", Size.Small);
var Ages;
(function (Ages) {
    Ages[Ages["Mpilo"] = 12] = "Mpilo";
    Ages[Ages["Njabulo"] = 13] = "Njabulo";
    Ages[Ages["Momo"] = 14] = "Momo";
})(Ages || (Ages = {}));
;
console.log("LOG #3", Ages);
var EmployeeNames;
(function (EmployeeNames) {
    EmployeeNames["employeeOne"] = "Xolani";
    EmployeeNames["employeeTwo"] = "Shalom";
    EmployeeNames["employeeThree"] = "Had to";
})(EmployeeNames || (EmployeeNames = {}));
console.log("LOG #4", EmployeeNames);
let myBuldingNumber = 0;
console.log(myBuldingNumber);
