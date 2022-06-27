// The splice() Array method changes an Array by removing or replacing an existing elements from it.
// It get's the starting index, count's how many items we want to remove.
// And it can also get optionaly new elements which can be placed inside of the array.
// It will change the array on which is called upon and it will return an array with the removed items

const numbers = [1, 2, 3, 4, 5];

// removing the last 3 elements from the array
// start from index 2 and remove the next 3 items
numbers.splice(2, 3);
console.log(numbers);

// Adding a number
// start from the index of 2, and add the following values from the index of 3 onwards
numbers.splice(2, 3, 23, 24, 25, 26, 27);
console.log(numbers);
