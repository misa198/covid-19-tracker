import { Router } from 'express';
import controller from '../controllers/vaccine.controller';

const router = Router();

router.get('/', controller.getVaccineStatistic);
router.get('/provinces', controller.getVaccineProvincesStatistic);

export default router;
