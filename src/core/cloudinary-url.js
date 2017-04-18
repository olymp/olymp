// http://res.cloudinary.com/demo/image/upload/f_auto,q_auto,w_250,h_250,c_fit/sample.jpg
const defaultState = 'f_auto,q_auto,fl_lossy';

export default (url, { mode, effect, border, width, height, cropX, cropY, quality, blur, retina = true, originWidth, originHeight, crop: crop0 } = {}, crop) => {
  if (!crop) crop = crop0;
  if (!mode) mode = 'fill';
  let part = defaultState;

  // URL
  if (!url) return url;
  if (url.indexOf('http://res.cloudinary.com/') === 0) {
    url = url.split('ttp://res.cloudinary.com/').join('ttps://res.cloudinary.com/');
  }
  if (url.indexOf('https://res.cloudinary.com/') !== 0) return url;

  // RETINA
  // if (retina && width * 2 <= originWidth) width *= 2;
  // if (retina && height * 2 <= originHeight) height *= 2;

  // CROP
  if (crop) {
    part = `x_${crop[2]},y_${crop[3]},w_${crop[0]},h_${crop[1]},c_crop/${part}`;
  }

  // SIZE
  if (width || height) {
    part = `c_${mode}/${part}`;
    if (height) part = `h_${height},${part}`;
    if (width) part = `w_${width},${part}`;
  }

  // BLUR
  if (blur) {
    part += `,e_blur:${blur}`;
  }

  // BORDER
  if (border) {
    Object.keys(border).map((key) => {
      part = `bo_${border[key]}px_solid_${key}/${part}`;
    });
  }

  // EFFECT
  if (effect) {
    part = `e_${effect}/${part}`;
  }

  // QUALITY
  if (quality) {
    part += `,q_${quality}`;
  } else if (part === defaultState) {
    part += ',q_75';
  }

  return url.replace('/upload/', `/upload/${part}/`);
};
