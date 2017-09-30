
// app.get('/user/:id', function(req, res) {
//   res.send('user ' + req.params.id);
// });
//

function getUser(req, res){
  console.log(req);
  res.send('user ' + req.params.id);
}

function createStudent(req, res){
  console.log(req.body);
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
      var sql = "INSERT INTO students VALUES ('"+req.body.firstName+"','"+req.body.lastName+"','"+req.body.username+"','"+req.body.psw+"','"+req.body.grade+"', 0)";
      con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("1 record inserted");
        con.end();
      });
    });
  res.send('Success!');
}

// function getMonth (monthNumber) {
//     return (Number.isInteger(monthNumber) && (monthNumber <= (months.length - 1))) ? months[monthNumber] : '';
// };

// export the module
module.exports = {
    createStudent: createStudent
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
