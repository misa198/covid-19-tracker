import { Request, Response } from 'express';
import vnExpressService from '../services/vnExpress.service';

const getVietnamStatistic = async (_req: Request, res: Response) => {
  try {
    const trendingLine = await vnExpressService.getVietnamStatisticVnExpress();
    return res.send({ data: trendingLine });
  } catch (e) {
    return res.status(500).send({ error: 'error' });
  }
};

export default { getVietnamStatistic };
