const express = require('express');
const router = express.Router();
const db = require('../db');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

// Create uploads/properties folder if not exists
const dir = 'uploads/properties';
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir, { recursive: true });
}

// Multer storage setup
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, dir),
  filename: (req, file, cb) => cb(null, Date.now() + '-' + file.originalname)
});
const upload = multer({ storage });

/**
 * POST /api/property/add
 * Add new property
 */
router.post('/add', upload.single('image'), (req, res) => {
  const { title, location, tag } = req.body;
  const image = req.file?.filename;

  if (!title || !location || !tag || !image) {
    return res.status(400).json({ error: 'All fields including image are required' });
  }

  const query = 'INSERT INTO admin_properties (title, location, tag, image) VALUES (?, ?, ?, ?)';
  db.query(query, [title, location, tag, image], (err, result) => {
    if (err) {
      console.error('❌ MySQL insert error:', err);
      return res.status(500).json({ error: 'Database error while adding property' });
    }
    res.status(201).json({ success: true, message: 'Property added successfully!' });
  });
});

/**
 * GET /api/property/all
 * Get all properties
 */
router.get('/all', (req, res) => {
  db.query('SELECT * FROM admin_properties ORDER BY id DESC', (err, results) => {
    if (err) {
      console.error("DB error:", err);
      return res.status(500).json({ error: "Database error" });
    }
    res.json(results);
  });
});

/**
 * GET /api/property/:id
 * Get a single property by ID
 */
router.get('/:id', (req, res) => {
  const { id } = req.params;
  db.query('SELECT * FROM admin_properties WHERE id = ?', [id], (err, result) => {
    if (err) {
      console.error("DB error:", err);
      return res.status(500).json({ message: 'Database error' });
    }
    if (result.length === 0) {
      return res.status(404).json({ message: 'Property not found' });
    }
    res.json(result[0]);
  });
});






/**
 * DELETE /api/property/delete/:id
 * Delete a property
 */
router.delete('/delete/:id', (req, res) => {
  const { id } = req.params;

  // First, get the image name to delete from disk
  db.query('SELECT image FROM admin_properties WHERE id = ?', [id], (err, result) => {
    if (err || result.length === 0) {
      return res.status(404).json({ message: 'Property not found' });
    }

    const imageName = result[0].image;
    const imagePath = path.join(__dirname, '..', 'uploads', 'properties', imageName);

    // Delete from database
    db.query('DELETE FROM admin_properties WHERE id = ?', [id], (err) => {
      if (err) {
        return res.status(500).json({ error: 'Error deleting property from database' });
      }

      // Delete image file
      fs.unlink(imagePath, (err) => {
        if (err) {
          console.warn('Image file not deleted (may not exist):', imagePath);
        }
      });

      res.json({ success: true, message: 'Property deleted successfully' });
    });
  });
});
/**
 * PUT /api/property/update/:id
 * Update a property
 */
router.put('/update/:id', upload.single('image'), (req, res) => {
  const { id } = req.params;
  const { title, location, tag } = req.body;
  const newImage = req.file?.filename;

  // Fetch current image to possibly delete it later
  db.query('SELECT image FROM admin_properties WHERE id = ?', [id], (err, results) => {
    if (err) {
      console.error("Error fetching property:", err);
      return res.status(500).json({ error: "Database error" });
    }

    if (results.length === 0) {
      return res.status(404).json({ error: "Property not found" });
    }

    const oldImage = results[0].image;

    // Build the update query dynamically
    let query = '';
    let values = [];

    if (newImage) {
      query = 'UPDATE admin_properties SET title = ?, location = ?, tag = ?, image = ? WHERE id = ?';
      values = [title, location, tag, newImage, id];
    } else {
      query = 'UPDATE admin_properties SET title = ?, location = ?, tag = ? WHERE id = ?';
      values = [title, location, tag, id];
    }

    db.query(query, values, (err) => {
      if (err) {
        console.error("Update error:", err);
        return res.status(500).json({ error: "Failed to update property" });
      }

      // Delete old image if new one uploaded
      if (newImage && oldImage) {
        const oldImagePath = path.join(__dirname, '..', 'uploads', 'properties', oldImage);
        fs.unlink(oldImagePath, (err) => {
          if (err) {
            console.warn('Old image not deleted (might not exist):', oldImagePath);
          }
        });
      }

      res.json({ success: true, message: "Property updated successfully" });
    });
  });
});
module.exports = router;
