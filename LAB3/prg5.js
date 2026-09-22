import http from 'http'

const server = http.createServer((req, res) => {

// req method -> GET, POST, PUT, DELETE,PATCH

console.log("Method: ", req.method);
console.log("URL: ", req.url);

//Browser can send only GET rquest to the server
//POST/PUT/PATCH/DELETE -> can be checked by api tester
//API Tester:- postman,echo api, thunder clinet


if (req.url==='/'){
        res.setHeader("content-typw","text/html");
        res.end("<h1> Hello Server</h1>");
    }
});
server.listen(5000, ()=>console.log("prg5 is running"));
