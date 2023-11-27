// var http = require('http'); 

// var server = http.createServer(function (req, res) {  

// res.write("<h1 style='background-color:green'>create server successfully</h1>");
// res.end();

// });

// server.listen(8002); 
// console.log('Node.js web server at port 8002 is running..')

var http = require("http");
var server = http.createServer((req,res)=>{
 res.writeHead(200,{"context-type":"text/html"});
 res.write("<h1 style='background:green'>Server created sucessfully</h1>");
 res.end();
});
server.listen(8002);
console.log('http://localhost:8002/');


