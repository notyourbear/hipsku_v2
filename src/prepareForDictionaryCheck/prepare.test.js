const expect = require('chai').expect;
const prepare = require('./prepare.js');

// eslint-disable-next-line no-undef
describe('prepareForDictionaryCheck', () => {
  // eslint-disable-next-line no-undef
  it('should return a lowercase version of the word without punctuation', () => {
    // eslint-disable-next-line no-unused-expressions
    expect(prepare('Far')).to.equal('far');
    expect(prepare('Far.')).to.equal('far');
    expect(prepare('far')).to.equal('far');
  });
});
