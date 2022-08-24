var obj = {
    x: 1 // x is an "own property" of obj
};

console.log(Object.getPrototypeOf(obj));
console.log(obj.__proto__)

var proto = {
    y: 2
}

Object.setPrototypeOf(obj, proto);
console.log(obj);
// if we will check obj.y it will return 2 as its inheriting properties of proto now
console.log(obj.y);

var obj2 = {
    z: 3
}
Object.setPrototypeOf(obj2, proto)
console.log(obj2.y);

proto.y = 25;// if we change the proto value here then it would change for the linked objects too
console.log(obj.y);
console.log(obj2.y);