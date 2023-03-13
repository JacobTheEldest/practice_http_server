const http = require('node:http');

const hostname = 'localhost';
const port = 3000;

const server = http.createServer((request, response) => {
  let url = request.url.split('/');
  if (url[1] === '' ) {
    if (request.method === 'GET') {
      response.end("Hello, Galvanize!")
    }
  }
  response.statusCode = 404;
  response.end();
});

server.listen(port, hostname, () => {
  console.log(`Server is running on ${hostname}:${port}`);
});