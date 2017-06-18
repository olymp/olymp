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
      d="M1594 1103q-32 80-76 138t-91 88.5-99 46.5-101.5 14.5-96.5-8.5-86.5-22-69.5-27.5-46-22.5l-17-10q-113 228-289.5 359.5t-384.5 132.5q-19 0-32-13t-13-32 13-31.5 32-12.5q173-1 322.5-107.5t251.5-294.5q-36 14-72 23t-83 13-91-2.5-93-28.5-92-59-84.5-100-74.5-146q114-47 214-57t167.5 7.5 124.5 56.5 88.5 77 56.5 82q53-131 79-291-7 1-18 2.5t-46.5 2.5-69.5-.5-81.5-10-88.5-23-84-42.5-75-65-54.5-94.5-28.5-127.5q70-28 133.5-36.5t112.5 1 92 30 73.5 50 56 61 42 63 27.5 56 16 39.5l4 16q12-122 12-195-8-6-21.5-16t-49-44.5-63.5-71.5-54-93-33-112.5 12-127 70-138.5q73 25 127.5 61.5t84.5 76.5 48 85 20.5 89-.5 85.5-13 76.5-19 62-17 42l-7 15q1 5 1 50.5t-1 71.5q3-7 10-18.5t30.5-43 50.5-58 71-55.5 91.5-44.5 112-14.5 132.5 24q-2 78-21.5 141.5t-50 104.5-69.5 71.5-81.5 45.5-84.5 24-80 9.5-67.5-1-46.5-4.5l-17-3q-23 147-73 283 6-7 18-18.5t49.5-41 77.5-52.5 99.5-42 117.5-20 129 23.5 137 77.5z"
      fill={color}
    />
  </svg>;
icon.defaultProps = { width: 100, height: 100 };
export default styled(icon);
