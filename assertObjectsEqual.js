const eqObjects = function (object1, object2) {
  for (let element in object1) {
    if (!object2.hasOwnProperty(element)) {
      return false;
    } else if (Array.isArray(object1[element]) && Array.isArray(object2[element])) {
      return false;
    } else if (object1[element] !== object2[element]) {
      return false;
    }
  }
  for (let element in object2) {
    if (!object1.hasOwnProperty(element)) {
      return false;
    }
  }
  return true;
};