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

function makeShoppingList(item1 = 'milk', item2 = 'bread', item3 = 'eggs') {
    console.log(`Remember to buy ${item1}`);
    console.log(`Remember to buy ${item2}`);
    console.log(`Remember to buy ${item3}`);
}

//return

function rectangleArea(width, height) {
    let area = width * height;
}
console.log(rectangleArea(5, 7)) // Prints undefined (variable area isn't used)

function rectangleArea(width, height) {
    const area = width * height;
    return area;
}
console.log(rectangleArea(5, 7));
//return ends the execution of the funtion

function rectangleArea(width, height) {
    if (width < 0 || height < 0) {
        return 'You need positive integers to calculate area!';
    }
    return width * height;
}


function monitorCount(rows, columns) {
    return rows * columns;
}
const numOfMonitors = monitorCount(5, 4);     //you can call a function by assigning it to a variable
console.log(numOfMonitors);

//Helper Functions