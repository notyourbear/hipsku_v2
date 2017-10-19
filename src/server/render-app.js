var config = require('./config');

const renderApp = (array) => {
  const haiku = array.reduce((agg, item) => {
        return agg + `<div>${item}</div>`
      }, '');

  return (`
    <!doctype html>
    <html>
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link href="https://fonts.googleapis.com/css?family=Fredericka+the+Great|Love+Ya+Like+A+Sister" rel="stylesheet">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/7.0.0/normalize.min.css">
        <link rel="stylesheet" href="${config.STATIC_PATH}/style.css">
        <title>Hipsku</title>
      </head>
      <body>
        <div class="overlay"></div>
        <div class="container">
          ${haiku}
        </div>
      </body>
    </html>`);
}


module.exports = renderApp;
