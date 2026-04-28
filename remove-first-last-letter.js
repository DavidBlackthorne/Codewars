// write a function that removes the first and last characters of a string. You're given one parameter, the original string.
// Your function should handle strings of any length ≥ 2 characters. For strings with exactly 2 characters, return an empty string.


// My solution:

function removeChar(str){
  if(str.length < 3){
    return ''
  }else{
    return str.slice(1,-1)
  }
};
