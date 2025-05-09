// Declaire the type before the actual object properties
// "readonly" is for properties that should never be changed
let emploee: {
    readonly id: number,
    name: string,
    retire: (date: Date) => void //date is the argument type, void is the return type
} = {
    id: 1,
    name: "Xolani",
    retire: (date: Date) => {
        console.log(date)
    }
}

// Reuse object types by declairing it as "type"
// Basically creating your own custom type
// This process is called TypeAllias
type Employees = {
    readonly id: number,
    name: string,
    retire: (date: Date) => void
}

let employeeOne: Employees = {
    id: 2225,
    name: "Njabulo",
    retire: (date: Date) => {
        console.log(date)
    }
}