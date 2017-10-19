const compression = require('compression');
const express = require('express');

const config = require('./config');
const renderApp = require('./render-app');
const maker = require('../haiku/index');

const app = express();

app.use(compression());
app.use(config.STATIC_PATH, express.static('public'));

app.get('/', (req, res) => {
  maker().then(sentenceArray => (
    res.send(renderApp(sentenceArray))
  ));
});

app.listen(config.WEB_PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server running on port ${config.WEB_PORT}.`);
});
