var mysql = require('mysql2');

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '1234',
  database: 'food_menu'
});

connection.connect((err, success) => {
  err ? console.log("connection failed") : console.log("Database connected successfully")
})

module.exports = connection;