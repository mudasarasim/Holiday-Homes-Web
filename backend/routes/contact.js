const express = require('express');
const router = express.Router();
const db = require('../db'); // pool from db.js

/**
 * POST /api/contacts
 * Save a new contact form submission
 */
router.post('/', (req, res) => {
  const { name, email, phone, message } = req.body;

  // Validate all fields
  if (!name || !email || !phone || !message) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  const query = 'INSERT INTO contacts (name, email, phone, message) VALUES (?, ?, ?, ?)';
  db.query(query, [name, email, phone, message], (err, result) => {
    if (err) {
      console.error('❌ Error saving contact:', err);
      return res.status(500).json({ error: 'Failed to save contact. Please try again.' });
    }

    res.status(201).json({
      success: true,
      message: 'Contact submitted successfully!',
      contactId: result.insertId
    });
  });
});

/**
 * GET /api/contacts
 * Fetch all contact form submissions
 */
router.get('/', (req, res) => {
  const query = 'SELECT * FROM contacts ORDER BY created_at DESC';

  db.query(query, (err, results) => {
    if (err) {
      console.error('❌ Error fetching contacts:', err);
      return res.status(500).json({ error: 'Failed to fetch contacts' });
    }
    res.status(200).json(results);
  });
});

module.exports = router;
