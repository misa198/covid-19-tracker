import axios from 'axios';
import { zingVaccineApiUrl } from '../../constants/config';

interface ZingVaccineSummary {
  data: {
    firstRatio: number;
    data: {
      date: string;
      ma7: number;
    }[];
    secondRatio: number;
    first: {
      datas: {
        x: string;
        y: number;
        z: number;
      }[];
      lastUpdated: number;
      today: number;
      total: number;
    };
    second: {
      datas: {
        x: string;
        y: number;
        z: number;
      }[];
      lastUpdated: number;
      today: number;
      total: number;
    };
  };
}

interface DayInjection {
  date: string;
  first: number;
  second: number;
  average: number;
}

interface SummaryInjection {
  date: string;
  first: number;
  second: number;
}

const getVaccineStatistic = async () => {
  const data = (await axios.get(zingVaccineApiUrl)).data as ZingVaccineSummary;
  const dayInjection: DayInjection[] = [];
  const summaryInjection: SummaryInjection[] = [];
  data.data.data.forEach((item, index) => {
    dayInjection.push({
      date: item.date,
      first: data.data.first.datas[index]?.y,
      second: data.data.second.datas[index]?.y,
      average: data.data.data[index]?.ma7,
    });
    summaryInjection.push({
      date: item.date,
      first: data.data.first.datas[index].z,
      second: data.data.second.datas[index].z,
    });
  });
  return {
    dayInjection,
    summaryInjection,
    firstTotal: data.data.first.total,
    firstRatio: data.data.firstRatio,
    secondTotal: data.data.second.total,
    secondRatio: data.data.secondRatio,
  };
};

export default { getVaccineStatistic };
