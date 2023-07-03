const http = require("http"); //
// const http = require('./service');
// const service = require('./controller/sum.js'); //if i want to access another file

const host ='localhost';
const port = 80;
const server = http.createServer((req, res) => {
    if(req.url =='/'){
        res.write("Server responded");
        res.end();
    } 

}).listen(port);

