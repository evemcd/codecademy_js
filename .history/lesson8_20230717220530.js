//Functions (a reusable block of code that groups together a sequence of statements to perform a specific task)

function getReminder() {
    console.log('Water the plants.');
}

function greetInSpanish() {
    console.log('Buenas tardes.');
}

function sayThanks() {
    console.log('Thank you for your purchase! We appreciate your business.');
}

sayThanks();
sayThanks();
sayThanks();

//Parameters
function calculateArea(width, height) {
    console.log(width * height);
}               //width and height are parameters, treated like variables within a function
calculateArea(10, 6);       //calling the function with arguments

const rectWidth = 10;
const rectHeight = 6;
calculateArea(rectWidth, rectHeight);

function sayThanks(name) {
    console.log('Thank you for your purchase ' + name + '! We appreciate your business.');
}

sayThanks('Cole');

//default parameters

function greeting(name = 'stranger') {
    console.log(`Hello, ${name}!`);
}

greeting('Nick') // Output: Hello, Nick!
greeting() // Output: Hello, stranger!