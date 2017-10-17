const fetch = require('isomorphic-fetch');
const generator = require('../generator/generator.js');

var maker = function() {
  return fetch('http://hipsterjesus.com/api?html=false&type=hipster-centric&paras=10')
  .then((res) => res.json())
  .then((json) => {
    let sentence = json.text;

    let options = [5,7,5];
    let results = [];

    options.forEach(function(num){
      const gen = generator(sentence, num);
      results.push(gen.generated)
      sentence = gen.input
    });

    return results;
  });
}


module.exports = maker;
