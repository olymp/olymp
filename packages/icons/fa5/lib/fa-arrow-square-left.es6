import React from 'react';
import styled from '../styled';
const icon = ({ color, width, height, size, ...rest }) => (
  <svg fill={color} width={size || width} height={size || height} {...rest} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M211.5 379.5l-115.1-115c-4.7-4.7-4.7-12.3 0-17l115.1-115c4.7-4.7 12.3-4.7 17 0l6.9 6.9c4.7 4.7 4.7 12.5-.2 17.1L149.7 239H340c6.6 0 12 5.4 12 12v10c0 6.6-5.4 12-12 12H149.7l85.6 82.5c4.8 4.7 4.9 12.4.2 17.1l-6.9 6.9c-4.8 4.7-12.4 4.7-17.1 0zM400 480H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h352c26.5 0 48 21.5 48 48v352c0 26.5-21.5 48-48 48zm0-32c8.8 0 16-7.2 16-16V80c0-8.8-7.2-16-16-16H48c-8.8 0-16 7.2-16 16v352c0 8.8 7.2 16 16 16h352z"/></svg>
);
icon.defaultProps = { width: 100, height: 100 };
icon.displayName = 'FaArrowSquareLeft';
export default styled(icon);