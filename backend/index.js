const express = require('express');
const cors = require('cors');
const contactRoutes = require('./routes/contact');
const propertyRoutes = require('./routes/property');


const app = express();
const PORT = 5001;

app.use(cors());
app.use(express.json());

app.use('/api/contact', contactRoutes);
app.use('/api/property', propertyRoutes);


app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
