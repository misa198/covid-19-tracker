import axios from 'axios';
import { covidVnExpressApiUrl } from '../../constants/config';
import { formatVnExpressData } from '../utils/formatApiData';

const getVietnamSummaryVnExpress = async () => {
  const body = await axios.get(covidVnExpressApiUrl);
  const parsedData = formatVnExpressData(body.data as string);
  return parsedData;
};

export default { getVietnamSummaryVnExpress };
