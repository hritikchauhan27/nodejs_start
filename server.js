const express = require('express');
const app = express();
let dotenv = require('dotenv').config()
const port = process.env.PORT;

app.use(express.json());

const sumRouter = require('./routes/sum');
const subtractRouter = require('./routes/subtract');
const multiplyRouter = require('./routes/multiply');

//for registering the router
app.use(sumRouter);
app.use(subtractRouter);
app.use(multiplyRouter);



app.listen(port, () => {
  console.log(`Server running at ${port}`);
});