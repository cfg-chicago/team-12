var express = require('express');
var path = require('path');
var app = express();
var studentController = require('./studentController');
var bodyParser = require('body-parser');
// Define the port to run on
app.set('port', 3000);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '/static')));
app.post('/api/user/signup', studentController.createStudent);
// Listen for requests
var server = app.listen(app.get('port'), function() {
  var port = server.address().port;
  console.log('Magic happens on port ' + port);
});
