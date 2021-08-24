export const formatDate = (data: string) => {
  const splitData = data.split('/');
  return `${
    parseInt(splitData[0], 10) < 10 ? '0' + splitData[0] : splitData[0]
  }-${
    parseInt(splitData[1], 10) < 10 ? '0' + splitData[1] : splitData[1]
  }-2021`;
};

export const formatVnExpressData = (data: string) => {
  const lines = data.split('\n');
  return lines.slice(2, lines.length - 1).map((l) => ({
    date: formatDate(l.split('","')[0].slice(1)),
    recovered: parseInt(l.split('","')[24], 10),
    deaths: parseInt(l.split('","')[23], 10),
    confirmed: parseInt(l.split('","')[22], 10),
    curing: parseInt(l.split('","')[21], 10),
  }));
};
