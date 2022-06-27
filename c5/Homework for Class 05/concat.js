// The Array concat() method allow for merging two or more arrays into one new array which will be returned

const a = ["Jan", "Feb", "March", "April", "May", "June"];
const b = ["July", "August", "September", "October", "November", "December"];
// Adding a new array
const c = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

// It will just add it onto the already existing array
const d = a.concat(b, c);

// But it will also keep the original arrays

// console.log(a);
// console.log(b);
// console.log(c);
console.log(d);
