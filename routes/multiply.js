const express = require('express');
const router = express.Router();

const mulController = require('../controllers/mulController');

router.post('/multiply', (req, res) => {
  const numbers = req.body.numbers;
  const mul = mulController.mul(numbers);
  res.send(`multiply is ${mul}`);
});

module.exports = router;