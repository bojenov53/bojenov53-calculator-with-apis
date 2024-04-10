import { Router } from 'express';
import calculatorController from '../controllers/calculatorController.js';

const router = Router();

router.post('/sum', calculatorController.sum);
router.post('/subtraction', calculatorController.subtraction);
router.post('/multiply', calculatorController.multiply);
router.post('/division', calculatorController.division);


export default router;
