/*Task Title: Number Sorting
Description:
Create a JavaScript function that takes an array of 
numbers as input and returns a sorted array in 
ascending order without using the built-in sorting methods(such as Array.sort()).*/

function arrSort(arr) {
    let sortedArray = arr.slice();
    let n = sortedArray.length;
    let swapped;
    do {
        swapped = false;
        for (let i = 1; i < n; i++) {

            if (sortedArray[i - 1] > sortedArray[i]) {
                let temp = sortedArray[i - 1];
                sortedArray[i - 1] = sortedArray[i];
                sortedArray[i] = temp;
                swapped = true;
            }
        }
        n--;
    } while (swapped);

    return sortedArray;
}
const numbers = [5, 3, 8, 4, 2, 10, 21, 6, 15];
console.log(arrSort(numbers));

/*Task Title: Prime Number Checker

Description:
Create a JavaScript function that checks whether a given number is a prime number or not. 
A prime number is a natural number greater
 than 1 that has no positive divisors other than 1 and itself. */
function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;

    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false
    }
    return true
}
console.log(isPrime(11));
console.log(isPrime(15));
console.log(isPrime(6));
console.log(isPrime(19));



/*Task Title: Palindrome Checker
Description:
Create a JavaScript function named isPalindrome that takes a string as input and determines 
whether it is a palindrome or not. A palindrome is a word, phrase, number,
 or other sequence of characters that reads the same forward and backward. */

function stringPalChecker(str) {
    let reversed = str.split("").reverse().join("");
    return reversed === str
};
console.log(stringPalChecker("lool"));
console.log(stringPalChecker("poop"));
console.log(stringPalChecker("cool"));
console.log(stringPalChecker("apple"));

/*Task Title : Sum of Array Elements
Description:
Create a JavaScript function that takes an array of 
numbers as input and returns the sum of all the elements in the array. */

let arr = [1, 2, 3, 4, 5, 6, 7, 10, 40];
let sum = 0;
arr.forEach(function (elem) {
    sum = sum + elem
});
console.log(sum);

/*Task Title : Factorial Calculator

Description:
Write a JavaScript function that calculates the factorial of a given non-negative integer.
 The factorial of a number is 
the product of all positive integers less than or equal to that number. */
function calculateFactorial(num) {
    if (num === 0 || num === 1) {
      return 1;
    } else {
      return num * calculateFactorial(num - 1);
    }
  };
  console.log(calculateFactorial(5));


/*Task Title : Reverse String
Description:
Implement a JavaScript function that takes a string as input and returns 
a new string with the characters reversed. For example, 
if the input is "hello", the output should be "olleh". */
let str = "hello"
let savedStr = str.split(" ").map(function (word) {
    return word.split("").reverse().join("")
})

console.log(savedStr.join(" "));


/*Task Title : Vowel Counter
Description:
Create a JavaScript function that takes a string as input 
and counts the number of vowels (a, e, i, o, u) in the string. */

function countVowels(str) {
    const vowels = 'aeiouAEIOU';
    let count = 0;
    for (let char of str) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
};
console.log(countVowels("Hello World"));
console.log(countVowels("AEIOU"));  
console.log(countVowels("rabiYa"));
