/*
function wrapper(){
var x = 100;

const sum = function(x, y, cb){
    var result = x + y;
    cb(result);
}

sum(10, 20, function(result){
    console.log(result);
});
}
wrapper(); */


// Immediately invoked function expression
(function (){
    var x = 100;
    
    const sum = function(x, y, cb){
        var result = x + y;
        cb(result);
    }
    
    sum(10, 20, function(result){
        console.log(result);
    });
    }());
    