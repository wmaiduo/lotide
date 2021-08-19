const middle = function (array) {
  if (array.length <= 2) {
    return [];
  } else if (array.length % 2 === 0) {
    return [array[array.length / 2 - 1], array[array.length / 2]];
  } else if (array.length % 2 === 1) {
    return [array[Math.floor(array.length/2)]];
  }
};

console.log(middle([1,2,3,5,6]));