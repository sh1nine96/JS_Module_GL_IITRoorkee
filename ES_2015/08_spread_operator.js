// pass items of an array as arguments when calling a function
const numbers = [10, 25, 32, 49, 15];
// const maxValue = Math.max(numbers);// will print NaN bcz it cant accept array only accepts csv

// we will use spread operator here
const maxValue = Math.max(...numbers);
console.log(maxValue);// will print max value now

// we can use spread operator to concat different arrays
const arr1 = [1, 2, 3, 4]; 
const arr2 = [5, 6, 7, 8, 9];
const arr3 = [ ...arr1, ...arr2]; // spread out items in arrays into csv
console.log(arr3);

// Object spread

const Ram ={
    surName: 'Singh',
    age: 32,
    email: [
        'ram@gmail.com',
        'ram@yahoo.com'
    ],
    address:{
        city: 'Agra',
        pincode: 282010
    }
};

const RamCopy = {// its a shallow copy not deep copy
    ...Ram
};

console.log(Ram);
console.log(RamCopy);

// lets make changes to primitive datatypes in copy=> Ram will be unaffected

RamCopy.surName = 'Sharma';

// change in non primitive=> it will affect original Ram too
RamCopy.email.push('ram@ymail.com')

console.log(Ram);
console.log(RamCopy);

/* Spread Operator=> It can be used to create a shallow copy of an object
(only primitive values rest will be deep copied) into another.

will print --
surName: 'Singh', here primitive change is not visible in original but email has been affected
  age: 32,
  email: [ 'ram@gmail.com', 'ram@yahoo.com', 'ram@ymail.com' ],
  address: { city: 'Agra', pincode: 282010 }
}
{
  surName: 'Sharma',
  age: 32,
  email: [ 'ram@gmail.com', 'ram@yahoo.com', 'ram@ymail.com' ],
  address: { city: 'Agra', pincode: 282010 }
}
*/

