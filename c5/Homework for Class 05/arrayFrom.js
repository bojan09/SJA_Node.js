// The Array from() method created a new shallow copied Array from an Array like itterable object

// Converting a string of numbers to an Array of numbers
const numbersString = "123456789";

// The Number constructor as a parameter converts the string numbers to a Array of Number values
const result = Array.from(numbersString, Number);

console.log(result);
