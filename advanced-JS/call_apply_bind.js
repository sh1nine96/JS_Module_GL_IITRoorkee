function greet (message, name) {
    console.log( this );
    console.log(message + ` ` + name + `!`);
}

greet(`good morning`, `john`);

// functions are object we can check that as follows
console.log(greet instanceof Object); //greet is an instanceof Object class

// we can have properties and methods for functions like for Objects
greet.x = 100;
console.log(greet.x);
greet.foo = function(){
    console.log(`greet.foo was called`);
}
greet.foo();

// call and apply
greet.call(`hello`); // this would change the context only
// after 1st args others will passed as input param to function & will not change context
greet.call(`hi`, `good morning`, `honey`);

// if we have to pass array as args then we use apply, both have same functioning

var arr = [`good morning`, `honey`];
greet.apply(`hi`, arr);

greet.apply(null, arr);// null will be keeping context to global/window

// bind => it doesn't call the function instead makes a new one

var greetBound = greet.bind(`context changed`);
greetBound(`Good morning`, `Daisy`);

var greetHola = greet.bind(null, `Ola`);// not changing the context
greetHola(`amigo`);
greetHola(`Rapha`);

