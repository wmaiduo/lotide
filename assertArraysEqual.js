const eqArrays = function (first, second) {
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

console.log(eqArrays([2,3],[2,3]));