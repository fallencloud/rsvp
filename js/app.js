'use strict';

const express = require('express');
const app = express();
const routes = require('./routes');

const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/', routes);

const port = process.env.PORT || 3000;

app.listen(port, (err) => {
  if (err) {
    console.error(err.message);
  }
  console.info(`Now listening on port ${port}`);
});
