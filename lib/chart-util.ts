export function getCpius(from: string, to: string) {
  return getData("CPIUS", from, to).then((res) => {
    const labels = res.data.dates;
    const values = res.data.values;
    return { labels, values };
  });
}

export function getConfus(from: string, to: string) {
  return getData("CONFUS", from, to).then((res) => {
    const labels = res.data.dates;
    const values = res.data.values;
    return { labels, values };
  });
}

export function getRetaus(from: string, to: string) {
  return getData("RETAUS", from, to).then((res) => {
    const labels = res.data.dates;
    const values = res.data.values;
    return { labels, values };
  });
}

export function getSentus(from: string, to: string) {
  return getData("SENTUS", from, to).then((res) => {
    const ave = calculateAverage(res.data.values);
    return ave;
  });
}

export function getPopus(from: string, to: string) {
  return getData("POPUS", from, to).then((res) => {
    const sum = res.data.values.reduce((a: number, b: number) => a + b, 0);
    return sum;
  });
}

function getData(code: string, from: string, to: string) {
  return fetch(`https://www.econdb.com/api/series/${code}/?from=
  ${from}&to=${to}&format=json`)
    .then((response) => response.json())
    .then((data) => data);
}

function calculateAverage(arr: number[]) {
  let result = arr.reduce((a: number, b: number) => a + b, 0) / arr.length;
  result = Number(result.toFixed(2));
  return result;
}
