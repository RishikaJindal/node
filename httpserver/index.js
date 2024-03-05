const http =require('http');
const server=http.createServer((req,res)=>{
    console.log(req.url);
    if(req.url=="/"){
        console.log(req.url);
    res.end("hello from the home side");}
    else if(req.url=="/about"){
        res.end('hello from about side');
    }
    else if(req.url=="/contact"){
        res.end('hello from contact side');
    }
    else{
        res.writeHead(404,{"Content-type":"text/html"});
        res.end("<h1>404 error pages,page not found </h1>");
    }

});
server.listen(8000,()=>{
    console.log("listening to the port no 8000");
});