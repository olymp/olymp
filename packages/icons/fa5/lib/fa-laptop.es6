import React from 'react';
import styled from '../styled';
const icon = ({ color, width, height, size, ...rest }) => (
  <svg fill={color} width={size || width} height={size || height} {...rest} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M112 352h416c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48H112C85.5 0 64 21.5 64 48v256c0 26.5 21.5 48 48 48zM96 48c0-8.8 7.2-16 16-16h416c8.8 0 16 7.2 16 16v256c0 8.8-7.2 16-16 16H112c-8.8 0-16-7.2-16-16V48zm532 336H366c-3.3 0-6 2.7-6 6v10c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24v-10c0-3.3-2.7-6-6-6H12c-6.6 0-12 5.4-12 12v68c0 26.5 21.5 48 48 48h544c26.5 0 48-21.5 48-48v-68c0-6.6-5.4-12-12-12zm-20 80c0 8.8-7.2 16-16 16H48c-8.8 0-16-7.2-16-16v-48h224c0 17.7 14.3 32 32 32h64c17.7 0 32-14.3 32-32h224v48z"/></svg>
);
icon.defaultProps = { width: 100, height: 100 };
icon.displayName = 'FaLaptop';
export default styled(icon);