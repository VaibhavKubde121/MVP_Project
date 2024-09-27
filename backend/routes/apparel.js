
const express = require('express');
const router = express.Router();
const apparelController = require('../controllers/apparelController');

// Route to submit apparel information
router.post('/submit', apparelController.submitApparel);

module.exports = router;
