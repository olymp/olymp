export default (text, beautify) => {
  if (beautify) text = text.split('/').join('-').split('&').join('-');
  return encodeURIComponent(text.split(' ').join('-').toLowerCase())
    .split('%C3%A4').join('ä')
    .split('%C3%B6').join('ö')
    .split('%C3%BC').join('ü')
    .split('%C3%A4').join('Ä')
    .split('%C3%B6').join('Ö')
    .split('%C3%BC').join('Ü');
};
