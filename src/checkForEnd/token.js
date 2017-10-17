module.exports = (sentence, token = '.') =>
  sentence[sentence.length - 1] === token;
