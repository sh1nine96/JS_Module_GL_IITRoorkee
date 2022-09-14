// Set is also an Iterable

let primes = new Set([ 2, 3, 5, 7, 11, 13, 17 ]);

// to get the size
console.log(primes.size);

// To add new item
primes.add(19);
console.log(primes);

primes.add(2); // will not add, as duplicates are not allowed in Set
console.log(primes);

// to remove an item=> we hae delete method
primes.delete(3);
console.log(primes);

// to check if an element exists in Set or not => has() method
console.log(primes.has(11)); // will return boolean true