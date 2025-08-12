const formService = require('../services/formService');

const submit = async (req, res) => {
  try {
    const saved = await formService.create(req.body);
    res.status(201).json(saved);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { submit };
