const expect = require('chai').expect;
const syllableCounter = require('./syllableCounter.js');

// eslint-disable-next-line no-undef
describe('syllableCounter', () => {
  // eslint-disable-next-line no-undef
  it('should return the correct syllable count for words', () => {
    // eslint-disable-next-line no-unused-expressions
    expect(syllableCounter('far')).to.equal(1);
    expect(syllableCounter('healthy')).to.equal(2);
    expect(syllableCounter('vagrancy')).to.equal(3);
    expect(syllableCounter('sacrifical')).to.equal(4);
  });
});
