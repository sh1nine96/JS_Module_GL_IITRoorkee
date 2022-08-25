// alert() is called as blocking method
alert(`this is to inform/alert you to take action`);
console.log(`i will only execute once you handle alert`);

// confirm()=> it returns true or false, it is also a blocking method
var result = confirm(`are u really sure to take action?`);
console.log(result);

// prompt => is used to take input from user, returns string or null value
var result = prompt(`enter you favourite country`, `India`);
console.log(result);