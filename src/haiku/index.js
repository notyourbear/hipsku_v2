const fetch = require('isomorphic-fetch');
const generator = require('../generator/generator.js');
const fallback = require('./fallback.js');

const options = [5, 7, 5];

const maker = () => (
  fetch('http://hipsterjesus.com/api?html=false&type=hipster-centric&paras=10')
    .then(res => res.ok ? res.json() : fallback)
    .then((json) => {
      let sentence = json.text;
      const results = [];

      options.forEach((num) => {
        const gen = generator(sentence, num);
        results.push(gen.generated);
        sentence = gen.input;
        if (sentence.length === 0) {
          sentence = fallback;
        }
      });

      return results;
    }).catch(() => {
      let sentence = fallback;
      const results = [];

      options.forEach((num) => {
        const gen = generator(sentence, num);
        results.push(gen.generated);
        sentence = gen.input;
      });

      return results;
    }));


module.exports = maker;
