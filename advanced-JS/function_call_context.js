function foo(){
    console.log(this); //global context
}
foo();

var obj ={
    name:'object',
    getName: function(){
        console.log(this);
        return this.name;
    }
};
console.log(obj.getName()); //local function context

var getName = obj.getName;
getName();//global context