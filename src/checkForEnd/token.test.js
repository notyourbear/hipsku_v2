const expect = require('chai').expect;
const checkForEnd = require('./token.js');

// eslint-disable-next-line no-undef
describe('checkForEnd', () => {
  // eslint-disable-next-line no-undef
  it('should return that sentence has reached an end', () => {
    const line = 'my name is my password.';
    // eslint-disable-next-line no-unused-expressions
    expect(checkForEnd(line)).to.be.true;
  });

  // eslint-disable-next-line no-undef
  it('should return that sentence has not reached an end', () => {
    const line = 'my name is my password';
    // eslint-disable-next-line no-unused-expressions
    expect(checkForEnd(line)).to.not.be.true;
  });
});
