// The array forEach method executes a given function for every element in the array

const numbers = [1, 2, 3, 4, 5];

// In the arrow function bellow it takes three parameters
numbers.forEach((item, index, arr) => {
  console.log("Element of [" + index + "] = " + item); // output will be the element and it's value inside the Array
});

// Calculating the total sum of items in a Array with forEach
let sum = 0;

numbers.forEach((item, index, arr) => {
  // The sum is adding up all the values from the item parameter
  sum += item;
});
console.log(sum);

// Calculating how many times a item/letter appears in a array with forEach method

const letters = ["a", "b", "c", "a", "a", "a", "b", "d", "e", "d", "b"];
// This will store our count values for the letters
let lettersCount = {};

letters.forEach((item) => {
  // if we have property inside object with any of the items, then add it to the lettersCount
  if (lettersCount[item]) {
    lettersCount[item]++; // or +=1
  } else {
    // if we don't have the property item then initialize it with 1
    lettersCount[item] = 1;
  }
});

console.log(lettersCount);
