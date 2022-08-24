"use strict";

function foo(){
    x = 1; // strict would not let this x assign value to 1 since we missed var and its of  local scope
}
foo();
    x = 2; // even this would not work
console.log( x );