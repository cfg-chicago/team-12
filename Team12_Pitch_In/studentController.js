
//GET STUDENT INFO
function getStudent(id, callback){
  var mysql = require('mysql');
  var con = mysql.createConnection({
    host: "54.234.125.28",
    user: "root",
    password: "pass",
    database: "pitch_in",
    port:"3306"
  });

  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = "Select * FROM students WHERE id =" + id;
    con.query(sql, function (err, result) {
      if (err) throw err;
      con.end();
      callback(result);
    });
  });
}


//Render for Signup Page
function studentSignup(req, res){
  res.render("signup", {});
}


//CREATE STUDENTS
function createStudent(req, res){
  var mysql = require('mysql');
  var con = mysql.createConnection({
    host: "54.234.125.28",
    user: "root",
    password: "pass",
    database: "pitch_in",
    port:"3306"
  });

  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = "INSERT INTO students (firstName, lastName, username, password, Grade, Tickets) VALUES ('"+req.body.firstName+"','"+req.body.lastName+"','"+req.body.username+"','"+req.body.psw+"','"+req.body.grade+"', 0)";
    con.query(sql, function (err, result) {
      if (err) throw err;
      res.redirect("/profile/" + result.insertId);
      con.end();
    });
  });
}


function studentProfile(req, res) {
  getStudent(req.params.id, function(result){
    console.log(result[0]);
    res.render("studentProfile", result[0])});
  }


  // export the modules
  module.exports = {
    createStudent: createStudent,
    studentSignup: studentSignup,
    studentProfile: studentProfile,
    getStudent: getStudent
  };
