// The Array findIndex() method is very simmilar to the find(), only difference is the findIndex() will find the method and return it's index

const numbers = [1, 2, 3, 4, 5];

const result = numbers.findIndex(findThree);

function findThree(value) {
  return value === 3;
}

console.log(result);
