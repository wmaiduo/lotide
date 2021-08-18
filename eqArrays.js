const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`${String.fromCodePoint(0x2705)} Assertion Passed : ${actual} === ${expected}`);
  } else console.log(`${String.fromCodePoint(0x274C)} Assertion Failed: actual !== ${expected}`);
};

const eqArrays = function(first, second) {
  if (first.length !== second.length) {
    return false;
  } else for (let i = 0; i < first.length; i++) {
    if (first[i] !== second [i]) {
      return false;
    }
  }
  return true;
}

assertEqual(eqArrays([1, 2, 3], [1, 2]), true); // => should PASS