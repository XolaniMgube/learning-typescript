// NB: Enable 3 properties on the tsconfig file when working with funtions...
// 1. noUnusedLocals
// 2. noUnusedParameters
// 3. noImplicitReturns

// When declaring a function, you should specify the type of value you will return
// If you you have argument, specify the types of your arguments.
function calculateTax(income: number): number {
  if (income < 50000) {
    return income * 1.2;
  }
  return income * 1.3;
}

// Giving a parameter a default value in case we don't pass it on function call
// So, if taxYear is not passed, then 2022 will be used, But if it's passed, then we will use the value that we passed.
function calcTaxTwo(income: number, taxYear = 2022): number {
    if (taxYear < 2022) {
        return income * 1.2
    }
    return income * 1.3;
}
console.log(calcTaxTwo(10000, 2021));
console.log(calcTaxTwo(10000, 2024));
console.log(calcTaxTwo(10000));

