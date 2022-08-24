var obj = [

    { name: "One", val: 55 },
    { name: "Two", val: 48 },
    { name: "Three", val: 2 },
    { name: "Four", val: 105 },
    { name: "Five", val: 65 }

]

// 1. Use forEach method to print only the objects having even val in the above array of objects

obj.forEach(function(element) {
    if(element.val%2 ===0){
        console.log(`even values in array are: `, element);
    }
});


// 2. Use Filter method to create a new array of object having val greater than 50. And print that new array of object.
var greater50 = obj.filter(function(item){
    return item.val > 50;
});
console.log(`objects having val greater than 50`,greater50);

// 3. Use the map method to create a new array of objects having val as the square of its initial val and print that new array of objects.

var squareObj = obj.map(function(item){
    item.val = item.val*item.val;
    return item;
});
console.log(`objects having sqaure values to their initial values`,squareObj);


