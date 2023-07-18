//Scope
//blocks are the code blocks inside {}, for example in functions and if statements. How do blocks define the scope of variables?

const city = 'New York City';
function logCitySkyline() {
    let skyscraper = 'Empire State Building';
    return 'The stars over the ' + skyscraper + ' in ' + city;
}
console.log(logCitySkyline())
//Prints: The stars over the Empire State Building in New York City

/*Scope is the context in which variables are declared. Variables can exist either outside of or within these blocks.
Global scope: variables are declared outside of blocks -> global variables
*/

const color = 'blue';

const returnSkyColor = () => {
    return color; // blue 
};

console.log(returnSkyColor()); // blue, global variables can be accessed inside a function


let satellite = 'The Moon';
let galaxy = 'The Milky Way';
let stars = 'North Star';

function callMyNightSky() {
    return 'Night Sky: ' + satellite + ', ' + stars + ', and ' + galaxy;
}

console.log(callMyNightSky());

//Block scope: variables defined inside a block are only accessible within those {}, called local variables.

const logSkyColor = () => {
    let color = 'blue';
    console.log(color); // Prints "blue"
};

logSkyColor(); // Prints "blue"
console.log(color); // throws a ReferenceError


