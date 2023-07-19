//Arrays

/*New Year's Resolutions:

1. Keep a journal 
2. Take a falconry class
3. Learn to juggle
*/

let newYearsResolutions = ['Keep a journal', 'Take a falconry class', 'Learn to juggle'];
console.log(newYearsResolutions);       //Logs: [ 'Keep a journal', 'Take a falconry class', 'Learn to juggle' ]

['string', 10, true]        //array elements can be any data type. An array literal creates an array by wrapping items in square brackets []

const hobbies = ['reading', 'cross stitch', 'baking'];
console.log(hobbies);

//accessing elements: each element has a numbered position called index. Arrays in JS are zero-indexed (start counting positions from 0 rather than 1)
let cities = ['New York', 'Beijing', Nairobi];
cities[0]       //New York

//you can also access individual characters in a string
const hello = 'Hello World';
console.log(hello[6]);      // Output: W


const famousSayings = ['Fortune favors the brave.', 'A joke is a very serious thing.', 'Where there is love there is life.'];
let listItem = famousSayings[0];
console.log(listItem);
console.log(famousSayings[2]);
console.log(famousSayings[3]);  //undefined

//updating elements
let seasons = ['Winter', 'Spring', 'Summer', 'Fall'];
seasons[3] = 'Autumn';
console.log(seasons);
//Output: ['Winter', 'Spring', 'Summer', 'Autumn']

let groceryList = ['bread', 'tomatoes', 'milk'];
groceryList[1] = 'avocados';


/*arrays with let and const: 
- with let can be reassigned
- with const can't reassign a new array or different value BUT elements are still mutable, so contents of the array can be changed
*/

let condiments = ['Ketchup', 'Mustard', 'Soy Sauce', 'Sriracha'];

const utensils = ['Fork', 'Knife', 'Chopsticks', 'Spork'];

condiments[0] = 'Mayo';
console.log(condiments);    //[ 'Mayo', 'Mustard', 'Soy Sauce', 'Sriracha' ]

condiments = ['Mayo'];
console.log(condiments);    //[ 'Mayo' ]

utensils[3] = 'Spoon';
console.log(utensils);  //[ 'Fork', 'Knife', 'Chopsticks', 'Spoon' ]


//the .length property

const newYearsResolutions1 = ['Keep a journal', 'Take a falconry class'];
console.log(newYearsResolutions1.length);   //2

const objectives = ['Learn a new language', 'Read 52 books', 'Run a marathon'];
console.log(objectives.length);     //3


//the .push() Method (adds items to the end of an array)

const itemTracker = ['item 0', 'item 1', 'item 2'];
itemTracker.push('item 3', 'item 4');
console.log(itemTracker);   //['item 0', 'item 1', 'item 2', 'item 3', 'item 4'];

const chores = ['wash dishes', 'do laundry', 'take out trash'];
chores.push('tidy living room', 'make beds');
console.log(chores);        //[ 'wash dishes', 'do laundry', 'take out trash', 'tidy living room', 'make beds' ]


//the .pop() Method (removes the last item of an array)

const newItemTracker = ['item 0', 'item 1', 'item 2'];
const removed = newItemTracker.pop();
console.log(newItemTracker);    //[ 'item 0', 'item 1' ]
console.log(removed);           //item 2

const chores1 = ['wash dishes', 'do laundry', 'take out trash', 'cook dinner', 'mop floor'];
chores.pop();
console.log(chores1);       //[ 'wash dishes', 'do laundry', 'take out trash', 'cook dinner' ]


//more array methods

const groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];
groceryList.shift();                                //removes the first item from the array
groceryList.unshift('popcorn');                     //adds an item to the beginning of the array
console.log(groceryList);                           //[ 'popcorn', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains' ]
console.log(groceryList.slice(1, 4))                //[ 'bananas', 'coffee beans', 'brown rice' ] -> array.slice(start, end); start: The start index of the slice to be returned (optional) end: The end index of the slice to be returned (optional) (the first item to not be sliced)
console.log(groceryList);                           //.slice() is non-mutating, it doesn't physically remove the items: [ 'popcorn', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains' ]
const pastaIndex = groceryList.indexOf('pasta');    //finds the index of a particular item
console.log(pastaIndex);                            //4

//arrays and functions

const flowers = ['peony', 'daffodil', 'marigold'];
function addFlower(arr) {
    arr.push('lily');
}
addFlower(flowers);
console.log(flowers); //['peony', 'daffodil', 'marigold', 'lily']


const concept = ['arrays', 'can', 'be', 'mutated'];
function changeArr(arr) {
    arr[3] = 'MUTATED';
}
changeArr(concept);
console.log(concept);               //[ 'arrays', 'can', 'be', 'MUTATED' ]

function removeElement(newArr) {
    newArr.pop();
}
removeElement(concept);
console.log(concept);               //[ 'arrays', 'can', 'be' ]
//Notice that in both cases, the change to the array was maintained outside of the function!


//Nested Arrays

const nestedArr = [[1], [2, 3]];
console.log(nestedArr[1]); // Output: [2, 3]
console.log(nestedArr[1][0]); // Output: 2
