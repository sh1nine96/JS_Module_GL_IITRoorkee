/* Create a function add  that takes three arguments : first and second one are numbers and 
third one is a function which prints a value passed to it as an argument.
Now use the function add defined above to add two numbers (first and second argument) and 
print the result after 10 s delay using the third argument function. */

const add =(a, b, callback)=>{
    setTimeout( ()=>{
        callback( a + b );
    }, 10000)
    return `result add coming in 10 seconds`;
}

console.log(add(50, 25, function(result){
    console.log(`sum of the 2 numbers is: ${result}`);
}));