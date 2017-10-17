var config = require('./config');

const renderApp = (array) => {
  const haiku = array.reduce((agg, item) => {
        return agg + `<div>${item}</div>`
      }, '');

  return (`
    <!doctype html>
    <html>
      <head>
        <title>Hipsku</title>
      </head>
      <body>
        ${haiku}
      </body>
    </html>`);
}


module.exports = renderApp;
