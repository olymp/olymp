import React from 'react';
import styled from '../styled';
const icon = ({ color, width, height, size, ...rest }) => (
  <svg fill={color} width={size || width} height={size || height} {...rest} viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M1376 128q119 0 203.5 84.5t84.5 203.5v960q0 119-84.5 203.5t-203.5 84.5h-725q85-122 108-210 9-34 53-209 21 39 73.5 67t112.5 28q181 0 295.5-147.5t114.5-373.5q0-84-35-162.5t-96.5-139-152.5-97-197-36.5q-104 0-194.5 28.5t-153 76.5-107.5 109.5-66.5 128-21.5 132.5q0 102 39.5 180t116.5 110q13 5 23.5 0t14.5-19q10-44 15-61 6-23-11-42-50-62-50-150 0-150 103.5-256.5t270.5-106.5q149 0 232.5 81t83.5 210q0 168-67.5 286t-173.5 118q-60 0-97-43.5t-23-103.5q8-34 26.5-92.5t29.5-102 11-74.5q0-49-26.5-81.5t-75.5-32.5q-61 0-103.5 56.5t-42.5 139.5q0 72 24 121l-98 414q-24 100-7 254h-183q-119 0-203.5-84.5t-84.5-203.5v-960q0-119 84.5-203.5t203.5-84.5h960z"/></svg>
);
icon.defaultProps = { width: 100, height: 100 };
icon.displayName = 'FaPinterestSquare';
export default styled(icon);