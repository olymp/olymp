import React from 'react';
import styled from '../styled';
const icon = ({ color, width, height, size, ...rest }) => (
  <svg fill={color} width={size || width} height={size || height} {...rest} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M267.427 64C278.789 64 288 73.211 288 84.572v171.437h116.979c7.125 0 10.695 8.612 5.66 13.653L238.556 441.965c-8.036 8.046-21.076 8.047-29.112 0L37.36 269.662c-5.035-5.041-1.464-13.653 5.66-13.653H160V84.572C160 73.211 169.211 64 180.573 64h86.854m0-32h-86.855C151.584 32 128 55.584 128 84.572v139.437H43.021c-35.507 0-53.497 43.04-28.302 68.266l172.083 172.303c20.55 20.576 53.842 20.58 74.396 0l172.083-172.303c25.091-25.122 7.351-68.266-28.302-68.266H320V84.572C320 55.584 296.416 32 267.427 32z"/></svg>
);
icon.defaultProps = { width: 100, height: 100 };
export default styled(icon);