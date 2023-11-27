var http = require('http');
var url = require('url');
var fs = require('fs');

http.createServer((req,res)=>{

    var q = url.parse(req.url,true);
    var filename = "." + q.pathname;

    fs.readFile(filename,(err,data)=>{

        if(err)
        {
            res.writeHead(404,{'context-type':'text/html'});
            res.write("page not found");
            return res.end();
        
        }
        
        res.writeHead(200,{"context-type":"text/html"});
        res.write(data);
        return res.end();

    })
}).listen(8001);
console.log("your program run in port 8001");
