const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'gillbaba.com',      // local MySQL server
  user: 'u167227426_holidayhome',           // default username (change if different)
  password: 'Holiday@122',           // your MySQL password (empty by default for XAMPP/MAMP)
  database: 'u167227426_holidayhome' // your local database name
});

db.connect((err) => {
  if (err) {
    console.error('❌ MySQL connection error:', err);
  } else {
    console.log('✅ Connected to MySQL (local)');
  }
});

module.exports = db;
