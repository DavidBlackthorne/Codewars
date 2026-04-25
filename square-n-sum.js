// Complete the square sum function so that it squares each number passed into it and then sums the results together.
// For example for [1, 2, 2], it should return 9.


// my solution:

function squareSum(numbers){
  let squaredNums = numbers.map(n => n **2)
  return squaredNums.reduce((a, c) => a + c, 0);
}