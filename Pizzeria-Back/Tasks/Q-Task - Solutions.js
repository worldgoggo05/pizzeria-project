// Q-TASK:

// Write a function that takes 2 parameters - first is object, second is string
// Return true if the string parameter exists as a property in the object, false otherwise
// EXAMPLE:
// hasProperty({name: "BMW", model: "M3"}, "model") returns true
// hasProperty({name: "BMW", model: "M3"}, "year") returns false

// This function takes an object and string as parameters
// Uses the 'in' operator to check if the string exists as a property in the object
// Returns true if property exists, false if it doesn't

const hasProperty = (obj, str) => str in obj;

console.log(hasProperty({name: "BMW", model: "M3"}, "year"))
console.log(hasProperty({name: "BMW", model: "M3"}, "model"))