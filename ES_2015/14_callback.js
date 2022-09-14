const sum = (x, y, cbFunc)=>{
    setTimeout( ()=>{
        cbFunc( x + y );
    }, 2000);
    return "result in 2sec";   
};

// function printResult(result){
//     console.log(result);
// }

// console.log(sum(15, 25, printResult ));

// we can directly write printResult or callback function while calling sum

console.log(sum(15, 25, function(result){
    console.log(result);
    // lets say we have to add another element or integer into it
    // it is known as callback hell bcz of this complicated structure, it keeps growing

    sum( result, 30, function(result2){
        console.log(result2);
    });
    
} ));



    

  

