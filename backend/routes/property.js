const express = require('express');
const router = express.Router();
const db = require('../db');

// POST: List property
router.post('/', (req, res) => {
  const { name, phone, email, propertyType, location } = req.body;
  if (!name || !phone || !email || !propertyType || !location) {
    return res.status(400).json({ error: 'Missing fields' });
  }

  const sql = `INSERT INTO properties (name, phone, email, property_type, location)
               VALUES (?, ?, ?, ?, ?)`;
  db.query(sql, [name, phone, email, propertyType, location], (err, result) => {
    if (err) {
      console.error('❌ DB Error:', err);
      return res.status(500).json({ error: 'Database error' });
    }
    res.json({ success: true, id: result.insertId });
  });
});
router.get('/', (req, res) => {
  db.query('SELECT * FROM properties ORDER BY created_at DESC', (err, results) => {
    if (err) return res.status(500).json({ error: 'DB error' });
    res.json(results);
  });
});

module.exports = router;
