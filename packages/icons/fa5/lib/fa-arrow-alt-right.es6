import React from 'react';
import styled from '../styled';
const icon = ({ color, width, height, size, ...rest }) => (
  <svg fill={color} width={size || width} height={size || height} {...rest} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448.012 512"><path d="M32 212.573C32 201.211 41.211 192 52.572 192h171.437V75.021c0-7.125 8.612-10.695 13.653-5.66l172.303 172.083c8.046 8.036 8.047 21.076 0 29.112L237.662 442.64c-5.041 5.035-13.653 1.464-13.653-5.66V320H52.572C41.211 320 32 310.789 32 299.427v-86.854m-32 0v86.855C0 328.416 23.584 352 52.572 352h139.437v84.979c0 35.507 43.04 53.497 68.266 28.302l172.303-172.083c20.576-20.55 20.58-53.842 0-74.396L260.276 46.719c-25.122-25.091-68.266-7.351-68.266 28.302V160H52.572C23.584 160 0 183.584 0 212.573z"/></svg>
);
icon.defaultProps = { width: 100, height: 100 };
icon.displayName = 'FaArrowAltRight';
export default styled(icon);