import moment from 'moment';
import { Plain, Raw } from 'slate';

const SEPERATOR = '|';
export const collectionToCsv = (collection, items) => {
  const fields = collection.fields.filter(field => {
    if (field.type.name === 'Image') return true;
    return field.type.kind !== 'OBJECT';
  });
  return items.reduce((csv, item, index) => {
    const lines = [];
    if (!index) {
      lines.push(`sep=${SEPERATOR}`);
      lines.push(`${fields.map(({ name }) => name).join(SEPERATOR)}`);
    }
    lines.push(
      fields
        .map(({ type, name }) => {
          if (type.name === 'String') {
            return item[name];
          } else if (['Date', 'DateTime'].includes(type.name)) {
            return moment(item[name]).isValid()
              ? moment(item[name]).format('YYYY-MM-DD HH:mm:ss')
              : '';
          } else if (type.name === 'Boolean') {
            return !type.name ? 'false' : 'true';
          } else if (type.name === 'Image') {
            return item[name] ? item[name].url : '';
          } else if (type.kind === 'LIST') {
            if (type.ofType.name === 'String') {
              return (item[name] || []).join(';');
            } else if (type.ofType.kind === 'OBJECT') {
              if (Array.isArray(item[name])) {
                return item[name].map(x => x.name || '').join(';');
              }

              return item[name].name;
            }
          } else if (type.name === 'Json') {
            if (!item[name]) return '';
            const raw = Raw.deserialize(
              JSON.parse(JSON.stringify(item[name])),
              { terse: true }
            );
            return Plain.serialize(raw).split('\n').join(' ');
          }
          return [undefined, null].includes(item[name])
            ? ''
            : JSON.stringify(item[name]);
        })
        .join(SEPERATOR)
    );
    return `${csv}${lines.join('\r\n')}\r\n`;
  }, '');
};

export const collectionToCsvDownload = (collection, json) => {
  const link = window.document.createElement('a');
  link.setAttribute(
    'href',
    `data:text/csv;charset=utf-8,%EF%BB%BF${escape(
      collectionToCsv(collection, json)
    )}`
  );
  link.setAttribute('download', `${collection.name}.csv`);
  link.click();
};

export const collectionToJson = (collection, csv) => {
  throw new Error('Not implemented');
  /* const lines = csv.split('\n');
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
  return result; */
};
