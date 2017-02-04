import Papa from 'papaparse';

export const jsonToCsv = data => Papa.unparse(data.items);

export const jsonToCsvBlob = data => new Blob([jsonToCsv(data)]);

export const jsonToCsvDownload = (data, fileName) => {
  const blob = jsonToCsvBlob(data);
  const a = window.document.createElement('a');
  a.href = window.URL.createObjectURL(blob, { type: 'text/plain' });
  a.download = `${fileName}.csv`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
};

export const csvToJson = csv => Papa.parse(csv);
