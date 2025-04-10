const express = require('express');
const router = express.Router();
const path = require('path');
const refreshTokenValidation = require('../public/redirect');

router.get('/', refreshTokenValidation);

module.exports = router;