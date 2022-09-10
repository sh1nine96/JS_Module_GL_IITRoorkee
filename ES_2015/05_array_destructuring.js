const days = [
    'Mon',
    'Tue',
    'Wed',
    'Thu',
    'Fri'
];

// const first = days[0], second = days[1], third = days[2], fourth = days[3], sixth = days[5];
// console.log(first, second, third, fourth, sixth);

// const[first, second, third, fourth, sixth] = days;
// console.log(first, second, third, fourth, sixth);   
// to skip any element in array obj we use  extra ', '
const[first, second, third, fourth, , sixth=`Holiday`] = days;
console.log(first, second, third, fourth, sixth);//print Mon Tue Wed Thu Holiday


    

