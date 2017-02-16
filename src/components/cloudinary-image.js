import React from 'react';
import cloudinaryUrl from '../core/cloudinary-url';

const sizes = {
  sm: 400,
  md: 800,
  lg: 1200,
  xl: 1600,
};
const getOptions = (value, params, size) => {
  const options = { ...value, ...params, retina: true };
  const width = params.width || value.width;
  const height = params.height || value.height;
  if (params.height && !params.width) options.width = Math.floor(value.width / value.height * params.height);
  if (params.width && !params.height) options.height = Math.floor(value.height / value.width * params.width);
  if (size) {
    return { ...options, width: sizes[size], height: Math.floor(options.width / options.height * sizes[size]) };
  } return options;
};
export default ({ value, srcSet, options = {}, mode, width, ...rest }) => {
  if (!value) return null;
  const url = value.url;
  const params = getOptions(value, options);
  const src = cloudinaryUrl(url, params);
  srcSet = srcSet === true ? Object.keys(sizes).reduce((result, size) => {
    const px = sizes[size];
    if (value.width < px) return result;
    return [...result, `${cloudinaryUrl(url, getOptions(value, options, size)).replace(/,/g, '%2C')} ${px}w`];
  }, []).join(', ') : null;
  if (mode === 'absolute') {
  } else if (mode === 'background') {
  } return (
    <img src={src} srcSet={srcSet} {...rest} width={width || `${params.width}px`} height="auto" />
  );
};
