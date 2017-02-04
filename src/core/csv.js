import moment from 'moment';

const SEPERATOR = '|';
const blackList = [
  '__typename',
];

export const jsonToCsv = (items) => {
  const replacer = (key, value) => value === null ? '' : value;
  const header = Object.keys(items[0]).filter(key => blackList.indexOf(key) === -1);
  const csv = items.map(row => header.map((fieldName) => {
    const value = row[fieldName];
    console.log(value, typeof value);
    if (!value) return '';
    if (typeof value === 'string') {
      return value;
    } else if (value instanceof Date) {
      return moment(value).format();
    } else if (typeof value === 'object') {
      return JSON.stringify(value, replacer);
    } return `${value}`;
  }).join(SEPERATOR));
  csv.unshift(header.join(SEPERATOR));
  csv.unshift(`sep=${SEPERATOR}`);
  return csv.join('\r\n');
};

export const jsonToCsvDownload = (json, fileName) => {
  const link = window.document.createElement('a');
  link.setAttribute('href', `data:text/csv;charset=utf-8,%EF%BB%BF${escape(jsonToCsv(json))}`);
  link.setAttribute('download', `${fileName}.csv`);
  link.click();
};

export const csvToJson = (csv) => {
  const lines = csv.split('\n');
  const result = [];
  const headers = lines[0].split(SEPERATOR);
  for (let i = 1; i < lines.length; i++) {
    const obj = {};
    const currentline = lines[i].split(SEPERATOR);
    for (let j = 0; j < headers.length; j++) {
      obj[headers[j]] = currentline[j];
    }
    result.push(obj);
  }
  return result;
};
