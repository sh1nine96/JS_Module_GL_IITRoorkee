/* Write a program having four methods -

1. One for printing some values say two values one is string and one is number..
2. One for calculating area of square,this method will be expecting two parameter one is edge of square and the other is the print method we created in previous step.Pass the area of square to the print method as second parameter to it,First parameter will be “Area of square is: “. The final output should be “Area of square is : calculatedArea”.
3. One for calculating area of rectangle,this method will be expecting three parameter two are length and width of rectangle and the other is the print method we created in first step.Pass the area of rectangle to the print method as second parameter to it,First parameter will be “Area of rectangle  is: “. The final output should be “Area of rectangle is : calculatedArea”.
4. One for calculating area of circle,this method will be expecting two parameter one is radius of circle and the other is the print method we created in previous step.Pass the area of circle to the print method as second parameter to it,First parameter will be “Area of circle is: “. The final output should be “Area of square is : calculatedArea”.
 
Then call the methods for each square,rectangle and circle and inside them call the print method with proper input parameters to it. */

// 1. 
var print = function print(shape, value){
    console.log(shape+` `+value)
}
 print(`this is a String`, `This is a number`);

// 2. 

// var print = (shape, value)=>{
//     console.log(shape, value);
// }
var calSquareArea = (edge, print)=>{
    print(`Area of square is: `, edge*edge + `m square`);
}
calSquareArea(8, print);

// 3. 

var calRectangleArea = (length, width, print)=>{
    print(`Area of the rectangle is: `, length*width +`m sq`)
}
calRectangleArea(7, 9, print)

// 4. 
var calCircleArea = (radius, print)=>{
    print(`Area of the circle is: `, 3.14*radius*radius+ `m sq`);
}
calCircleArea(5, print);

