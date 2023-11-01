"use strict";

let products = [
  { product: "Gummy Worms", price: 5.79 },
  { product: "Plain M&Ms", price: 2.89 },
  { product: "Peanut M&Ms", price: 2.89 },
  { product: "Swedish Fish", price: 3.79 },
  // TODO: fill the array with 10 candies of various
  // price ranges
];

for (const candy of products) {
  if (candy.price < 4) {
    //console.log(candy.product,candy.price);
  }
}

for (const candy of products) {
  if (candy.product.indexOf("M&M") != -1) {
    //console.log(candy.product)
  }
}

for (const candy of products) {
  if (candy.product == "Swedish Fish") {
    console.log(candy);
  }
}
