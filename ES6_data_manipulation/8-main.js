import cleanSet from "./8-clean_set.js";

// Test case 1: values that start with 'bon'
console.log(cleanSet(new Set(['bonjovi', 'bonaparte', 'bonappetit', 'banana']), 'bon'));

// Test case 2: empty startString, should return all values without modification
console.log(cleanSet(new Set(['bonjovi', 'bonaparte', 'bonappetit', 'banana']), ''));
