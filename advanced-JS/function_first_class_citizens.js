function foo(callback){
    var x = 15,  y = 25;
    var z = x + y;
    callback(); // its locally bar here

    function retFun(){
        console.log('retFun called');
    }
    return retFun;
}

function bar(){
    console.log('bar called');
}

var resultFn = foo( bar );
resultFn();