// task: Complete the solution so that it splits the string into strings of two characters in a list/array 
// (depending on the language you use). If the string contains an odd number of characters then 
// it should replace the missing second character of the final pair with an underscore ('_').

// parameters: arguments will be strictly 1 long string. 
// return as array of 2 character strings.
// example: 'abc' =>  ['ab', 'c_']
// Pseudo code: use a regex

function solution(str) {
  return (str + "_").match(/.{2}/g) || [];
}