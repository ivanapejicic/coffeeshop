const express = require('express');
const router = express.Router();
const pointsController = require('../controllers/points-controller');

router
    .route('/')
    .get(pointsController.getPoints)
    .post(pointsController.add);
    
module.exports = router;
