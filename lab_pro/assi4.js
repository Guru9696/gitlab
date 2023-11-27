var http = require('http');
var uc = require('upper-case');
http.createServer((req,res)=>{
//res.writeHead({'context-type':'text/html'});
res.write(uc.upperCase("hello world !!!"));
res.end();

}).listen(8001);
console.log("your program running in http server or 8001");