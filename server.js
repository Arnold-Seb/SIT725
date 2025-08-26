// server.js
const mongoose = require('mongoose');
const app = require('./app');

const port = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/sit725db';

async function start() {
  try {
    await mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('✅ Connected to MongoDB');
    app.listen(port, () => console.log(`🚀 App listening on http://localhost:${port}`));
  } catch (err) {
    console.error('Mongo error:', err);
    process.exit(1);
  }
}

// Only start when run directly (not when imported by tests)
if (require.main === module) {
  start();
}

// (optional export for advanced tests)
module.exports = { app, start };
