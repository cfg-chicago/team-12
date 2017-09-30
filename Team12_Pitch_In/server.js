var express = require('express');
var path = require('path');
var app = express();
var studentController = require('./studentController');
var bodyParser = require('body-parser');
// Define the port to run on
app.set('port', 3000);
app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("static"));
app.post('/signup', studentController.createStudent);
app.get('/signup', studentController.studentSignup);

app.get('/profile/:id', studentController.studentProfile);

app.get('/api/user/getStudent', studentController.getStudent);
// Listen for requests
var server = app.listen(app.get('port'), function() {
  var port = server.address().port;
  console.log('Magic happens on port ' + port);
});
