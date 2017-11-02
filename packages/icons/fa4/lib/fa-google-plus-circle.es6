import React from 'react';
import styled from '../styled';
const icon = ({ color, width, height, size, ...rest }) => (
  <svg fill={color} width={size || width} height={size || height} {...rest} viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M1045 905q0-33-6-64h-362v132h217q-12 76-74.5 120.5t-142.5 44.5q-99 0-169-71.5t-70-170.5 70-170.5 169-71.5q93 0 153 59l104-101q-108-100-257-100-160 0-272 112.5t-112 271.5 112 271.5 272 112.5q165 0 266.5-105t101.5-270zm345 46h109v-110h-109v-110h-110v110h-110v110h110v110h110v-110zm274-55q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"/></svg>
);
icon.defaultProps = { width: 100, height: 100 };
icon.displayName = 'FaGooglePlusCircle';
export default styled(icon);