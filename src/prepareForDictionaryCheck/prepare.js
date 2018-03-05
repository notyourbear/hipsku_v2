module.exports = (word) => {
  const w = word.toLowerCase();
  const punctuation = ['.', ',', '!', '?', ';', ':'];

  return punctuation.includes(w[w.length - 1]) ? w.slice(0, -1) : w;
};
