console.log(5);                 //prints 5 to the console
console.log(32548574);

//Opening line.
console.log('It was love at first sight.');
/*
console.log('The first time Yossarian saw the chaplain he fell madly in love with him.');
console.log('Yossarian was in the hospital with a pain in his liver that fell just short of being jaundice.');
console.log('The doctors were puzzled by the fact that it wasn\'t quite jaundice.');
console.log('If it became jaundice they could treat it.');
console.log('If it didn\'t become jaundice and went away they could discharge him.');
console.log('But this just being short of jaundice all the time confused them.');
*/

/* Data types:
- Numbers including decimals (primitive)
- Strings: 'content' or "content" (primitive)
- Boolean: true or false (primitive)
- Null: intentional absence of a value (primitive)
- Undefined: absence of a value, the given value doesn't exist (primitive)
- Symbol (primitive)
- Object: Collection of related data (complex)
*/

console.log('JavaScript');
console.log(2011);
console.log('Woohoo! I love to code! #codecademy');
console.log(20.49);

//Arithmetic Operators + - * / %

//modulo: 11 % 3 equals 2 because 3 fits into 11 3 times leaving 2 as the remainder
console.log(37 + 3.5);
console.log(2023 - 1969);
console.log(65 / 240);
console.log(0.2708 * 100);

//String Concatenation

console.log('Hello' + 'World');
console.log('Hello ' + 'World');
console.log('Hello' + ' World');
console.log('Hello' + ' ' + 'World');

//Properties

console.log('Hello'.length)     //Prints 5
console.log('Teaching the world how to code'.length);       //Prints 30

//Methods

console.log('hello'.toUpperCase());         // Prints 'HELLO'
console.log('Hey'.startsWith('H'));         // Prints true

// Use .toUpperCase() to log 'Codecademy' in all uppercase letters
console.log('Codecademy'.toUpperCase());

// Use a string method to log the following string without whitespace at the beginning and end of it.
console.log('    Remove whitespace   '.trim());

//Built-in Objects
console.log(Math.random());     //Prints a random number between 0 and 1
console.log(Math.random() * 50);        //Prints a random number between 0 and 50 (including decimals)
console.log(Math.floor(Math.random() * 50));     //Rounds a decimal number down
console.log(Math.floor(Math.random() * 100));
console.log(Math.ceil(43.8));       //Rounds up to the next higher integer 
console.log(Math.round(43.8));      //rounds mathematically logically
console.log(Number.isInteger(2017));        //is a number an integer?
