var CalSquare = (edge)=>{
    print(`The area of square is: `, edge*edge);
}

var calRectangle =(length,breadth)=>{
    print(`The area of the rectangle is: `, length*breadth);
}

var calCircle = (radius)=>{
    print(`the area of circle is: `, 3.14*radius*radius);
}

var print = (shape, value)=>{
    console.log(shape+` `+value);
}

Object.setPrototypeOf(CalSquare, print);
Object.setPrototypeOf(calRectangle, print);
Object.setPrototypeOf(calCircle, print);
CalSquare(4);
calRectangle(5, 6);
calCircle(6);