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
      d="M1293 1139l102-102q19-19 19-45t-19-45l-454-454q-19-19-45-19t-45 19l-454 454q-19 19-19 45t19 45l102 102q19 19 45 19t45-19l307-307 307 307q19 19 45 19t45-19zm371-243q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"
      fill={color}
    />
  </svg>;
icon.defaultProps = { width: 100, height: 100 };
export default styled(icon);
