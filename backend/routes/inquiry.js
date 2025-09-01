// backend/routes/inquiry.js
const express = require('express');
const router = express.Router();
const db = require('../db'); // MySQL pool

/**
 * POST /api/inquiry
 * Save a new inquiry
 */
router.post('/', (req, res) => {
  const { name, email, phone, message } = req.body;

  // Validate input
  if (!name || !email || !phone || !message) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  const sql = 'INSERT INTO inquiries (name, email, phone, message) VALUES (?, ?, ?, ?)';
  db.query(sql, [name, email, phone, message], (err, result) => {
    if (err) {
      console.error('❌ Error inserting inquiry:', err);
      return res.status(500).json({ error: 'Database error. Please try again.' });
    }
    res.status(201).json({
      success: true,
      message: 'Inquiry submitted successfully',
      inquiryId: result.insertId
    });
  });
});

/**
 * GET /api/inquiry
 * Get all inquiries
 */
router.get('/', (req, res) => {
  db.query('SELECT * FROM inquiries ORDER BY id DESC', (err, results) => {
    if (err) {
      console.error('❌ Error fetching inquiries:', err);
      return res.status(500).json({ error: 'Database error' });
    }
    res.status(200).json(results);
  });
});

module.exports = router;
