const expect = require('chai').expect;
const toArray = require('./toArray.js');

// eslint-disable-next-line no-undef
describe('toArray', () => {
  // eslint-disable-next-line no-undef
  it('should return an array', () => {
    const string = 'My name is my password';
    const array = string.split(' ');

    expect(toArray(string)).to.deep.equal(array);
    expect(toArray(array)).to.deep.equal(array);
  });
});
