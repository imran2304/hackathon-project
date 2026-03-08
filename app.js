const http = require('http');

const server = http.createServer((req,res)=>{
    console.log(req.url , req.method);
    res.setHeader('Content-Type' , 'text.html');
    res.write('<h1>Its Working for me aswell</h1>')
});

const PORT = 3000;
server.listen(PORT ,()=>{
    console.log("Server started");
})