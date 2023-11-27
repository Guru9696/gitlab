// var http = require('http');
// var fs = require('fs');
// http.createServer(function (req, res) {
//   fs.readFile('assi16.txt', function(err, data) {
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.write(data);
//     return res.end();
//   });
// }).listen(8002);
// console.log('Node.js web server at port 8002 is running..')

var http = require("http")
var fs = require("fs")
var data = fs.readFileSync('assi16.txt')
http.createServer((req,res)=>{
  res.write(data);
  res.end()
}).listen(8002);
console.log('http://localhost:8002');
