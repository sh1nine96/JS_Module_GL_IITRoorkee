/*
Store the given numbers in an array 33,45,2,88,36,17,81,50,28.

Sort and print the original array  in lexicographical order.
Sort and print the number in the ascending order and print them.
Add two more numbers to the array 105,501.
Sort the array again and make an array of the largest five numbers from the above array using array’s methods. */

// 1. 
var numbers = [33,45,2,88,36,17,81,50,28];
numbers.sort()
console.log('lexicographical order', numbers)

// 2.
numbers.sort(function(x,y){
    return x - y;
});
console.log(`ascending order`, numbers);

// 3. 
numbers.push(105);
numbers.unshift(501)
console.log(`added 3elements: `, numbers);

//4.
numbers.sort(function(x, y){
    return y - x;
});

var max5elements = numbers.slice(0, 5);
console.log(max5elements);
