// Import statements
const { Pool } = require('pg');
const express = require('express')

const port = process.env.PORT || 8080
const app = express()
app.use(express.json());
app.listen(port, () => console.log(`Sample app is listening on port ${port}!`))

const server_name = "pecl-2-postgresql.postgres.database.azure.com"
const db_name = "postgres"
const db_post = 5432
const db_username = "gabriele_colapinto"
const db_password = "P4$$w0rd"

// Create a new pool instance
const pool = new Pool({
  user: db_username,
  host: server_name,
  database: db_name,
  password: db_password,
  port: db_port
});

// Define your SQL query
const sqlQuery = 'SELECT * FROM your_table';

// Execute the query
pool.query(sqlQuery, (err, res) => {
  if (err) {
    console.error('Error executing query:', err);
    return;
  }
  console.log('Query result:', res.rows);
});

// Close the pool when done (optional)
pool.end();
