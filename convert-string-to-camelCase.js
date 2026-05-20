// task: Complete the method/function so that it converts dash/underscore delimited words into camel casing.
// parameters: inputs will be strings separated by dash or underscore.
// return: as string with camelcase
// Example: "hi_to-the-world" = "hiToTheWorld";
// PseudoCode: use string method to replace the dashes and underscores. combine with a regex.

// My solution:

function toCamelCase(str){
  return str.replace(/[-_](.)/g, (_, character) => character.toUpperCase());
}
