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

