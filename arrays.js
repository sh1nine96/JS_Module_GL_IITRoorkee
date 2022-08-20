var days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday'];
console.log(days[2]);

days[2] = 'wed';
console.log(days);

// we can go beyond the size of array as well
days[5] = 'sat';
console.log(days);

// values between index 6 to 10 would be empty or undefined
days[9] = 'Unknown day';
console.log(days);
console.log(days[8]);

// it will print undefined
console.log(days[11]);

// we have length property in arrays
console.log(days.length);

// we can put any datatypes in  arrays

var dummyArray = [
    'hello',
    1,
    true,
    null
];

console.log(dummyArray);

//  2D Arrays
 
var matrix = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12, 13, 14]
];
console.log(matrix[1][2]);
console.log(matrix[2][5]);