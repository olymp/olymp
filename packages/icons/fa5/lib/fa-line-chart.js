import React from 'react';
import styled from '../styled';
const icon = ({ color, width, height, size, ...rest }) => (
  <svg fill={color} width={size || width} height={size || height} {...rest} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M500 416c6.6 0 12 5.4 12 12v8c0 6.6-5.4 12-12 12H12c-6.6 0-12-5.4-12-12V76c0-6.6 5.4-12 12-12h8c6.6 0 12 5.4 12 12v340h468zm-20-295v94c0 29.3-35.6 44-56.3 23.3L388 202.6l-95.8 95.8c-2.3 2.3-6.1 2.3-8.5 0L224.3 239 111.8 358.6c-2.3 2.4-6.1 2.5-8.5.3l-14.6-13.7c-2.4-2.3-2.5-6.1-.3-8.5l131-139.1c2.3-2.5 6.2-2.5 8.6-.1l60 60 77.4-77.4-35.7-35.7c-20.8-20.8-6-56.3 23.3-56.3h94c18.2-.1 33 14.7 33 32.9zm-28.8 0c0-2.3-1.8-4.1-4.1-4.1h-94c-3.7 0-5.5 4.5-2.9 7l94 94c2.6 2.6 7 .8 7-2.9v-94z"/></svg>
);
icon.defaultProps = { width: 100, height: 100 };
export default styled(icon);