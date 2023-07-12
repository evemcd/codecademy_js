//Variables

var favoriteFood = 'pizza';     //var is pre-ES6
var numOfSlices = 8;
console.log(favoriteFood);
console.log(numOfSlices);

let price;
console.log(price);         //Output: undefined
price = 350;
console.log(price);         //Output 350

let changeMe = true;
changeMe = false;
console.log(changeMe);

//const cannot be reassigned, must be assigned a value when declared
const entree = 'Enchiladas';
console.log(entree);
//entree = 'Tacos';       //TypeError: Assignment to constant variable.

//Mathematical Assignment Operators
let w = 4;
w += 1;         //w = w + 1; Output 5

let levelUp = 10;
let powerLevel = 9001;
let multiplyMe = 32;
let quarterMe = 1152;

// Use the mathematical assignments in the space below:
levelUp += 5;
powerLevel -= 100;
multiplyMe *= 11;
quarterMe /= 4;

//The Increment and Decrement Operator ++ -- (+1 -1)
let gainedDollar = 3;
let lostDollar = 50;
gainedDollar++;         //Output 4
lostDollar--;           //Output 49

//String Concatenation with Variables
let favoriteAnimal = 'giraffe';
console.log('My favorite animal: ' + favoriteAnimal);       //Output: My favorite animal: giraffe

//String Interpolation (template literals)
const myPet = 'armadillo';
console.log(`I own a pet ${myPet}.`);       // Output: I own a pet armadillo.

let myName = "Eve";
let myCity = "Wicklow";
console.log(`My name is ${myName}. My favorite city is ${myCity}.`);        //Output: My name is Eve. My favorite city is Wicklow.
