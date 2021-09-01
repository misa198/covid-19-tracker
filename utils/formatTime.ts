export function formatTime(time: Date) {
  const localTime = new Date(time.getTime() - 60 * 60 * 6 * 1000);
  const timePaths = localTime.toLocaleTimeString().split(':');
  const datePaths = localTime.toLocaleDateString().split('/');
  return `${
    parseInt(timePaths[0], 10) < 10 ? '0' + timePaths[0] : timePaths[0]
  }:${timePaths[1]} ${timePaths[2].split(' ')[1]} ${datePaths[1]}/${
    datePaths[0]
  }/${datePaths[2]}`;
}
