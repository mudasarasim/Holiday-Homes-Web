const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'localhost',      // local MySQL server
  user: 'root',           // default username (change if different)
  password: '',           // your MySQL password (empty by default for XAMPP/MAMP)
  database: 'holidays_database' // your local database name
});

db.connect((err) => {
  if (err) {
    console.error('❌ MySQL connection error:', err);
  } else {
    console.log('✅ Connected to MySQL (local)');
  }
});

module.exports = db;
