// var x = 1;
// console.log(x);
// var x = 3;
// console.log(x);
// with var we redeclare the variable but thats not possible with let.

// let y = 1;
// console.log(y);
// let y = 2; this will throw error

// let x = 5; error, whenever we declare variable with let, it should be the first time

// we will now see the scope for let variable

if(true){
    let x = 1;// it has a block level scope hence can't be used outside this block
    var y = 1;// global variable => var either has function scope or global scope
}
// console.log(x);// it will throw error bcz of scope
console.log(y);

// let variables are not hoisted unlike var

// console.log(a); // it will throw error as hoisting is not possible with let declaration
console.log(b); // it will not throw error will print undefined
let a = 1;// its global variable but we dont have it as property of window object in browser
var b = 1; // b will be a property of window object

