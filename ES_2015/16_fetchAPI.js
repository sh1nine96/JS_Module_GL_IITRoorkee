// new way of making request to the backend

fetch( 'https://jsonplaceholder.typicode.com/todos/1' )
    .then( response => response.json() )
    .then( value => console.log(value) )
    .catch( error => console.log(error.message));