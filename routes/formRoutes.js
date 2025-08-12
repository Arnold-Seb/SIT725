const express = require('express');
const router = express.Router();
const formController = require('../controllers/formController');

// POST /api/form
router.post('/', formController.submit);

module.exports = router;
