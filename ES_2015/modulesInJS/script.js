export const sum = (x, y) => x + y;
export const diff = (x, y) => x - y;
export const prod = (x, y) => x * y;

// we can only have default export only
export default class ComplexNumber{
    constructor( real, imaginary ){
        this.real = real;
        this.imaginary = imaginary;
    }

    toString() {
        return `${this.real} + ${this.imaginary}i`;
    }
}

// another way to export as below

// export{
//     sum,
//     diff,
//     prod,
//     ComplexNumber as default
// };
