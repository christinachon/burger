var mysql = require('mysql');
var connection;

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection({
    host: 'rtzsaka6vivj2zp1.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    port: 3306,
    user: 'ps814t3rohr3eya6',
    password: 'ikx6vetboimati0m',
    database: 'h6d65pmqz7j0slkk'
  });
}
else {
  connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'root',
    database: 'burgers_db'
  });
}


module.exports = connection;