// import express from 'express';
const express = require('express')

const app = express();
const port = 3002;
//app.use(express.json);

function add(a, b){
    return a+b;
}

function Subtract(a, b){
    return a-b;
}

function multiply(a, b){
    return a*b;
}

function divide(a, b){
    return a/b;
}

function power(a, b){
    return Math.pow(a, b);
    
}

function average(a,b){
    return a+b/2;
}


app.get('/cal/:num1/:num2/:type',(req,res) => {
    //let params = req.query;
    //console.log(params)
    let responseAns;
    const num1 =parseInt(req.params.num1);
    const num2 =parseInt(req.params.num2);

    if(req.params.type === "add"){
        responseAns = add(num1, num2);
    }

    else if(req.params.type === "Subtract"){
        responseAns = Subtract(num1, num2);
     }

    else if(req.params.type === "multiply"){
        responseAns = multiply(num1, num2);
      }

    else if(req.params.type === "divide"){
        responseAns = divide(num1, num2);
    }
                
    else if(req.params.type === "power"){
            responseAns= power(num1, num2);
        } 
                    
    else if(req.params.type === "average"){
        responseAns = average(num1, num2);
     }     
    
    res.send(`${req.params.type} of ${num1} and ${num2} is ${responseAns}`)
});

app.listen(port,()=>{
    console.log(`Server is listening on port ${port}`)
})