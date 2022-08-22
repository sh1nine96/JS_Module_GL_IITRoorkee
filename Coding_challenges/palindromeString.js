/* 
Write a program which has a function  to check whether the given string i.e, abcaaaaaacba is a palindrome or not.

If the string is palindrome then print,”Given String is Palindrome”
Else print “Given String is not a palindrome” */

var toBeChecked = `abcaaaaaacba`;
const checkPalindrome = (str) => {

    var left = 0;
    var right = str.length - 1;

    while (right > left) {
        if (toBeChecked.charAt(left) != toBeChecked.charAt(right)) {
            return false;
        } else {
            left++;
            right--;
        }
    } return true;
}

var result = checkPalindrome(toBeChecked);

if (result) {
    console.log(`given number is palindrome `)
} else {
    console.log('given string is not a palindrome number');
}