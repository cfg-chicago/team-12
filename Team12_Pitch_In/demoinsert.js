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
  var sql = "INSERT INTO students VALUES ('Shaan', 'Patel', 'user', 'pass', 4, 0)";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
    con.end();
  });
});
