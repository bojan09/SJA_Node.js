// The Array flat() method creates a new Array with all the sub Array based elements concatonated into it

// An array inside of an Array
const array = [1, [2, [3, [4, [5, [6, [7, [8, [9, [10]]]]]]]]]];

// Converting to a single array

// The Infinity value means we can pass as many nested array as we'd like and they will always output as a single Array
const result = array.flat(Infinity);

console.log(result); // [1,2,3,4,5,6,7,8,9,10]
