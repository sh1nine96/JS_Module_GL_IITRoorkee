function Person(name, age){
    this.name = name;
    this.age = age;

  /*  this.celebrateBirthday = function(){
        this.age++;
    } */
}

Person.prototype.celebrateBirthday = function(){
    this.age++; 
} // we will not see extra space used by [function] now and it will increase the age too

var harendra = new Person(`Harendra`, 28);
console.log(harendra);
harendra.celebrateBirthday();
console.log(harendra);

var kishan = new Person(`kishan`, 39);
console.log(kishan);
kishan.celebrateBirthday();
console.log(kishan);