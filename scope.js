var global_x = 1; //global variable(not inside any function)
var z = 5;
console.log('oustide of functions global_x is: ', global_x);

function foo() {
    var local_foo = 2;
    // if we insitialise new value to z here then it will print new value inside bar()
    var z = 6;
    console.log('inside function foo local_foo is: ', local_foo);
    console.log('inside function foo global_x is: ', global_x);

    // local function bar
    function bar() {
        var local_bar = 3;
        // now it will print 7
        var z = 7;
        // special case of scope global initialising without var, let
        local_bar1 = 4;
        console.log('inside bar global_x is: ', global_x);
        console.log('inside bar local_foo is: ', local_foo);
        console.log('inside bar local_bar is: ', local_bar);
        console.log('inside bar local_bar1 is: ', local_bar1);
        console.log('inside bar z is: ', z);
    }
    bar();

    //local_bar will not available after bar(), hence will throw error
    //   console.log('outside bar local_bar is: ', local_bar);

    console.log('inside foo local_bar1 is: ', local_bar1);
}
foo();

// this will give error as local_foo is not assigned outside function
// console.log('outside of functions local_foo is: ', local_foo);
console.log('outside functions local_bar1 is: ', local_bar1);




// practice
/*Given the following snippet of code, what is logged in the console?*/
function f() {
    function g() {
        x = 1;
        console.log(x);
    }
    console.log(x);
    g();
}
f();
/* You are getting error because the function g() is not in memory at that time when you are executing   console.log( x ); in the f(). when you call the function g() only then the memory will  be assigned for it and only then the variables in the function are defined. so this is like calling x before it is defined.  As error is seen before g() the function is executed, the program terminates. hence error will be thrown. If you swap console.log( x ); and g() your code will execute. */

