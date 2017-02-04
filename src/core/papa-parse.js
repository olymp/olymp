import Papa from 'papaparse';

export const jsonToCsvDownload = (blob) => {
  const a = window.document.createElement('a');
  a.href = window.URL.createObjectURL(blob, { type: 'text/plain' });
  a.download = 'material.csv';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
};

export const jsonToCsv = data => Papa.unparse(data.items);

export const jsonToCsvBlob = data => new Blob([jsonToCsv(data)]);

export const csvToJson = (data) => {
  const data = Papa.parse(csv);
  return data;
};
