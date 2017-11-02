import React from 'react';
import styled from '../styled';
const icon = ({ color, width, height, size, ...rest }) => (
  <svg fill={color} width={size || width} height={size || height} {...rest} width="2048" viewBox="0 0 2048 1792" xmlns="http://www.w3.org/2000/svg"><path d="M1984 960q-1 32-288 96l-352 32-224 64h-64l-293 352h69q26 0 45 4.5t19 11.5-19 11.5-45 4.5h-320v-32h64v-416h-160l-192 224h-96l-32-32v-192h32v-32h128v-8l-192-24v-128l192-24v-8h-128v-32h-32v-192l32-32h96l192 224h160v-416h-64v-32h320q26 0 45 4.5t19 11.5-19 11.5-45 4.5h-69l293 352h64l224 64 352 32q128 28 200 52t80 34z"/></svg>
);
icon.defaultProps = { width: 100, height: 100 };
icon.displayName = 'FaFighterJet';
export default styled(icon);