"use strict";

// function getAverage() {
//   for (let index = 0; index <= 7; index++) {
//     console.log(myScores[index]);
//   }
// }
// getAverage();

let myScores = [92, 98, 84, 76, 89, 99, 100];
let yourScores = [82, 98, 94, 88, 92, 100, 100];

function getAverage(scores, name) {
  let total = 0;
  for (let index = 0; index < scores.length; index++) {
    const score = scores[index];
    //total = total + score; or:
    total += score;
    return total / 7;
  }
  

  console.log(total / 7);
}
getAverage(myScores);
getAverage(yourScores);
