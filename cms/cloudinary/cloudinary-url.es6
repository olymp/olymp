export default (value, options) => {
  const newOptions = {
    c: 'fill',
    f: 'auto',
    q: 'auto:eco',
    fl: 'lossy',
    dpr: 2,
    ...options,
  };

  if (!value || !value.url) {
    return '';
  }

  const newUrl =
    value.url.indexOf('http://res.cloudinary.com/') === 0
      ? `https${value.url.substr(4)}`
      : value.url;

  const crop =
    value.crop && value.crop.length
      ? `w_${value.crop[0]},h_${value.crop[1]},x_${value.crop[2]},y_${value.crop[3]},c_crop/`
      : '';

  const query = Object.keys(newOptions)
    .map(key => `${key}_${newOptions[key]}`)
    .join(',');

  if (newUrl.indexOf('/upload/') !== -1) {
    return newUrl.replace('/upload/', `/upload/${crop}${query}/`);
  } else if (newUrl.indexOf('/fetch/') !== -1) {
    return newUrl.replace('/fetch/', `/fetch/${crop}${query}/`);
  }
};
