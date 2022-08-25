// Try Catch block
try {
    func();
    console.log(`func called(inside try)`);//this will not execute
} catch( error ){
    console.log( error.message )
} finally {
    console.log(`finally will log irresepective or error in try catch block`)
}

console.log(`Trying to log when func is not defined`);

// practice
/*
try{

    foo();
    
    }
    
    finally{
    
        console.log("Finally block called")
    
    } 
    */

    try{

        foo();
        
        }
        
        catch(error){
        
            console.log(error.message);
        
        }