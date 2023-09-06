//import node libraries

const http = require('http');
const {readFileSync} = require('fs');
const path = require('path');

// create a server using http

const server = http.createServer((req, res) => {
  //print request on console
  console.log(`req.method: ${req.method} req.url: ${req.url}`)
  // proccess the body of the request
  let reqBody = '';
  req.on('data', data => {
    reqBody += data;
  });
  //When request finished proccessing entire body
  req.on('end', () => {
    //parsing the body of the request
    if(reqBody) {
      req.body = reqBody
        .split('&')
        .map((keyValuePair) => keyValuePair.split('='))
        .map(([key, value]) => [key, value.replace(/\+/g, " ")])
        .map(([key, value]) => [key, decodeURIComponent(value)])
        .reduce((acc, [key, value]) => {
          acc[key] = value;
          return acc;
        }, {});
    }
    //Home Page
    if(req.method === 'GET' && req.url === '/') {
      const resBody = readFileSync('./index.html');
      res.setHeader('Content-Type', 'text/html');
      res.end(resBody);
      return;
    }

    //serving static assets
    const ext = path.extname(req.url);
    if(req.method === 'GET' && ext) {
      try {
        const resBody = readFileSync('.' + req.url);
        res.statusCode = 200;
        if(ext === '.js') {
          res.setHeader('Content-type', 'text/javascript');
        }
        res.end(resBody);
        return
      } catch (error) {
        console.error('Cannot find Asset', path.basename(req.url), 'in assets folder');
      }
    }

    res.statusCode = 404;
    res.setHeader('Content-type', 'text/plain');
    const resBody = 'page not found';
    res.write(resBody);
    res.end();
  });
});

const port = 5000;

server.listen(port, () => console.log("Server is running on port:", port));
