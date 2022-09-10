// Defining a const variable also requires assignment of a value
//  to it at the time of declaration, else it will throw an error.

// const x; // it's an error bcz, we can'y just declare a variable we must assign it a value
const x = 2;
console.log(x);

// x = 3; // this is also an error we cant even assign it a new value

// lets see an interesting case

const obj = {
    y: 1
}
obj.y++;
console.log(obj);// here it will increase the value of y bcz we are only modifying property of obj.

// but we can't assign obj a new value

// obj = {
//     y = 3;
// } this is an error