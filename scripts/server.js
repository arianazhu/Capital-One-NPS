var http = require('http');
var fs = require('fs');

// Read and write to a file
// var myReadStream = fs.createReadStream(__dirname + '/textfiles/parkInfo.txt', 'utf8');
// var myWriteStream = fs.createWriteStream(__dirname + '/textfiles/pICopy.txt');
// myReadStream.pipe(myWriteStream);

var server = http.createServer(function(req, res){
  console.log('request was made: ' + req.url);
  if (req.url === '/home' || req.url === '/') {
    res.writeHead(200, {'Content-Type': 'text/html'});
    fs.createReadStream('../bootstrap/index.html').pipe(res);
  } else if (req.url === '/find-by-state') {
    res.writeHead(200, {'Content-Type': 'text/html'});
    fs.createReadStream('../bootstrap/state.html').pipe(res);
  } else if (req.url === '/find-by-designation') {
    res.writeHead(200, {'Content-Type': 'text/html'});
    fs.createReadStream('../bootstrap/designation.html').pipe(res);
  } else if (req.url === '/search-park') {
    res.writeHead(200, {'Content-Type': 'text/html'});
    fs.createReadStream('../bootstrap/search.html').pipe(res);
  } else if (req.url === '/api/ninjas') {
    var ninjas = [{name: 'ry', age: 29}, {name: 'yo', age: 15}];
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end(JSON.stringify(ninjas));
  } else {
    res.writeHead(200, {'Content-Type': 'text/html'});
    fs.createReadStream('../bootstrap/404.html').pipe(res);
  }

  // // Content-Type: 'text/html', text/plain, application/json
  // res.writeHead(200, {'Content-Type': 'application/json'});

  // // Serving JSON data
  // var myObj = {
  //   name: 'Ryu',
  //   job: 'Ninja',
  //   age: 29
  // };
  // res.end(JSON.stringify(myObj));

  // // Serving HTML data
  // var myReadStream = fs.createReadStream('../bootstrap/index.html', 'utf8');
  // myReadStream.pipe(res);

  // // Serving plain text data
  // var myReadStream = fs.createReadStream('../textfiles/parkInfo.txt', 'utf8');
  // myReadStream.pipe(res);

  // // Same as myReadStream.pipe(res) except with 'Hello' literal
  // res.end('Hello'); //res.end takes in a string or buffer
});

server.listen(3000, '127.0.0.1'); //127.0.0.1 is ip address of local host
console.log('now listening to port 3000');

// To run, type node server in terminal and then type 127.0.0.1:3000
// in browser

// 127.0.0.1:3000/hey or 127.0.0.1:3000/hey/hello will bring up same page
// if url not specified

// req.url is / if only 127.0.0.1:3000 is entered
// req.url is /hey if 127.0.0.1:3000/hey is entered

// add <link rel="icon" href="data:;base64,="> to <head> of HTML file
// to avoid favicon.ico requests
