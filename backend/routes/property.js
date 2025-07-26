const express = require('express');
const router = express.Router();
const db = require('../db'); // Make sure this is correct path

// POST /api/property
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

    res.status(201).json({ message: 'Property submitted successfully!' });
  });
});

// Get a specific property by ID
router.get('/property/:id', (req, res) => {
  const { id } = req.params;
  db.query('SELECT * FROM properties WHERE id = ?', [id], (err, result) => {
    if (err) return res.status(500).json({ message: 'Database error' });
    if (result.length === 0) return res.status(404).json({ message: 'Property not found' });
    res.json(result[0]);
  });
});

// routes/property.js
router.get('/', (req, res) => {
  db.query('SELECT * FROM properties', (err, results) => {
    if (err) {
      console.error('Error fetching properties:', err);
      return res.status(500).json({ error: 'Database error' });
    }
    res.json(results);
  });
});

// DELETE a property by ID
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

    res.json({ message: 'Property deleted successfully!' });
  });
});


module.exports = router;
