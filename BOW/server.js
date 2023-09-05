const http = require('http');
const {readFileSync} = require("fs");

const server = http.createServer((req, res) => {

console.log(`Incoming request - Mehotd ${req.method} | URL: ${req.url}`);


  if(req.method === 'GET' && req.url === '/') {
    try {
      const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
      console.log(`Your IP address is: ${ip}`);
      console.log('error weee')
      const resBody = readFileSync('./index.html', 'utf-8');
      res.statusCode = 200;
      res.setHeader("Content-type", "text/html");
      res.end(resBody);
      return;
    } catch(error) {
      console.log('Error:', error);
    }
  }

  if(req.method === 'GET' && req.url === '/bh.js') {
    try {
      console.log('error weee')
      const resBody = readFileSync('./bh.js', 'utf-8');
      res.statusCode = 200;
      res.setHeader("Content-Type", "text/javascript");
      res.end(resBody);
      return;
    } catch(error) {
      console.log('Error:', error);
    }
  }


  res.statusCode = 404;
  res.setHeader("Content-Type", "text/plain");
  const resBody = "Page Not Found";
  res.write(resBody);
  res.end();



})

const port = 5000;

server.listen(port, () => console.log('server running on port:', port));
