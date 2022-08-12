/* Create a program to perform various arithmetic operation on given numbers-40,58

1. Add the given number ,store them in a variable and print the result.
2. Subtract the first number from the second one and store in a variable and then print as well.
3. Store and print the multiplication of given numbers.
4. Print the result of the first number raised to the power of the second number.*/

// Arithmentic Operators

let x = 40, y = 58;

let sum = x + y;
console.log('sum of x and y: ', sum);

let difference = y - x;
console.log('difference is: ', difference);

let multiplication = x * y;
console.log('multiplication of x and y: ', multiplication);


let a = 3, b = 10;
let exponential = b ** a;
console.log('value of b to the power a: ', exponential);

/*Create a program to perform various operation on given data- 40, 58
1. Compare and check if the given number are equal and have same data type.
2. Print true if first number is greater then second, else print false.
3. Print whether second number is greater or not.*/

// Relational Operators a.k.a Comparison Operators

var isGreater = x > y; // x=40, y=58
console.log('is x greater than y: ',isGreater);
console.log('is x smaller than y: ',x < y);
console.log('are both equal: ', x === y);
console.log('have same datatype: ', typeof x === typeof y);

var isGreater = y > x;
console.log('is y greater than x: ',isGreater);// bcz b is greater than a


/* Consider a scenario where if the day in the week is Saturday or Sunday ,it is then considered as Weekend.

1. Create two variables named Saturday and Sunday and it is given that today is Sunday.
2. So print if today we can consider a weekend or not.
3. Create a variable named free time which will represent whether I have free time or not.
 

4. Now consider if I have free time  and it is the weekend ,then I can go to the park. Based on this consideration answer the below question.

5. Can I go to the park today ,after considering points 3 and 4? */
 

var saturday = false, sunday = true;
var weekend = saturday || sunday;
console.log("is it weekend today: ", weekend);

var freetime = true;
console.log('will i go to park today: ', weekend && freetime);