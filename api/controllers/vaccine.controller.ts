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

export default { getVaccineStatistic };
