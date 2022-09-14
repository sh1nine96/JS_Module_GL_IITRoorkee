class Person{
    constructor(name, age){
        // console.log( this);
        this.name = name;
        this.age = age;
    }

    celebrateBirthday(){
        this.age++;
    }
};

class Employee extends Person{
    constructor(name, age, role, department){
        super(name, age);
        this.role = role;
        this.department = department;
    }

    promote(){
        this.role = "Senior " + this.role;
    }

    celebrateBirthday(){
        super.celebrateBirthday();
        console.log("happy birthday");
    }
};

const ajay = new Employee("Ajay kumar", 24, "System Engineer", "IT");
console.log(ajay);

ajay.celebrateBirthday();
console.log(ajay);

ajay.promote();
console.log(ajay);