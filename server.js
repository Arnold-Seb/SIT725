const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.static(__dirname + '/public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/sit725db', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
mongoose.connection.on('connected', () => {
  console.log('✅ Connected to MongoDB');
});

// Project schema
const ProjectSchema = new mongoose.Schema({
  title: String,
  image: String,
  link: String,
  description: String
});
const Project = mongoose.model('Project', ProjectSchema);

// Form schema
const FormSchema = new mongoose.Schema({
  first_name: String,
  last_name: String,
  email: String,
  password: String
});
const Form = mongoose.model('Form', FormSchema);

// GET API for projects
app.get('/api/projects', async (req, res) => {
  try {
    const projects = await Project.find({});
    res.json({ statusCode: 200, data: projects, message: "Success" });
  } catch (err) {
    res.status(500).json({ statusCode: 500, message: err.message });
  }
});

// POST API for form
app.post('/api/form', async (req, res) => {
  try {
    const formEntry = new Form(req.body);
    const saved = await formEntry.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.listen(port, () => {
  console.log(`🚀 App listening on http://localhost:${port}`);
});
