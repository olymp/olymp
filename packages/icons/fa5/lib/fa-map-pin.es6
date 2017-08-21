import React from 'react';
import styled from '../styled';
const icon = ({ color, width, height, size, ...rest }) => (
  <svg fill={color} width={size || width} height={size || height} {...rest} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M304 144C304 65.097 240.54 1.016 161.876.012 82.447-1.002 16.017 64.534 16 143.969c-.016 74.134 55.992 135.18 128 143.142v195.807l10.452 25.368c2.041 4.952 9.055 4.952 11.095 0L176 482.917V287.111C247.998 279.15 304 218.12 304 144zM160 256c-61.898 0-112-50.092-112-112C48 82.102 98.092 32 160 32c61.898 0 112 50.092 112 112 0 61.898-50.092 112-112 112zm8-176c0 8.837-7.163 16-16 16-22.056 0-40 17.944-40 40 0 8.837-7.163 16-16 16s-16-7.163-16-16c0-39.701 32.299-72 72-72 8.837 0 16 7.163 16 16z"/></svg>
);
icon.defaultProps = { width: 100, height: 100 };
icon.displayName = 'FaMapPin';
export default styled(icon);