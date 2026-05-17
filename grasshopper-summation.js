// Task: Write a program that finds the summation of every number from 1 to num (both inclusive).

// parameters: The number will always be a positive integer greater than 0.
// return the result.
// example: 2 => 3, 8=>36
// pseudo code: make a loop that goes up to the argument. 

// My solution:

var summation = function (num) {
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    sum += i; 
  }
  return sum;
}