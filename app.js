// app.js
const express = require('express');
const path = require('path');

const app = express();

// --- Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// --- Lightweight health route (safe for tests)
app.get('/health', (_req, res) => {
  res.status(200).json({ status: 'ok' });
});

// --- Routes (keep your existing ones)
const projectRoutes = require('./routes/projectRoutes');
const formRoutes = require('./routes/formRoutes');
app.use('/api/projects', projectRoutes); // GET / POST / ...
app.use('/api/form', formRoutes);        // POST

module.exports = app;
