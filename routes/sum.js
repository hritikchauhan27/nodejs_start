const express = require('express');

//creates a new router object using the Router() method of the express 
//module and assigns it to the router
const router = express.Router(); //creating a new router 

const sumController = require('../controllers/sumController');

//to define the router
router.post('/sum', (req, res) => {
  const numbers = req.body.numbers;
  const ans = sumController.sum(numbers);
  res.send(`sum is ${ans}`);
});

//agar btana hai ki main file mai new file bnayi hai, then we need to export
module.exports = router; //allows it to be used in other parts of the application