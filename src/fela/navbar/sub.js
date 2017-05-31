import React from 'react';
import { styled } from 'olymp';
import { fade, shadow, border } from 'olymp-fela';
import Nav from './nav';
import Mega from './mega';

export default styled(
  ({ theme, inverse, vertically, right, sub }) => (sub && {
    backgroundColor: inverse ? fade(theme.color) : '#FFFFFF',
    border: !inverse && border(theme),
    display: 'none',
    position: 'absolute',
    top: !vertically ? '100%' : ((!inverse && -theme.borderWidth) || 0),
    left: !right && (vertically ? '100%' : ((!inverse && -theme.borderWidth) || 0)),
    right: right && (!vertically ? 0 : '100%'),
    boxShadow: shadow(),
  }),
  ({ mega, sub, vertically, children, ...props }) => (mega ? (
    <Mega {...props} />
  ) : (
    <Nav {...props} vertically={sub || vertically}>{children}</Nav>
  )),
  p => p
);
