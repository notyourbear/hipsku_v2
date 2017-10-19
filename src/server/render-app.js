var config = require('./config');

const renderApp = (array) => {
  const haiku = array.reduce((agg, item) => {
        return agg + `<div>${item}</div>`
      }, '');

  return (`
    <!doctype html>
    <html>
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/7.0.0/normalize.min.css">
        <link rel="stylesheet" href="${config.STATIC_PATH}/style.css">
        <title>Hipsku</title>
      </head>
      <body>
        <div class="container">
          ${haiku}
        </div>
      </body>
    </html>`);
}


module.exports = renderApp;
