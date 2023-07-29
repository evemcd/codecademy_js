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

