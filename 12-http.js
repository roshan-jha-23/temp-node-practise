const http=require('http');
 const server=http.createServer((req,res)=>{
    if(req.url==='/'){
        res.end('welcome to the home page')
    }
   else if(req.url==='/about'){
        res.end('here is our short history')
    }
    else{
res.end(`
<h1>OOps!</h1>,
<p>hi there</p>,
<a href="/">Home</a>,<br/> , <a href="/about">About us</a>`);
    }

 });
 server.listen(5000);