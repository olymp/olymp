import moment from 'moment';

const SEPERATOR = '|';

export const collectionToCsv = (collection, items) => {
  const replacer = (key, value) => value === null ? '' : value;
  const csv = items.reduce((csv, item, index) => {
    const lines = [];
    if (!index) {
      lines.push(`sep=${SEPERATOR}`);
      lines.push(`${collection.fields.map(({ name }) => name).join(SEPERATOR)}`);
    }
    lines.push(collection.fields.map(({ type, name }) => {
      if (type.name === 'String') {
        return item[name];
      } return undefined;
    }).filter(x => x !== undefined).join(SEPERATOR));
    return csv.join('\r\n');
  }, '');
};

export const collectionToCsvDownload = (collection, json, fileName) => {
  const link = window.document.createElement('a');
  link.setAttribute('href', `data:text/csv;charset=utf-8,%EF%BB%BF${escape(collectionToCsv(collection, json))}`);
  link.setAttribute('download', `${fileName}.csv`);
  link.click();
};

export const collectionToJson = (collection, csv) => {
  throw new Error('Not implemented');
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
