
// app.get('/user/:id', function(req, res) {
//   res.send('user ' + req.params.id);
// });
//

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
      //res.send(result);
      callback(result);
    });
  });
}

function studentSignup(req, res){
  res.render("signup", {});
}

function createStudent(req, res){
  //console.log(req.body);
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
        //console.log(result.insertId);
        con.end();
      });
    });
  //res.send('Success!');

}


function studentProfile(req, res) {
  getStudent(req.params.id, function(result){
    console.log(result[0]);
    res.render("studentProfile", result[0])});
}


// function getMonth (monthNumber) {
//     return (Number.isInteger(monthNumber) && (monthNumber <= (months.length - 1))) ? months[monthNumber] : '';
// };

// export the module
module.exports = {
    createStudent: createStudent,
    studentSignup: studentSignup,
    studentProfile: studentProfile,
    getStudent: getStudent
};



// function insertStudent(){
//   var mysql = require('mysql');
//
//   var con = mysql.createConnection({
//     host: "54.234.125.28",
//     user: "root",
//     password: "pass",
//     database: "pitch_in",
//     port:"3306"
//   });
//
//   con.connect(function(err) {
//     if (err) throw err;
//     console.log("Connected!");
//     var sql = "INSERT INTO students VALUES ('"+req.body.first+"','"+req.body.last+"','"+req.body.user+"','"+req.body.pass+"','"+req.body.grade+"', 0)";
//     con.query(sql, function (err, result) {
//       if (err) throw err;
//       console.log("1 record inserted");
//       alert('Success! Student added');
//       con.end();
//     });
//   });
//
// }
