const mysql = require('mysql2');

// Create a connection pool (recommended)
const pool = mysql.createPool({
  host: 'gillbaba.com',
  user: 'u167227426_holidayhome',
  password: '3nONfD8:D+',
  database: 'u167227426_holidayhome',
  waitForConnections: true,
  connectionLimit: 10, // how many connections at the same time
  queueLimit: 0        // unlimited queueing
});

// Test connection
pool.getConnection((err, connection) => {
  if (err) {
    console.error('❌ MySQL connection error:', err);
  } else {
    console.log('✅ Connected to MySQL');
    connection.release(); // release back to pool
  }
});

module.exports = pool;
