import React from 'react';
import styled from '../styled';
const icon = ({ color, width, height, size, ...rest }) => (
  <svg fill={color} width={size || width} height={size || height} {...rest} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M446.381 182.109l1.429-8c1.313-7.355-4.342-14.109-11.813-14.109h-98.601l20.338-113.891C359.047 38.754 353.392 32 345.92 32h-8.127a12 12 0 0 0-11.813 9.891L304.89 160H177.396l20.338-113.891C199.047 38.754 193.392 32 185.92 32h-8.127a12 12 0 0 0-11.813 9.891L144.89 160H42.003a12 12 0 0 0-11.813 9.891l-1.429 8C27.448 185.246 33.103 192 40.575 192h98.6l-22.857 128H13.432a12 12 0 0 0-11.813 9.891l-1.429 8C-1.123 345.246 4.532 352 12.003 352h98.601L90.266 465.891C88.953 473.246 94.608 480 102.08 480h8.127a12 12 0 0 0 11.813-9.891L143.11 352h127.494l-20.338 113.891C248.953 473.246 254.608 480 262.08 480h8.127a12 12 0 0 0 11.813-9.891L303.11 352h102.886a12 12 0 0 0 11.813-9.891l1.429-8c1.313-7.355-4.342-14.109-11.813-14.109h-98.601l22.857-128h102.886a12 12 0 0 0 11.814-9.891zM276.318 320H148.825l22.857-128h127.494l-22.858 128z"/></svg>
);
icon.defaultProps = { width: 100, height: 100 };
icon.displayName = 'FaHashtag';
export default styled(icon);