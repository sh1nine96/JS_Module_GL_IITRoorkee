class Person{
    constructor(name, age){
        console.log( this);
        this.name = name;
        this.age = age;
    }

    celebrateBirthday(){
        this.age++;
    }

};

const ram = new Person("ram", 28);
console.log(ram);
ram.celebrateBirthday();
console.log(ram);