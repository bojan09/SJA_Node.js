// The reduce method, can return any value based on the value in the Array that we iterate over
const scores = [10, 20, 60, 40, 70, 90, 30];

// acc = accumulator
// curr = current score
const results = scores.reduce((acc, curr) => {
  if (curr > 50) {
    acc++;
  }
  return acc;
  //   The initial value of the acc is 0
}, 0);

console.log("The amount of numbers above 50 in the array is: " + results);
// Output will be how many values are over 50, there are 3 value in the array that are over 50

// Second example
const moreScores = [
  { player: "Bojan", score: 50 },
  { player: "Jovan", score: 30 },
  { player: "Trajko", score: 70 },
  { player: "Mitre", score: 60 },
  { player: "Bojan", score: 90 },
];

// Using the reduce method to add the total score of Mario

const bojanTotalScore = moreScores.reduce((acc, curr) => {
  // If the current player is Bojan, then accumulate the score (meaning if the player has multiple scores, then add them up (accumulate))
  if (curr.player === "Bojan") {
    acc += curr.score;
  }
  //   return the acculumator
  return acc;

  // Setting the accumulator to have a initial value of 0
}, 0);

console.log("The total value of the player Bojan is: " + bojanTotalScore);
