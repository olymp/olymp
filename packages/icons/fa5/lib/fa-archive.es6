import React from 'react';
import styled from '../styled';
const icon = ({ color, width, height, size, ...rest }) => (
  <svg fill={color} width={size || width} height={size || height} {...rest} xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512"><path d="M464 32H48C21.533 32 0 53.533 0 80v32c0 22.105 15.024 40.757 35.393 46.308A47.726 47.726 0 0 0 32 176v256c0 26.467 21.533 48 48 48h352c26.467 0 48-21.533 48-48V176a47.726 47.726 0 0 0-3.393-17.692C496.976 152.757 512 134.105 512 112V80c0-26.467-21.533-48-48-48zm-16 400c0 8.837-7.164 16-16 16H80c-8.837 0-16-7.163-16-16V176c0-8.837 7.163-16 16-16h352c8.836 0 16 7.163 16 16v256zm32-320c0 8.837-7.163 16-16 16H48c-8.837 0-16-7.163-16-16V80c0-8.837 7.163-16 16-16h416c8.837 0 16 7.163 16 16v32zM308 256H204c-6.627 0-12-5.373-12-12v-8c0-6.627 5.373-12 12-12h104c6.627 0 12 5.373 12 12v8c0 6.627-5.373 12-12 12z"/></svg>
);
icon.defaultProps = { width: 100, height: 100 };
export default styled(icon);