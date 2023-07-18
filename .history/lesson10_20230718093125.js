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

