// The Array fill() method changes all the elements inside an array with a provided value

const numbers = [1, 2, 3, 4, 5];

// changing all of these numbers to 0

// In the fill method we can specify the start index, and the end index
// Add 0 from the 1st index to the 4th
numbers.fill(0, 1, 4);
console.log(numbers);
