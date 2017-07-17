import React from 'react';
import styled from '../styled';
const icon = ({ color, width, height, size, ...rest }) => (
  <svg fill={color} width={size || width} height={size || height} {...rest} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path d="M3.515 168.97l7.07 7.071c4.686 4.686 12.284 4.686 16.971 0L111 92.113V468c0 6.627 5.373 12 12 12h10c6.627 0 12-5.373 12-12V92.113l83.444 83.928c4.686 4.686 12.284 4.686 16.971 0l7.07-7.071c4.686-4.686 4.686-12.284 0-16.97l-116-116.485c-4.686-4.686-12.284-4.686-16.971 0L3.515 152c-4.687 4.686-4.687 12.284 0 16.97z"/></svg>
);
icon.defaultProps = { width: 100, height: 100 };
export default styled(icon);