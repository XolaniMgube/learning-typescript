// The type can be more than one, so you can make the variable expect different types.
function kgToLbs(weight: number | string): number {
    if (typeof weight === 'number') {
        return weight * 2.2;
    } else {
        return parseInt(weight) * 2.2;
    }

}