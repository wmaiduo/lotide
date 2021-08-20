const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

const results1 = map(words, word => word[0]);
console.log(results1);

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

assertArraysEqual(map(['ab','cd'], word => word[0]),['a','c']);