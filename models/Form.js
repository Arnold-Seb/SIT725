const mongoose = require('mongoose');

const FormSchema = new mongoose.Schema({
  first_name: String,
  last_name: String,
  email: String,
  password: String
}, { timestamps: true });

module.exports = mongoose.model('Form', FormSchema);
