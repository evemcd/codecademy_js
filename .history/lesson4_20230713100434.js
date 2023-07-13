//Project: Dog Years
//variable with my age
let myAge = 37;
//changable variable
let earlyYears = 2;
earlyYears *= 10.5;
//myAge has 2 years subtracted as they're already accounted for
let laterYears = myAge - 2;
//calculates the number of dog years
laterYears *= 4;
console.log(earlyYears, laterYears);
let myAgeInDogYears = earlyYears + laterYears;
//myName is returned in all lower case letters
const myName = "Eve Jensch".toLowerCase();
//logging ages to the console
console.log(`My name is ${myName}. I am ${myAge} years old in human years old which is ${myAgeInDogYears} years old in dog years.`);
//Output: My name is eve jensch. I am 37 years old in human years old which is 161 years old in dog years.
