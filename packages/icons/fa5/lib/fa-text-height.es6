import React from 'react';
import styled from '../styled';
const icon = ({ color, width, height, size, ...rest }) => (
  <svg fill={color} width={size || width} height={size || height} {...rest} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 116V44c0-6.627 5.373-12 12-12h264c6.627 0 12 5.373 12 12v72c0 6.627-5.373 12-12 12h-8.48c-6.627 0-12-5.373-12-12V64h-94.965v384H204c6.627 0 12 5.373 12 12v8c0 6.627-5.373 12-12 12H84c-6.627 0-12-5.373-12-12v-8c0-6.627 5.373-12 12-12h43.444V64H32.48v52c0 6.627-5.373 12-12 12H12c-6.627 0-12-5.373-12-12zm393.87-81.123l-39.984 48.001C349.914 87.648 352.49 96 360.03 96H384v320h-23.998c-6.841 0-10.434 7.971-6.143 13.122l39.985 48.001c3.193 3.833 9.089 3.838 12.287 0l39.984-48.001c3.973-4.77 1.396-13.122-6.143-13.122H416V96h23.998c6.841 0 10.434-7.971 6.143-13.122l-39.985-48.001c-3.192-3.834-9.088-3.838-12.286 0z"/></svg>
);
icon.defaultProps = { width: 100, height: 100 };
icon.displayName = 'FaTextHeight';
export default styled(icon);