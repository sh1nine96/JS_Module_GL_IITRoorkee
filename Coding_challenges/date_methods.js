/*
Write a program to do the below operations in js-

Create a date object of the date (6 Jun, 2021)
Create a date object of the year 2000 to do the next operation.
Check whether the given date(6 Jun,2021) is after or in the year 2000.
*/

var June6 = new Date(2021, 5, 6, 17, 35);
console.log(June6);

var baseDate= new Date(2000, 0, 1);

if(June6 > baseDate){
    console.log('Given Date is after the year 2000')
} else {
    console.log('given date is not after year 2000');
}