import React from 'react';
import styled from '../styled';
const icon = ({ color, width, height, size, ...rest }) => (
  <svg fill={color} width={size || width} height={size || height} {...rest} viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M1168 1216q0 33-23.5 56.5t-56.5 23.5-56.5-23.5-23.5-56.5 23.5-56.5 56.5-23.5 56.5 23.5 23.5 56.5zm256 0q0 33-23.5 56.5t-56.5 23.5-56.5-23.5-23.5-56.5 23.5-56.5 56.5-23.5 56.5 23.5 23.5 56.5zm112 160v-320q0-13-9.5-22.5t-22.5-9.5h-1216q-13 0-22.5 9.5t-9.5 22.5v320q0 13 9.5 22.5t22.5 9.5h1216q13 0 22.5-9.5t9.5-22.5zm-1230-480h1180l-157-482q-4-13-16-21.5t-26-8.5h-782q-14 0-26 8.5t-16 21.5zm1358 160v320q0 66-47 113t-113 47h-1216q-66 0-113-47t-47-113v-320q0-25 16-75l197-606q17-53 63-86t101-33h782q55 0 101 33t63 86l197 606q16 50 16 75z"/></svg>
);
icon.defaultProps = { width: 100, height: 100 };
icon.displayName = 'FaHddO';
export default styled(icon);