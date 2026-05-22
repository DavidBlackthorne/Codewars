// task: create a function that does four basic mathematical operations. //
// Parameters:  function should take three arguments - operation(string/char), value1(number), value2(number)
// Return: result of numbers after applying the chosen operation.
// Examples: ('+', 4, 7) --> 11 // ('-', 15, 18) --> -3 //
// Pseudo code: use conditionals to convert the characters to operators.

// my solution

function basicOp(operation, value1, value2)
{
  if (operation === '+') {
    return value1 + value2;
  } else if (operation === '-') {
    return value1 - value2;
  } else if (operation === '*') {
    return value1 * value2;
  } else {
    return value1 / value2;
  }
};
