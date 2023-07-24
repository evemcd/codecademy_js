//Loops

//repeating tasks manually for comparison
let vacationSpots = ['Portugal', 'Canada', 'Japan'];
console.log(vacationSpots[0]);
console.log(vacationSpots[1]);
console.log(vacationSpots[2]);


//The For Loop

for (let counter = 0; counter < 4; counter++) {
    console.log(counter);
}
/*Output:
0
1
2
3
*/

/*for (initialisation; stopping condition; iteration statement) {
    code block which will execute until the condition evaluates to false
} */

//Create a program that loops from 5 to 10 and logs each number to the console.
for (let counter1 = 5; counter1 < 11; counter1++) {
    console.log(counter1);
}

//Looping in Reverse
for (let counter2 = 3; counter2 >= 0; counter2--) {
    console.log(counter2);
}

//Looping through Arrays
const animals = ['Grizzly Bear', 'Sloth', 'Sea Lion'];
for (let i = 0; i < animals.length; i++) {
    console.log(animals[i]);
}

const vacationSpots1 = ['Bali', 'Paris', 'Tulum'];
for (let i = 0; i < vacationSpots1.length; i++) {
    console.log('I would love to visit ' + vacationSpots1[i]);
}

//Nested Loops (for example to compare the elements in two arrays. for each round of the outer loop, the inner loop will run completely)

const myArray = [6, 19, 20];
const yourArray = [19, 81, 2];
for (let i = 0; i < myArray.length; i++) {
    for (let j = 0; j < yourArray.length; j++) {
        if (myArray[i] === yourArray[j]) {
            console.log('Both arrays have the number: ' + yourArray[j]);
        }
    }
}

//Imagine you’re a big-wig programmer for a social media platform! You have been tasked with building a prototype for a mutual followers program. You’ll need two arrays of “friends” from two mock users so that you can extract the names of the followers who exist in both lists. 
let bobsFollowers = ['Ross', 'Tom', 'Henry', 'Austin'];
let tinasFollowers = ['Henry', 'Rob', 'Ross'];
let mutualFollowers = [];

for (let i = 0; i < bobsFollowers.length; i++) {
    for (let j = 0; j < tinasFollowers.length; j++) {
        if (bobsFollowers[i] === tinasFollowers[j]) {
            mutualFollowers.push(tinasFollowers[j]);
        }
    }
}

console.log(mutualFollowers);


//The While Loop

// A for loop that prints 1, 2, and 3
for (let counterOne = 1; counterOne < 4; counterOne++) {
    console.log(counterOne);
}

// A while loop that prints 1, 2, and 3
let counterTwo = 1;
while (counterTwo < 4) {
    console.log(counterTwo);
    counterTwo++;       //without this it would be an infinitive loop
}
//the variable is declared globally. while (stopping condition), will be evaluated before each round, loop stops when condition is false. while loopps are used when we don't know in advance how many times it should run

//exercise
const cards = ['diamond', 'spade', 'heart', 'club'];

// Write your code below
let currentCard;
while (currentCard != 'spade') {
    currentCard = cards[Math.floor(Math.random() * 4)];
    console.log(currentCard);
}
//many possible outputs but 'spade' is always the last one

