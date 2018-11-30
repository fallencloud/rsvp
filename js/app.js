const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;

// /GET /
app.use('/', (req, res, next) => {
  res.send('register');
  next();
});

// /GET /register

// /POST /register

// /GET /login
// /POST /login

// /GET /events

app.listen(port, (err) => {
  if (err) {
    console.error(err.message);
  }
  console.info(`Now listening on port ${port}`);
});
