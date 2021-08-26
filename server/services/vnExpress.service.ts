import axios from 'axios';
import { covidVnExpressApiUrl } from '../../constants/config';
import { formatVnExpressData } from '../utils/formatApiData';

const getVietnamStatisticVnExpress = async () => {
  const body = await axios.get(covidVnExpressApiUrl);
  const parsedDate = formatVnExpressData(body.data as string);
  return parsedDate;
};

export default { getVietnamStatisticVnExpress };
