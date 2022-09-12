/* Create a class having one constructor and a method named age.
The constructor accepts two arguments: one is the name of the car and 
second is the manufacturing year of that car.
The age() method accepts an argument which is the year in which we want to find the age 
of that car.ie, if the argument is 2022 and the year of car manufacturing is 2014
 so age() will return 2022-2014=8.
Now create the object of the above class and set the name 
and manufacturing year of the car as “Ford”,2012 while object creation.
Now get the current year from the date object in js and print the age of the car. */

class Car{
    constructor(name, yearOfManufacturing){
        console.log( this);
        this.name = name;
        this.yearOfManufacturing = yearOfManufacturing;
    }
    calculateAge(currentYear){
        let result = currentYear - this.yearOfManufacturing;
        console.log(result);
    }
}

const dreamCar = new Car("Ford", 2012);
console.log(dreamCar);
dreamCar.calculateAge(2022)
