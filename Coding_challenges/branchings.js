/* You want to buy a smartphone having cost price of 30,000 rupees. But have 25,000 rupees in your account.
1. Form a program with the above data and print "I can buy the phone"  if you are able to buy the phone else print ."I can't buy the phone"
Now say you also have a credit card of limit 3000 rupees. Which you can use along with your account balance to purchase the phone.
a. Use this data in the program and print if you are able to buy the phone now.
b. If not how much extra money is still required to buy it ,print the money. */

let pricePhone = 30000, bankBalance = 25000;
if(pricePhone <= bankBalance){
    console.log('I can buy the phone');
} else {
    console.log('I cant buy the phone');
}

let = creditLimit = 3000;
difference = pricePhone -(bankBalance+creditLimit);
if(pricePhone <= bankBalance + creditLimit){
    console.log('You can buy it');
}else{
    console.log('sorry! you dont have enough funds, ' + 'you need=> ' + difference + ' rupees');
}