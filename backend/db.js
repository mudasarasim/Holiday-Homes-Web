const mysql = require('mysql2');
const db = mysql.createConnection({
  host: 'gillbaba.com',
  user: 'u167227426_holidayhome',
  password: 'Holidayhome@122',
  database: 'u167227426_holidayhome'
});

db.connect((err) => {
  if (err) {
    console.error('❌ MySQL connection error:', err);
  } else {
    console.log('✅ Connected to MySQL');
  }
});

module.exports = db;
