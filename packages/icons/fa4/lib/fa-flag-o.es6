import React from 'react';
import styled from '../styled';
const icon = ({ color, width, height, size, ...rest }) => (
  <svg fill={color} width={size || width} height={size || height} {...rest} viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M1664 1045v-616q-169 91-306 91-82 0-145-32-100-49-184-76.5t-178-27.5q-173 0-403 127v599q245-113 433-113 55 0 103.5 7.5t98 26 77 31 82.5 39.5l28 14q44 22 101 22 120 0 293-92zm-1344-789q0 35-17.5 64t-46.5 46v1266q0 14-9 23t-23 9h-64q-14 0-23-9t-9-23v-1266q-29-17-46.5-46t-17.5-64q0-53 37.5-90.5t90.5-37.5 90.5 37.5 37.5 90.5zm1472 64v763q0 39-35 57-10 5-17 9-218 116-369 116-88 0-158-35l-28-14q-64-33-99-48t-91-29-114-14q-102 0-235.5 44t-228.5 102q-15 9-33 9-16 0-32-8-32-19-32-56v-742q0-35 31-55 35-21 78.5-42.5t114-52 152.5-49.5 155-19q112 0 209 31t209 86q38 19 89 19 122 0 310-112 22-12 31-17 31-16 62 2 31 20 31 55z"/></svg>
);
icon.defaultProps = { width: 100, height: 100 };
icon.displayName = 'FaFlagO';
export default styled(icon);