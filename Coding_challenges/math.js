/* Write a program to do the below operations-

Consider the given values for the below operations 5,78,23,41,67,84,22,10,1.
1. From the given values find the minimum and maximum number out of them without using sorting or sort method and also without looping over them.
2. Write a method to find the mean value(in decimal point if any) of the above numbers and print the ceil of that value.*/

console.log(Math.min(5,78,23,41,67,84,22,10,1));
console.log(Math.max(5,78,23,41,67,84,22,10,1));

var arr = [5,78,23,41,67,84,22,10,1]

var mean = (arr)=>{
    sum =0;
    for(var i =0; i < arr.length; i++){
        sum += arr[i];
    }
    var numbersCount = arr.length;
    return (sum / numbersCount);
}
console.log("mean of given array is: ", mean(arr))
console.log("Ceil Value of given array is: ", Math.ceil(mean(arr)));



