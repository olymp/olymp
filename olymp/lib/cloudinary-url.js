'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
// http://res.cloudinary.com/demo/image/upload/f_auto,q_auto,w_250,h_250,c_fit/sample.jpg
var defaultState = 'f_auto,q_auto,fl_lossy';

exports.default = function (url) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      maxWidth = _ref.maxWidth,
      maxHeight = _ref.maxHeight,
      width = _ref.width,
      height = _ref.height,
      cropX = _ref.cropX,
      cropY = _ref.cropY,
      quality = _ref.quality,
      blur = _ref.blur;

  var crop = arguments[2];

  if (!url) return url;
  if (crop) {
    width = crop[0];
    height = crop[1];
    cropX = crop[2];
    cropY = crop[3];
  }
  if (url.indexOf('http://res.cloudinary.com/') === 0) {
    url = url.split('ttp://res.cloudinary.com/').join('ttps://res.cloudinary.com/');
  }
  if (url.indexOf('https://res.cloudinary.com/') !== 0) return url;
  var part = defaultState;
  if (cropX !== undefined && cropY !== undefined) {
    part = 'x_' + cropX + ',y_' + cropY + ',w_' + width + ',h_' + height + ',c_crop/' + part;
  } else if (width && height) {
    part = 'w_' + width + ',h_' + height + ',c_fill/' + part;
  }

  if (maxWidth || maxHeight) {
    if (maxWidth) part += ',w_' + maxWidth;
    if (maxHeight) part += ',h_' + maxHeight;
    part += ',c_fill';
  }
  if (quality) {
    part += ',q_' + quality;
  }
  if (blur) {
    part += ',e_blur:' + blur;
  }
  if (part === defaultState) {
    part += ',q_75';
  }

  return url.replace('/upload/', '/upload/' + part + '/');
};