/*     Object vs Map
In Object, the data-type of the key-field is restricted to integer, strings, and symbols.
 Whereas in Map, the key-field can be of any data-type (integer, an array, even an object!)
In the Map, the original order of elements is preserved. This is not true in case of objects.
The Map is an instance of an object but the vice-versa is not true. */

const numbers = new Map([ [1, "One"], [2, "two"], [3, "three"] ]);

console.log(numbers.size);
console.log(numbers.keys());
console.log(numbers.values());
console.log(numbers.entries());

// we can add tuple to the Map as well 
numbers.set(20, 'Twenty');
console.log(numbers);

// get method
console.log(numbers.get(3));

// we can also remove a key value pair or tuple from Map
numbers.delete(2);
console.log(numbers);

// we can iterate Map using for of loop
for(let [key, value] of numbers){
    console.log(`${key} = ${value}`);
}

// we can also clear out all the tuples from Map and make it empty
numbers.clear();
console.log(numbers);