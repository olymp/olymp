import React from 'react';
import styled from '../styled';
const icon = ({ color, width, height, size, ...rest }) => (
  <svg fill={color} width={size || width} height={size || height} {...rest} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M217.6 512c-8.837 0-16-7.163-16-16s7.163-16 16-16c41.172 0 74.667-33.495 74.667-74.666 0-85.174 73.391-93.9 73.391-165.334 0-71.167-57.899-129.066-129.067-129.066-71.167 0-129.066 57.899-129.066 129.066 0 8.837-7.163 16-16 16s-16-7.163-16-16c0-88.812 72.254-161.066 161.066-161.066S397.657 151.188 397.657 240c0 86.857-73.391 96.041-73.391 165.334C324.267 464.149 276.416 512 217.6 512zm115.733-272c0-53.816-43.783-97.6-97.6-97.6s-97.6 43.783-97.6 97.6c0 8.837 7.163 16 16 16s16-7.163 16-16c0-36.172 29.428-65.6 65.6-65.6s65.6 29.428 65.6 65.6c0 8.837 7.163 16 16 16s16-7.163 16-16zm106.47-45.984c8.448-2.591 13.195-11.541 10.604-19.988-14.644-47.732-45.384-89.796-86.559-118.441-7.254-5.046-17.226-3.259-22.271 3.996-5.047 7.254-3.258 17.226 3.996 22.271 35.322 24.574 61.688 60.643 74.242 101.559 2.593 8.453 11.545 13.193 19.988 10.603zm60.888-18.65c8.447-2.594 13.193-11.544 10.601-19.991C492.386 93.787 452.886 39.627 400.059 2.868c-7.253-5.046-17.225-3.259-22.272 3.995-5.047 7.253-3.258 17.225 3.995 22.272 46.978 32.688 82.105 80.855 98.918 135.631 2.593 8.447 11.541 13.192 19.991 10.6zM240 256c-8.837 0-16 7.163-16 16s7.163 16 16 16 16-7.163 16-16-7.163-16-16-16zm-64 64c-8.837 0-16 7.163-16 16s7.163 16 16 16 16-7.163 16-16-7.163-16-16-16zm-96 96c-8.837 0-16 7.163-16 16s7.163 16 16 16 16-7.163 16-16-7.163-16-16-16zm-64 64c-8.837 0-16 7.163-16 16s7.163 16 16 16 16-7.163 16-16-7.163-16-16-16zm155.313-75.313l-64-64-22.627 22.627 64 64 22.627-22.627z"/></svg>
);
icon.defaultProps = { width: 100, height: 100 };
icon.displayName = 'FaAssistiveListeningSystems';
export default styled(icon);