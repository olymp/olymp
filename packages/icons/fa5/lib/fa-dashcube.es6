import React from 'react';
import styled from '../styled';
const icon = ({ color, width, height, size, ...rest }) => (
  <svg fill={color} width={size || width} height={size || height} {...rest} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M288.1 97.5H85.5C37.6 97.5 0 138.1 0 185.2v215.1C0 447.7 37.6 480 85.5 480h213c47.9 0 85.5-32.3 85.5-79.7V0l-95.9 97.5zm-161.9 293c-16.6 0-30.4-14.2-30.4-30.8v-134c0-16.6 13.8-30.5 30.4-30.5h131.9c16.6 0 30 13.9 30 30.5v115.7l47.9 49H126.2z"/></svg>
);
icon.defaultProps = { width: 100, height: 100 };
icon.displayName = 'FaDashcube';
export default styled(icon);