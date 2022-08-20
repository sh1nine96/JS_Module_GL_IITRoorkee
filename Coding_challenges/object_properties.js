/* 
Write a program to create an object of a book having different properties like ‘name’ , ’authors’ , ’publication year’ and ‘publisher’.

Add a property called ‘change name’ as a function to change the name of the current book object.
Add a property called ‘addAuthors’ as a function to the book object to add more authors to this current book object. */

var book = {
    name: "Godan",
    author: [`Munshi Premchand`],
    'publication year': 1936,
    pusblisher: `PM Publishers`,
    changeName: function(newName){
        this.name = newName;
    },
    addAuthors: function(newMember){
        // this.author[this.author.length] = newMember;
         this.author.push(newMember)
    }

};

console.log(book);

book.changeName(`Ramayan`);
console.log(book);

book.addAuthors('Maharishi Valmiki')
console.log(book);