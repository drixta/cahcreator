var express = require('express');
var app = express();
var fs = require('fs');
var bodyParser = require('body-parser');
var router = express.Router();
var http = require('http').createServer(app);
var io = require('socket.io').listen(http);
var cardDb = require('./database/cards-table.js');
app.use(express.static(__dirname + '/dist'));
app.use(bodyParser.json());
app.use(bodyParser.json());
app.post('/card', cardDb.save);
app.get('/card', cardDb.get);
http.listen(process.env.PORT || 3000, function(){  //CONFIG.port
  console.log("Server running on port " + 3000);
});