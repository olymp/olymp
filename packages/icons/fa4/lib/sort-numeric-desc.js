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
      d="M1474 289q0-63-44-116t-103-53q-52 0-83 37t-31 94 36.5 95 104.5 38q50 0 85-27t35-68zm-610 1151q0 12-10 24l-319 319q-10 9-23 9-12 0-23-9l-320-320q-15-16-7-35 8-20 30-20h192v-1376q0-14 9-23t23-9h192q14 0 23 9t9 23v1376h192q14 0 23 9t9 23zm720 238v114h-469v-114h167v-432q0-7 .5-19t.5-17v-16h-2l-7 12q-8 13-26 31l-62 58-82-86 192-185h123v654h165zm30-1331q0 62-13 121.5t-41 114-68 95.5-98.5 65.5-127.5 24.5q-62 0-108-16-24-8-42-15l39-113q15 7 31 11 37 13 75 13 84 0 134.5-58.5t66.5-145.5h-2q-21 23-61.5 37t-84.5 14q-106 0-173-71.5t-67-172.5q0-105 72-178t181-73q123 0 205 94.5t82 252.5z"
      fill={color}
    />
  </svg>);
icon.defaultProps = { width: 100, height: 100 };
export default styled(icon);
