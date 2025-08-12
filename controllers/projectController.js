const projectService = require('../services/projectService');

const list = async (req, res) => {
  try {
    const data = await projectService.getAll();
    res.json({ statusCode: 200, data, message: 'Success' });
  } catch (err) {
    res.status(500).json({ statusCode: 500, message: err.message });
  }
};

const create = async (req, res) => {
  try {
    const saved = await projectService.create(req.body);
    res.status(201).json(saved);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { list, create };
