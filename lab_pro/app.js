var http = require('http'); 

var server = http.createServer(function (req, res) {  
res.write("<h1>create server successfully</h1>");
res.end();

});

server.listen(50); 

console.log('Node.js web server at port 50 is running..');