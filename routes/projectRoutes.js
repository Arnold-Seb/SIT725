const express = require('express');
const router = express.Router();
const projectController = require('../controllers/projectController');

// GET /api/projects
router.get('/', projectController.list);

// (Optional) POST /api/projects to add one from Postman
router.post('/', projectController.create);

module.exports = router;
