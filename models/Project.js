const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
  title: String,
  image: String,
  link: String,
  description: String
}, { timestamps: true });

module.exports = mongoose.model('Project', ProjectSchema);
