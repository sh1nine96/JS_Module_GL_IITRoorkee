console.log(Math); // math is an object and returns the same
console.log(Math.random());// returns random number between 0 and 1
console.log(Math.min(25, 67, 9, 4, 16, 18));// it accepts comma separated values and return minm value
console.log(Math.max(25, 67, 9, 4, 16, 18));// it accepts comma separated values and return mxm value
// we can also find the minm and maxm in array as well

var numbers = [25, 67, 9, 4, 16, 18];
console.log(Math.min.apply(null, numbers));
console.log(Math.max.apply(null, numbers));

// ceil floor and abs

console.log('smallest greater integer value than provided: ', Math.ceil(4.5));
console.log('smallest smaller integer value than provided: ', Math.floor(4.5));
console.log('returns the absolute value in integer(positive): ', Math.abs(-4.5));

// power
console.log('2 to the power 4 is: ', Math.pow(2, 4));

// round
console.log('rounds the value to the nearest integer: ', Math.round(4.6));
console.log('rounds the value to the nearest integer: ', Math.round(4.3));

// we have log, sin, cos methods too