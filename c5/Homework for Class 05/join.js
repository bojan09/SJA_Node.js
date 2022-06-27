// The join () Array method creates a new string from an Array by concatonating all of the elements from that Array

const countres = ["Hawai", "Bora Bora", "Malta", "Norway"];

// With the join() method you can also chose the type of seperator you want for the string values
// If we leave it without any seperator, they will be outputed concatonated together
const result = countres.join(", ");
console.log("I want to visit " + result);
