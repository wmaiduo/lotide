const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`${String.fromCodePoint(0x2705)} Assertion Passed : ${actual} === ${expected}`);
  } else console.log(`${String.fromCodePoint(0x274C)} Assertion Failed: ${actual} !== ${expected}`);
};

const countLetters = function (input) {
  let result = {};
  let noSpaceInput = input.split(" ").join("");
  console.log(noSpaceInput);
  for (let char of noSpaceInput) {
    if (result.hasOwnProperty(char)) {
      result[char] += 1;
    } else {
      result[char] = 1;
    }
  }
  return result;
}

console.log(countLetters("lighthouse in the house"));