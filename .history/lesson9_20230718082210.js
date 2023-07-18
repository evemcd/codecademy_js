//Scope
//blocks are the code blocks inside {}, for example in functions and if statements. How do blocks define the scope of variables?

const city = 'New York City';
function logCitySkyline() {
    let skyscraper = 'Empire State Building';
    return 'The stars over the ' + skyscraper + ' in ' + city;
}
console.log(logCitySkyline())
//Prints: