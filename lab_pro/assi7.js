var http = require("http");

http.createServer((req,res)=>{
res.writeHead(200,{'context-type':'text/html'})
res.write('<h1 style="background-color:green">file upload program</h1>')
res.write("<input type='file'>")
res.write('<button type="submit">submit</button>')
res.end();
}).listen(8001);
console.log("your program run in port 8001   "+"http://localhost:8001");