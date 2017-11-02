import React from 'react';
import styled from '../styled';
const icon = ({ color, width, height, size, ...rest }) => (
  <svg fill={color} width={size || width} height={size || height} {...rest} viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M948 1028l163 329h-51l-175-350-171 350h-49l179-374-78-33 21-49 240 102-21 50zm-385-592l304 130-130 304-304-130zm344 185l240 103-103 239-239-102zm281 150l191 81-82 190-190-81zm492 125q0-159-62-304t-167.5-250.5-250.5-167.5-304-62-304 62-250.5 167.5-167.5 250.5-62 304 62 304 167.5 250.5 250.5 167.5 304 62 304-62 250.5-167.5 167.5-250.5 62-304zm112 0q0 182-71 348t-191 286-286 191-348 71-348-71-286-191-191-286-71-348 71-348 191-286 286-191 348-71 348 71 286 191 191 286 71 348z"/></svg>
);
icon.defaultProps = { width: 100, height: 100 };
icon.displayName = 'FaWpexplorer';
export default styled(icon);