import { Request, Response } from 'express';
import zingService from '../services/zing.service';

const getVaccineStatistic = async (_req: Request, res: Response) => {
  try {
    const result = await zingService.getVaccineStatistic();
    return res.send({ data: result });
  } catch (e) {
    return res.status(500).send({ error: 'error' });
  }
};

const getVaccineProvincesStatistic = async (_req: Request, res: Response) => {
  try {
    const result = await zingService.getVaccineProvincesStatistic();
    return res.send({ data: result });
  } catch (e) {
    return res.status(500).send({ error: 'error' });
  }
};

export default { getVaccineStatistic, getVaccineProvincesStatistic };
