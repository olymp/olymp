import React from 'react';
import styled from '../styled';
const icon = ({ color, width, height, size, ...rest }) => (
  <svg fill={color} width={size || width} height={size || height} {...rest} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 32c64.9 0 109.1 65.6 85.7 125.4l-16 41c-1.7 4.3 1.9 8.7 6.4 8.1l43.7-5.8c55.4-7.3 103.8 35.7 104.2 90.5.4 51.7-42.8 93.2-94.5 92.7-41-.4-54.6-11.3-87.2-45.2-3.7-3.9-10.3-1.2-10.3 4.2v25c0 40.6 0 52.6 29.1 89.3 7.3 9.2.7 22.7-11 22.7H205.8c-11.7 0-18.3-13.5-11-22.7C224 420.6 224 408.6 224 368v-25c0-5.4-6.6-8.1-10.3-4.2-32.3 33.7-45.9 44.7-87.1 45.2-51.8.5-95-41.1-94.5-92.8.5-54.8 49-97.7 104.2-90.3l43.7 5.8c4.5.6 8-3.9 6.4-8.1l-16-41C146.8 97.5 191.2 32 256 32m0-32c-87.4 0-147.1 88.2-115.5 169.1C65.6 159.2 0 217.6 0 292c0 68.4 55.6 124 124 124 35.5 0 52-8 76-32 0 24-9.7 27.6-30.2 53.4-23.9 30.1-2.4 74.6 36 74.6h100.3c38.5 0 60-44.5 36-74.6-19-24.1-30.1-29.4-30.1-53.4 24 24 48.9 32 76 32 68.4 0 124-55.6 124-124 0-74.5-65.8-132.8-140.5-122.9C403.1 88.4 343.5 0 256 0z"/></svg>
);
icon.defaultProps = { width: 100, height: 100 };
icon.displayName = 'FaClub';
export default styled(icon);