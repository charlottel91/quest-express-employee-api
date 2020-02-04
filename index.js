const express = require('express');
const connection = require('./conf');

const app = express();
const port = 4000;

// respond to requests on `/api/employees`
// app.get('/api/employees', (req, res) => {
//   let sql = 'SELECT * FROM employee';
//   const sqlValues = [];
//   if (req.query.department) {
//     sql += ' WHERE department = ?';
//     sqlValues.push(req.query.department);
//   }
//   // send an SQL query to get all employees
//   connection.query(sql, sqlValues, (err, results) => {
//     if (err) {
//       // If an error has occurred, then the client is informed of the error
//       res.status(500).send(`An error occurred: ${err.message}`);
//     } else {
//       // If everything went well, we send the result of the SQL query as JSON
//       res.json(results);
//     }
//   });
// });

// // respond to requests on `/api/employees/:id`
// app.get('/api/employees/:id', (req, res) => {
//   // send an SQL query to get all employees
//   connection.query('SELECT * FROM employee WHERE id=?', req.params.id, (err, results) => {
//     if (err) {
//       // If an error has occurred, then the client is informed of the error
//       res.status(500).send(`An error occurred: ${err.message}`);
//     }
//     if (results.length === 0) {
//       res.status(404).send('Employee not found')
//     } else {
//       // If everything went well, we send the result of the SQL query as JSON
//       res.json(results);
//     }
//   });
// });

app.listen(port, (err) => {
  if (err) {
    throw new Error('Something bad happened...');
  }

  console.log(`Server is listening on ${port}`);
});
