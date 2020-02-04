const mysql = require('mysql');

// Setup database connection
const connection = mysql.createConnection({
  host: 'localhost', // db server address
  user: 'root', // db user's name
  password: 'Yolo6789', // db user's password
  database: 'movies', // db name
});

module.exports = connection;
