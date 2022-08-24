// parseInt and parseFloat

var s = '32.67';
console.log(typeof s);
console.log(s)
var t = Number.parseInt(s);
console.log(typeof t)
console.log(t);

var u = Number.parseFloat(s);
console.log(u)

console.log(Number.parseInt('abcde', 15)); // hexadecimal number can also be parsed
console.log(Number.parseInt('a', 16));

// toFixed method=> useful for currency values

var wrappedNum = new Number(79.379876);
// var fixed2decimals = wrappedNum.toFixed(2);
// console.log(fixed2decimals);
console.log(wrappedNum.toFixed(2));

console.log(4.7898675487.toFixed(3));// can be called directly on primitive type too

// NaN

var x = 1/'hi';
console.log(Number.NaN);
console.log(NaN);
console.log(x);

// NaN is not comparable to anyone to even NaN itself
console.log(1 === NaN);
console.log(x === NaN);
console.log(NaN === NaN);

// but we can check if some value is NaN or not as below

console.log(Number.isNaN(x));
console.log(isNaN(x));
console.log(isNaN(3/'hello'));