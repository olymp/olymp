import React from 'react';
import styled from '../styled';
const icon = ({ color, width, height, size, ...rest }) => (
  <svg fill={color} width={size || width} height={size || height} {...rest} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path d="M252.478 408.503l-99.974 99.975c-4.697 4.697-12.311 4.697-17.008 0l-99.974-99.975c-4.696-4.697-4.696-12.311 0-17.008l8.503-8.503c4.697-4.697 12.311-4.697 17.007 0L126 447.959V36H24.024a11.996 11.996 0 0 1-8.485-3.515l-12-12C-4.021 12.926 1.333 0 12.024 0H138c13.255 0 24 10.745 24 24v423.959l64.967-64.966c4.697-4.697 12.311-4.697 17.007 0l8.503 8.503c4.697 4.696 4.697 12.31.001 17.007z"/></svg>
);
icon.defaultProps = { width: 100, height: 100 };
export default styled(icon);