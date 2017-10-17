const toArray = require('../toArray/toArray.js');

const markovGenerator = (input, length = 2, lib = {}) => {
  const array = toArray(input);
  if (array.length < length) return lib;

  const first = array[0];
  const rest = array.slice(1, length).join(' ');

  if (Object.hasOwnProperty.call(lib, first)) {
    lib[first] = lib[first].concat(rest);
  } else {
    lib[first] = [rest];
  }

  return markovGenerator(array.slice(1), length, lib);
};

module.exports = markovGenerator;
