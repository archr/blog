var express = require('express');
var Paperpress = require('paperpress').Paperpress;
var logger = require('morgan');

var server = express();
server.use(logger(':status :req[x-real-ip] :method :response-time ms :url'));

var blog = new Paperpress({
  directory: 'static',
  themePath: 'static/themes/hyde',
  basePath: ''
});

blog.attach(server);

server.listen(4000);
console.log('Server running at http://localhost:4000', new Date() );
