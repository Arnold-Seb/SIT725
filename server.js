// server.js
const mongoose = require('mongoose');
const http = require('http');
const { Server } = require('socket.io'); 
const app = require('./app');

const port = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/sit725db';

// Create HTTP server and attach socket.io
const httpServer = http.createServer(app);    
const io = new Server(httpServer);

// Socket.IO: log connections and send random numbers
io.on('connection', (socket) => {
  console.log('a user connected');

  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});

// Emit a random number every second to all clients
setInterval(() => {
  io.emit('number', Math.floor(Math.random() * 10));
}, 1000);


async function start() {
  try {
    await mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('✅ Connected to MongoDB');
    httpServer.listen(port, () => console.log(`🚀 App listening on http://localhost:${port}`));
  } catch (err) {
    console.error('Mongo error:', err);
    process.exit(1);
  }
}

// Only start when run directly (not when imported by tests)
if (require.main === module) {
  start();
}

// (export for advanced tests)
module.exports = { app, start, io, httpServer };
