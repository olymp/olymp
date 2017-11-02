import React from 'react';
import styled from '../styled';
const icon = ({ color, width, height, size, ...rest }) => (
  <svg fill={color} width={size || width} height={size || height} {...rest} viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M384 832h160v-224h-160v224zm837 332v-92q-104 36-243 38-135 1-259.5-46.5t-220.5-122.5l1 96q88 80 212 128.5t272 47.5q129 0 238-49zm-581-332h640v-224h-640v224zm1152-32q0 187-99 352 89 102 89 229 0 157-129.5 268t-313.5 111q-122 0-225-52.5t-161-140.5q-19 1-57 1t-57-1q-58 88-161 140.5t-225 52.5q-184 0-313.5-111t-129.5-268q0-127 89-229-99-165-99-352 0-209 120-385.5t326.5-279.5 449.5-103 449.5 103 326.5 279.5 120 385.5z"/></svg>
);
icon.defaultProps = { width: 100, height: 100 };
icon.displayName = 'FaWpbeginner';
export default styled(icon);