//Project: Kelvin Weather
//the forecast today is 293 degrees kelvin which will stay constant
const kelvin = 293;
//celsius is 273 less than kelvin
let celsius = kelvin - 273;
//convert celsius to fahrenheit
let fahrenheit = celsius * (9 / 5) + 32;
//rounding down the fahrenheit temperature to not have a decimal
fahrenheit = Math.floor(fahrenheit);
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);
