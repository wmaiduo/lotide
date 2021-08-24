const eqArrays = function (first, second) {
  if (first.length !== second.length) {
    return false;
  } else for (let i = 0; i < first.length; i++) {
    if (first[i] !== second[i]) {
      return false;
    }
  }
  return true;
}

const eqObjects = function (object1, object2) {
  for (let element in object1) {
    if (!object2.hasOwnProperty(element)) {
      console.log(`false`);
      return;
    } else if (Array.isArray(object1[element]) && Array.isArray(object2[element])) {
      if (!eqArrays()) console.log('false');
      return;
    } else if (object1[element] !== object2[element]) {
      console.log(`false`);
      return;
    }
  }
  for (let element in object2) {
    if (!object1.hasOwnProperty(element)) {
      console.log(`false`);
      return;
    }
  }
  console.log('true');
  return;
};

module.exports = eqObjects;

/* const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
eqObjects(ab, ba); // => true

const abc = { a: "1", b: "2", c: "3" };
eqObjects(ab, abc); // => false */