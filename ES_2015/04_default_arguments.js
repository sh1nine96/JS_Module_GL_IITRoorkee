function greeting(message = `Hello`, name = `World`){
    return `${message} ${name}!`;
}

console.log(greeting(`Good Morning`, `Shubham`));// will print "good morning shubham!"
console.log(greeting(`Good Morning`));// will print "good morning world!" not "good morning undefined!"
console.log(greeting());// will print "Hello World!" not "undefined undefined!"
console.log(greeting(undefined, `John`));// will print Hello John!
/* If a input parameter is passed a undefined value,
 and if that parameter also have a default value ,then that default value will be used. */
 