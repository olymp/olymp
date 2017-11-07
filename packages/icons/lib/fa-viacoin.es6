import React from 'react';
import styled from '../styled';
const icon = ({ color, width, height, size, ...rest }) => (
  <svg fill={color} width={size || width} height={size || height} {...rest} viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M1664 0l-192 448h192v192h-274l-55 128h329v192h-411l-357 832-357-832h-411v-192h329l-55-128h-274v-192h192l-192-448h256l323 768h378l323-768h256zm-768 1216l108-256h-216z"/></svg>
);
icon.defaultProps = { width: 100, height: 100 };
icon.displayName = 'FaViacoin';
export default styled(icon);