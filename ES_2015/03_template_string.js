const name = 'Shubham', message = 'good morning';
// const greeting = message + ' ' + name + '!'; // old way of concatinating strings

const greeting = `${message} ${name}!`; //it preserves new line and space characters
console.log(greeting);

// creating markup for html using string template

const john ={
    surname: "King",
    email: "john@mail.com",
    age: 42
}

// old way of writing markup
// const strTr = "<tr>" +
//                    "<td>" + john.surname +  "</td>" +
//                    "<td>" + john.email  + "</td>"  +
//                    "<td>" + john.age + "</td>" +
//                "</tr>";   
               

//  we will see this now using string template

    const strTr = `
                  <tr>
                       <td>${john.surname}</td>
                       <td>${john.email}</td>
                       <td>${john.age}</td>
                  </tr>`; // its much more tideous              
    console.log(strTr);               

    // we can even call functions inside ${function}, return value will be interpolated

