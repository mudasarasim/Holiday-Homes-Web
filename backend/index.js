const express = require('express');
const cors = require('cors');
const path = require('path'); // ✅ for resolving build path
const contactRoutes = require('./routes/contact');
const propertyRoutes = require('./routes/property');

const app = express();
const PORT = process.env.PORT || 5001;

// ✅ Middleware
app.use(cors());
app.use(express.json());

// ✅ API Routes
app.use('/api/contact', contactRoutes);
app.use('/api/property', propertyRoutes);

// ✅ Serve React frontend build
const buildPath = path.join(__dirname, '../client/build');
app.use(express.static(buildPath));

app.get('*', (req, res) => {
  res.sendFile(path.join(buildPath, 'index.html'));
});

// ✅ Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
