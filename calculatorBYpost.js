const express = require ('express');

const app = express();
const port = 3001;
app.use(express.json());


log =(x)=>{
   return Math.log(x);
}

app.post('/',(req,res)=>{
    console.log(req.body.a);
    let ans = log(req.body.a);
    res.send(`Log of ${req.body.a} is ${ans}`)
})

app.listen(port,()=>{
    console.log(`Server is working on port ${port}`)
})