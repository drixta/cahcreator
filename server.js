var express = require('express');
var app = express();
var fs = require('fs');
var router = express.Router();
var http = require('http').createServer(app);
var io = require('socket.io').listen(http);

app.use(express.static(__dirname + '/dist'));

http.listen(process.env.PORT || 3000, function(){  //CONFIG.port
  console.log("Server running on port " + 3000);
});