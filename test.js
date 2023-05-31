"use strict";

// let input = 2001;
// let counter = 0;

// function centuryNum(input) {
//   for (let i = input; i > 1; i -= 100) counter += 1;
//   let remainder = input % 100;
//   if (remainder == 1) {
//     console.log(`You are in the ${counter + 1}th century`);
//   } else {
//     console.log(`You are in the ${counter}th century`);
//   }
// }

// centuryNum(input);

// #1 Add numbers in array at even indices
// #2 subtract numbers in array at odd indices

let arr = [3, 5, 7, 10, 2, -1]; //Expected output >> -2

let sum = 0;
for (let i = 0; i < arr.length; i++) {
  if (i % 2 === 0) {
    sum += arr[i];
  } else if (i % 2 != 0) {
    sum -= arr[i];
  }
}

console.log(sum);
