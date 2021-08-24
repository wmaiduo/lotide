const assertArraysEqual = function (first, second) {
  if (first.length !== second.length) {
    console.log(`${String.fromCodePoint(0x274C)} Assertion Failed: ${first} !== ${second}`);
    return;
  } else for (let i = 0; i < first.length; i++) {
    if (first[i] !== second[i]) {
      console.log(`${String.fromCodePoint(0x274C)} Assertion Failed: ${first} !== ${second}`);
      return;
    }
  }
  console.log(`${String.fromCodePoint(0x2705)} Assertion Passed : ${first} === ${second}`);
  return;
}

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

const letterPositions = function(sentence) {
  const results = {};
  let position = 0;
  for (let char of sentence) {
    if (char === ' '){
    } else if (results.hasOwnProperty(char)) {
      results[char].push(position);
    } else {
      results[char] = [position];
    }
    position += 1;
  }
  return results;
};
module.exports = letterPositions;

/* assertArraysEqual(letterPositions("hello").e, [1]); */