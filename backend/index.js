require('dotenv').config();

const express = require('express');
const path = require('path');
const cors = require('cors');
const http = require('http');

const app = express();

// Connect to Database if needed (add your DB config here)
// const connectDB = require('./config/db');
// connectDB().catch((err) => {
//   console.error("Database connection failed", err);
//   process.exit(1);
// });

// Middleware
app.use(cors());
app.use(express.json());

// Serve React build static files
const buildPath = path.join(__dirname, "../client/build");
app.use(express.static(buildPath));

// Serve uploads as public
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Import and use routes
const contactRoutes = require('./routes/contact');
const propertyRoutes = require('./routes/property');

app.use('/api/contact', contactRoutes);
app.use('/api/property', propertyRoutes);

// React SPA fallback
app.get('/*', (req, res) => {
  res.sendFile(path.join(buildPath, 'index.html'));
});


// Setup server
const PORT = process.env.PORT || 5001;
const server = http.createServer(app);

// (Optional) Setup Socket.IO if needed
// const socketIo = require('socket.io');
// const io = socketIo(server, {
//   cors: {
//     origin: "*",
//     methods: ["GET", "POST"]
//   }
// });

// io.on('connection', (socket) => {
//   console.log('A user connected');

//   socket.on('someEvent', (data) => {
//     io.emit('anotherEvent', data);
//   });

//   socket.on('disconnect', () => {
//     console.log('User disconnected');
//   });
// });

// Start server
server.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
