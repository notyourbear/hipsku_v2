const _ = require('underscore');
const markovGenerator = require('../markovGenerator/markovGenerator.js');
const syllableCounter = require('../syllableCounter/syllableCounter.js');
const dictionary = require('../haiku/dictionary.js');

module.exports = (input, maxSize) => {
  let lib =  markovGenerator(input);
  let options = Object.keys(lib).filter((word) => !dictionary.blacklist.hasOwnProperty(word));
  let sentence = [];
  let size = 0;
  let word = _.sample(options);
  let newInput = input;

  while (size < maxSize) {
    let wordLen = dictionary.problematic.hasOwnProperty(word) ?
      dictionary.problematic[word] : syllableCounter(word)
    if (wordLen + size <= maxSize) {
      sentence = sentence.concat(word);
      size = size + wordLen;
      word = _.sample(lib[word])
      newInput = _.filter(newInput.split(' '), (el) => {
        return el !== word;
      }).join(' ');
      for (key in lib) {
        _.filter(lib[key], (el) => {
          return el !== word;
        });
      }
    } else if (lib[word].length > 1) {
      lib[word] = _.filter(lib[word], (el) => {
        return el !== word;
      });
      word = _.sample(lib[word]);
    } else {
      delete lib[word];
      options = Object.keys(lib).filter((word) => !dictionary.blacklist.hasOwnProperty(word));
      word = _.sample(options);
    }
  }

  return {
    generated: sentence.join(' '),
    input: newInput
  };
}
