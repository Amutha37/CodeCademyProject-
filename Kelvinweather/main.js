// assigning a fix temperatue
const Kelvin = 0;
// convert to celcius
let Celcius = Kelvin - 273;
// convertto fahrenheit
let fahrenheit = Celcius * (9 / 5) + 32;
// round down the output
fahrenheit = Math.floor(fahrenheit);
console.log(`The temperature is ${fahrenheit} degree Fahrenheit.`);
let Newton = Celcius * (33 / 100);
Newton = Math.floor(Newton);
console.log(`The temperature is ${Newton} degree Newton.`);
