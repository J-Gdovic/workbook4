"use strict"
//isn't used that often


let count = 1; //this variable is what the count starts with
let condition = true;
do{
console.log(`${count} bottles of birch beer on the wall`)
// count = count + 1; or use the short version:
count++;  // increment to make it possible for condition to change or be false
condition = count <10;
} while(condition);