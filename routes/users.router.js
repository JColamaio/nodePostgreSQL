const express = require('express');
const { faker } = require('@faker-js/faker');
const router = express.Router();

// users endpoint
router.get('/users', (req, res) => {
  const { limit, offset } = req.query;
  if (limit && offset) {
    res.json({
      limit,
      offset,
    });
  } else {
    res.send('No parameters found');
  }
});

module.exports = router