// new way of making request to the backend

fetch( 'https://jsonplaceholder.typicode.com/todos/1' )
    .then( response => response.json() )
    .then( value => console.log(value) )
    .catch( error => console.log(error.message));

    // post  request

    const body = {
        "userId": 1,
        "title": "quis ut nam facilis et officia qui",
        "completed": false
      };

      fetch( 
        'https://jsonplaceholder.typicode.com/todos',
        {
            method: 'POST',
            body: JSON.stringify( body )
        },
        {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        )
            .then( response => response.json())
            .then( json => console.log(json))
            .catch( error => console.log( error.message));
        

