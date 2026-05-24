// Task: Write a function to convert a name into initials. 
// Parameters: arguments will strictly be two words with one space in between them.
// Examples: "Sam Harris" = "S.H"
// Return: output should be two capital letters with a dot separating them.
// Pseudo code: split the string into 2 separate elements of array. Return new string with first char of each element with a '.'
// My solution:

function abbrevName(name){
  const names = name.split(' ');
  return (names[0].charAt(0).toUpperCase()+'.'+names[1].charAt(0).toUpperCase());
}

