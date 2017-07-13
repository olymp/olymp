import React from 'react';
import styled from '../styled';
const icon = ({ color, width, height, size, ...rest }) =>
  (<svg
    width={size || width}
    height={size || height}
    viewBox="0 0 1792 1792"
    {...rest}
  >
    <path
      d="M1493 228q-165-110-359-110-155 0-293 73t-240 200q-75 93-119.5 218t-48.5 266v42q4 141 48.5 266t119.5 218q102 127 240 200t293 73q194 0 359-110-121 108-274.5 168t-322.5 60q-29 0-43-1-175-8-333-82t-272-193-181-281-67-339q0-182 71-348t191-286 286-191 348-71h3q168 1 320.5 60.5t273.5 167.5zm299 668q0 192-77 362.5t-213 296.5q-104 63-222 63-137 0-255-84 154-56 253.5-233t99.5-405q0-227-99-404t-253-234q119-83 254-83 119 0 226 65 135 125 210.5 295t75.5 361z"
      fill={color}
    />
  </svg>);
icon.defaultProps = { width: 100, height: 100 };
export default styled(icon);
