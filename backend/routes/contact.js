const express = require('express');
const router = express.Router();
const db = require('../db');

// POST: Save contact form
router.post('/', (req, res) => {
  const { name, email, phone, message } = req.body;
  const query = 'INSERT INTO contacts (name, email, phone, message) VALUES (?, ?, ?, ?)';
  db.query(query, [name, email, phone, message], (err, result) => {
    if (err) {
      console.error('❌ Error saving contact:', err);
      return res.status(500).json({ error: 'Database error' });
    }
    res.json({ success: true, id: result.insertId });
  });
});

// GET: Fetch all contacts (for admin panel)
router.get('/', (req, res) => {
  db.query('SELECT * FROM contacts ORDER BY created_at DESC', (err, results) => {
    if (err) {
      console.error('❌ Error fetching contacts:', err);
      return res.status(500).json({ error: 'Database error' });
    }
    res.json(results);
  });
});

module.exports = router;
