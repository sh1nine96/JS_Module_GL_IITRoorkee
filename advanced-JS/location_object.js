console.log(location);
console.log(location.protocol);
console.log(location.pathname);

location = 'http://www.facebook.com';
location.href = 'http://www.facebook.com'; //both are same

location.assign('http://www.facebook.com');// it also works same

location.replace('http://www.facebook.com')// it removes the current page from history stack