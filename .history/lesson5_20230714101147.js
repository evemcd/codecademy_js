//If Statements

if (true) {
    console.log('This message will print!');
}
// Prints: This message will print!

let sale = true;
if (true) {
    console.log('Time to buy!');
}
//Prints Time to buy!

//If Else Statements

sale = false;

if (sale) {
    console.log('Time to buy!');
} else {
    console.log('Time to wait for a sale.');
}

/*Comparison Operators
compare left to right
- Less than: <
- Greater than: >
- Less/greater than or equal to: <= / >=
- Is equal to: ===
- Is not equal to: !== */

let hungerLevel = 7;
if (hungerLevel > 7) {
    console.log('Time to eat!');
} else {
    console.log('We can eat later!');
}

/*Logical Operators
- and &&
- or ||
- not/bang ! */

if (stopLight === 'green' && pedestrians === 0) {
    console.log('Go!');
} else {
    console.log('Stop');
}

if (day === 'Saturday' || day === 'Sunday') {
    console.log('Enjoy the weekend!');
} else {
    console.log('Do some work.');
}

let excited = true;
console.log(!excited); // Prints false
let sleepy = false;
console.log(!sleepy); // Prints true

//exercise
let mood = 'sleepy';
let tirednessLevel = 6;
if (mood === 'sleepy' && tirednessLevel > 8) {
    console.log('time to sleep');
} else {
    console.log('not bed time yet');
}

//Truthy and Falsy
let myVariable = 'I Exist!';

if (myVariable) {
    console.log(myVariable)
} else {
    console.log('The variable does not exist.')
}
//code block in the if statement will run because myVariable has a truthy value, it exists even though the value itself isn't "true"

//falsy values: 0, empty strings, null, undefined, NaN
let numberOfApples = 0;

if (numberOfApples) {
    console.log('Let us eat apples!');
} else {
    console.log('No apples left!');
}
// Prints 'No apples left!'

//exercise: 
let wordCount = 15;

if (wordCount) {
    console.log("Great! You've started your work!");
} else {
    console.log('Better get to work!');
}


let favoritePhrase = '';

if (favoritePhrase) {
    console.log("This string doesn't seem to be empty.");
} else {
    console.log('This string is definitely empty.');
}
//Prints: Great! You've started your work! This string is definitely empty.

//Truthy and Falsy Assignment
let username = '';
let defaultName;

if (username) {
    defaultName = username;
} else {
    defaultName = 'Stranger';
}
console.log(defaultName); // Prints: Stranger

let username1 = '';
let defaultName1 = username1 || 'Stranger';
console.log(defaultName1); // Prints: Stranger
//because || or statements check the left-hand condition first, the variable defaultName1 will be assigned the actual value of username1 if it is truthy, and it will be assigned the value of 'Stranger' if username1 is falsy. Short-circuit evaluation.


//exercise: 
let tool = '';
let writingUtensil = tool || 'pen';
console.log(`The ${writingUtensil} is mightier than the sword.`);
//Prints: The pen is mightier than the sword. Change empty string to 'marker'. Prints: The marker is mightier than the sword.

//Ternary Operator
let isNightTime = true;

if (isNightTime) {
    console.log('Turn on the lights!');
} else {
    console.log('Turn off the lights!');
}

//ternary operator changes this to:
isNightTime ? console.log('Turn on the lights!') : console.log('Turn off the lights!');
//condition ? true expression : false expression

//exercise: refactor if...else blocks to use a ternary operator
let isLocked = false;
isLocked ? console.log('You will need a key to open the door.') : console.log('You will not need a key to open the door.');

let isCorrect = true;
isCorrect ? console.log('Correct!') : console.log('Incorrect!');

let favoritePhrase1 = 'Love That!';
favoritePhrase1 === 'Love That!' ? console.log('I love that!') : console.log("I don't love that!");

//Else If Statements (to use more than 2 conditions)
let stopLight = 'yellow';

if (stopLight === 'red') {
    console.log('Stop!');
} else if (stopLight === 'yellow') {
    console.log('Slow down.');
} else if (stopLight === 'green') {
    console.log('Go!');
} else {
    console.log('Caution, unknown!');
}