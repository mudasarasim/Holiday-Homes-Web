// backend/routes/inquiry.js
const express = require('express');
const router = express.Router();
const db = require('../db');

router.post('/inquiry', (req, res) => {
  const { name, email, phone, message } = req.body;

  const sql = 'INSERT INTO inquiries (name, email, phone, message) VALUES (?, ?, ?, ?)';
  db.query(sql, [name, email, phone, message], (err, result) => {
    if (err) {
      console.error('Insert error:', err);
      return res.status(500).json({ message: 'Database error' });
    }
    res.json({ message: 'Inquiry submitted successfully' });
  });
});
// Get all inquiries
router.get('/', (req, res) => {
  db.query('SELECT * FROM inquiries ORDER BY id DESC', (err, results) => {
    if (err) return res.status(500).json({ message: 'Database error' });
    res.json(results);
  });
});

module.exports = router;
