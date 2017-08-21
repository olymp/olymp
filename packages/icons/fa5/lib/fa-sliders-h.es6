import React from 'react';
import styled from '../styled';
const icon = ({ color, width, height, size, ...rest }) => (
  <svg fill={color} width={size || width} height={size || height} {...rest} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M564 100H160V60c0-13.2-10.8-24-24-24H88c-13.2 0-24 10.8-24 24v40H12c-6.6 0-12 5.4-12 12v8c0 6.6 5.4 12 12 12h52v40c0 13.2 10.8 24 24 24h48c13.2 0 24-10.8 24-24v-40h404c6.6 0 12-5.4 12-12v-8c0-6.6-5.4-12-12-12zm-436 64H96V68h32v96zm436 80h-84v-40c0-13.2-10.8-24-24-24h-48c-13.2 0-24 10.8-24 24v40H12c-6.6 0-12 5.4-12 12v8c0 6.6 5.4 12 12 12h372v40c0 13.2 10.8 24 24 24h48c13.2 0 24-10.8 24-24v-40h84c6.6 0 12-5.4 12-12v-8c0-6.6-5.4-12-12-12zm-116 64h-32v-96h32v96zm116 80H288v-40c0-13.2-10.8-24-24-24h-48c-13.2 0-24 10.8-24 24v40H12c-6.6 0-12 5.4-12 12v8c0 6.6 5.4 12 12 12h180v40c0 13.2 10.8 24 24 24h48c13.2 0 24-10.8 24-24v-40h276c6.6 0 12-5.4 12-12v-8c0-6.6-5.4-12-12-12zm-308 64h-32v-96h32v96z"/></svg>
);
icon.defaultProps = { width: 100, height: 100 };
icon.displayName = 'FaSlidersH';
export default styled(icon);