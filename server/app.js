// import files and packages up here
var express = require('express');
var morgan = require('morgan');
var topS = require('./data');

// create your express server below
var app = express();

app.use(morgan('dev'));
// add your routes and middleware below
app.get('/', function(req,res){
    res.send('200');
    });

app.get('/topspots', function(req,res){
    res.send(topS);
    });

// finally export the express application
module.exports = app;












// var http = require('http');
// http.createServer(function (req, res){
//     res.writeHead(200, {'Content-type': 'text/plain'});
//     res.end('Hello World');
// }).listen(3000,'127.0.0.1');
// console.log('Server running at http://127.0.0.1:3000/');
