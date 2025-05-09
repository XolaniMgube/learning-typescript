"use strict";
function calculateTax(income) {
    if (income < 50000) {
        return income * 1.2;
    }
    return income * 1.3;
}
function calcTaxTwo(income, taxYear = 2022) {
    if (taxYear <= 2022) {
        return income * 1.2;
    }
    return income * 1.3;
}
console.log(calcTaxTwo(10000, 2021));
console.log(calcTaxTwo(10000, 2024));
console.log(calcTaxTwo(10000));
