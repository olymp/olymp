import React from 'react';
import styled from '../styled';
const icon = ({ color, width, height, size, ...rest }) => (
  <svg width={size || width} height={size || height} viewBox="0 0 1792 1792" {...rest}><path d="M1632 1472q0 26-19 45t-45 19h-462q1 17 6 87.5t5 108.5q0 25-18 42.5t-43 17.5h-320q-25 0-43-17.5t-18-42.5q0-38 5-108.5t6-87.5h-462q-26 0-45-19t-19-45 19-45l402-403h-229q-26 0-45-19t-19-45 19-45l402-403h-197q-26 0-45-19t-19-45 19-45l384-384q19-19 45-19t45 19l384 384q19 19 19 45t-19 45-45 19h-197l402 403q19 19 19 45t-19 45-45 19h-229l402 403q19 19 19 45z" fill={color}/></svg>
);
icon.defaultProps = { width: 100, height: 100 };
export default styled(icon);