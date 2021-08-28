import { Request, Response } from 'express';
import vnExpressService from '../services/vnExpress.service';

const getVietnamStatistic = async (_req: Request, res: Response) => {
  try {
    const result = await vnExpressService.getVietnamStatisticVnExpress();
    return res.send({
      data: result[0],
      meta: {
        lastUpdated: result[1],
      },
    });
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
