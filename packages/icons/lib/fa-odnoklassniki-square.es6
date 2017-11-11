import React from 'react';
import styled from '../styled';
const icon = ({ color, width, height, size, ...rest }) => (
  <svg fill={color} width={size || width} height={size || height} {...rest} viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M1055 580q0 66-46.5 112.5t-112.5 46.5-112.5-46.5-46.5-112.5 46.5-112.5 112.5-46.5 112.5 46.5 46.5 112.5zm214 363q-10-20-28-32t-47.5-9.5-60.5 27.5q-10 8-29 20t-81 32-127 20-124-18-86-36l-27-18q-31-25-60.5-27.5t-47.5 9.5-28 32q-22 45-2 74.5t87 73.5q83 53 226 67l-51 52q-142 142-191 190-22 22-22 52.5t22 52.5l9 9q22 22 52.5 22t52.5-22l191-191q114 115 191 191 22 22 52.5 22t52.5-22l9-9q22-22 22-52.5t-22-52.5l-191-190-52-52q141-14 225-67 67-44 87-73.5t-2-74.5zm-49-363q0-134-95-229t-229-95-229 95-95 229 95 229 229 95 229-95 95-229zm444-164v960q0 119-84.5 203.5t-203.5 84.5h-960q-119 0-203.5-84.5t-84.5-203.5v-960q0-119 84.5-203.5t203.5-84.5h960q119 0 203.5 84.5t84.5 203.5z"/></svg>
);
icon.defaultProps = { width: 100, height: 100 };
icon.displayName = 'FaOdnoklassnikiSquare';
export default styled(icon);