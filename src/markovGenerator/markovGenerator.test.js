const expect = require('chai').expect;
const markovGenerator = require('./markovGenerator.js');

// eslint-disable-next-line no-undef
describe('markovGenerator', () => {
  // eslint-disable-next-line no-undef
  it('should return a markov chain object with a length of 2', () => {
    const line = 'my name is my password.';
    const expected = {
      my: ['name', 'password.'],
      name: ['is'],
      is: ['my'],
    };
    expect(markovGenerator(line)).to.deep.equal(expected);
  });

  // eslint-disable-next-line no-undef
  it('should return a markov chain object with a length of 3', () => {
    const line = 'my name is my password.';
    const expected = {
      my: ['name is'],
      name: ['is my'],
      is: ['my password.'],
    };
    expect(markovGenerator(line, 3)).to.deep.equal(expected);
  });

  // eslint-disable-next-line no-undef
  it('should return a markov chain object with a length of 4', () => {
    const line = 'my name is my password.';
    const expected = {
      my: ['name is my'],
      name: ['is my password.'],
    };
    expect(markovGenerator(line, 4)).to.deep.equal(expected);
  });
});
