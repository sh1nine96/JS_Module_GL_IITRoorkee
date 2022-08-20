function foo(x,y,z){
    console.log(x, y, z);
    console.log('foo is being called');
    console.log(arguments);
    console.log(arguments[0], arguments[1], arguments[2], arguments[3]);
    console.log(arguments.length);
}
foo("Hello", "World", "its", "me")
foo(10, 11, 12);
foo();


function sumAll(){
    result =0;
    for(var i =0; i < arguments.length; i++){
        result += arguments[i];
    }
    return result;
}

console.log(sumAll(10, 15));
console.log(sumAll(10, 15, 18, 25));
console.log(sumAll(10, 15, 20, 30, 37, 50));
console.log(sumAll(10, 15, 20, 30, 37, 55, 60, 89));
console.log(sumAll(10, 15, 17));

