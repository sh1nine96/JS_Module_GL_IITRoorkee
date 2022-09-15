/* const headers = {
  'Content-Type': 'application/json',
  Authorization: 'insert-token-here',
};
const body = {
  userID: 10,
  title: ‘Demo addition',
  body: 'This the body of the new post.',
};
Use the above defined headers and body to make a post call to the url
 'https://jsonplaceholder.typicode.com/posts'
And print the response to the console either it is a resolve or reject call. */

const headers = {
    'Content-Type': 'application/json',
    'Authorization': 'insert-token-here',
  };

  const body = {
    "userID": 10,
    "title": 'Demo addition',
    "body": 'This the body of the new post.',
  };

  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: 'headers',
    body: JSON.stringify(body)
  })
    .then(response => response.json())
    .then(value => console.log(value))
    .catch(error => console.log(error.message));