// Type Number 
let sales: number = 123_456_789;

// Type String 
let course: string = "Typescript";

// Type boolean
let isPublished: boolean = true;

// Type Null
let nullValue: null = null;

// Type Undefined
let undefinedValue: undefined = undefined;

// Type Object
let user: object = {
    name: "xolani",
    email: "xnmgube@gmail.com"
};

// Type Arrays and Tuple
let numberArray: number[] = [1, 2]; // meaning it's an array of numbers
let stringArray: string[] = ["xolani", "mgube"]; // meaning string array
let tupleArray: [number, string] = [1, '1']; // an array of 2 or more values with different types

// Type Any (can assign any type to it, and sting change it later)
let anyType: any = "string";
anyType = 12;

// Type Unknown 
let unknownValue: unknown = "string";
unknownValue = 3

// Type Never
let neverType: never;

// Type enum
// let EnumValues: enum = 

// Union type (meaning a value can be either number or string)
let unionValue: string | number = 5;