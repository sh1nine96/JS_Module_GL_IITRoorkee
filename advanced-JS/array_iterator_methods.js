var days = [
    {day: `Sunday`, hours: 4},
    {day: `Monday`, hours: 9},
    {day: `Tuesday`, hours: 10},
    {day: `Wednesday`, hours: 7},
    {day: `Thursday`, hours: 6},
    {day: `Friday`, hours: 8},
    {day: `Saturday`, hours: 5}
]
//forEach=> calls a function for each element of array, forEach takes 2 args value, index & array

days.forEach(function(item){
    console.log(item);
    console.log(item.day);
    console.log(item.hours);
});

// Filter
var resultDays = days.filter(function(item){
    return true;
});
console.log(resultDays);

var productiveDays = days.filter(function(item){
    return item.hours >= 6;
});

console.log(productiveDays);

// map

var numbers = [1, 2, 3, 4];
var resultArray = numbers.map(function(item){
    return item*item;
});
console.log(resultArray);

var housInDays = days.map(function(item){
    return item.hours;
});
console.log(housInDays);

// some, every, reduce