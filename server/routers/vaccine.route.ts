import { Router } from 'express';
import controller from '../controllers/vaccine.controller';

const router = Router();

router.get('/', controller.getVaccineStatistic);

export default router;
