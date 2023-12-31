const express = require('express');
const router = express.Router();
const pointsController = require('../controllers/points-controller');

router.route('/:points')
    .get(pointsController.findOne)
    
module.exports = router;
