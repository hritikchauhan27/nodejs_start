const express = require('express');
const router = express.Router();

const subController = require('../controllers/subController');

router.post('/subtract', (req, res) => {
  const numbers = req.body.numbers;
  const sub = subController.sub(numbers);
  res.send(`subtract is ${sub}`);
});

module.exports = router;