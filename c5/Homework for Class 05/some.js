// The Array some() method executes a given function of the element in the array and returns true if the callback function returns a truthy value for at least 1 value from from Array. If all the values in the Array have a falsy value than the return will be false.

// Example 1
const numbers = [1, 2, 3, 4, 5];

const result = numbers.some(greaterThanFour);

// Checking to see if at least 1 element if greater than 4
function greaterThanFour(item) {
  return item > 4;
}

console.log(result); // true

// Example 2
// Checking to see if some of the persons bellow is an adult

const persons = [
  {
    name: "Jane",
    age: 19,
  },
  {
    name: "Julia",
    age: 23,
  },
  {
    name: "Mila",
    age: 13,
  },
];

const isAnAdult = persons.some(isAdult);

function isAdult(person) {
  return person.age >= 18;
}

console.log(isAnAdult); // true
