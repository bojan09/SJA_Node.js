// You would use the array filter method, when you need to retrive some data from a database, forexample some scores

// And let's say you need to filter out the items, in a certain way for a certain condition

// In this case let's eliminate all the scores that are under 20, and only output the ones above
const scores = [10, 30, 5, 34, 23, 99, 2, 9, 21];

// The filter method iterates an Array, and checks each item in that array

// This callback function fires a filter array and checks each item individualy. If any of the checked items pass they'll output. If they don't then they'll be removed.
const filteredScores = scores.filter((score) => {
  return score >= 20;
});

console.log(filteredScores);

// user is = to an array of objects
// each object has a name property, and a premium property with a boolean value
// It describes if the user is a premium user or not
// Using the filter method to see which user is a premium user or not

const users = [
  { name: "John", premium: false },
  { name: "Jane", premium: true },
  { name: "Jimmy", premium: false },
  { name: "Frank", premium: true },
  { name: "Bruno", premium: false },
  { name: "Anna", premium: true },
];

// storing the above in a new variable to filter it
const premiumUsers = users.filter((user) => {
  // return the premium property
  return user.premium;
});

console.log(premiumUsers);
