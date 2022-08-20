// just capturing the return value 100
const someVariable = (function(){
    return 100;
}());
console.log(someVariable);

console.log(typeof someVariable);

// this is function declaration
const sum = function(x, y){
    return x + y;
}
console.log(sum(90, 99));
console.log(typeof sum);