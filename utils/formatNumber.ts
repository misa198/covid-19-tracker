export function formatNumber(number: number) {
  const temp = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'VND',
  }).format(number);
  return temp.slice(1, temp.length);
}
