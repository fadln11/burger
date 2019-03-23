var mysql = require("mysql");

// var connection = mysql.createConnection({
//   host: "localhost",
//   port: 3306,
//   user: "monty",
//   password: "password",
//   database: "burgers_db"
// });


// Heroku JawsDB or local
var connection;
if (process.env.JAWSDB_URL) {
    // Heroku JawsDB Database
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    // Local Database
    connection = mysql.createConnection({
      port: 3306,
      host: "localhost",
      user: "monty",
      password: "password",
      database: "burgers_db"
    });
};

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;
