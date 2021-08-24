import { Request, Response } from 'express';
import vnExpressService from '../services/vnExpress.service';

const getVietnamSummary = async (_req: Request, res: Response) => {
  try {
    const result = await vnExpressService.getVietnamSummaryVnExpress();
    return res.send({ data: result });
  } catch (e) {
    return res.status(500).send({ error: 'error' });
  }
};

export default { getVietnamSummary };
