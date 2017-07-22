import React from 'react';
import styled from '../styled';
const icon = ({ color, width, height, size, ...rest }) => (
  <svg fill={color} width={size || width} height={size || height} {...rest} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M528 64h-12.118a48 48 0 0 0-33.941 14.059L384 176v-64c0-26.51-21.49-48-48-48H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h288c26.51 0 48-21.49 48-48v-64l97.941 97.941A48 48 0 0 0 515.882 448H528c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zM352 400c0 8.823-7.178 16-16 16H48c-8.822 0-16-7.177-16-16V112c0-8.823 7.178-16 16-16h288c8.822 0 16 7.177 16 16v288zm192 0c0 8.823-7.178 16-16 16h-12.118a15.895 15.895 0 0 1-11.314-4.686L384 290.745v-69.49l120.568-120.569A15.895 15.895 0 0 1 515.882 96H528c8.822 0 16 7.177 16 16v288z"/></svg>
);
icon.defaultProps = { width: 100, height: 100 };
export default styled(icon);