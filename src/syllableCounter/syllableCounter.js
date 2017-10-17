module.exports = (word) => {
  let w = word;
  if (w.length <= 3) return 1;
  w = w.replace(/(?:[^laeiouy]es|ed|[^laeiouy]e)$/, '');
  w = w.replace(/^y/, '');
  w = w.match(/[aeiouy]{1,2}/g);
  return w.length;
};
