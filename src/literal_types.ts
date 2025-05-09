// Literal (exact or specific)
// Meaning after setting values, you can't use any other values except the specific one you have already assigned to the type
let quantity: 50 | 100 = 100;

// Better example
type Quantity = 100 | 200 | 300;
let qty: Quantity = 100;

type Metric = 'cm' | 'inch';
let measure: Metric = 'cm';