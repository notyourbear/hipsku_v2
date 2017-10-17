var compression = require('compression');
var express = require('express');

var config = require('./config');
var renderApp = require('./render-app');
var maker = require('../haiku/index');

const app = express();

app.use(compression());
app.use(config.STATIC_PATH, express.static(config.STATIC_PATH));

app.get('/', (req, res) => {
  maker().then(sentenceArray => {
    console.log({sentenceArray})
    res.send(renderApp(sentenceArray));
  })

});

app.listen(config.WEB_PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server running on port ${config.WEB_PORT}.`);
});
