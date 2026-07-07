//const http = require('http);
import http from 'http';
const port = 4000;

const server = http.createServer((req,res)=>{
        if(req.url==='/'){
            res.end('<h1>Welcome to Backend Server</h1>')
        }else if(req.url==='/about'){
            res.end('<h1>About Us</h1>')
        }else if(req.url==='/contact'){
            res.end('<h1>Contact Us</h1>')
        }else if(req.url ==='/home'){
            res.end('<h1>Home</h1>')
        }else{
            res.end('<h1>No data found</h1>')
        }
    });


    server.listen(port,()=>{
        console.log(`server is running in port:`,port);
    })
    //what is port? 
    // Port is the communication endpoint for the server, allowing it to receive requests from clients.