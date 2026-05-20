// Task: Consider an array/list of sheep where some sheep may be missing from their place. 
// We need a function that counts the number of sheep present in the array (true means present)

// parameter: elements in array will only be booleans, true or false, or undefined/null.
// Return as a number.
// Example: [true, false, true, true] = 3
// Psuedo code: use a loop with a conditional that adds onto a number count.

// my solution:

function countSheeps(sheep) {
  let numberSheep = 0
  sheep.forEach((x)=> { if (x === true){numberSheep += 1}});
  return numberSheep;
}