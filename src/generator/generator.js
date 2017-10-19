const _ = require('underscore');
const markovGenerator = require('../markovGenerator/markovGenerator.js');
const syllableCounter = require('../syllableCounter/syllableCounter.js');

module.exports = (input, maxSize) => {
  let lib =  markovGenerator(input);
  let options = Object.keys(lib);
  let sentence = [];
  let size = 0;
  let word = _.sample(options);
  let newInput = input;

  while (size < maxSize) {
    let wordLen = syllableCounter(word)
    if (wordLen + size <= maxSize) {
      sentence = sentence.concat(word);
      size = size + wordLen;
      word = _.sample(lib[word])
      newInput = _.filter(newInput.split(' '), function(el) {
        return el !== word;
      }).join(' ');
      for (key in lib) {
        _.filter(lib[key], function(el){
          return el !== word;
        });
      }
    } else if (lib[word].length > 1) {
      lib[word] = _.filter(lib[word], function(el){
        return el !== word;
      });
      word = _.sample(lib[word]);
    } else {
      delete lib[word];
      options = Object.keys(lib);
      word = _.sample(options);
    }
  }

  return {
    generated: sentence.join(' '),
    input: newInput
  };
}
