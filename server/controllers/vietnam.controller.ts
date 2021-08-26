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

const getProvincesStatistic = async (_req: Request, res: Response) => {
  try {
    const provinceStatistic =
      await vnExpressService.getProvinceStatisticVnExpress();
    return res.send({ data: provinceStatistic });
  } catch (e) {
    return res.status(500).send({ error: 'error' });
  }
};

export default { getVietnamStatistic, getProvincesStatistic };
