import React from 'react';
import styled from '../styled';
const icon = ({ color, width, height, size, ...rest }) => (
  <svg fill={color} width={size || width} height={size || height} {...rest} width="2048" viewBox="0 0 2048 1792" xmlns="http://www.w3.org/2000/svg"><path d="M212 768l623 665-300-665h-323zm812 772l349-772h-698zm-486-900l204-384h-262l-288 384h346zm675 793l623-665h-323zm-530-793h682l-204-384h-274zm827 0h346l-288-384h-262zm141-486l384 512q14 18 13 41.5t-17 40.5l-960 1024q-18 20-47 20t-47-20l-960-1024q-16-17-17-40.5t13-41.5l384-512q18-26 51-26h1152q33 0 51 26z"/></svg>
);
icon.defaultProps = { width: 100, height: 100 };
icon.displayName = 'FaDiamond';
export default styled(icon);