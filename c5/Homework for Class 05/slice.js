// The slice() method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.

const numbers = [1, 2, 3, 4, 5];

// Starts from index of 1 until index of 3. It will not output the 4th index
const numbers2 = numbers.slice(1, 4); // output 2,3,4
console.log(numbers2);

const numbers3 = numbers.slice(-1); // it will output only the last index number
console.log(numbers3); // 5

// It will skip the first three index values, and output only the last 2
const numbers4 = numbers.slice(3);
console.log(numbers4); // 4,5
