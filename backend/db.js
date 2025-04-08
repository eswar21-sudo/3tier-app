const express = require('express');
const mysql = require('mysql2'); // Use mysql2 package for MySQL connection

const app = express();

// Set up MySQL connection
const db = mysql.createConnection({
  host: 'webapp.c50wyk0s40tz.us-east-1.rds.amazonaws.com', // Replace with your RDS endpoint
  user: 'admim',  // Replace with your RDS username
  password: 'kumareswar123',  // Replace with your RDS password
  database: 'webapp' // Replace with your database name
});

// Test the database connection
db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL database:', err);
    return;
  }
  console.log('Connected to MySQL database');
});

// Example route to get data from MySQL
app.get('/api/data', (req, res) => {
  db.query('SELECT message FROM data LIMIT 1', (err, results) => {
    if (err) {
      console.error('Error fetching data:', err);
      return res.status(500).send('Error fetching data');
    }
    res.json(results[0]);
  });
});

// Start the server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
