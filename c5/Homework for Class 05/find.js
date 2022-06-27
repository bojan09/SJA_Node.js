// The find method, returns the value of the first item of an array, that passes a certain test

const scores = [10, 5, 0, 40, 60, 10, 20, 70, 100];

const firstHighScore = scores.find((score) => {
  // it's stopping when it first finds a value that passes this condition
  return score > 50;
});

// Returns the first highScore Number, which in this case is 60
console.log("The first highest score in the array is: " + firstHighScore);
