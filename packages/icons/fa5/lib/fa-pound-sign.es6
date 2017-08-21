import React from 'react';
import styled from '../styled';
const icon = ({ color, width, height, size, ...rest }) => (
  <svg fill={color} width={size || width} height={size || height} {...rest} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M308 368h-16.101c-6.627 0-12 5.373-12 12v62.406H97.556V288H204c6.627 0 12-5.373 12-12v-8c0-6.627-5.373-12-12-12H97.556V150.423c0-41.981 30.702-78.322 85.84-78.322 27.902 0 51.392 12.351 63.42 20.131 5.111 3.306 11.893 2.213 15.753-2.494l10.665-13.006c4.488-5.474 3.283-13.605-2.583-17.568C255.331 48.814 224.167 32 183.396 32 107.58 32 53.695 82.126 53.695 147.916V256H20c-6.627 0-12 5.373-12 12v8c0 6.627 5.373 12 12 12h33.695v155.032H12c-6.627 0-12 5.373-12 12V468c0 6.627 5.373 12 12 12h296c6.627 0 12-5.373 12-12v-88c0-6.627-5.373-12-12-12z"/></svg>
);
icon.defaultProps = { width: 100, height: 100 };
icon.displayName = 'FaPoundSign';
export default styled(icon);