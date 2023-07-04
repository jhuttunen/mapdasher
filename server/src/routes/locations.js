const express = require('express');
const router = express.Router();

const { 
  getRandomLocations, 
} = require('../controllers/locations');

router.get('/', getRandomLocations);
router.get('/:num', getRandomLocations);

module.exports = router;