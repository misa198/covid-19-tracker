import { VietnamStatistic } from '../../models/VietnamStatistic';
import { ProvinceStatistic } from '../../models/ProvinceStatistic';

export const formatDate = (data: string) => {
  const splitData = data.split('/');
  return `${
    parseInt(splitData[0], 10) < 10 ? '0' + splitData[0] : splitData[0]
  }-${
    parseInt(splitData[1], 10) < 10 ? '0' + splitData[1] : splitData[1]
  }-2021`;
};

const formatDateApi = (data: string) => {
  const dateString = data.split('"')[1];
  const splitData = dateString.split('/');
  return `${
    parseInt(splitData[0], 10) < 10 ? '0' + splitData[0] : splitData[0]
  }-${parseInt(splitData[1], 10) < 10 ? '0' + splitData[1] : splitData[1]}`;
};

const toNumber = (value: string) => {
  try {
    return parseInt(value.split('"')[1]) || 0;
  } catch (e) {
    return 0;
  }
};

export const formatVnExpressData = (data: string) => {
  const lines = data.split('\n');
  const result: VietnamStatistic[] = [];

  lines.forEach((line, index) => {
    if (index > 0) {
      const lineData = line.split(',');
      if (!toNumber(lineData[9])) return;
      const newItem = {
        date: formatDateApi(lineData[0]),
        newDomesticConfirmed: toNumber(lineData[1]),
        totalDomesticConfirmed: toNumber(lineData[2]),
        blockadeConfirmed: toNumber(lineData[3]),
        communityConfirmed: toNumber(lineData[4]),
        importedConfirmed: toNumber(lineData[5]),
        newDeaths: toNumber(lineData[6]),
        newRecovered: toNumber(lineData[7]),
        newConfirmed: toNumber(lineData[8]),
        newCuring: toNumber(lineData[20]),
        totalConfirmed: toNumber(lineData[9]),
        totalDeaths: toNumber(lineData[10]),
        totalRecovered: toNumber(lineData[11]),
        totalCuring: toNumber(lineData[21]),
        vaccineFund: toNumber(lineData[12]),
        newDonation: toNumber(lineData[13]),
        totalConfirmed2020: toNumber(lineData[22]),
        totalDeaths2020: toNumber(lineData[23]),
        totalRecovered2020: toNumber(lineData[24]),
      };

      result.push(newItem);
    }
  });
  return result;
};

export const formatVnExpressProvinceData = (data: string) => {
  const lines = data.split('\n');
  const result: ProvinceStatistic[] = [];

  lines.forEach((line, index) => {
    if (index > 0) {
      const lineData = line.split(',');
      const id = toNumber(lineData[0]);
      if (id !== 46 && Boolean(lineData[2])) {
        const newItem = {
          id,
          name: lineData[2].split('"')[1],
          confirmed: toNumber(lineData[3]),
          newConfirmed: toNumber(lineData[4]),
          deaths: toNumber(lineData[20]),
        };
        result.push(newItem);
      }
    }
  });

  return result;
};
