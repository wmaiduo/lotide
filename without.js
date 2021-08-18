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

const without = function(source, itemsToRemove) {
  let result = [];
  let i = 0;
  for (let sourceItem of source) {
    let include = true;
    for (let removalItem of itemsToRemove) {
      if (sourceItem === removalItem) {
        include = false;
        break;
      }
    }
    if (include) result.push(sourceItem);
  }
  return result;
}

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);