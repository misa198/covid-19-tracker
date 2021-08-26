import axios from 'axios';
import {
  covidProvinceVnExpressApiUrl,
  covidVnExpressApiUrl,
} from '../../constants/config';
import {
  formatVnExpressData,
  formatVnExpressProvinceData,
} from '../utils/formatApiData';

const getVietnamStatisticVnExpress = async () => {
  const body = await axios.get(covidVnExpressApiUrl);
  const parsedDate = formatVnExpressData(body.data as string);
  return parsedDate;
};

const getProvinceStatisticVnExpress = async () => {
  const body = await axios.get(covidProvinceVnExpressApiUrl);
  const parsedDate = formatVnExpressProvinceData(body.data as string);
  return parsedDate;
};

export default { getVietnamStatisticVnExpress, getProvinceStatisticVnExpress };
