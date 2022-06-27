// The Array sort method

// Example 1 - Sorting an Array of strigns, containing names
const names = ["John", "Lucas", "Anna", "Rambo", "Bond", "Zelda"];

// Example 1 - How to sort these names based on alphabetical order

// Taking the array name, the sort method doesn't create a new array. But instead it changes the original array. It's a destructive method.
names.sort();
console.log(names);

// -
// -
// -

// Example 2 -  Sorting an Array of numbers
const scores = [10, 50, 20, 5, 35, 70, 45];

// Does the same as from the strings above, sorts them from Highest to Low
// But it will only look at the first numbers
scores.sort();
// Therfor the output will be:
//    10,20,35,45,5,50,70
console.log(scores);

// -
// -
// -

// Example 3 - Sorting an Array of Objects
const players = [
  { name: "John", score: 20 },
  { name: "Lucas", score: 5 },
  { name: "Anna", score: 35 },
  { name: "Rambo", score: 70 },
  { name: "Bond", score: 45 },
  { name: "Zelda", score: 50 },
];

// For sorting objects we need to add a arrow function

// What we will do here is comparing a and b
// In this case we want b to come first and a to come second
// If b should be first we return a positive number
// If a should come first we return a negative number

// This will output the highest to lowest score
players.sort((a, b) => {
  if (a.score > b.score) {
    return -1;
  } else if (b.score > a.score) {
    return 1;
  } else {
    return 0;
  }
});

console.log(players);

// This will output the lowest to highest score
players.sort((a, b) => {
  if (a.score < b.score) {
    return -1;
  } else if (b.score < a.score) {
    return 1;
  } else {
    return 0;
  }
});

console.log(players);
