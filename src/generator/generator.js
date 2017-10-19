const _ = require('underscore');
const markovGenerator = require('../markovGenerator/markovGenerator.js');
const syllableCounter = require('../syllableCounter/syllableCounter.js');
const dictionary = require('../haiku/dictionary.js');

module.exports = (input, maxSize) => {
  const lib = markovGenerator(input);
  let options =
    Object.keys(lib)
      .filter(word => !Object.hasOwnProperty.call(dictionary.blacklist, word));
  let sentence = [];
  let size = 0;
  let word = _.sample(options);
  let newInput = input;

  while (size < maxSize) {
    const wordLen = Object.hasOwnProperty.call(dictionary.problematic, word) ?
      dictionary.problematic[word] : syllableCounter(word);
    if (wordLen + size <= maxSize) {
      sentence = sentence.concat(word);
      size += wordLen;
      word = _.sample(lib[word]);
      newInput = newInput.split(' ').filter(el => el !== word).join(' ');
      Object.keys(lib).forEach(key => lib[key].filter(el => el !== word));
    } else if (lib[word].length > 1) {
      lib[word] = lib[word].filter(el => el !== word);
      word = _.sample(lib[word]);
    } else {
      delete lib[word];
      options =
        Object.keys(lib)
          .filter(el => !Object.hasOwnProperty.call(dictionary.blacklist, el));
      word = _.sample(options);
    }
  }

  return {
    generated: sentence.join(' '),
    input: newInput,
  };
};
