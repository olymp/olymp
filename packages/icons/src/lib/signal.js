import React from 'react';
import styled from '../styled';
const icon = ({ color, width, height, size, ...rest }) =>
  <svg
    width={size || width}
    height={size || height}
    viewBox="0 0 1792 1792"
    {...rest}
  >
    <path
      d="M256 1440v192q0 14-9 23t-23 9h-192q-14 0-23-9t-9-23v-192q0-14 9-23t23-9h192q14 0 23 9t9 23zm384-128v320q0 14-9 23t-23 9h-192q-14 0-23-9t-9-23v-320q0-14 9-23t23-9h192q14 0 23 9t9 23zm384-256v576q0 14-9 23t-23 9h-192q-14 0-23-9t-9-23v-576q0-14 9-23t23-9h192q14 0 23 9t9 23zm384-384v960q0 14-9 23t-23 9h-192q-14 0-23-9t-9-23v-960q0-14 9-23t23-9h192q14 0 23 9t9 23zm384-512v1472q0 14-9 23t-23 9h-192q-14 0-23-9t-9-23v-1472q0-14 9-23t23-9h192q14 0 23 9t9 23z"
      fill={color}
    />
  </svg>;
icon.defaultProps = { width: 100, height: 100 };
export default styled(icon);
