// userRoutes.js
const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const authMiddleware = require('../middleware/authMiddleware');

// Route with middleware
router.get('/login', authController.userLogin);
router.get('/access', authMiddleware, authController.sample);

module.exports = router;
