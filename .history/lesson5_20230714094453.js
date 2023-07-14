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