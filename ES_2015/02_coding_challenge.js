/* Write a function which accepts only one argument . But you want to pass a variable  number of
arguments to this function and want the function to return the sum of those provided arguments.

Design a function in such a way using the rest operator that
it accepts all provided arguments into a single variable and then
add those elements and return their sum */

function sum(...varArgs){
    let result = 0;
    for (const i of varArgs) {
        result += i;    
    }
    return result;
}

console.log(sum(1, 5));
console.log(sum(11, 5, 34));
console.log(sum(10, 70, 19, 5, 55, 20));