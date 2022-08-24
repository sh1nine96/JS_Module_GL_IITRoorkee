// if else
let pricePhone = 25000, bankBalance = 15000, creditLimit = 50000;
if (pricePhone <= bankBalance) {
    console.log("Congratulations! payment has been made");
} else if (pricePhone <= creditLimit) {
    console.log('bank payment failed! payment made by Credit Card')
}
else {
    console.log("sorry! you dont have sufficient funds");
}
console.log('transaction is over')

// switch case

var chocolate = 'Dairy Milk', quantity;
switch(chocolate){
    case 'Dairy Milk' :
        quantity = 7;
        break;

    case 'Hershey' :
        quantity = 25;
        break;
        
    case 'Milky Bar' :
        quantity = 4;
        break; 

    default:
        quantity = 2;
        break;
}
console.log(quantity)

var chocolate = 'Hershey', quantity;
switch(chocolate){
    case 'Dairy Milk' :
        quantity = 7;
        break;

    case 'Hershey' :
        quantity = 25;
        break;
        
    case 'Milky Bar' :
        quantity = 4;
        break; 

    default:
        quantity = 2;
        break;
}
console.log(quantity)