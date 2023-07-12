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