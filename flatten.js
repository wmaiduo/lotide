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

const flatten = function(input) {
  let result = [];
  for (let elements of input) {
    if (Array.isArray(elements)) {
      for (let data of elements) {
        result.push(data);
      }
    } else {
      result.push(elements);
    }
  }
  return result;
}

let a = [1,2,[3,4],5];
console.log(flatten(a));