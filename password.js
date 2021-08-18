const password = process.argv[2];

const obfuscate = function (input) {
  let result = '';
  for (let char of input) {
    if (char === 'a') {
      result = result.concat('4');
    } else if (char === 'e') {
      result = result.concat('3');
    } else if (char === 'o') {
      result = result.concat('0');
    } else if (char === 'l') {
      result.concat('1');
    } else result = result.concat(char);
  }
  return result;
}

console.log(obfuscate(password));