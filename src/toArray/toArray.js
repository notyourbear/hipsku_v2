// eslint-disable-next-line no-confusing-arrow
module.exports = input =>
  (typeof input === 'string') ? input.split(' ') : input.slice();
