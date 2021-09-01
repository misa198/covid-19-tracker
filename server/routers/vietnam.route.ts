import { Router } from 'express';
import controller from '../controllers/vietnam.controller';

const router = Router();

router.get('/', controller.getVietnamStatistic);
router.get('/provinces', controller.getProvincesStatistic);
router.get('/provinces/day', controller.getProvinceByDayStatistic);

export default router;
