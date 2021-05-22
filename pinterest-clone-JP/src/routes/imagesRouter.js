const express = require('express');
const router = express.Router();

// Images Controller
const controller = require('../controllers/imagesController');

// Routing to http://localhost:3000/images
router.get('/', controller.browse);

// Routing to http://localhost:3000/images
router.post('/', controller.add);

module.exports = router;