var http=require('http');
var url=require('url');
var fs=require('fs');
const port=process.env.PORT || 8082;


http.createServer(function(req,res){
   
    fs.readFile('./index.html',null,function(err,data){
        console.log(" err check");
        if(err){
            res.writeHead(404);
            res.write("File not found");
        }
        else{
            res.write(data);
            res.end();  
        }
    })
   
     res.write("<div class='container'><h3>Js page</h3>");
    
}).listen(port,()=>{
    console.log(port);
    
});