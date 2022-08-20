var days = [
    `monday`,
    `tuesday`,
    `wednesday`,
    `thursday`,
    `friday`,
    `saturday`,
    `sunday`
]

// console.log(days);

days.sort(); //it sorts alphabetically or lexicographically
console.log(days);

days.reverse();
console.log(days);


console.log(days.indexOf(`friday`));// 6
console.log(days.indexOf(`someNewDay`));// return -1 as item not there


var numbers = [2, 500, 5, 88, 27, 46, 6, 4, 680, 400, 200, 23, 100, 2500];
numbers.sort();// even this would be sorted alphabetically
console.log(numbers);

// to sort it in ascending or descending we do the following
numbers.sort(function(x, y){
    return x - y; // for ascending order
});
console.log(numbers);

numbers.sort(function(x, y){
    return y -x;// for descending order
});
console.log(numbers);

// now lets make it little interesting

var projects = [
    {hours: 20, name: 'project1'},
    {hours: 48, name: 'project2'},
    {hours: 18, name: 'project3'},
    {hours: 06, name: 'project4'},
    {hours: 98, name: 'project5'},
    {hours: 67, name: 'project6'}
]

projects.sort(function(x, y){
    return x.hours - y.hours; // to sort ascending order wise
})

console.log(projects);


//  Push and Pop=> add and remove the element from end of an array respectively

days.push(`funday`);
days.push(`weekend`);// return the 
console.log(days);

days.pop();
var removedItem = days.pop();// pop also returns the removed element
console.log(days,'removed day is: ', removedItem);

// shift & unshift=> remove & add the element to beginning of an array

days.unshift(`holiday`);
console.log(days);

days.shift();
var shiftedDay = days.shift();// returns the removed/shifted item
console.log(days);
console.log('removed day from beginning: ', shiftedDay);


// splice & slice

days.splice(2, 1, 'wednesday');// removing sunday adding wednesdayS
console.log(days);

var slicedDays = days.slice(1, 3)// returns new sliced array, doesnt change existing array
console.log(days);
console.log('sliced array', slicedDays);

var y = days.slice(0,4);// x->starting point, y-> ending point but excluding
console.log(days);
console.log('sliced array is: ',y);

