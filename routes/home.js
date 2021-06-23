const express = require('express');
const homeController = require('../controllers/home')
const auth = require('../middlewares/auth')
const router = express.Router();

router.post('/api/home', homeController.searchOne, homeController.searchSecont)

router.get('/api/home', auth.verifyToken)

module.exports = router;