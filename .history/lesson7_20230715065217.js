//Project: Race Day

let raceNumber = Math.floor(Math.random() * 1000);
let registeredEarly = true;
let runnerAge = 18;
if (runnerAge > 18 && registeredEarly === true) {
    raceNumber += 1000;
}

if (runnerAge > 18 && registeredEarly === true) {
    console.log(`Race time: 9.30am. Your race number is ${raceNumber}.`);
} else if (runnerAge > 18 && registeredEarly === false) {
    console.log(`Race time: 11.00am. Your race number is ${raceNumber}.`);
} else if (runnerAge < 18) {
    console.log(`Race time: 12.30am. Your race number is ${raceNumber}.`);
} else {
    console.log('Please see the registration desk.')
}