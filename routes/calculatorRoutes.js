const express = require('express');
const calculatorController = require('../controllers/calculatorController.js');

const router = express.Router();

router.post('/sum', calculatorController.sum);
router.post('/subtraction', calculatorController.subtraction);
router.post('/multiply', calculatorController.multiply);
router.post('/division', calculatorController.division);


module.exports = router;
