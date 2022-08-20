// function declaring syntax

console.log(sum(10,11));// we can call this type of function even before declaration
function sum(x,y){
    var result = x +y;
    return result;

}

var result = sum(12, 16);
console.log('result using function declaration is: ', result);



// Fuction expression syntax
//console.log(sum2(10, 10)); we cant call it here it would throw an error
var sum2 = function(x,y){
    var result = x + y;
    return result;
}
console.log('result using function expression is: ', sum2(20, 25));


// another way using arrow function
//console.log(sum3(9, 9)); we cant call arrow function before declaration
var sum3 = (x,y)=>{
    return x + y;
}
console.log('result using arrow function is: ', sum3(30, 33))


