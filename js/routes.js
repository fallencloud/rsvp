'use strict';

const express = require('express');
const router = express.Router();

// /GET /register
router.get('/', (req, res, next) => {
  res.json({response: "You sent me a GET request"});
});

// /POST /register
router.post("/", (req, res, next) => {
  res.json({
    response: "You sent me a POST request",
    body: req.body
  });
});

// /GET /login
router.get('/login', (req, res, next) => {
  res.json({response: "You sent me a GET request"});
});

// /POST /login
router.post("/login", (req, res, next) => {
  res.json({
    response: "You sent me a POST request",
    body: req.body
  });
});

// /GET /events
router.get('/events', (req, res, next) => {
  res.json({response: "You sent me a GET request"});
});

module.exports = router;