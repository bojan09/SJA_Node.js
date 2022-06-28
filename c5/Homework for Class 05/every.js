// The Array every() executes a given function on every item in a array and returns true only if the callback function returns a truthy value for all the items inside the Array. If a falsy value is found it will return false.

// Example 1
const numbers = [1, 2, 3, 4, 5];

// Checking to see if all the numbers are positive
const result = numbers.every(isPositive);

function isPositive(item) {
  return item > 0;
}

console.log(result);

// Example 2

// An Array of Objects
// Testing to see if all of the objects inside the Array have the name property
const persons = [
  {
    name: "Jimmy",
  },
  {
    name: "Sherlock",
  },
  {
    name: "Frank",
  },
  {
    lastname: "MarcoPolo",
  },
];

const resultPersons = persons.every((person) => {
  person.name === !undefined;
});

console.log(resultPersons);
