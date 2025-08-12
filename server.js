const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// --- Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// --- MongoDB
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/sit725db';
mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.on('connected', () => console.log('✅ Connected to MongoDB'));
mongoose.connection.on('error', (err) => console.error('Mongo error:', err));

// --- Routes
const projectRoutes = require('./routes/projectRoutes');
const formRoutes = require('./routes/formRoutes');
app.use('/api/projects', projectRoutes); // GET / POST / ...
app.use('/api/form', formRoutes);        // POST

// --- Start
app.listen(port, () => console.log(`🚀 App listening on http://localhost:${port}`));
