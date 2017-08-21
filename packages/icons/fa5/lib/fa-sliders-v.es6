import React from 'react';
import styled from '../styled';
const icon = ({ color, width, height, size, ...rest }) => (
  <svg fill={color} width={size || width} height={size || height} {...rest} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M136 96H96V12c0-6.6-5.4-12-12-12h-8c-6.6 0-12 5.4-12 12v84H24c-13.2 0-24 10.8-24 24v48c0 13.2 10.8 24 24 24h40v308c0 6.6 5.4 12 12 12h8c6.6 0 12-5.4 12-12V192h40c13.2 0 24-10.8 24-24v-48c0-13.2-10.8-24-24-24zm-8 64H32v-32h96v32zm152 160h-40V12c0-6.6-5.4-12-12-12h-8c-6.6 0-12 5.4-12 12v308h-40c-13.2 0-24 10.8-24 24v48c0 13.2 10.8 24 24 24h40v84c0 6.6 5.4 12 12 12h8c6.6 0 12-5.4 12-12v-84h40c13.2 0 24-10.8 24-24v-48c0-13.2-10.8-24-24-24zm-8 64h-96v-32h96v32zm152-224h-40V12c0-6.6-5.4-12-12-12h-8c-6.6 0-12 5.4-12 12v148h-40c-13.2 0-24 10.8-24 24v48c0 13.2 10.8 24 24 24h40v244c0 6.6 5.4 12 12 12h8c6.6 0 12-5.4 12-12V256h40c13.2 0 24-10.8 24-24v-48c0-13.2-10.8-24-24-24zm-8 64h-96v-32h96v32z"/></svg>
);
icon.defaultProps = { width: 100, height: 100 };
icon.displayName = 'FaSlidersV';
export default styled(icon);