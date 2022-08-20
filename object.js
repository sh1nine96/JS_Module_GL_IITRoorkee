var sholay = {
    "name": "sholay",
    cast: ['amitabh', 'dharmendra', 'hema'],
    'boxOffice Stats': {
        countries: 15,
        collection: 158545000
    },
    addToCollection: function (amount) {
//      sholay[`boxOffice Stats`].collection += amount; "this" is the context of method
        this[`boxOffice Stats`].collection += amount;
    }

};
console.log(`to access name of sholay is: `, sholay.name);
console.log('to access cast on 3rd index: ', sholay.cast[2]);
console.log(`to access key with special chars: `, sholay[`boxOffice Stats`]);
console.log(`to access key value pair(collection) inside key: `, sholay[`boxOffice Stats`].collection);
console.log(`we can use this [] way too `, sholay[`boxOffice Stats`][`countries`]);
sholay.addToCollection(134205000);

// we can add any property anytime in JS, it will add another key value pair
sholay.villain = `Gabbar Singh;`
sholay[`boxOffice Stats`][`hindi collection`] = `100 crores`;

// we can add new function as well
sholay.addToCast = function(newMember){
    this.cast[this.cast.length] = newMember;
};
sholay.addToCast('Sanjay');
sholay.addToCast('Ajay');
console.log(sholay);

// we can also delete from objects and arrays

delete sholay[`boxOffice Stats`];
console.log(sholay);

