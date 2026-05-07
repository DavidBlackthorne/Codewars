// Challenge: Given an array of integers your solution should find the smallest integer.

// parameters: all elements in array will be integers.
// return as an integer value
// [34, 15, 18] = 15
// pseudo code: take all the numbers out of the array and feed into the math.min method. 

// my solution: 

function findSmallestInt(arr) {
  return Math.min(...arr);
}

