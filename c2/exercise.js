// Exercise - Convert Celsius to Fahrenheit and Fahrenheit to Celsius
//! Convert Celsius
function convertToFahrenheit(celsius) {
  // make the given fahrenheit variable equal the given celsius value
  let fahrenheit = celsius;
  // multiply the given celsius value by 9/5 then add 32
  fahrenheit = (celsius * 9) / 5 + 32;
  // return the variable fahrenheit as the answer
  return fahrenheit;
}
console.log(convertToFahrenheit(30));

//! Convert Fahrenheit
function convertToCelsius(fahrenheit) {
  // make the given celsius variable equal the given fahrenheit value
  let celsius = fahrenheit;

  // multiply the given fahrenheit value by 5/9 then subtract 32
  celsius = (fahrenheit * 5) / 9 - 32;

  // return the variable celsius as the answer
  return celsius;
}
console.log(convertToCelsius(115));

// 2nd Attempt
const celsToFah = (cels) => (cels * 9) / 5 + 32;
const fahToCels = (fah) => fah - (32 * 5) / 9;

celsToFah(30);

// From teacher

const tempConvert = (type, value) => {
  switch (type) {
    case "c2f":
      return (value * 9) / 5 + 32;
    case "f2c":
      return (value * 5) / 9 - 32;
    default:
      console.log("Cannot Convert");
      break;
  }
};

let celsius = 100;
let fahrenheit = tempConvert("f2c", celsius);
console.log("Convert result", fahrenheit);
