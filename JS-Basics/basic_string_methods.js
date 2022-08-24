// Strings are immutable in JS like we have in java
var quote = 'with great learning comes the great responsibility';

var removedStringBetween = quote.substring(15, 28);
var removeStrComplete = quote.substring(10);
console.log(`Removed string in between: `, removedStringBetween);
console.log(`Removed string at complete end: `, removeStrComplete);

// replace method with String

var replacedString = quote.replace("responsibility", `success`)
console.log( replacedString );
console.log(quote);

// Split method in String

var splitString = quote.split(' ')// splitting using space
console.log(splitString);

// to find first and last apperance on indices in String

var firstIndex = quote.indexOf('great');
console.log('first time great appearing at index: ', firstIndex);

var lastIndex = quote.lastIndexOf('great');
console.log('last time great appearing at index:', lastIndex);

var anotherIndex = quote.indexOf('greatest');
console.log('if we dont have it present inside String then it returns: ', anotherIndex);

