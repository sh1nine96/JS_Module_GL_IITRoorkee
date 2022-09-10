const Ram ={
    surName: 'Singh',
    age: 32,
    email: [
        'ram@gmail.com',
        'ram@yahoo.com'
    ],
    address:{
        city: 'Bangalore',
        pincode: 560100
    }
};
// old approach
// const surName = Ram.surName;
// console.log(surName);

// const age = Ram.age;
// console.log(age);

// const email = Ram.email;
// console.log(email);
// it will be a very hectic process if we create variable out of big objects like this

// hence we will use the new approach=> object destructuring es2015

// const { surName, age, email} = Ram;
// console.log(surName, age, email);
// if we dont want to create varibale with surName, age or email, the we can do as follows

// const { surName: secondName, age: yearsOld, email: digitalAddress} = Ram;
// // here secondName, yearsOld and digitalAddress have been created instead of old names
// console.log(secondName, yearsOld, digitalAddress);

// const { city } = Ram;
// console.log(city); // it will print undefined 
// if we have to extract out sub objects like city here how we will go
// const { address: { city}} = Ram;
// console.log(city);// will print bangalore

// lets say if we dont want the variable name as city we can rename it as follows

// const { address: { city: residence}} = Ram;
// console.log(residence);

// now we will see it for arrays inside objects
// const { address: { city: residence}, email: [primaryEmail]} = Ram;
// console.log(residence, primaryEmail);

// if we have to skip first element inside array then
const { address: { city: residence}, email: [, secondaryEmail]} = Ram;
console.log(residence, secondaryEmail);// will print Bangalore ram@yahoo.com



