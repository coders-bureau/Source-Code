//simple server in nodejs
var http = require('http');

var host = '127.0.0.1' //localhost
var port = 3000;

var server = http.createServer((request, response) => {
  response.writeHead(200, {"Content-Type": "text/plain"});
  console.log("Server Working")
  response.end("Server Working Success");
});

server.listen(port,host, (error) => {
  if(error) {
    return console.log('Error occured : ', error );
  }
  console.log('Server is listening on ' + host + ':'+ port);
});
