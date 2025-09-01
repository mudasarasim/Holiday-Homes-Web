// backend/routes/property.js
const express = require('express');
const router = express.Router();
const db = require('../db'); // MySQL pool

/**
 * POST /api/property
 * Submit a new property
 */
router.post('/', (req, res) => {
  const { name, email, phone, property_type, location } = req.body;

  // Validate all fields
  if (!name || !email || !phone || !property_type || !location) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  const query = `
    INSERT INTO properties (name, email, phone, property_type, location)
    VALUES (?, ?, ?, ?, ?)
  `;

  db.query(query, [name, email, phone, property_type, location], (err, result) => {
    if (err) {
      console.error('❌ Error inserting property:', err);
      return res.status(500).json({ error: 'Database error. Please try again.' });
    }

    res.status(201).json({
      success: true,
      message: 'Property submitted successfully!',
      propertyId: result.insertId
    });
  });
});

/**
 * GET /api/property/:id
 * Fetch a specific property by ID
 */
router.get('/property/:id', (req, res) => {
  const { id } = req.params;
  db.query('SELECT * FROM properties WHERE id = ?', [id], (err, result) => {
    if (err) {
      console.error('❌ Error fetching property:', err);
      return res.status(500).json({ error: 'Database error' });
    }
    if (result.length === 0) {
      return res.status(404).json({ message: 'Property not found' });
    }
    res.status(200).json(result[0]);
  });
});

/**
 * GET /api/property
 * Fetch all properties
 */
router.get('/', (req, res) => {
  db.query('SELECT * FROM properties ORDER BY id DESC', (err, results) => {
    if (err) {
      console.error('❌ Error fetching properties:', err);
      return res.status(500).json({ error: 'Database error' });
    }
    res.status(200).json(results);
  });
});

/**
 * DELETE /api/property/:id
 * Delete a property by ID
 */
router.delete('/property/:id', (req, res) => {
  const { id } = req.params;

  db.query('DELETE FROM properties WHERE id = ?', [id], (err, result) => {
    if (err) {
      console.error('❌ Error deleting property:', err);
      return res.status(500).json({ error: 'Database error during deletion' });
    }

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Property not found or already deleted' });
    }

    res.json({ success: true, message: 'Property deleted successfully!' });
  });
});

module.exports = router;
