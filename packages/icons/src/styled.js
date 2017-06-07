import React from 'react';
import { styled } from 'olymp';

export default Wrapped => styled(({ theme, color }) => ({
  fill: color === true ? theme.color : typeof color === 'string' ? color : 'rgba(0, 0, 0, 0.85)',
}), Wrapped, ['width', 'height', 'size', 'onClick']);
