//Higher-Order Functions

/*In JavaScript, functions are first class objects. This means that, like other objects you’ve encountered, JavaScript functions can have properties and methods.
Since functions are a type of object, they have properties such as .length and .name, and methods such as .toString().
Functions are special because we can invoke them, but we can still treat them like any other type of data.
*/

//Exercise

const checkThatTwoPlusTwoEqualsFourAMillionTimes = () => {
    for (let i = 1; i <= 1000000; i++) {
        if ((2 + 2) != 4) {
            console.log('Something has gone very wrong :( ');
        }
    }
};

const isTwoPlusTwo = checkThatTwoPlusTwoEqualsFourAMillionTimes;
isTwoPlusTwo();
console.log(isTwoPlusTwo.name)      //checkThatTwoPlusTwoEqualsFourAMillionTimes


//Functions as Parameters (placeholder for the data that gets passed into a function)

/*A higher-order function is a function that either accepts functions as parameters, returns a function, or both! 
We call functions that get passed in as parameters callback functions. 
Callback functions get invoked during the execution of the higher-order function.
*/

