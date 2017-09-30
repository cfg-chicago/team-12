// const express = require('express');
// const app = express();
// var path = require('path');
//
// app.get('/', function (req, res) {
//   res.sendFile(path.join(__dirname + '/static'));
// })
//
// app.listen(3000, function () {
//   console.log('Example app listening on port 3000!')
// })


var express = require('express');
var app = express();
app.use('/', express.static(__dirname + '/static'));
app.listen(3000, function() { console.log('listening')});
