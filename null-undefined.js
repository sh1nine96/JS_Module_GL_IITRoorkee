// undefined
var x;
console.log(x);
console.log(undefined);

// null
var y = null;
console.log(y);


// it can also be used as a garbage collector which later can be destroyed
var obj ={
    a: 1, b: 2
};
console.log(obj);
a = null; //we are destroying the obj pre-existence by initialising it as null
console.log(obj);