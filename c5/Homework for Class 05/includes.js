// Using the Array includes() method we can find if an element is included inside an Array

// Example 1
const names = ["Bojan", "Zoran", "Goran", "Nikola", "Tamara"];

// checking to see if we have the name Bojan in the Array
const checkName = names.includes("Bojan");
const checkName2 = names.includes("Lucas");

console.log(checkName); // output will be true
console.log(checkName2); // output will be false

// Example 2
const veggies = ["Cucumber", "Zucchini", "Broccoli", "Onion"];

const checkVeggies = veggies.includes("Zucchini");

if (checkVeggies) {
  console.log("There is Zucchini in the array");
} else {
  console.log("Sorry, the veggie in not found in the array");
}
