// The Array indexOf() method returns the first index of a given element which can be found inside a certain Array.

const names = ["Rambo", "Bond", "Bruce", "Rocky"];

const index = names.indexOf("Bruce");
const index2 = names.indexOf("Jimmy");

console.log(index); // output 2
console.log(index2); // output -1, becouse there isn't a name like that in the Array

// If the name we have typed is inside the Array
if (index > -1) {
  console.log("The index of the name you typed is: " + index);
} else {
  console.log("There is no such name in the Array");
}

// Example 2
// Multiple names in a single Array

// Returning the last index of Rambo
const names2 = ["Rambo", "Bond", "Rambo", "Bruce", "Rambo", "Bruce", "Rocky"];
index3 = names2.lastIndexOf("Rambo"); // output 4a

console.log(index3);
