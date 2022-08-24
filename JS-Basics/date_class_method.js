var today = new Date();
console.log('today', today);

var millenniumStart = new Date( 2000, 0, 1 );
console.log('millennia start date in utc 0', millenniumStart);

var aug15 = new Date(2022, 7, 15, 5, 30, 0, 0);
console.log('aug 15 ', aug15);

// increase date
 aug15.setDate(aug15.getDate() + 1);
 console.log('auh 15 + 1', aug15);

 today.setDate(today.getDate() + 1);
 console.log('today ', today);

//  Getters
console.log('Printing Aug month: ', today.getMonth());
console.log(`todays's day: `, today.getDay());
console.log((new Date).getDay());

// setters
var today = new Date();
console.log(today);
today.setDate(29);
console.log(today);
today.setFullYear(1996);
console.log(today);
today.setMonth(11);
console.log('11 means dec for months: ', today);

// to show only time portion
console.log(today.toTimeString());
// for only date part
console.log(today.toDateString());
