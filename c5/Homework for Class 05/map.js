// The map() array method executes a function from a given array, and returns a new array
const numbers = [1, 2, 3, 4, 5];

const doubleNumbers = numbers.map(double);

const multiplyNumbers = numbers.map(multiply);

//New funtion, here this function is used to double the items values
function double(value) {
  return value * 2;
}

console.log(numbers);
// Returns a new array with double the amount of each element value
console.log(doubleNumbers);

// Returns a multiplication with each index value from the array
function multiply(value, index) {
  return value * index;
}

console.log(multiplyNumbers);

// Using map to count the values of the fruits bellow.
// What's the total worth of each fruit, for the given amount
const fruits = [
  {
    name: "banana",
    price: 120,
    amount: 5,
  },

  {
    name: "citrus",
    price: 99,
    amount: 9,
  },

  {
    name: "kiwi",
    price: 180,
    amount: 6,
  },
];

// Calculating the total value of eac fruit
const totalFruitsValue = fruits.map((fruit) => {
  return fruit.price * fruit.amount;
});
console.log(
  "The total value of Banana's is: " + totalFruitsValue[0],
  ",",
  "The total value of Citrus's is: " + totalFruitsValue[1],
  ",",
  "The total value of Kiwi's is: " + totalFruitsValue[2]
);
