const assertEqual = require('../assertEqual');
const tail = require('../tail');

const a = [1,2];
const result = tail([0,1,2]);
assertEqual(result[0],a[0]);
assertEqual(result[1],a[1]);

// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!
