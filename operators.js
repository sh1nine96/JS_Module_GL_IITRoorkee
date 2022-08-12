// Arithmetic operators
console.log(10+20);
let x = 14;
let y = 9;
console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x / y);
console.log(x % y);
console.log(y % x);

// Relational Operators a.k.a comparison operators
let isBefore = 'Hello' < 'hi';
console.log('is hello before hi: ', isBefore);

isBefore = 'hi' < "hello";
console.log('is hello before hi: ', isBefore);

var isGreater = 10 > 9;
console.log(isGreater);

let a = 12, b = 9;
console.log(a >= b);
console.log(a <= b);
console.log(a == b);
console.log(a != b);

console.log('**Interesting case**');
console.log(1 == '1'); //unsafe equality operator as this would be true
console.log(1 === 1); //only this should be true(its safe equality operator)
console.log(1 === '1');// will be false as we comparing string to number
console.log(1 !== '1');// it would be true obvious

// Logical Operators
var isItRaining = true, goingByWalk = true, goingByCar = false;
// both conditions should be true for it to be true while using &&
var takeUmbrella = isItRaining && goingByWalk;
console.log('take umbrella: ', takeUmbrella);
var isItRaining = true, goingByWalk = false, goingByCar = true;
takeUmbrella = isItRaining && goingByWalk;
console.log('take umbrella when goingByCar: ',takeUmbrella);

var pricePhone = 40000, bankBalance = 55000, friendsBankBalance=80000, amIInterested = true;
// relational operators have more prefence than logical and they are evaluated first
var willIBuyPhone = pricePhone < bankBalance && amIInterested;
console.log('will I buy Phone: ',willIBuyPhone);

/* its true even if one of the conditions are true while using || operator, it would only be false if both the conditons are false */

bankBalance = 20000;// assigned new value again
var willIBuyPhone = pricePhone < bankBalance || pricePhone < friendsBankBalance;
console.log("Will I buy phone: ", willIBuyPhone);

// not or ! operator

console.log(!true); //this means false

console.log('is it not raining: ',!isItRaining);


// Miscellaneous operators
let name = 'Shubham', message = 'good morning';
// + is both arithmetic operator as well as string concatanation operatror
console.log(message + ' ' + name);

console.log(typeof name); // this typeof operator will print string
console.log(typeof isItRaining); // boolean here
console.log(typeof friendsBankBalance); // number


var city = 'Mumbai';
// it ? value : value, works like if else
var isTrafficHuge = city === 'Mumbai' ? 'yes' : 'no';
console.log(isTrafficHuge);
var city = 'Agra';
var isTrafficHuge = city === 'Mumbai' ? 'yes' : 'no';
console.log(isTrafficHuge);


// associativity
console.log(1 + 2 + 3 * 4 / 2);//1+2+3*2-> 1+2+6-> 3+6-> 9
console.log(1 + (2 + 3) * 4);//1+5*4-> 1+20-> 21


