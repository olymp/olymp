import React from 'react';
import styled from '../styled';
const icon = ({ color, width, height, size, ...rest }) => (
  <svg fill={color} width={size || width} height={size || height} {...rest} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48H48C21.5 32 0 53.5 0 80zm400-16c8.8 0 16 7.2 16 16v352c0 8.8-7.2 16-16 16H48c-8.8 0-16-7.2-16-16V80c0-8.8 7.2-16 16-16h352zm-208 96l96 96-96 96V160m-32 192c0 28.4 34.5 42.8 54.6 22.6l96-96c12.5-12.5 12.5-32.8 0-45.3l-96-96c-20.1-20.1-54.6-5.9-54.6 22.6V352z"/></svg>
);
icon.defaultProps = { width: 100, height: 100 };
icon.displayName = 'FaCaretSquareRight';
export default styled(icon);