import React from 'react';
import styled from '../styled';
const icon = ({ color, width, height, size, ...rest }) => (
  <svg fill={color} width={size || width} height={size || height} {...rest} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M128 71.594H44.015V468c0 6.627-5.373 12-12 12H12c-6.627 0-12-5.373-12-12V44c0-6.627 5.373-12 12-12h117.099c80.376 0 138.425 50.316 138.425 128.197V356c0 6.65-5.408 12.031-12.057 12l-17.288-.082c-6.605-.031-11.942-5.395-11.942-12V160c0-55.236-38.912-88.406-98.237-88.406zM372 32h-20.015c-6.627 0-12 5.373-12 12v396.406H256c-59.325 0-98.237-33.17-98.237-88.406V156.082c0-6.605-5.337-11.968-11.942-12L128.533 144c-6.649-.032-12.057 5.35-12.057 12v195.803c0 77.88 58.049 128.197 138.425 128.197H372c6.627 0 12-5.373 12-12V44c0-6.627-5.373-12-12-12z"/></svg>
);
icon.defaultProps = { width: 100, height: 100 };
icon.displayName = 'FaShekelSign';
export default styled(icon);