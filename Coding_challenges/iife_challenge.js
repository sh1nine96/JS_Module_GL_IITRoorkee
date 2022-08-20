

var rectangleArea = (function (x, y) 
{ return x * y; }
)(5, 10); 

var squareArea = (function (x) 
{ return x * x; }
)(10); 

var circleArea = (function (r) { 
    return 3.14 * r * r; }
    )(7); 
    console.log("Area of rectangle is: ", rectangleArea); 
    console.log("Area of square is : ", squareArea); 
    console.log("Area of circle is: ", circleArea);
