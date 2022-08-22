// Varibale hoisting
console.log(hello);// it would print undefined bcz it get its value only after its assigned
var hello = 'Say Hello';
console.log(hello);
//console.log(y) // would throw error as y never declared

// function hoisting

foo();// it would work as its written with function declaration syntax
function foo(){
    console.log('foo is called');
}

//bar();// it cant be called before its assigned 
var bar = function(){
    console.log('bar is called')
}