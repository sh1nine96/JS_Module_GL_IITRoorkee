// Old way to  make a call to server using XMLHttpRequest class

const xhr = new XMLHttpRequest();

// Ajax ( Asynchronous javascript and XML)
xhr.onload = function(){
    console.log( xhr.responseText );
};

xhr.open( 'GET', 'https://jsonplaceholder.typicode.com/todos/1');

xhr.send();
// this can only be run on browser not on nodeJS