const mysql = require('mysql2');
const db = mysql.createConnection({
  host: '13.201.100.37',
  user: 'myuser',
  password: 'Mudasar@122',
  database: 'mydb'
});

db.connect((err) => {
  if (err) {
    console.error('❌ MySQL connection error:', err);
  } else {
    console.log('✅ Connected to MySQL');
  }
});

module.exports = db;
