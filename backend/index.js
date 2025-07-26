require('dotenv').config();

const express = require('express');
const path = require('path');
const cors = require('cors');
const http = require('http');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Serve uploads if needed
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// API Routes
const contactRoutes = require('./routes/contact');
const propertyRoutes = require('./routes/Adminproperty'); 
const inquiryRoutes = require('./routes/inquiry');

// API Endpoints
app.use('/api/contact', contactRoutes);
app.use('/api/property', propertyRoutes);
app.use('/api/inquiry', inquiryRoutes);

// Serve React static files
const buildPath = path.join(__dirname, '../client/build');
app.use(express.static(buildPath));

// React SPA fallback for all other non-API routes
app.get('*', (req, res) => {
  res.sendFile(path.join(buildPath, 'index.html'));
});

// Start server
const PORT = process.env.PORT || 5001;
const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
