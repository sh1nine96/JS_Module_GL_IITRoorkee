const sum =(x, y)=>{
    const promise = new Promise( (resolve, reject)=>{
        if(typeof x !== 'number' || typeof y !== 'number'){
            return reject( new Error('Both arguments must be number only') );
        }
        setTimeout( ()=>{
            resolve( x + y );
        }, 2000)

    });

    return promise;
};

const promise = sum(10, 24);

promise
    .then( (result)=>{
        console.log(result);
        return sum(result, 30);
    })
    .then( (value)=>{
        console.log(value);
    })
    .catch( error => console.log( error.message ));

    /* Note. then() will be executed when the resolve function is called inside the 
    promise handler function class while catch() will be executed when the reject 
    function is called inside the promise handler function  */