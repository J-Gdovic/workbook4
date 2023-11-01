"use strict";

let myScores = [92, 98, 84, 76, 89, 99, 100];
let yourScores = [82, 98, 94, 88, 92, 100, 100];

function getAverage(scores) {
  let total = 0;

  for (let index = 0; index < scores.length; index++) {
    const score = scores[index];
    //total = total + score; or:
    total += score;
  }
  
  let average = total / scores.length;
  return average;
}
let myAverage = getAverage(myScores);
console.log(myAverage.toFixed(2));
let yourAverage = getAverage(yourScores);
console.log(yourAverage.toFixed(2));
