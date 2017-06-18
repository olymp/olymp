import React from 'react';
import styled from '../styled';
const icon = ({ color, width, height, size, ...rest }) =>
  <svg
    width={size || width}
    height={size || height}
    viewBox="0 0 1792 1792"
    {...rest}
  >
    <path
      d="M1417 1632h-1118v-480h-160v640h1438v-640h-160v480zm-942-524l33-157 783 165-33 156zm103-374l67-146 725 339-67 145zm201-356l102-123 614 513-102 123zm397-378l477 641-128 96-477-641zm-718 1471v-159h800v159h-800z"
      fill={color}
    />
  </svg>;
icon.defaultProps = { width: 100, height: 100 };
export default styled(icon);
