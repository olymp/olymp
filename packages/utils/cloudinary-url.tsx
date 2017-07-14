// http://res.cloudinary.com/demo/image/upload/f_auto,q_auto,w_250,h_250,c_fit/sample.jpg
const defaultState = 'f_auto,q_auto,fl_lossy';

export default (
  url,
  {
    mode,
    maxWidth,
    effect,
    maxHeight,
    border,
    width,
    height,
    cropX,
    cropY,
    quality,
    blur,
    retina,
    crop: crop0,
    radius,
  } = {},
  crop
) => {
  if (!crop) {
    crop = crop0;
  }
  if (!mode) {
    mode = 'fill';
  }

  // RETINA
  // if (retina && width) width *= 2; geht so nicht, da cloudinary einen Fehler wirft, wenn die angefragt Größe > als die tatsächlich ist
  // if (retina && height) height *= 2;
  if (retina && maxWidth && maxWidth * 2 < width) {
    maxWidth *= 2;
  }
  if (retina && maxHeight && maxHeight * 2 < height) {
    maxHeight *= 2;
  }

  if (!url) {
    return url;
  }
  if (crop) {
    width = crop[0];
    height = crop[1];
    cropX = crop[2];
    cropY = crop[3];
  }
  if (url.indexOf('http://res.cloudinary.com/') === 0) {
    url = url
      .split('ttp://res.cloudinary.com/')
      .join('ttps://res.cloudinary.com/');
  }
  if (url.indexOf('https://res.cloudinary.com/') !== 0) {
    return url;
  }
  let part = defaultState;
  if (cropX !== undefined && cropY !== undefined) {
    part = `x_${cropX},y_${cropY},w_${width},h_${height},c_crop/${part}`;
  } else if (width && height) {
    part = `w_${width},h_${height},c_${mode}/${part}`;
  }

  if (maxWidth || maxHeight) {
    if (maxWidth) {
      part += `,w_${maxWidth}`;
    }
    if (maxHeight) {
      part += `,h_${maxHeight}`;
    }
    part += `,c_${mode}`;
  }
  if (quality) {
    part += `,q_${quality}`;
  }
  if (blur) {
    part += `,e_blur:${blur}`;
  }
  if (part === defaultState) {
    part += ',q_75';
  }
  if (radius) {
    part += `,r_${radius}`;
  }
  if (border) {
    Object.keys(border).map((key) => {
      part = `bo_${border[key]}px_solid_${key}/${part}`;
    });
  }
  if (effect) {
    part = `e_${effect}/${part}`;
  }

  return url.replace('/upload/', `/upload/${part}/`);
};