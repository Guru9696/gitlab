var http = require("http");
var fs = require("fs");
var data = fs.readFileSync('assi3.html');
http.createServer((req,res)=>{
    res.write(data);
    res.end();
}).listen(8002);
console.log('http://localhost:8002/');
