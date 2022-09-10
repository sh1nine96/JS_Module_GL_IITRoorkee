//1.  Rest Operator while accepting function arguments

// function foo(x, y, ...others){
//     console.log(x, y, others);
// }

// foo(10, 15, 25, 7, 65, 54);// will print -- 10 15 [ 25, 7, 65, 54 ] --

function foo(x, y, ...others){
    console.log(x, y, others);
}

function sort(...numbers){
    console.log(numbers);
    return numbers.sort()
}

const result = sort(10, 15, 25, 77, 65, 54);
console.log(result);

//2.  Rest Operator while array destructuring

const days = [
    'Mon',
    'Tue',
    'Wed',
    'Thu',
    'Fri'
];
// Rest operator element must be the last element.
const [first, second, ...restOfDays] = days;
console.log(first, second, restOfDays);


//3.  Rest Operator while Object destructuring

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
}

// const { surName, age, ...restDetailsOfRam} = Ram;
// console.log(surName, age, restDetailsOfRam);
/* will print Singh 32 {
  email: [ 'ram@gmail.com', 'ram@yahoo.com' ],
  address: { city: 'Agra', pincode: 282010 }
} */

// even if we touch one part of array or suboject
//  inside obj then whole array or suboject will not be the part of rest operator

const { surName, address: {city}, ...restDetailsOfRam} = Ram;
console.log(surName, city, restDetailsOfRam);
//will print --Singh Agra { age: 32, email: [ 'ram@gmail.com', 'ram@yahoo.com' ] }--
