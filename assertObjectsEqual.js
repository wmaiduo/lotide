const assertObjectsEqual = function (object1, object2) {
  const inspect = require('util').inspect;
  for (let element in object1) {
    if (!object2.hasOwnProperty(element)) {
      console.log(`${String.fromCodePoint(0x274C)} Assertion Failed: ${inspect(object1)} !== ${inspect(object2)}`);
      return;
    } else if (Array.isArray(object1[element]) && Array.isArray(object2[element])) {
      console.log(`${String.fromCodePoint(0x274C)} Assertion Failed: ${inspect(object1)} !== ${inspect(object2)}`);
      return;
    } else if (object1[element] !== object2[element]) {
      console.log(`${String.fromCodePoint(0x274C)} Assertion Failed: ${inspect(object1)} !== ${inspect(object2)}`);
      return;
    }
  }
  for (let element in object2) {
    if (!object1.hasOwnProperty(element)) {
      console.log(`${String.fromCodePoint(0x274C)} Assertion Failed: ${inspect(object1)} !== ${inspect(object2)}`);
      return;
    }
  }
  console.log(`${String.fromCodePoint(0x2705)} Assertion Passed : ${inspect(object1)} === ${inspect(object2)}`);
  return;
};

assertObjectsEqual({a:1,b:2,c:3},{a:2,b:3,c:4});